import { checkSchema } from  'express-validator';

export const usuarioValidator = checkSchema({
    username: {
      errorMessage: 'Usuario invalido',
      notEmpty: true,
      isLength: {
        options: { min: 3 },
        errorMessage: 'El Usuario debe tener minimo 3 caracteres',
      },
    },
    password: {
        errorMessage: 'Password invalido',
        notEmpty: true,
        isLength: {
          options: { min: 3 },
          errorMessage: 'El Password debe tener minimo 3 caracteres',
        },
    }
} ,["query"]);