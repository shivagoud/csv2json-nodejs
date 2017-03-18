var fs = require('fs');
var stream = fs.createWriteStream("input.csv",{flags:'w'});

stream.write("name,age,gender,height,weight");
n=1004010;	//a large number
while(n--){
  stream.write("\r\ndelta,25,F,154,58");
}