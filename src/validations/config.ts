import { ObjectSchema } from '@hapi/joi';
import { Request, Response, NextFunction } from 'express';
import HttpError from '../common/HttpError';

export default (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error } = schema.validate(req.body, {abortEarly: false});

    if (!error) {
      next();
    } else {
      const { details } = error;

      const message = details.map(i => i.message).join(',');
      
      throw new HttpError(message, 422)
    }
  };
};
