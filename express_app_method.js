var app = require('./config/server.config')  // import first 4 common lines 


app.get('/',function(req, res){
    //res.send("Welcome to express");
    res.render('login',{"title":"User Login"}); //render in ejs
});

app.post('/',function(req, res){
    let stud_name = req.body.stud_name;
    res.send(stud_name + ' Welcome to MCA department');
});

