import pgService from "../services/pg.service.js";


export const getUsuario = async (usuario, pass)=> {
    const pg =  new pgService(); 
    return  await  pg.connection.oneOrNone(`SELECT ID, USERNAME, ROLE FROM USUARIO
    where USERNAME = $1 and PASSWORD = $2`, [usuario, pass]);
}