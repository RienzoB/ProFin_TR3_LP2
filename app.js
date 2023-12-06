import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { validateUsers } from "./middleware.js/user-middlewares.js";
import { userRouter } from "./routes.js/user-routes.js";

const app = express();

//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(validateUsers);
app.use("/user", userRouter);

app.listen(4000, () => {
    console.log("Escuchando en Puerto 4000");
});