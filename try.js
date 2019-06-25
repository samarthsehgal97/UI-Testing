var rec=[];
var p=0;
const fs = require('fs');
const csv = require('csv-parser');
fs.createReadStream('login.csv')
.pipe(csv())
.on('data', function(data){
      rec[p]=data;
      console.log(p);
      console.log(rec[p]["Email"]);
      p++;

  });
