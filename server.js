import express from 'express';
import helloController
    from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitController from "./controllers/tuits-controller.js";
import cors from 'cors';

const app = express();

app.listen(process.env.PORT || 4000);

app.use(express.json());
app.use(cors());

helloController(app);
userController(app);
tuitController(app);

app.listen(4000);

