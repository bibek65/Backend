import { NextFunction, Request, Response } from 'express';

import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response, next: NextFunction) => {
  userService
    .getAllUsers()
    .then(data => res.json(data))
    .catch(err => next(err));
};
