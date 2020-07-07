import { Router } from 'express';
import validation from '../validations';
import customer from '../validations/schemas';
import {getCustomers, createCustomer} from './handlers';

const router = Router();

router.get('/customer', getCustomers);
router.post('/customer',validation(customer), createCustomer);


export default router;
