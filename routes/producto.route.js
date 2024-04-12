import { Router } from "express";
import { deleteProducto, getAll , getProducto,  postProducto, putProducto } from "../controllers/producto.controller.js";
import { validate } from "../middlewares/validator.middleware.js"; 
import {postProductoValidator , getProductoAllValidator, deleteProductoValidator} from "../validators/producto.validator.js";

const router = Router();
 
router.get("/", validate(getProductoAllValidator), getAll )  
router.get("/:id", validate(deleteProductoValidator), getProducto )  
router.post("/",  validate(postProductoValidator),  postProducto )  
router.put("/:id", validate(postProductoValidator),  putProducto )  
router.delete("/:id", validate(deleteProductoValidator),  deleteProducto )  
    
export default router;