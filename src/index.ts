import express from "express";
import path from 'path';
import exphbs from 'express-handlebars';
import methodOverride from 'method-override';
// Import routes
import IndexRoutes from './routes';
import booksRoutes from './routes/books';

// initializations
const app = express();
import './database';
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
const Handlebars = require('handlebars')

// Settings
app.set('port',3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers'),
    defaultLayout: 'main'
}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride());

// Routes
app.use(IndexRoutes);
app.use('/books', booksRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Run the server
app.listen(app.get('port'), () => {
    console.log('Si sirve :D');
});
