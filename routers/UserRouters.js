import * as UserController from '../controllers/UserController.js';
import express from "express";

const UserRoutes = express.Router();

UserRoutes.post('/new', UserController.createUser);

export default UserRoutes;