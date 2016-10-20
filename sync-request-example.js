var request = require('sync-request');

function buildRequestHandler(method) {
  return function(jbpm_args, path, content, queryParams){
    var options = {
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Basic ' + new Buffer(jbpm_args[1]+':'+jbpm_args[2]).toString('base64')
      }
    };
    if(method === 'GET'){
      queryParams = content;
    }else{
      options.json = content;
    }
    if(queryParams){
      options.qs = queryParams;
    }
    var res = request(
      'GET',
      'http://'+jbpm_args[0]+'/kie-server' + path,
      options
    );
    return JSON.parse(res.getBody('utf8'));
  };
}

var httpRequestHandler = {
  get:buildRequestHandler('GET'),
  post:buildRequestHandler('POST'),
  put:buildRequestHandler('PUT'),
  delete:buildRequestHandler('DELETE')
};

jbpm = require('./jbpm-stub.js')(httpRequestHandler);
module.exports = jbpm;
