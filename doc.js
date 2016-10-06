module.exports={
  "customInfo" : {
    "jrapidoc-rest-plugin" : "0.5.0.Final"
  },
  "serviceGroups" : {
    "REMOTE-URL/services/rest" : {
      "baseUrl" : "REMOTE-URL/services/rest",
      "serviceGroupDescription" : "KIE Server REST API",
      "services" : {
        "server" : {
          "path" : "server",
          "methods" : {
            "server - GET" : {
              "path" : "server",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers - GET" : {
              "path" : "server/containers",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id} - DELETE" : {
              "path" : "server/containers/{id}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id} - GET" : {
              "path" : "server/containers/{id}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id} - PUT" : {
              "path" : "server/containers/{id}",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/release-id - GET" : {
              "path" : "server/containers/{id}/release-id",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/release-id - POST" : {
              "path" : "server/containers/{id}/release-id",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/scanner - GET" : {
              "path" : "server/containers/{id}/scanner",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/scanner - POST" : {
              "path" : "server/containers/{id}/scanner",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/config" : {
          "path" : "server/config",
          "methods" : {
            "server/config - POST" : {
              "path" : "server/config",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/containers/instances/{id}" : {
          "path" : "server/containers/instances/{id}",
          "methods" : {
            "server/containers/instances/{id} - POST" : {
              "path" : "server/containers/instances/{id}",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/containers/{id}/processes" : {
          "path" : "server/containers/{id}/processes",
          "methods" : {
            "server/containers/{id}/processes/instances - DELETE" : {
              "path" : "server/containers/{id}/processes/instances",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "instanceId" : {
                  "parameterName" : "instanceId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/signal/{sName} - POST" : {
              "path" : "server/containers/{id}/processes/instances/signal/{sName}",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "sName" : {
                  "parameterName" : "sName",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "instanceId" : {
                  "parameterName" : "instanceId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId} - DELETE" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId} - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "withVars" : {
                  "parameterName" : "withVars",
                  "typeRef" : "boolean"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/signal/{sName} - POST" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/signal/{sName}",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "sName" : {
                  "parameterName" : "sName",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/signals - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/signals",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/variable/{varName} - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/variable/{varName}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "varName" : {
                  "parameterName" : "varName",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/variable/{varName} - PUT" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/variable/{varName}",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "varName" : {
                  "parameterName" : "varName",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/variables - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/variables",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/variables - POST" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/variables",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/workitems - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/workitems",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId} - GET" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "workItemId" : {
                  "parameterName" : "workItemId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId}/aborted - PUT" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId}/aborted",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "workItemId" : {
                  "parameterName" : "workItemId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId}/completed - PUT" : {
              "path" : "server/containers/{id}/processes/instances/{pInstanceId}/workitems/{workItemId}/completed",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "workItemId" : {
                  "parameterName" : "workItemId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/{pId}/instances - POST" : {
              "path" : "server/containers/{id}/processes/{pId}/instances",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/{pId}/instances/correlation/{correlationKey} - POST" : {
              "path" : "server/containers/{id}/processes/{pId}/instances/correlation/{correlationKey}",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                },
                "correlationKey" : {
                  "parameterName" : "correlationKey",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/containers/{id}/processes/definitions" : {
          "path" : "server/containers/{id}/processes/definitions",
          "methods" : {
            "server/containers/{id}/processes/definitions/{pId} - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/entities - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/entities",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/subprocesses - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/subprocesses",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/tasks/service - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/tasks/service",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/tasks/users - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/tasks/users",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/tasks/users/{taskName}/inputs - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/tasks/users/{taskName}/inputs",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                },
                "taskName" : {
                  "parameterName" : "taskName",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/tasks/users/{taskName}/outputs - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/tasks/users/{taskName}/outputs",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                },
                "taskName" : {
                  "parameterName" : "taskName",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/processes/definitions/{pId}/variables - GET" : {
              "path" : "server/containers/{id}/processes/definitions/{pId}/variables",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/containers/{id}/tasks" : {
          "path" : "server/containers/{id}/tasks",
          "methods" : {
            "server/containers/{id}/tasks/{tInstanceId} - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "withInputData" : {
                  "parameterName" : "withInputData",
                  "typeRef" : "boolean"
                },
                "withOutputData" : {
                  "parameterName" : "withOutputData",
                  "typeRef" : "boolean"
                },
                "withAssignments" : {
                  "parameterName" : "withAssignments",
                  "typeRef" : "boolean"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/attachments - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/attachments",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/attachments - POST" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/attachments",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "name" : {
                  "parameterName" : "name",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId} - DELETE" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "attachmentId" : {
                  "parameterName" : "attachmentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId} - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "attachmentId" : {
                  "parameterName" : "attachmentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId}/content - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/attachments/{attachmentId}/content",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "attachmentId" : {
                  "parameterName" : "attachmentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/comments - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/comments",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/comments - POST" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/comments",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/comments/{commentId} - DELETE" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/comments/{commentId}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "commentId" : {
                  "parameterName" : "commentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/comments/{commentId} - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/comments/{commentId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "commentId" : {
                  "parameterName" : "commentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/contents/input - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/contents/input",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/contents/output - GET" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/contents/output",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/contents/output - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/contents/output",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/contents/{contentId} - DELETE" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/contents/{contentId}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                },
                "contentId" : {
                  "parameterName" : "contentId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/description - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/description",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/expiration - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/expiration",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/name - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/name",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/priority - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/priority",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/skipable - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/skipable",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/activated - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/activated",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/claimed - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/claimed",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/completed - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/completed",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/delegated - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/delegated",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "targetUser" : {
                  "parameterName" : "targetUser",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/exited - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/exited",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/failed - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/failed",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/forwarded - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/forwarded",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "targetUser" : {
                  "parameterName" : "targetUser",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/nominated - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/nominated",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "potOwner" : {
                  "parameterName" : "potOwner",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/released - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/released",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/resumed - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/resumed",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/skipped - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/skipped",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/started - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/started",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/stopped - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/stopped",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/containers/{id}/tasks/{tInstanceId}/states/suspended - PUT" : {
              "path" : "server/containers/{id}/tasks/{tInstanceId}/states/suspended",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/jobs" : {
          "path" : "server/jobs",
          "methods" : {
            "server/jobs - GET" : {
              "path" : "server/jobs",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs - POST" : {
              "path" : "server/jobs",
              "httpMethodType" : "POST",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "containerId" : {
                  "parameterName" : "containerId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "parameters" : [ {
                "type" : {
                  "typeRef" : "string"
                }
              } ],
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs/commands/{cmd} - GET" : {
              "path" : "server/jobs/commands/{cmd}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "cmd" : {
                  "parameterName" : "cmd",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs/keys/{key} - GET" : {
              "path" : "server/jobs/keys/{key}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "key" : {
                  "parameterName" : "key",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs/{jobId} - DELETE" : {
              "path" : "server/jobs/{jobId}",
              "httpMethodType" : "DELETE",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "jobId" : {
                  "parameterName" : "jobId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs/{jobId} - GET" : {
              "path" : "server/jobs/{jobId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "jobId" : {
                  "parameterName" : "jobId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "withErrors" : {
                  "parameterName" : "withErrors",
                  "typeRef" : "boolean"
                },
                "withData" : {
                  "parameterName" : "withData",
                  "typeRef" : "boolean"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/jobs/{jobId} - PUT" : {
              "path" : "server/jobs/{jobId}",
              "httpMethodType" : "PUT",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "application/xml", "application/json" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "jobId" : {
                  "parameterName" : "jobId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        },
        "server/queries" : {
          "path" : "server/queries",
          "methods" : {
            "server/queries/containers/{id}/process/instances - GET" : {
              "path" : "server/queries/containers/{id}/process/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/containers/{id}/processes/definitions - GET" : {
              "path" : "server/queries/containers/{id}/processes/definitions",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/containers/{id}/processes/definitions/{pId} - GET" : {
              "path" : "server/queries/containers/{id}/processes/definitions/{pId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "id" : {
                  "parameterName" : "id",
                  "typeRef" : "string"
                },
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/definitions - GET" : {
              "path" : "server/queries/processes/definitions",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "filter" : {
                  "parameterName" : "filter",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/definitions/{pId} - GET" : {
              "path" : "server/queries/processes/definitions/{pId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instance/correlation/{correlationKey} - GET" : {
              "path" : "server/queries/processes/instance/correlation/{correlationKey}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "correlationKey" : {
                  "parameterName" : "correlationKey",
                  "typeRef" : "string"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances - GET" : {
              "path" : "server/queries/processes/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "initiator" : {
                  "parameterName" : "initiator",
                  "typeRef" : "string"
                },
                "processName" : {
                  "parameterName" : "processName",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/correlation/{correlationKey} - GET" : {
              "path" : "server/queries/processes/instances/correlation/{correlationKey}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "correlationKey" : {
                  "parameterName" : "correlationKey",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/variables/{varName} - GET" : {
              "path" : "server/queries/processes/instances/variables/{varName}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "varName" : {
                  "parameterName" : "varName",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "varValue" : {
                  "parameterName" : "varValue",
                  "typeRef" : "string"
                },
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/{pInstanceId} - GET" : {
              "path" : "server/queries/processes/instances/{pInstanceId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/{pInstanceId}/nodes/instances - GET" : {
              "path" : "server/queries/processes/instances/{pInstanceId}/nodes/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "activeOnly" : {
                  "parameterName" : "activeOnly",
                  "typeRef" : "boolean"
                },
                "completedOnly" : {
                  "parameterName" : "completedOnly",
                  "typeRef" : "boolean"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/{pInstanceId}/variables/instances - GET" : {
              "path" : "server/queries/processes/instances/{pInstanceId}/variables/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/{pInstanceId}/variables/instances/{varName} - GET" : {
              "path" : "server/queries/processes/instances/{pInstanceId}/variables/instances/{varName}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "varName" : {
                  "parameterName" : "varName",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/instances/{pInstanceId}/wi-nodes/instances/{workItemId} - GET" : {
              "path" : "server/queries/processes/instances/{pInstanceId}/wi-nodes/instances/{workItemId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                },
                "workItemId" : {
                  "parameterName" : "workItemId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/processes/{pId}/instances - GET" : {
              "path" : "server/queries/processes/{pId}/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pId" : {
                  "parameterName" : "pId",
                  "typeRef" : "string"
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "initiator" : {
                  "parameterName" : "initiator",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances - GET" : {
              "path" : "server/queries/tasks/instances",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/admins - GET" : {
              "path" : "server/queries/tasks/instances/admins",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/owners - GET" : {
              "path" : "server/queries/tasks/instances/owners",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/pot-owners - GET" : {
              "path" : "server/queries/tasks/instances/pot-owners",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "groups" : {
                  "parameterName" : "groups",
                  "typeRef" : "string"
                },
                "user" : {
                  "parameterName" : "user",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/process/{pInstanceId} - GET" : {
              "path" : "server/queries/tasks/instances/process/{pInstanceId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "pInstanceId" : {
                  "parameterName" : "pInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "status" : {
                  "parameterName" : "status",
                  "typeRef" : "string"
                },
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/workitem/{workItemId} - GET" : {
              "path" : "server/queries/tasks/instances/workitem/{workItemId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "workItemId" : {
                  "parameterName" : "workItemId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/{tInstanceId} - GET" : {
              "path" : "server/queries/tasks/instances/{tInstanceId}",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            },
            "server/queries/tasks/instances/{tInstanceId}/events - GET" : {
              "path" : "server/queries/tasks/instances/{tInstanceId}/events",
              "httpMethodType" : "GET",
              "headerParams" : {
                "Accept" : {
                  "parameterName" : "Accept",
                  "options" : [ "*/*" ]
                },
                "Content-Type" : {
                  "parameterName" : "Content-Type",
                  "options" : [ "application/xml", "application/json" ]
                }
              },
              "pathParams" : {
                "tInstanceId" : {
                  "parameterName" : "tInstanceId",
                  "typeRef" : "number"
                }
              },
              "queryParams" : {
                "page" : {
                  "parameterName" : "page",
                  "typeRef" : "number"
                },
                "pageSize" : {
                  "parameterName" : "pageSize",
                  "typeRef" : "number"
                }
              },
              "asynchronous" : false,
              "returnOptions" : [ {
                "httpStatus" : 200,
                "returnTypes" : [ {
                  "type" : {
                    "typeRef" : "java.lang.Object"
                  }
                } ]
              } ]
            }
          }
        }
      }
    }
  },
  "types" : {
    "string" : {
      "typeRef" : "string"
    },
    "java.lang.Object" : {
      "typeRef" : "java.lang.Object"
    },
    "number" : {
      "typeRef" : "number"
    },
    "boolean" : {
      "typeRef" : "boolean"
    }
  }
};