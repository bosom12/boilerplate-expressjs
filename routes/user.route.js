import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export class UserRoutes extends UserController {
  constructor() {
    super();
    this.router = Router();

    this.useRoutes();
  }

  useRoutes() {
    this.router.post('/register', this.registerUser);
    this.router.post('/login', this.authenticateUser);
  }
}