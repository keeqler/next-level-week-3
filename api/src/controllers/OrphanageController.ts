import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import sharp from 'sharp';
import path from 'path';
import util from 'util';
import fs from 'fs';

import { Orphanage } from '@/entities/Orphanage';
import { OrphanagesView } from '@/views/OrphanagesView';

export const OrphanageController = {
  async store(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends
    } = request.body;

    const images = (request.files as Express.Multer.File[]).map(async file => {
      const newFilename = file.filename + '.jpg';

      await sharp(file.path)
        .jpeg({ quality: 60 })
        .toFile(path.join(__dirname, '..', '..', 'tmp', 'uploads', newFilename));

      await util.promisify(fs.unlink)(file.path);

      return { filename: newFilename };
    });

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      openingHours,
      openOnWeekends: !!openOnWeekends,
      images: await Promise.all(images)
    });

    await orphanagesRepository.save(orphanage);

    response.sendStatus(201);
  },

  async show(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanage = await orphanagesRepository.findOne(request.params.id, {
      relations: ['images']
    });

    if (!orphanage) return response.sendStatus(404);

    response.json(OrphanagesView.render(orphanage));
  },

  async index(request: Request, response: Response) {
    const orphanagesRepository = getRepository(Orphanage);
    const orphanages = await orphanagesRepository.find({ relations: ['images'] });

    response.json(OrphanagesView.renderMany(orphanages));
  }
};
