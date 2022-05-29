import { NextFunction, Request, Response } from "express";


export let error = ({ statusCode = 500, message }) => {
  let customError: errorInterface;
  customError.message = message;
  customError.statusCode = statusCode;
  return customError;
}
export let errorMiddleware = (err: errorInterface, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).send({
    message: err.message
  });
}


export interface errorInterface {
  message: string,
  statusCode: number
}  