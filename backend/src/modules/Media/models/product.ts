import { Entity as MedusaEntity } from 'medusa-extender';
import { Product as MedusaProduct } from '@medusajs/medusa';
import { Entity, OneToMany } from 'typeorm';
import { Video } from "./video";

@MedusaEntity({ override: MedusaProduct })
@Entity()
export class Product extends MedusaProduct {
    @OneToMany(() => Video, (video) => video.product)
    videos: Video[]
}
