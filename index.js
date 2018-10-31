// ---------- VARIABLES ---------- //
var express    = require('express');
var app        = express();
var bodyParser = require("body-parser");
var port       = process.env.PORT || 3000;
var path       = require('path');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:tacticaldelta2018@ds141783.mlab.com:41783/tactical-delta-2018-db';
var dbName = 'tactical-delta-2018-db';

/* - Collections - */
var db;
var users;
var levels;


// ------------------------------
// ---------- INITIALIZATION ---------- //
app.listen(port, () => {
  console.log('Server listening at port %d', port);
});

mongoClient.connect(url, { useNewUrlParser: true }, init);

function init (err, client)
{
  db = client.db(dbName);
  //users = db.collection('UserCollectionName');
  levels = client.db('T_LEVELS');
}


// ------------------------------
// ---------- REQUESTS ---------- //



// ------------------------------
// ---------- TESTS ---------- //
app.post('/getLevelInfos', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  levels.find({name:level1});
  console.log(req.body);
  /*levelName = req.body.levelName;
  size = {
    x : req.body.sizeX,
    y : req.body.sizeY
  }*/
  
  levels.find().toArray(function (err, document){
    res.end(JSON.stringify(document));
  });
  
  //res.send('Name : ' + levelName + ' // Size : ' + size.x + ', ' + size.y);
});


// ------------------------------
// ---------- EXEMPLES ---------- //
/*var levelName;
var size;
app.post('/setLevel', function(req, res) {
  console.log(req.body);
  levelName = req.body.levelName;
  size = {
    x : req.body.sizeX,
    y : req.body.sizeY
  }
  res.send('Name : ' + levelName + ' // Size : ' + size.x + ', ' + size.y);
});

app.get('/getLevel', function(req, res) {
  res.send('Name : ' + levelName + ' // Size : ' + size.x + ', ' + size.y);
});*/