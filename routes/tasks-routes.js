import { Router } from "express";
import {
    ctrlrCreateTask,
    ctrlrDeleteTask,
    ctrlrFindAllTask,
   
} from "../controllers/tasks-ctrlrs.js";

const taskRoutes = Router();

taskRoutes.get("/", ctrlrFindAllTask);
taskRoutes.post("/", ctrlrCreateTask);
taskRoutes.delete("/:taskId", ctrlrDeleteTask);

export {taskRoutes};