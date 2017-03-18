var csv = require("fast-csv");
var keys = [];
var jsondata = [];

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
      jsondata.push(e);
    }
  })
  .on("end", function(){
    var fs = require('fs');
    fs.writeFile("output.json", JSON.stringify(jsondata), function(err) {
      if(err)
        return console.log(err);

      console.log("The file was saved!");
    });
  });