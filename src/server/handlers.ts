import { Request, Response } from 'express';
import getAll from '../services/getAll';
import create from '../services/create';

const getCustomers = async (req: Request, res: Response): Promise<void> => {
  const response = await getAll();
  res.status(200).send(response);
};

const createCustomer = async (req: Request, res: Response): Promise<void> => {
  const response = await create(req.body);
  res.status(201).send(response);
};

export { getCustomers, createCustomer };
