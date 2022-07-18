
__path = process.cwd();

var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8080 || 5000 || 3000
var { color } = require('./lib/color.js')

var mainrouter = require('./main/main'),
   

var app = express()
app.enable('trust proxy');
app.set("json spaces",2)
app.use(cors())
app.use(secure)
app.use(express.static("public"))

app.use('/', mainrouter);


app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT,'green')),
    console.log(color("YOUR SITE IS WORKING NOW",'red'))
})

module.exports = app
