
/*
const http = require("node:http");

const api = {
  "host":"api.ipify.org",
  "port":80,
  "path":"/"
};

http.get(api,response => {
  response.on("data",ip =>{
    console.log(`${ip}`);
  });
});
*/

/*
var http = require('https');

var ip = '186.107.40.233';
var api_key = 'at_9l3N2tCsVkgAUAg0QCccpiuKdC7y7';
var api_url = 'https://geo.ipify.org/api/v2/country,city?';

var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;

http.get(url, function(response) {
    var str = '';
    response.on('data', function(chunk) { str += chunk; });
    response.on('end', function() { console.log(str); });
}).end();


/*
{
  "ip":"186.107.40.233",
  "location":{
    "country":"CL",
    "region":"Regi\u00f3n Metropolitana",
    "city":"Chicureo",
    "lat":-33.28379,
    "lng":-70.65333,
    "postalCode":"",
    "timezone":"-03:00",
    "geonameId":3895165},
  "as":{
    "asn":7418,
    "name":"TELEF\ufffdNICA CHILE S.A.",
    "route":"186.106.0.0\/15",
    "domain":"http:\/\/www.movistar.cl",
    "type":"Cable\/DSL\/ISP"},
    "isp":"Movistar Fibra",
    "proxy":{
      "proxy":false,
      "vpn":false,
      "tor":false}
}
*/