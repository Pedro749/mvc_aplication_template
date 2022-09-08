import Express from "express";
import { homePage, recivePost, testGet } from "./src/controllers/homeController.js";
const routes = Express.Router();

routes.get('/', homePage);
routes.post('/', recivePost);
routes.get('/test/:idUser?', testGet);

export default routes;