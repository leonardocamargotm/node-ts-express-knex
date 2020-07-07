import { Request, Response, NextFunction } from 'express';
import HttpError from '../common/HttpError'

export default (err: Error, req: Request, res: Response, next: NextFunction): Response => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }

  console.log(err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  });

}