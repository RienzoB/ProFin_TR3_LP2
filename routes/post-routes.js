import { Router } from "express";
import { ctrlCreatePost, ctrlDeletePost, ctrlGetAllPost,
    ctrlGetByPost, 
    ctrlUpdatePost } from "../controllers/post-ctrlrs.js";
import { findPostValidation, validationCreatePost,
    validationUpdatePost } from "../validation/post-validation.js";
import { verificarValidaciones } from "../middleware/app-validation.js";
const postRouter = Router();
postRouter.get("/", ctrlGetAllPost);

postRouter.get("/:postId", findPostValidation, 
verificarValidaciones, ctrlGetByPost)

postRouter.post("/public", validationCreatePost, verificarValidaciones, ctrlCreatePost);

postRouter.patch("/:postId", validationUpdatePost, verificarValidaciones, ctrlUpdatePost);

postRouter.delete("/:postId", findPostValidation, verificarValidaciones, ctrlDeletePost);

export { postRouter };