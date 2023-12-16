import express, { urlencoded } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import fileUpload from "express-fileupload";

import { env } from "./settings/envs.js";

import { autorizarValidaciones } from "./middleware/athentique.js";
import { postRouter } from "./routes/post-routes.js";
import { userRouter } from "./routes/user-routes.js";
import * as url from "url";
import path from "node:path";
import { startConnection } from "./settings/dataBase.js";
import { taskRoutes } from "./routes/tasks-routes.js";


const app = express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

//middleware
app.use(express.json());//PARA TRABJAR CON EL BODY E LAS PETICIONES
app.use(urlencoded({ extended: true }));//PARA TRABJAR CON LOS FORMULARIOS 
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use("/posts", autorizarValidaciones, postRouter);
app.use("/users", userRouter);
app.use("/tasks", taskRoutes); 
app.use(express.static(path.join(__dirname,"public")));



app.use(fileUpload({
   useTempFiles: true,
    tempFileDir : './tmp/' 
})
);

app.post('/upload', async (req , res) => {
  try {
    const file = req.files.image;

    await file.mv(path.join(__dirname,"uploads",file.name));
    
      // el objeto del archivo cargado 
res.sendStatus(200);
} catch (err) {
  console.log(err);
}
});

app.get('/', (req, res) => {
  res.sendFile("index.html");
});

app.listen(env.PORT, async () => {
  await startConnection();
 console.log(`Escuchando en Puerto ${env.PORT}`);
});