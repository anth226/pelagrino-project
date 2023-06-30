import { Module } from 'medusa-extender';
import { Product } from './models/product';
import { Video } from './models/video';
import { ProductMediaCreatedMigration1679070743954 } from './migrations/1679070743954_ProductMediaCreated';
import { ProductVideosCreatedMigration1679067051156 } from './migrations/1679067051156_ProductVideosCreated';
import { VideoCreatedMigration1679066423298 } from './migrations/1679066423298_VideoCreated';

@Module({
    imports: [
        VideoCreatedMigration1679066423298,
        ProductVideosCreatedMigration1679067051156,
        ProductMediaCreatedMigration1679070743954,
        ProductMediaCreatedMigration1679070743954,
        Product,
        Video,
    ]
})
export class Media {}
