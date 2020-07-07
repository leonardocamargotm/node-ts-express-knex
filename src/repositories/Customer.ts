import Database from '../database';
import ICustomer from '../models';

class Customer extends Database {
  public options: ICustomer | undefined;

  private query: string;

  constructor(options?: ICustomer) {
    super();
    this.options = options;
    this.query = '';
  }

  public async create(data: ICustomer): Promise<ICustomer> {
    this.query = `
      INSERT INTO CUSTOMER (name, email) VALUES ('${data.name}', '${data.email}')
    `;

    const response = await this.database.raw(this.query);
    return data;
  }

  public async getAll(): Promise<ICustomer[]> {
    this.query = `SELECT * FROM CUSTOMER`;

    const response = await this.database.raw(this.query);
    return response.rows;
  }

  public async getByEmail(email: string): Promise<ICustomer | null> {
    this.query = `SELECT * FROM CUSTOMER WHERE EMAIL = '${email}'`;

    const response = await this.database.raw(this.query);
    return response.rows[0];
  }
}

export default Customer;
