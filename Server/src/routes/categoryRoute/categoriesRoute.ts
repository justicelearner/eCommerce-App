import { Router } from "express";
import httpGetCategories from "./categoriesController";

const categoriesRouter = Router();

categoriesRouter.get("/",httpGetCategories);

export default categoriesRouter