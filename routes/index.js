var express = require('express');
var router = express.Router();
var jsonQuery = require('json-query');


/*
"success": jsonQuery('Device[Name="온도센서"].Model', {
  data: default_spec
*/
/* GET home page. */

router.options('/api', function(req, res) {

  //const {data} = default_spec

  const compcode = req.param('compcode')
  const code = req.param('code')
  const devtype = req.param('devtype')
  const ndtype = req.param('ndtype')

  var default_spec = require("./json/" + compcode + "/" + devtype + "/" + code + ".json");
  //var default_spec = require("./json/8877_13010_dev_1.json")
  //const default_spec = "./routes/json/" + compcode + "_" + code + "_" + devtype + "_" + ndtype + ".json"
  //var default_spec = require("./db.json")

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Header", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader('Access-Control-Allow-Methods', "GET,DELETE")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  //res.addHeader('Access-Control-Allow-Headers', "*")
  //res.addHeader('Access-Control-Allow-Methods', "GET,DELETE")

  res.status(200).json(default_spec);

  //const code = req.param('code');

  /*
  res.status(200).json({
    "success": default_spec
  });
  */

});


router.get('/api', function(req, res) {

  const compcode = req.param('compcode')
  const code = req.param('code')
  const devtype = req.param('devtype')
  const ndtype = req.param('ndtype')

  var default_spec = require("./json/" + compcode + "/" + devtype + "/" + code + ".json");

  res.header("Access-Control-Allow-Origin", "*").status(200).json(default_spec);

});

module.exports = router;
