import {
    BeforeInsert,
    Column,
    Entity,
    ManyToOne,
} from "typeorm"
import { SoftDeletableEntity} from "@medusajs/medusa"
import { generateEntityId } from "@medusajs/medusa/dist/utils"
import { Product } from "./product"

@Entity()
export class Video extends SoftDeletableEntity {
    @Column({ type: "varchar" })
    url: string

    @ManyToOne(() => Product, (product) => product.videos)
    product: Product

    @BeforeInsert()
    private beforeInsert(): void {
        this.id = generateEntityId(this.id, "vid")
    }
}
