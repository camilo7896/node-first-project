import {Router} from "express";

const routes = Router();

routes.get('/', (req,res)=> res.render('index', {title:"home page"}))
routes.get('/about', (req,res)=> res.render('about',{title:"about"}))
routes.get('/contact', (req,res)=> res.render('contact',{title:"contact"}))

export default routes;