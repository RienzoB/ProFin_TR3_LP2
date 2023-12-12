import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import { env } from "./settings/envs.js";

import { autorizarValidaciones } from "./middleware/athentique.js";
import { postRouter } from "./routes/post-routes.js";
import { userRouter } from "./routes/user-routes.js";


const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use("/posts", autorizarValidaciones, postRouter);
app.use("/user", userRouter);

app.listen(env.PORT, () => {
    console.log(`Escuchando en Puerto ${env.PORT}`);
}); 