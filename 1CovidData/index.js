const express = require('express')
const { addListener } = require('nodemon')
const app = express()
const track = require('novelcovid')
const exhbs = require('express-handlebars')
const { response } = require('express')

track.countries()
.then(console.log)

app.engine('hbs', exhbs({
    extname: 'hbs',
    defaultView: 'home',
    layoutsDir: __dirname + '/views/layouts/'
}));
app.set('view engine', 'hbs');


app.get('/countries', (req, res) => {
    track.countries().then((response) => {
        res.render('home', {info:response});
    })
});

app.listen(4000, () => {
    console.log("Listening on 4000");
});