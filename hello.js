var express=require('express');
var app= express();

app.set('student','student');
app.set('admin','Admin');

app.use('/student',function(req,res){
    res.send('Welcome to Express JS -' + app.get('student'));
});

app.use('/admin',function(req,res){
    res.send('Welcome to Express JS -' + app.get('admin'));
});

let member_name = '';
app.param('name', function(req,res, next, name){
    member_name = name;
    next();
});
 
app.use('/staff/:name', function(req, res) {
    res.send(member_name + 'Welcome to MCA department');
});


app.listen(3000);
console.log('Server Started');
