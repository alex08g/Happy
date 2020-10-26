import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Orphanages from '../models/Orphanages';

export default {
  async index( req: Request, res: Response ) {
    const orphanagesRepository = getRepository(Orphanages);

    const orphanages = await orphanagesRepository.find();

    return res.json(orphanages);
  },

  async create( req: Request, res: Response ) {
    const orphanagesRepository = getRepository(Orphanages);

    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    } = req.body;

    const orphanage = orphanagesRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends,
    });

    await orphanagesRepository.save(orphanage);

    return res.status(201).json(orphanage);
  },
};
