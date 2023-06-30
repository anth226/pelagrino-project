import { EntityRepository, Repository } from "typeorm"

import { Video } from "../models/video"

@EntityRepository(Video)
export class VideoRepository extends Repository<Video> { }
