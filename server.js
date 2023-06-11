import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// routes
import AuthRoute from './routes/auth_route.js'
import UserRoute from './routes/user_route.js'
import PostRoute from './routes/post_route.js'
import UploadRoute from './routes/upload_route.js'
import ChatRoute from './routes/chat_route.js'
import MessageRoute from './routes/message_route.js'

const app = express();

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// to serve images inside public folder
app.use(express.static('public'));
app.use('/images', express.static('images'));

// direnv
dotenv.config();

// mongoose
mongoose
    .connect(process.env.MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Data Base Connected Sucessfully!"))
    .catch((error) => console.log(error));

// usage of routes
app.use('/api/auth', AuthRoute)
app.use('/api/user', UserRoute)
app.use('/api/posts', PostRoute)
app.use('/api/upload', UploadRoute)
app.use('/api/chat', ChatRoute)
app.use('/api/message', MessageRoute)

// server port
app.listen(process.env.PORT || 5000, () => {
    console.log('Magic happends!!!');
});
