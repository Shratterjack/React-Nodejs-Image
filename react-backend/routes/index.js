var express = require('express');
var router = express.Router();

const fs = require('fs');







/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET the name of the file stored in the images folder. */
router.get('/filename',function(req,res,next) {  
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
 
     var folders = fs.readdirSync(__dirname+'/images/');
     res.send(JSON.stringify(folders[0]));
});



/* GET the the file stored in the images folder. */
router.get('/file',function (req,res,next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  var folders = fs.readdirSync(__dirname + '/images/');
  let path = __dirname + '/images/' + folders[0];

  var img = fs.readFile(path, function (err, data) {
    var contentType = 'image/png';
    var base64 = Buffer.from(data).toString('base64');
    base64 = 'data:image/png;base64,' + base64;
    res.send(base64);
  });
  
})


module.exports = router;
