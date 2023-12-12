import { userModel } from "../models/user-models.js";
import jwt from "jsonwebtoken";

export const autorizarValidaciones = (req, res, next) => {

    const { authorization } = req.headers;

      if (!authorization) {
        console.log(" no hay token");   
        return res.sendStatus(401);
    } 
  try {
    const { userId } = jwt.verify(authorization, "Secret"); 
    console.log("userId" + userId);

   const user = userModel.byId({ id: userId }); 
   if (!user) { 
   console.log("user: " + user);
    console.log(" no hay user");     
    return res.status(401).json("error"); 
   }
   req.user = user;

   next();

  } catch (error){

    return res.sendStatus(401);
  };
} 

