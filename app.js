var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 var Sequelize = require('sequelize');
 var sequelize = new Sequelize('postgres://postgres:@localhost/postgres');
// const{Pool,Client} = require('pg');

// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'postgres',
//     password: '',
//     port: 5432,
// });

// app.use(bodyparser.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

// sequelize.authenticate({
//     then(){

//     }

//     catch(){

//     }
// })

var Blogs = sequelize.define('blogs', {
    title: Sequelize.TEXT,
    name: Sequelize.TEXT,
    post: Sequelize.TEXT
});


Blogs.sync().then(function(){
    
});

app.get('/index',function(req,res){
    res.render('index');
});

app.post('/Blog', function(req,res){
        Blogs.create({
            title: req.body.title,
            name: req.body.name,
            post: req.body.post


        });

        res.render('bulletin');

});


app.post('/',function(req,res){

    var values = [req.body.title,req.body.name, req.body.post];

    if (values[0] !== '' && values[1] !== '' &&  values[2] !=='')  {
       Blogs.create({
            title: values[0],
            name: values[1],
            post: values[2]

        });
    }

    res.render('index');
});

app.get("/bulletin", function(req,res){
   Blogs.findAll().then(function(rows){
        var card = rows
        if(card == null){
            res.render('bulletin');
        }else {
            res.render('bulletin', {card:card});
         }
        })
        
});

app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/Home',function(req,res){
    res.render('index');
});

app.get('/portfolio',function(req,res){
    res.render('portfolio');
});

 app.get('/blog', function(req,res){
     res.render('Blog');
 });

 app.get('/music', function(req,res){
    res.render('music');
 });

// app.post('/', function(req,res){
//     res.render('blog');
    // var data = req.query;
    // insertBlog(data);
// });
// function insertBlog(data){
//     var query = {
//         text: 'insert into blog (title, name, post) values ($1, $2, $3)',
//         values: [data.title, data.name, data.post]
//     }
// pool.query(query, (err,res) => {
//     console.log('Info created');
//     pool.end();
// });

// }


var port = 3000;
app.listen(port);
console.log('app is listening on port '+ port);