// source: ChatAck.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var ChatClient_pb = require('./ChatClient_pb.js');
goog.object.extend(proto, ChatClient_pb);
goog.exportSymbol('proto.ChatAck', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChatAck = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ChatAck, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChatAck.displayName = 'proto.ChatAck';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChatAck.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatAck.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatAck} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatAck.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversation: jspb.Message.getFieldWithDefault(msg, 1, ""),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 3, 0),
    client: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChatAck}
 */
proto.ChatAck.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatAck;
  return proto.ChatAck.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatAck} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatAck}
 */
proto.ChatAck.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversation(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSeq(value);
      break;
    case 4:
      var value = /** @type {!proto.ChatClient} */ (reader.readEnum());
      msg.setClient(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChatAck.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatAck.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatAck} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatAck.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversation();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getClient();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string conversation = 1;
 * @return {string}
 */
proto.ChatAck.prototype.getConversation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatAck} returns this
 */
proto.ChatAck.prototype.setConversation = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.ChatAck.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatAck} returns this
 */
proto.ChatAck.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 seq = 3;
 * @return {number}
 */
proto.ChatAck.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ChatAck} returns this
 */
proto.ChatAck.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional ChatClient client = 4;
 * @return {!proto.ChatClient}
 */
proto.ChatAck.prototype.getClient = function() {
  return /** @type {!proto.ChatClient} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.ChatClient} value
 * @return {!proto.ChatAck} returns this
 */
proto.ChatAck.prototype.setClient = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


goog.object.extend(exports, proto);
