var app = require('./Config/server.config')

app.get('/', function(req, res){
    //res.send('Welcome to express!');
    res.render('login',{"title": "User Login"});
});

app.post('/', function(req, res){
    let stud_name = req.body.stud_name;
    res.send(stud_name + ' Welcome to MCA Dept!');
});

app.post('/add', function(req, res){
    let operand1 = req.body.operand1;
    let operand2 = req.boby.operand2;
    let result = operand1 + operand2;
    res.send(' Result of Addition is : '+ result);
});