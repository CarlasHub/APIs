var express = require('express');
var bodyParser =require('body-parser');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.use(express.static("public"));

// tell the program to use body parser:

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    
    
    res.render('search');
    
});



app.get('/results', function(req,res){
    var query = req.query.search;
    var url = "http://omdbapi.com/?s=" + query + "&apikey=thewdb";
    
    request(url,  function(error, response, body){
        if (! error && response.statusCode == 200){
        //make the body an object so you can acess its currently a string 
        var data = JSON.parse(body);
        //res.send(results['Search'][0]);
        //link data in your ejs file
        res.render('results', { data: data });
            
        } 
        
    });
    //res.send('it works nice!');
});

app.set('views', __dirname + '/views');


app.listen(process.env.PORT, process.env.IP, function(){
    console.log('all nice: server is running yeahhhh!');
});

