import { validationResult } from "express-validator";

export const verificarValidaciones = (req, res, next) => { //esto es un middleware y lo podemos identificar por tener en los parametors un "next"

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json(errors.array()); //es 400 por mala peticion
    }
    next();
}

