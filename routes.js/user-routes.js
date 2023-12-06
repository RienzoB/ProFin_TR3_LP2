import { Router } from "express";
import { ctrlCreateUser, ctrlGetAllUser } from "../ctrlrs.js/user-ctrlrs.js";
const userRouter = Router();

userRouter.get("/", ctrlGetAllUser);
userRouter.post("/", ctrlCreateUser);
userRouter.patch("/", (req, res) => {
    res.send("Actualizacion usuarios");
});

userRouter.delete("/", (req, res) => {
    res.send("Chau usuarios");
});

export { userRouter };