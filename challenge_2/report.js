var express = require('express');
var app = express.Router();
// var data = require("./data.json")


// let flattenJSON = (obj) => {
//     let flattenData = {};
//     for (let i in obj) {
//         if (!obj.hasOwnProperty(i)) continue;
//         if ((typeof obj[i]) == 'object') {
//             // flattenKeys[i] = obj[i];
//             let flatObject = flattenJSON(obj[i]);
//             for (let j in flatObject) {
//                 if (!flatObject.hasOwnProperty(j)) continue;
//                 flattenData[i + '.' + j] = flatObject[j];
//             }
//         } else {
//             flattenData[i] = obj[i];
//         }
//     }
//     return flattenData;
// }

// console.log(flattenJSON(data))

// router.post('/', function(req, res, next) {
//   res.statusCode = 200
//   //console.log('######################################################', req.body);
//   res.json(req.body);
//   res.end();
//   next();
// });

app.post('/report', (req, res, next) => {
  res.statusCode = 200
  //console.log('######################################################', req.body);
  res.json(req.body);
  res.end();
  next();
});`


module.exports = app;
