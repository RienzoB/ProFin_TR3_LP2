import { Router } from "express";
import { ctrlCreateUser, ctrlDeleteUser, ctrlGetAllUser, ctrlGetByUser, ctrlUpdateUser, ctrlrsLoginUser } from "../controllers/user-ctrlrs.js";
import { findUserValidation, validationCreateUser, validationUpdateUser } from "../validation/user-validation.js";
import { verificarValidaciones } from "../middleware/app-validation.js";
const userRouter = Router();
userRouter.get("/", ctrlGetAllUser);

userRouter.get("/:userId", findUserValidation, verificarValidaciones, ctrlGetByUser)

userRouter.post("/register", validationCreateUser, verificarValidaciones, ctrlCreateUser);
userRouter.post("/login", ctrlrsLoginUser);

userRouter.patch("/:userId", validationUpdateUser, verificarValidaciones, ctrlUpdateUser);

userRouter.delete("/:userId", findUserValidation, verificarValidaciones, ctrlDeleteUser);

export { userRouter };