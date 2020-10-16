import { OrphanageImage } from '@/entities/OrphanageImage';

export const OrphanageImagesView = {
  render(image: OrphanageImage) {
    return {
      id: image.id,
      url: `http://localhost:3333/images/${image.filename}`
    };
  },

  renderMany(images: OrphanageImage[]) {
    return images.map(image => this.render(image));
  }
};
