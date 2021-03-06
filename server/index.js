const cookieParser = require('cookie-parser');
const express = require('express');
const session = require('express-session');
const path = require('path');
const routes = require('./routes/routes');
const app = express();
const fileUpload = require('express-fileupload');
var MySQLStore = require('express-mysql-session')(session);
const cors = require('cors');

//setting up ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware 
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());
app.use(cors());

const sessionStore = new MySQLStore(
    {
        host: process.env.DATABASE_HOST,
        port: 3306,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASS,
        database: process.env.DATABASE_DB
    }
);
app.use(session({
    name: 'session',
    secret: 'my_secret is mine and mine alone',
    resave: false,
    store: sessionStore,
    saveUninitialized: false,
    cookie: {
        maxAge: 3600 * 1000, // 1hr
    }
}));

//running static files 
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.use((err, req, res, next) => {
    console.log(err);
    return res.send('Internal Server Error');
});

const port = process.env.PORT || 5000;
app.listen(port, ()=>console.log(`Server starting at port ${port}`));