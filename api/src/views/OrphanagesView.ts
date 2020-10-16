import { Orphanage } from '@/entities/Orphanage';
import { OrphanageImagesView } from './OrphanageImagesView';

export const OrphanagesView = {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      openingHours: orphanage.openingHours,
      openOnWeekends: orphanage.openOnWeekends,
      images: OrphanageImagesView.renderMany(orphanage.images)
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map(orphanage => this.render(orphanage));
  }
};
