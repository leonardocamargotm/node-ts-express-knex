import express, { Express } from 'express';
import bodyParser from 'body-parser';
import routes from './routes';

class Server {
  public app: Express;

  constructor() {
    this.app = express();
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(routes);
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server started on port ${port}`);
    });
  }
}

export default Server;
