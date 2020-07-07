import Customer from '../repositories/Customer';
import ICustomer from '../models';
import HttpError from '../common/HttpError'

const createCustomer = async (data: ICustomer) => {
  const customer = new Customer();

  const emailExist = await customer.getByEmail(data.email);

  if (emailExist) {
    throw new HttpError('Existe um cadastro com este email');
  }

  return customer.create(data);
}

export default createCustomer;