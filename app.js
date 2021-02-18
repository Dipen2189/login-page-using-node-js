const express = require('express');
const app = express();
const router = require('./src/router');
var bodyparser = require('body-parser');
const path = require('path');
const session = require('express-session')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/*app.get('/', (req, res) => {
    res.send('hello');
})*/
app.use('/', router);
app.set("views", "views");
app.set("view engine", "hbs");

app.listen(4000, () => {
    console.log("server is running")
})