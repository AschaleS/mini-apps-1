const express = require('express');
const parser = require('body-parser');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


const app = express();

app.use(express.static('client'));
app.use(parser.urlencoded({extended: true}));
app.use(parser());


app.listen(3000, function() {
  console.log('Server started and listening on port 3000');
});

app.set('views', 'client');
app.set('view engine', 'pug');


app.post('/', (req, res) => {
  //console.log('This is the request object:', req.body);

  res.statusCode = 200;
  //var csvDataObject = convertJsontoCsv(req.body);
  var csvDataObject = convertJsontoCsv(JSON.parse(req.body.text));
  var csvDataText = csvDataObject.header + '\n' + csvDataObject.value;
  res.render("index_2", {data: csvDataText});
  res.end();
})

function convertJsontoCsv(obj) {
  var value = "", header = "";
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (isObject(obj[key])) {
                if(!Array.isArray(obj)){
                	value = value.slice(0, -2);
                	value += '\n' ;
                }

                var output = convertJsontoCsv(obj[key]);
                value += output.value;
                header + output.header;
              } else {
                value += obj[key] + ', ';
                header += key + ', ';
              }
            }
          }
  header = header.slice(0, -2);
  return {header, value};
}
function isObject(obj) {
  return (typeof obj === 'object');
}

module.exports = app;
