import { ObjectSchema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body);

    if (!error) {
      next();
    } else {
      const { details } = error;

      const message = details.map(i => i.message).join(',');

      res.status(422).json({ error: message });
    }
  };
};
