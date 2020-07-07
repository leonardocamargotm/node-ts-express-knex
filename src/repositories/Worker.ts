import Database from '../database';
import IWorker from '../models';

class Worker extends Database {
  public options: IWorker | undefined;

  private query: string;

  constructor(options?: IWorker) {
    super();
    this.options = options;
    this.query = '';
  }

  public async create(data: IWorker): Promise<IWorker> {
    this.query = `
      INSERT INTO worker (name, salary) VALUES ('${data.name}', ${data.salary})
    `;

    await this.database.raw(this.query);
    return data;
  }
}

export default Worker;
