import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors'
import statsRoutes from './routes/stats.js'
import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";
import rentRouter from "./routes/rent.js";
import playerRouter from "./routes/players.js";
import tempRouter from "./routes/temp.js";
import coachesRouter from "./routes/coaches.js"
const app = express();
app.use(cors())
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/stats', statsRoutes);
app.use('/posts', postRoutes);
app.use('/temp', tempRouter);
app.use('/rent', rentRouter);
app.use("/user", userRouter);
app.use("/players",playerRouter);
app.use("/coaches",coachesRouter);
// connection staring
const CONNECTION_URL = 'mongodb+srv://pbl:final@cluster0.tpd7w.mongodb.net/sports?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch((error) => console.log(`${error} did not connect`));

