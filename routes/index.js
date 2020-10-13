import { Router } from "express";
import { UserRoutes } from './user.route';

class Routes {
	constructor() {
		this.router = Router();
		this.applicationRoutes();
	}

	applicationRoutes() {
		this.router.use('/user', new UserRoutes().router);
	}
};

export default new Routes();