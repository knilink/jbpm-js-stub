function _buildStub(httpRequestHandler, doc){
  doc = doc || require('./jrapidoc.rest.model.json');
  var methods = [];

  for(var j  in doc.serviceGroups['REMOTE-URL/services/rest'].services){
    for( var i in doc.serviceGroups['REMOTE-URL/services/rest'].services[j].methods){
      methods.push(doc.serviceGroups['REMOTE-URL/services/rest'].services[j].methods[i]);
    }
  }

  function toDict(methods){
    var dict={};
    for(var i in methods){
      i=methods[i];
      var path = i.path.split('/');
      var _dict=dict;
      for (var j=0 ; j<path.length-1;j++){
        var jj=path[j];
        _dict[jj]=_dict[jj]||{};
        _dict=_dict[jj];
      }
      _dict[path[j]]=_dict[path[j]]||{};
      _dict[path[j]][':method:']=_dict[path[j]][':method:']||{};
      _dict[path[j]][':method:'][i.httpMethodType]=i;
    }
    return dict;
  }

  var definitions = toDict(methods);

  function buildRequestFun(jbpm_args, path, method){
    var r={};
    if(method.hasOwnProperty('GET')){
      r.get = function(){
        var args = [jbpm_args, path];
        Array.prototype.push.apply(args, arguments);
        return httpRequestHandler.get.apply(httpRequestHandler, args);
      };
    }
    if(method.hasOwnProperty('POST')){
      r.post = function(){
        var args = [jbpm_args, path];
        Array.prototype.push.apply(args, arguments);
        return httpRequestHandler.post.apply(httpRequestHandler, args);
      };
    }
    if(method.hasOwnProperty('PUT')){
      r.put = function(){
        var args = [jbpm_args, path];
        Array.prototype.push.apply(args, arguments);
        return httpRequestHandler.put.apply(httpRequestHandler, args);
      };
    }
    if(method.hasOwnProperty('DELETE')){
      r.delete = function(){
        var args = [jbpm_args, path];
        Array.prototype.push.apply(args, arguments);
        return httpRequestHandler.delete.apply(httpRequestHandler, args);
      };
    }
    r.path=path;
    for(var i in method){
      if(method[i].queryParams)
        r[i.toLowerCase()]._queryParams = Object.keys(method[i].queryParams);
    }
    return r;
  }

  function buildStub(jbpm_args, path, dict){
    if(!dict.hasOwnProperty(':method:') || Object.keys(dict).length>1){
      var new_dict={};
      var new_fun={};
      var r;
      for(var i in dict){
        if(i==':method:') continue;
        if(i[0]=='{'){
          var child = dict[i];
          for(var k in child){
            new_fun[k]=child[k];
          }
        }else{
          new_dict[i] = buildStub(jbpm_args, path+'/'+i, dict[i]);
        }
      }
      if(Object.keys(new_fun).length>0){
        var f = function(a){
          return buildStub(jbpm_args, path+'/'+encodeURIComponent(a),new_fun);
        };
        for (var k in new_dict){
          f[k]=new_dict[k];
        }
        r = f;
      }else{
        r = new_dict;
      }
      if(dict.hasOwnProperty(':method:')){
        var m = buildRequestFun(jbpm_args, path, dict[':method:']);
        for (var im in m){
          r[im]=m[im];
        }
      }
      return r;
    }else{
      var m = dict[':method:'];
      return buildRequestFun(jbpm_args, path, m);
    }
  }
  return function(){
    return buildStub(arguments, '/services/rest', definitions);
  };
}

module.exports = _buildStub;
