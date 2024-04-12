import pgService from "../services/pg.service.js";

export const getProductoModel = async (page = null, limit =  'null' , order = 'nombre') => {
    const pg =  new pgService();  
    return  await  pg.connection.query(`SELECT 
        ID_PRODUCTO, NOMBRE, DETALLE , VALOR , IMG 
        FROM PRODUCTO 
        ORDER BY $(order:raw)
        OFFSET $(page:raw) ROWS FETCH NEXT $(limit:raw) ROWS ONLY
        `, {
            order : order, 
            limit : limit,
            page : page ? page - 1 : 0
        });
}
 

export const getCountAll = async ()  => {
    const pg =  new pgService();  
    return  await  pg.connection.one(`SELECT COUNT(*) AS cantidad FROM PRODUCTO `);
}

export const getProductoUnicoModel = async (id) => {
    const pg =  new pgService(); 
    return  await  pg.connection.oneOrNone(`SELECT * FROM producto where ID_PRODUCTO =  $1`, [id]);
}
export const postProductoModel = async (nombre, detalle, valor, url ) => {
    try{
        const pg =  new pgService(); 
        let out = await  pg.connection.one(`INSERT INTO PRODUCTO 
        (NOMBRE, DETALLE , VALOR , IMG)  
        VALUES 
        ($1, $2, $3 ,$4) RETURNING  * 
        ` ,[nombre,detalle, valor ,url ]);
        return  out;
    }catch(error){ 
        console.log(error);
        return 'En este momento no se puede realizar su transacción';
    }
}

export const putProductoModel =  async (id, nombre, detalle, valor, url) => {
    try{
        const pg =  new pgService(); 
        await pg.connection.none(`UPDATE PRODUCTO 
        SET NOMBRE = $2,
            DETALLE = $3,
            VALOR = $4,
            IMG = case $5 when null then IMG else $5 end 
        WHERE ID_PRODUCTO  = $1
        ` ,[id, nombre,detalle, valor, url]);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }
}
 

export const delteProductoModel = async (id) => {
    try{ 
        const pg =  new pgService(); 
        pg.connection.none(`DELETE FROM PRODUCTO WHERE ID_PRODUCTO = $1` ,[id]);
        return  'Transacción realizada';
    }catch(error){ 
        return 'En este momento no se puede realizar su transacción';
    }
}