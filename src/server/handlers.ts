import { Request, Response } from 'express';
import create from '../services/create';

const postWorker = async (req: Request, res: Response): Promise<void> => {
  try {
    const result = await create(req.body);
    res.status(200).send(result);
  } catch (err) {
    res.status(400).send(err);
  }
};

export default postWorker;
