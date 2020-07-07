import Knex from 'knex';

class Database {
  protected database: Knex;

  constructor() {
    this.database = Knex({
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        user: 'user',
        password: 'password',
        database: 'customer',
      },
    });
  }
}

export default Database;
