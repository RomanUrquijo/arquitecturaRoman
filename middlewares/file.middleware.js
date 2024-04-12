import fs from  "fs";
import multer  from "multer"
import { exports } from "../config/default.js";


export const  managerImg =  ()=> {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {cb(null, './img')},
        filename: function (req, file, cb) {
            const ahora = new Date();
            const name= ahora.getFullYear() + ahora.getMonth()+ ahora.getDate() + ahora.getHours()+ ahora.getMinutes() + ahora.getSeconds() + ahora.getMilliseconds();
            
            cb(null,  name + '_'+file.originalname)
        }
    }) 
    const upload = multer({
        storage: storage , 
        limits: { fileSize: 200000000},
        fileFilter: (req ,  file, cb)=>{
        const array_of_allowed_file_types = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
        if (!array_of_allowed_file_types.includes(file.mimetype)) {
            cb(Error("error"), false);
        }
        cb(null, true)
    }});

    return upload.single('img');
}
 
export const  saveImage = (file , type = true ) => {
    try{ 
        if(!file){
            return '';
        }  
        if(type){
            return exports.urlServer + file.path
        }
        const img = fs.readFileSync(file.path ,{encoding: 'base64'});
        const encode_img = img.toString('base64');
        return {
            contentType: file.mimetype,
            image: Buffer.from(encode_img,'base64')
        };  
    }catch(e){ 
        return '';
    }

}

export const validateFile = (req, res , next)=>{
    const upload = managerImg();
    upload(req, res , (err) => { 
        if(err){
            return res.status(400).json({success: false, data: [] ,   msg : 'Archivo no válido' });
        }
        req.body.img = saveImage(req.file);
        next()
    }) 
}