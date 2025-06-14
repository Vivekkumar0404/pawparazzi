import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import AuthRoute from './Routes/AuthRoute.js';
import ChatRoute from './Routes/ChatRoute.js';
import MessageRoute from './Routes/MessageRoute.js';
import PostRoute from './Routes/PostRoute.js';
import UploadRoute from './Routes/UploadRoute.js';
import UserRoute from './Routes/UserRoute.js';

// Routes

const app = express();

// to serve images inside public folder
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use('/videos', express.static('videos'));


// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

dotenv.config();

mongoose.connect(process.env.MONGO_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
.then(() => app.listen(process.env.PORT, () => console.log(`Listening at ${process.env.PORT}`)))
.catch((error) => console.log(error));

app.use('/auth', AuthRoute)
app.use('/user', UserRoute)
app.use('/post', PostRoute)
app.use('/upload', UploadRoute)
app.use('/chat', ChatRoute)
app.use('/message', MessageRoute)
app.use(express.static('public')); 


