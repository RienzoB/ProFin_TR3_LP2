import { body } from "express-validator";

export const validationCreatePost = [
    body("title").notEmpty().withMessage("Debe ingresar un Titulo válido")
        .isLength({ min: 3 }),
    body("content").notEmpty().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("image").notEmpty().isURL(),
];

import { param } from "express-validator";

export const findPostValidation = [
    param("userId").isNumeric().toInt()
];

export const validationUpdatePost = [
    param("postId").isNumeric().withMessage("El Id debe ser un numero").toInt(),
    body("title").optional().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("content").optional().isString()
        .withMessage("Solo puede ingresar caracteres alfabeticos"),
    body("image").optional().isURL(),
];


