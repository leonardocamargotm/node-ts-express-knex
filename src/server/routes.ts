import { Router } from 'express';
import validation from '../validations';
import worker from '../validations/schemas';
import postWorker from './handlers';

const router = Router();

router.get('/', (req, res) => {
  res.json({message: 'hello world'})
});

router.post('/', validation(worker), postWorker);

export default router;
