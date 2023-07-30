var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
app.use(express.static('HTML PROJECT'))
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/iekart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
var db = mongoose.connection
db.on('error', () => console.log("Error in connecting to Mongodb"))
db.once('open', () => console.log("Conneced to Mongodb"))
app.post("/sign_up", (request, res) => {
    let req = request.body
    console.log(request.body);
    var Fn = req.First_name
    var Ln = req.Last_name
    var dob = req.dob
    var gen = req.gender
    var mob = req.Mobile_number
    var email = req.E_mail
    var password = req.password
        // var Rep = req.body.Re_enter_password
    var data = {
        "Fn": Fn,
        "Ln": Ln,
        "dob": dob,
        "gen": gen,
        "mob": mob,
        "Email": email,
        "Password": password,
        // "Rep": Rep,
    }
    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err
        }
        console.log("Record inserted successfully")
    });
    return res.sendFile('completion.html', { root: __dirname })
})
app.get('/', (req, res) => {
    res.set({
        "Alow-access-Alow-Origin": "*"
    })
    console.log('inside get call');
    // res.redirect('register.html')
    res.sendFile('register.html', {
        root: __dirname
    })
})

app.listen(6001, function() {
    console.log("Listening to the port 6001")

})