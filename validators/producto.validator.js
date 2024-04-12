import { checkSchema } from  'express-validator';


export const getProductoAllValidator = checkSchema({
  page : {
    matches : { options : /(^[0-9]+$)|^(?!.*\S)/},
    errorMessage: 'La página debe ser un número'
  },
  limit : {
    matches : { options : /(^[0-9]+$)|^(?!.*\S)/},
    errorMessage: 'El limite debe ser un número'
  }
},["query"]);


export const postProductoValidator = checkSchema({
    nombre: {
      errorMessage: 'Nombre invalido',
      notEmpty: true,
      isLength: {
        options: { min: 1 },
        errorMessage: 'El nombre debe tener minimo un caracteres',
      },
    },
    valor: {
      matches : { options : /^[0-9]+$/},
      errorMessage: 'la cantidad debe ser un múmero'
    }
} ,["body"]);

export const putProductoValidador = checkSchema({
  id:{
    errorMessage: 'Identificador requerido',
    notEmpty: true,
  }
}, ["body"]);

export const deleteProductoValidator = checkSchema({
  id:{
    errorMessage: 'Identificador requerido',
    notEmpty: true,
  }
},["params"])