var express = require('express');
var fs = require('fs'), obj;
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'public' });
});



router.get('/getteam', function(req, res, next) {
    fs.readFile('./public/collegeFootball.json', 'utf8', function (err, data) {
        if (err) throw err
        obj = JSON.parse(data);
        
        var arrayIndex = Math.floor(Math.random() * Object.keys(obj.schools).length);
        
        console.log(arrayIndex);
        var name = obj.schools[arrayIndex].name;
        var mascot = obj.schools[arrayIndex].mascot;
        var pic = obj.schools[arrayIndex].pic;
        
        console.log(name);
        console.log(mascot);
        console.log(pic);
        
        var jsonresult = [name, mascot, pic];
        
        res.status(200).json(jsonresult);
    });
});   

module.exports = router;
