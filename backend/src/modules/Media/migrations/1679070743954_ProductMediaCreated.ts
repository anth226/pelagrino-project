import { MigrationInterface, QueryRunner } from 'typeorm';
import { Migration } from 'medusa-extender';

@Migration()
export class ProductMediaCreatedMigration1679070743954 implements MigrationInterface {
    name = 'ProductMediaCreatedMigration1679070743954';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = `CREATE TABLE IF NOT EXISTS public.product_media
(
    product_id character varying COLLATE pg_catalog."default" NOT NULL,
    media_id character varying COLLATE pg_catalog."default" NOT NULL,
    order integer NOT NULL DEFAULT 0,
    CONSTRAINT "PK_3f703bfc925e4591a12417a4c33e0bab" PRIMARY KEY (product_id, media_id),
    CONSTRAINT "FK_64ede3aa53fd4a759afdae4a5bcb169c" FOREIGN KEY (media_id)
        REFERENCES public.video (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT "FK_98dc9a06dece43ec9abb33d8b2eb948e" FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)`;
        await queryRunner.query(query);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const query = 'DROP TABLE IF EXISTS public.product_media';
        await queryRunner.query(query);
    }
}
