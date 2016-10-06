jbpm-js-stub
=================
A javascript stub for jbpm kie server.

* To run the sync-request-example.js in repl
```
$ git clone https://github.com/knilink/jbpm-js-stub.git
$ cd jbpm-js-stub
$ npm install
$ node

> .load sync-request-example.js
> server = jbpm('myHost:myPort',myusername,mypassword).server // auth
> server.containers.get().result['kie-containers']['kie-container'] // to list containers
> server.queries.containers(myContainerId).processes.definitions.get({pageSize:100}) // get definitions
> server.containers(myContainerId).processes(myProcessId).instances.post({param1:'param1',param2:'param2'}) //create new case
```

