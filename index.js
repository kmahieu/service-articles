import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import articlesRoute from './Routes/articlesRoute.js';

const app = express();

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(
    cors({ 
        Origin: 'http://localhost:4200', 
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: [
            'Content-Type', 
            'Authorization', 
            'Origin', 
            'x-access-token', 
            'XSRF-TOKEN'
        ], 
        preflightContinue: false
    })
  );

app.use('/', articlesRoute);

const CONNECTION_URL = 'mongodb+srv://admin:admin@cluster0.yf65c.mongodb.net/cda-eval?retryWrites=true&w=majority';
const PORT = 80;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`)))
        .catch((error) => console.log(error.message));