import Knex from 'knex';

class Database {
  protected database: Knex;

  constructor() {
    this.database = Knex({
      client: 'mysql',
      connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'test',
        database: 'dbaula',
      },
    });
  }
}

export default Database;
