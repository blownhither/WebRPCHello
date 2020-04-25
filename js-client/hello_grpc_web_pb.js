/**
 * @fileoverview gRPC-Web generated client stub for webhello
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.webhello = require('./hello_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.webhello.WebHelloClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.webhello.WebHelloPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.webhello.HelloMessage,
 *   !proto.webhello.HelloMessage>}
 */
const methodDescriptor_WebHello_SayHello = new grpc.web.MethodDescriptor(
  '/webhello.WebHello/SayHello',
  grpc.web.MethodType.UNARY,
  proto.webhello.HelloMessage,
  proto.webhello.HelloMessage,
  /**
   * @param {!proto.webhello.HelloMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.webhello.HelloMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.webhello.HelloMessage,
 *   !proto.webhello.HelloMessage>}
 */
const methodInfo_WebHello_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.webhello.HelloMessage,
  /**
   * @param {!proto.webhello.HelloMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.webhello.HelloMessage.deserializeBinary
);


/**
 * @param {!proto.webhello.HelloMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.webhello.HelloMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.webhello.HelloMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.webhello.WebHelloClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/webhello.WebHello/SayHello',
      request,
      metadata || {},
      methodDescriptor_WebHello_SayHello,
      callback);
};


/**
 * @param {!proto.webhello.HelloMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.webhello.HelloMessage>}
 *     A native promise that resolves to the response
 */
proto.webhello.WebHelloPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/webhello.WebHello/SayHello',
      request,
      metadata || {},
      methodDescriptor_WebHello_SayHello);
};


module.exports = proto.webhello;

