import { body } from "express-validator";

export const validationCreateUser = [
    body("name").notEmpty().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("lastName").notEmpty().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("image").notEmpty().isURL(),
    body("email").notEmpty().isEmail(),
    body("password").notEmpty().withMessage("Recuerde: la clave debe contener al menos 8 caracteres, una mayuscula y y un numero"),
    //body("gender").notEmpty().isISIN(["Masculino", "Femenino", "Otro"]),
];

import { param } from "express-validator";

export const findUserValidation = [
    param("userId").isNumeric().toInt()
];

export const validationUpdateUser = [
    param("userId").isNumeric().withMessage("El Id debe ser un numero").toInt(),
    body("name").optional().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("lastName").optional().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("image").optional().isURL(),
    body("email").optional().isEmail(),
    body("password").optional(),
    //body("gender").optional().isISIN(["Masculino", "Femenino", "Otro"]),
];


