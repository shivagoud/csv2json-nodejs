var csv = require("fast-csv");
var keys = [];

var fs = require('fs');
var stream = fs.createWriteStream("output.json",{flags:'w'});
stream.write("[\n");

var comma = false;

csv
  .fromPath("input.csv")
  .on("data", function(data){
    if(keys.length==0)
      keys=data;
    else if(data[0] != undefined){
      var e = {};
        keys.forEach(function(key, index) {
          e[key] = data[index];
        });

      if(comma)
        stream.write(",\n");
      stream.write(JSON.stringify(e));
      comma = true;
    }
  })
  .on("end", function(){
    stream.write("]");
    stream.end();
    console.log("The file was saved!");
  });