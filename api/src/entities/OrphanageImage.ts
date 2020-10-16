import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Orphanage } from './Orphanage';

@Entity('orphanages_images')
export class OrphanageImage {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  filename: string;

  @ManyToOne(() => Orphanage, orphanage => orphanage.images)
  @JoinColumn({ name: 'orphanageId' })
  orphanage: Orphanage;
}
