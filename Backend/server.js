const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const courseRouter = require("./routes/course")
const usersRouter = require('./routes/users');
const adminsRouter = require('./routes/admins');
const facultiesRouter = require('./routes/faculties');
const { store, session } = require('./db');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '..', "/public/"));
app.use(express.static(path.join(__dirname, '..', "/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'keyboard cat',
        cookie: {
            maxAge: 10000000,
        },
        store,
    }),
);

app.get('/', function (req, res) {
    res.render('index')
})

app.get('/admin', function (req, res) {
    res.render('admin')
})
app.get('/registration', function (req, res) {
    res.render('registration')
})
app.get('/search', function (req, res) {
    res.render('search')
})

app.use("/api/v1/courses", courseRouter)
app.use("/api/v1/users/", usersRouter)
app.use("/api/v1/faculties/", facultiesRouter)
app.use("/api/v1/admins/", adminsRouter)

app.listen(5000, () => console.log('Server on port 5000'))
