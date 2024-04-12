import { verifyToken } from "./token.middleware.js"
import { Router } from "express"; 
import { validateFile } from "./file.middleware.js";

const router = Router();
 
router.use('/api', verifyToken );
router.post('/api/producto', validateFile );
router.put('/api/producto', validateFile );

export default router;