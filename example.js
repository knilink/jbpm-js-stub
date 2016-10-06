function requestWithContent(method){
  return function(jbpm_args, path,  jsonContent, queryParams, callback) {
    var content = JSON.stringify(jsonContent);
    var req = http.request({
      method: method,
      hostname: jbpm_args[0],
      port: jbpm_args[1],
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': content.length
      },
      auth:jbpm_args[2]+':'+jbpm_args[3],
      path:'/kie-server' + path + '?' + querystring.stringify({'a':1,'b':2})
    }, function(res) {
      callback(JSON.parse(res.read().toString()));
    });
    req.write(content);
    req.end();
  };
}

var httpRequestHandler = {
  get:function(jbpm_args, path, queryParams, callback) {
    http.get({
      hostname: jbpm_args[0],
      port:jbpm_args[1],
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      auth:jbpm_args[2]+':'+jbpm_args[3],
      path:'/kie-server' + path + '?'+querystring.stringify(queryParams)
    },function(res) {
      callback(JSON.parse(res.read().toString()));
    });
  },
  post:requestWithContent('POST'),
  put:requestWithContent('PUT'),
  delete:requestWithContent('DELETE')
};

jbpm = require('./jbpm-stub.js')(httpRequestHandler);

/*
 server = jbpm(myJbpmHost,myJbpmPort,username,password).server;

 server.queries.containers(myContainerId).processes.definitions.get({pageSize:100},function(a){
 console.log(a)
 });

 myTasksUsers = server.containers(myContainerId).processes.definitions(processId).tasks.users;
 myTasksUsers(myTaskName_1).get({},function(res){
   console.log(res);
 });
 myTasksUsers(myTaskName_2).get({},function(res){
   console.log(res);
 });
*/
