import dotenv from 'dotenv';
import express from 'express';
import routes from './routes.js';
import { 
  myMiddleware, 
  checkCSRFError, 
  CSRFMiddleware 
} from './src/middlewares/middleware.js';
import mongoose from 'mongoose';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import flash from 'connect-flash';
import helmet from 'helmet';
import csurf from 'csurf';

dotenv.config();

const app = express();

app.use(helmet());

mongoose.connect(process.env.URL_CONNECTION)
  .then(() => {
    app.emit('ready');
  })
  .catch(e => console.log(e));

const sessionOptions = session({
  secret: 'Content secret',
  store: MongoStore.create({ mongoUrl: process.env.URL_CONNECTION }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 , //milisegundos-segundos-horas-dia-7dias
    httpOnly: true
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('./public'));
app.use(sessionOptions);
app.use(csurf());
app.use(flash());
app.set('views', './src/views/');
app.set('view engine', 'ejs');
app.use(myMiddleware);
app.use(CSRFMiddleware);
app.use(checkCSRFError);
app.use(routes);

app.on('ready', () => {
  app.listen(3000, ()=> {
    console.log('http://localhost:3000')
  });
});


