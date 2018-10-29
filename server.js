var http = require("http");
var fs = require("fs");
var parser = require('fast-xml-parser');
var he = require('he');
//var url = require('./cdCatalog.xml');


var options = {
    attributeNamePrefix : "@_",
    attrNodeName: false,
    textNodeName : "#text",
    ignoreAttributes : true,
    ignoreNameSpace : false,
    allowBooleanAttributes : false,
    parseNodeValue : true,
    parseAttributeValue : false,
    trimValues: true,
    decodeHTMLchar: false,
    cdataTagName: "__cdata", //default is 'false'
    cdataPositionChar: "\\c",
    localeRange: "", //To support non english character in tag/attribute values.
    parseTrueNumberOnly: false,
    attrValueProcessor: a => he.decode(a, {isAttributeValue: true}),//default is a=>a
    tagValueProcessor : a => he.decode(a) //default is a=>a
};
// var jsonObj = parser.parse("adsInfo.xml", options );
// console.log(jsonObj);
parser.validate("adsInfo.xml");//optional
// var jsonObj = parser.parse("adsInfo.xml" ,options);
fs.readFile(__dirname + './cdCatalog.xml', function(err, data){
    var tObj = parser.getTraversalObj(data ,options);
    var jsonObj = parser.convertToJson(tObj,options);
    console.log("anthing happening" + jsonObj);
});
// var parse = require('xml-parser');
// var xml = fs.readFileSync('adsInfo.xml', 'utf8');
// var inspect = require('util').inspect;
// var obj = parse(xml);
// console.log(inspect(obj, { colors: true, depth: Infinity }));
// Define a port to listen for incoming requests
var PORT1 = 3000;
var Port=3001;

// Create a generic function to handle requests and responses
function handleRequest1(req, res) {
   
    fs.readFile(__dirname + "/index.html", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      });
   
    

    
    }
    function handleRequest(req, res) {
    fs.readFile(__dirname + "/adsInfo.xml", function(err, data) {

        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/xml" });
        res.end(data);
      });
    }
    
  // Send the below string to the client when the user visits the PORT URL
 // response.end("It Works!! Path Hit: " + request.url);


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server1 = http.createServer(handleRequest1);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT1);
});
server1.listen(Port, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + Port);
  });