import Customer from '../repositories/Customer';

const getAll = async () => {
  const customer = new Customer();

  return customer.getAll();
}

export default getAll;