import { MigrationInterface, QueryRunner } from 'typeorm';
import { Migration } from 'medusa-extender';

@Migration()
export class VideoCreatedMigration1679066423298 implements MigrationInterface {
    name = 'VideoCreatedMigration1679066423298';

    public async up(queryRunner: QueryRunner): Promise<void> {
        const query = `CREATE TABLE IF NOT EXISTS public.video
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    url character varying COLLATE pg_catalog."default" NOT NULL,
    created_at timestamp with time zone NOT NULL DEFAULT now(),
    updated_at timestamp with time zone NOT NULL DEFAULT now(),
    deleted_at timestamp with time zone,
    metadata jsonb,
    CONSTRAINT "PK_60ff7ff50bbc42eab27e011ed854f51c" PRIMARY KEY (id)
)`;
        await queryRunner.query(query);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const query = 'DROP TABLE IF EXISTS public.video';
        await queryRunner.query(query);
    }
}
