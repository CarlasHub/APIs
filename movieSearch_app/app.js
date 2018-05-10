var express = require('express');
var bodyParser =require('body-parser');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

// tell the program to use body parser:

app.use(bodyParser.urlencoded({ extended: true }));



app.get('/results', function(req,res){
    
    request('https://www.omdbapi.com/?s=Leonard&apikey=thewdb', function(error, response, body){
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




app.listen(process.env.PORT, process.env.IP, function(){
    console.log('all nice: server is running yeahhhh!');
});

