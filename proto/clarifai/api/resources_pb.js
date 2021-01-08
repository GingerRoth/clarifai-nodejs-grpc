// source: proto/clarifai/api/resources.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_clarifai_api_status_status_pb = require('../../../proto/clarifai/api/status/status_pb.js');
goog.object.extend(proto, proto_clarifai_api_status_status_pb);
var proto_clarifai_api_utils_extensions_pb = require('../../../proto/clarifai/api/utils/extensions_pb.js');
goog.object.extend(proto, proto_clarifai_api_utils_extensions_pb);
var proto_clarifai_auth_util_extension_pb = require('../../../proto/clarifai/auth/util/extension_pb.js');
goog.object.extend(proto, proto_clarifai_auth_util_extension_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.clarifai.api.APIEventType', null, global);
goog.exportSymbol('proto.clarifai.api.APIPostModelOutputsCollectorSource', null, global);
goog.exportSymbol('proto.clarifai.api.AiAssistParameters', null, global);
goog.exportSymbol('proto.clarifai.api.And', null, global);
goog.exportSymbol('proto.clarifai.api.Annotation', null, global);
goog.exportSymbol('proto.clarifai.api.AnnotationSearchMetrics', null, global);
goog.exportSymbol('proto.clarifai.api.App', null, global);
goog.exportSymbol('proto.clarifai.api.AppDuplication', null, global);
goog.exportSymbol('proto.clarifai.api.AppDuplicationFilters', null, global);
goog.exportSymbol('proto.clarifai.api.AppQuery', null, global);
goog.exportSymbol('proto.clarifai.api.Audio', null, global);
goog.exportSymbol('proto.clarifai.api.BinaryMetrics', null, global);
goog.exportSymbol('proto.clarifai.api.BoundingBox', null, global);
goog.exportSymbol('proto.clarifai.api.Cluster', null, global);
goog.exportSymbol('proto.clarifai.api.Collaboration', null, global);
goog.exportSymbol('proto.clarifai.api.Collaborator', null, global);
goog.exportSymbol('proto.clarifai.api.Collector', null, global);
goog.exportSymbol('proto.clarifai.api.CollectorSource', null, global);
goog.exportSymbol('proto.clarifai.api.Color', null, global);
goog.exportSymbol('proto.clarifai.api.Concept', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptCount', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptLanguage', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptMappingJob', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptQuery', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptRelation', null, global);
goog.exportSymbol('proto.clarifai.api.ConceptTypeCount', null, global);
goog.exportSymbol('proto.clarifai.api.ConfusionMatrix', null, global);
goog.exportSymbol('proto.clarifai.api.ConfusionMatrixEntry', null, global);
goog.exportSymbol('proto.clarifai.api.CooccurrenceMatrix', null, global);
goog.exportSymbol('proto.clarifai.api.CooccurrenceMatrixEntry', null, global);
goog.exportSymbol('proto.clarifai.api.Data', null, global);
goog.exportSymbol('proto.clarifai.api.DetailConceptCount', null, global);
goog.exportSymbol('proto.clarifai.api.EmailAddress', null, global);
goog.exportSymbol('proto.clarifai.api.Embedding', null, global);
goog.exportSymbol('proto.clarifai.api.EndpointDeps', null, global);
goog.exportSymbol('proto.clarifai.api.EvalMetrics', null, global);
goog.exportSymbol('proto.clarifai.api.EvalTestSetEntry', null, global);
goog.exportSymbol('proto.clarifai.api.EvaluationType', null, global);
goog.exportSymbol('proto.clarifai.api.ExpirationAction', null, global);
goog.exportSymbol('proto.clarifai.api.FieldsValue', null, global);
goog.exportSymbol('proto.clarifai.api.Filter', null, global);
goog.exportSymbol('proto.clarifai.api.Frame', null, global);
goog.exportSymbol('proto.clarifai.api.FrameInfo', null, global);
goog.exportSymbol('proto.clarifai.api.Geo', null, global);
goog.exportSymbol('proto.clarifai.api.GeoBoxedPoint', null, global);
goog.exportSymbol('proto.clarifai.api.GeoLimit', null, global);
goog.exportSymbol('proto.clarifai.api.GeoPoint', null, global);
goog.exportSymbol('proto.clarifai.api.Hit', null, global);
goog.exportSymbol('proto.clarifai.api.HostedURL', null, global);
goog.exportSymbol('proto.clarifai.api.Image', null, global);
goog.exportSymbol('proto.clarifai.api.Input', null, global);
goog.exportSymbol('proto.clarifai.api.InputCount', null, global);
goog.exportSymbol('proto.clarifai.api.InputInfo', null, global);
goog.exportSymbol('proto.clarifai.api.Key', null, global);
goog.exportSymbol('proto.clarifai.api.KnowledgeGraph', null, global);
goog.exportSymbol('proto.clarifai.api.LOPQEvalResult', null, global);
goog.exportSymbol('proto.clarifai.api.LabelCount', null, global);
goog.exportSymbol('proto.clarifai.api.LabelDistribution', null, global);
goog.exportSymbol('proto.clarifai.api.LicenseScope', null, global);
goog.exportSymbol('proto.clarifai.api.LossCurveEntry', null, global);
goog.exportSymbol('proto.clarifai.api.Mask', null, global);
goog.exportSymbol('proto.clarifai.api.MetricsSummary', null, global);
goog.exportSymbol('proto.clarifai.api.Model', null, global);
goog.exportSymbol('proto.clarifai.api.ModelQuery', null, global);
goog.exportSymbol('proto.clarifai.api.ModelType', null, global);
goog.exportSymbol('proto.clarifai.api.ModelTypeEnumOption', null, global);
goog.exportSymbol('proto.clarifai.api.ModelTypeField', null, global);
goog.exportSymbol('proto.clarifai.api.ModelTypeField.ModelTypeFieldType', null, global);
goog.exportSymbol('proto.clarifai.api.ModelTypeRangeInfo', null, global);
goog.exportSymbol('proto.clarifai.api.ModelVersion', null, global);
goog.exportSymbol('proto.clarifai.api.NodeInput', null, global);
goog.exportSymbol('proto.clarifai.api.Output', null, global);
goog.exportSymbol('proto.clarifai.api.OutputConfig', null, global);
goog.exportSymbol('proto.clarifai.api.OutputInfo', null, global);
goog.exportSymbol('proto.clarifai.api.Password', null, global);
goog.exportSymbol('proto.clarifai.api.PasswordViolations', null, global);
goog.exportSymbol('proto.clarifai.api.PatchAction', null, global);
goog.exportSymbol('proto.clarifai.api.Point', null, global);
goog.exportSymbol('proto.clarifai.api.Polygon', null, global);
goog.exportSymbol('proto.clarifai.api.PrecisionRecallCurve', null, global);
goog.exportSymbol('proto.clarifai.api.PretrainedModelConfig', null, global);
goog.exportSymbol('proto.clarifai.api.Query', null, global);
goog.exportSymbol('proto.clarifai.api.ROC', null, global);
goog.exportSymbol('proto.clarifai.api.Rank', null, global);
goog.exportSymbol('proto.clarifai.api.Region', null, global);
goog.exportSymbol('proto.clarifai.api.RegionInfo', null, global);
goog.exportSymbol('proto.clarifai.api.ScopeDeps', null, global);
goog.exportSymbol('proto.clarifai.api.Search', null, global);
goog.exportSymbol('proto.clarifai.api.StatTimeAggType', null, global);
goog.exportSymbol('proto.clarifai.api.StatValue', null, global);
goog.exportSymbol('proto.clarifai.api.StatValueAggType', null, global);
goog.exportSymbol('proto.clarifai.api.StatValueAggregate', null, global);
goog.exportSymbol('proto.clarifai.api.StatValueAggregateQuery', null, global);
goog.exportSymbol('proto.clarifai.api.StatValueAggregateResult', null, global);
goog.exportSymbol('proto.clarifai.api.Task', null, global);
goog.exportSymbol('proto.clarifai.api.Task.TaskType', null, global);
goog.exportSymbol('proto.clarifai.api.TaskAIAssistant', null, global);
goog.exportSymbol('proto.clarifai.api.TaskInputSource', null, global);
goog.exportSymbol('proto.clarifai.api.TaskInputSource.TaskInputSourceType', null, global);
goog.exportSymbol('proto.clarifai.api.TaskReview', null, global);
goog.exportSymbol('proto.clarifai.api.TaskReview.StrategyInfoCase', null, global);
goog.exportSymbol('proto.clarifai.api.TaskReview.TaskReviewStrategy', null, global);
goog.exportSymbol('proto.clarifai.api.TaskReviewConsensusStrategyInfo', null, global);
goog.exportSymbol('proto.clarifai.api.TaskReviewManualStrategyInfo', null, global);
goog.exportSymbol('proto.clarifai.api.TaskStatusCountPerUser', null, global);
goog.exportSymbol('proto.clarifai.api.TaskWorker', null, global);
goog.exportSymbol('proto.clarifai.api.TaskWorker.StrategyInfoCase', null, global);
goog.exportSymbol('proto.clarifai.api.TaskWorker.TaskWorkerStrategy', null, global);
goog.exportSymbol('proto.clarifai.api.TaskWorkerPartitionedStrategyInfo', null, global);
goog.exportSymbol('proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy', null, global);
goog.exportSymbol('proto.clarifai.api.Text', null, global);
goog.exportSymbol('proto.clarifai.api.Track', null, global);
goog.exportSymbol('proto.clarifai.api.Track.TrackInfo', null, global);
goog.exportSymbol('proto.clarifai.api.TrainInfo', null, global);
goog.exportSymbol('proto.clarifai.api.TrainStats', null, global);
goog.exportSymbol('proto.clarifai.api.UsageIntervalType', null, global);
goog.exportSymbol('proto.clarifai.api.User', null, global);
goog.exportSymbol('proto.clarifai.api.UserAppIDSet', null, global);
goog.exportSymbol('proto.clarifai.api.ValueComparator', null, global);
goog.exportSymbol('proto.clarifai.api.Video', null, global);
goog.exportSymbol('proto.clarifai.api.W3C', null, global);
goog.exportSymbol('proto.clarifai.api.Workflow', null, global);
goog.exportSymbol('proto.clarifai.api.WorkflowNode', null, global);
goog.exportSymbol('proto.clarifai.api.WorkflowResult', null, global);
goog.exportSymbol('proto.clarifai.api.WorkflowResultsSimilarity', null, global);
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
proto.clarifai.api.Annotation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Annotation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Annotation.displayName = 'proto.clarifai.api.Annotation';
}
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
proto.clarifai.api.App = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.App, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.App.displayName = 'proto.clarifai.api.App';
}
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
proto.clarifai.api.AppQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.AppQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.AppQuery.displayName = 'proto.clarifai.api.AppQuery';
}
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
proto.clarifai.api.Collaborator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Collaborator.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Collaborator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Collaborator.displayName = 'proto.clarifai.api.Collaborator';
}
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
proto.clarifai.api.Collaboration = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Collaboration.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Collaboration, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Collaboration.displayName = 'proto.clarifai.api.Collaboration';
}
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
proto.clarifai.api.Audio = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Audio, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Audio.displayName = 'proto.clarifai.api.Audio';
}
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
proto.clarifai.api.Track = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Track, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Track.displayName = 'proto.clarifai.api.Track';
}
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
proto.clarifai.api.Track.TrackInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Track.TrackInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Track.TrackInfo.displayName = 'proto.clarifai.api.Track.TrackInfo';
}
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
proto.clarifai.api.Cluster = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Cluster.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Cluster, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Cluster.displayName = 'proto.clarifai.api.Cluster';
}
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
proto.clarifai.api.Color = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Color, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Color.displayName = 'proto.clarifai.api.Color';
}
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
proto.clarifai.api.W3C = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.W3C, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.W3C.displayName = 'proto.clarifai.api.W3C';
}
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
proto.clarifai.api.UserAppIDSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.UserAppIDSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.UserAppIDSet.displayName = 'proto.clarifai.api.UserAppIDSet';
}
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
proto.clarifai.api.PatchAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.PatchAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.PatchAction.displayName = 'proto.clarifai.api.PatchAction';
}
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
proto.clarifai.api.Concept = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Concept, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Concept.displayName = 'proto.clarifai.api.Concept';
}
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
proto.clarifai.api.ConceptCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConceptCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptCount.displayName = 'proto.clarifai.api.ConceptCount';
}
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
proto.clarifai.api.ConceptTypeCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConceptTypeCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptTypeCount.displayName = 'proto.clarifai.api.ConceptTypeCount';
}
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
proto.clarifai.api.DetailConceptCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.DetailConceptCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.DetailConceptCount.displayName = 'proto.clarifai.api.DetailConceptCount';
}
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
proto.clarifai.api.ConceptQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConceptQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptQuery.displayName = 'proto.clarifai.api.ConceptQuery';
}
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
proto.clarifai.api.ConceptRelation = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConceptRelation, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptRelation.displayName = 'proto.clarifai.api.ConceptRelation';
}
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
proto.clarifai.api.KnowledgeGraph = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.KnowledgeGraph, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.KnowledgeGraph.displayName = 'proto.clarifai.api.KnowledgeGraph';
}
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
proto.clarifai.api.ConceptMappingJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ConceptMappingJob.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ConceptMappingJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptMappingJob.displayName = 'proto.clarifai.api.ConceptMappingJob';
}
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
proto.clarifai.api.ConceptLanguage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConceptLanguage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConceptLanguage.displayName = 'proto.clarifai.api.ConceptLanguage';
}
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
proto.clarifai.api.Data = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Data.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Data, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Data.displayName = 'proto.clarifai.api.Data';
}
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
proto.clarifai.api.Region = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Region, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Region.displayName = 'proto.clarifai.api.Region';
}
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
proto.clarifai.api.RegionInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.RegionInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.RegionInfo.displayName = 'proto.clarifai.api.RegionInfo';
}
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
proto.clarifai.api.BoundingBox = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.BoundingBox, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.BoundingBox.displayName = 'proto.clarifai.api.BoundingBox';
}
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
proto.clarifai.api.FrameInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.FrameInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.FrameInfo.displayName = 'proto.clarifai.api.FrameInfo';
}
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
proto.clarifai.api.Frame = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Frame, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Frame.displayName = 'proto.clarifai.api.Frame';
}
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
proto.clarifai.api.Mask = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Mask, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Mask.displayName = 'proto.clarifai.api.Mask';
}
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
proto.clarifai.api.Polygon = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Polygon.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Polygon, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Polygon.displayName = 'proto.clarifai.api.Polygon';
}
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
proto.clarifai.api.Point = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Point, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Point.displayName = 'proto.clarifai.api.Point';
}
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
proto.clarifai.api.Embedding = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Embedding.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Embedding, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Embedding.displayName = 'proto.clarifai.api.Embedding';
}
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
proto.clarifai.api.GeoPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.GeoPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.GeoPoint.displayName = 'proto.clarifai.api.GeoPoint';
}
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
proto.clarifai.api.GeoLimit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.GeoLimit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.GeoLimit.displayName = 'proto.clarifai.api.GeoLimit';
}
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
proto.clarifai.api.GeoBoxedPoint = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.GeoBoxedPoint, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.GeoBoxedPoint.displayName = 'proto.clarifai.api.GeoBoxedPoint';
}
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
proto.clarifai.api.Geo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Geo.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Geo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Geo.displayName = 'proto.clarifai.api.Geo';
}
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
proto.clarifai.api.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Image.displayName = 'proto.clarifai.api.Image';
}
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
proto.clarifai.api.HostedURL = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.HostedURL.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.HostedURL, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.HostedURL.displayName = 'proto.clarifai.api.HostedURL';
}
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
proto.clarifai.api.Input = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Input, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Input.displayName = 'proto.clarifai.api.Input';
}
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
proto.clarifai.api.InputCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.InputCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.InputCount.displayName = 'proto.clarifai.api.InputCount';
}
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
proto.clarifai.api.WorkflowResultsSimilarity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.WorkflowResultsSimilarity.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.WorkflowResultsSimilarity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.WorkflowResultsSimilarity.displayName = 'proto.clarifai.api.WorkflowResultsSimilarity';
}
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
proto.clarifai.api.Key = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Key.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Key, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Key.displayName = 'proto.clarifai.api.Key';
}
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
proto.clarifai.api.Model = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Model, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Model.displayName = 'proto.clarifai.api.Model';
}
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
proto.clarifai.api.OutputInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.OutputInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.OutputInfo.displayName = 'proto.clarifai.api.OutputInfo';
}
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
proto.clarifai.api.InputInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.InputInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.InputInfo.displayName = 'proto.clarifai.api.InputInfo';
}
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
proto.clarifai.api.TrainInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TrainInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TrainInfo.displayName = 'proto.clarifai.api.TrainInfo';
}
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
proto.clarifai.api.OutputConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.OutputConfig.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.OutputConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.OutputConfig.displayName = 'proto.clarifai.api.OutputConfig';
}
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
proto.clarifai.api.ModelType = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ModelType.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ModelType, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelType.displayName = 'proto.clarifai.api.ModelType';
}
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
proto.clarifai.api.ModelTypeField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ModelTypeField.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ModelTypeField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelTypeField.displayName = 'proto.clarifai.api.ModelTypeField';
}
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
proto.clarifai.api.ModelTypeRangeInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ModelTypeRangeInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelTypeRangeInfo.displayName = 'proto.clarifai.api.ModelTypeRangeInfo';
}
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
proto.clarifai.api.ModelTypeEnumOption = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ModelTypeEnumOption.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ModelTypeEnumOption, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelTypeEnumOption.displayName = 'proto.clarifai.api.ModelTypeEnumOption';
}
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
proto.clarifai.api.ModelQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ModelQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelQuery.displayName = 'proto.clarifai.api.ModelQuery';
}
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
proto.clarifai.api.ModelVersion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ModelVersion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ModelVersion.displayName = 'proto.clarifai.api.ModelVersion';
}
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
proto.clarifai.api.PretrainedModelConfig = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.PretrainedModelConfig, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.PretrainedModelConfig.displayName = 'proto.clarifai.api.PretrainedModelConfig';
}
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
proto.clarifai.api.TrainStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.TrainStats.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.TrainStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TrainStats.displayName = 'proto.clarifai.api.TrainStats';
}
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
proto.clarifai.api.LossCurveEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.LossCurveEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.LossCurveEntry.displayName = 'proto.clarifai.api.LossCurveEntry';
}
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
proto.clarifai.api.LabelCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.LabelCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.LabelCount.displayName = 'proto.clarifai.api.LabelCount';
}
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
proto.clarifai.api.LabelDistribution = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.LabelDistribution.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.LabelDistribution, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.LabelDistribution.displayName = 'proto.clarifai.api.LabelDistribution';
}
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
proto.clarifai.api.CooccurrenceMatrixEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.CooccurrenceMatrixEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.CooccurrenceMatrixEntry.displayName = 'proto.clarifai.api.CooccurrenceMatrixEntry';
}
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
proto.clarifai.api.CooccurrenceMatrix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.CooccurrenceMatrix.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.CooccurrenceMatrix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.CooccurrenceMatrix.displayName = 'proto.clarifai.api.CooccurrenceMatrix';
}
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
proto.clarifai.api.ConfusionMatrixEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.ConfusionMatrixEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConfusionMatrixEntry.displayName = 'proto.clarifai.api.ConfusionMatrixEntry';
}
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
proto.clarifai.api.ConfusionMatrix = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ConfusionMatrix.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ConfusionMatrix, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ConfusionMatrix.displayName = 'proto.clarifai.api.ConfusionMatrix';
}
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
proto.clarifai.api.ROC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ROC.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ROC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ROC.displayName = 'proto.clarifai.api.ROC';
}
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
proto.clarifai.api.PrecisionRecallCurve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.PrecisionRecallCurve.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.PrecisionRecallCurve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.PrecisionRecallCurve.displayName = 'proto.clarifai.api.PrecisionRecallCurve';
}
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
proto.clarifai.api.BinaryMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.BinaryMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.BinaryMetrics.displayName = 'proto.clarifai.api.BinaryMetrics';
}
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
proto.clarifai.api.EvalTestSetEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.EvalTestSetEntry.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.EvalTestSetEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.EvalTestSetEntry.displayName = 'proto.clarifai.api.EvalTestSetEntry';
}
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
proto.clarifai.api.LOPQEvalResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.LOPQEvalResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.LOPQEvalResult.displayName = 'proto.clarifai.api.LOPQEvalResult';
}
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
proto.clarifai.api.MetricsSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.MetricsSummary.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.MetricsSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.MetricsSummary.displayName = 'proto.clarifai.api.MetricsSummary';
}
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
proto.clarifai.api.EvalMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.EvalMetrics.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.EvalMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.EvalMetrics.displayName = 'proto.clarifai.api.EvalMetrics';
}
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
proto.clarifai.api.FieldsValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.FieldsValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.FieldsValue.displayName = 'proto.clarifai.api.FieldsValue';
}
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
proto.clarifai.api.Output = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Output, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Output.displayName = 'proto.clarifai.api.Output';
}
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
proto.clarifai.api.ScopeDeps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.ScopeDeps.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.ScopeDeps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.ScopeDeps.displayName = 'proto.clarifai.api.ScopeDeps';
}
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
proto.clarifai.api.EndpointDeps = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.EndpointDeps.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.EndpointDeps, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.EndpointDeps.displayName = 'proto.clarifai.api.EndpointDeps';
}
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
proto.clarifai.api.Hit = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Hit, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Hit.displayName = 'proto.clarifai.api.Hit';
}
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
proto.clarifai.api.And = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.And, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.And.displayName = 'proto.clarifai.api.And';
}
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
proto.clarifai.api.Query = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Query.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Query, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Query.displayName = 'proto.clarifai.api.Query';
}
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
proto.clarifai.api.Search = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Search, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Search.displayName = 'proto.clarifai.api.Search';
}
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
proto.clarifai.api.Filter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Filter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Filter.displayName = 'proto.clarifai.api.Filter';
}
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
proto.clarifai.api.Rank = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Rank, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Rank.displayName = 'proto.clarifai.api.Rank';
}
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
proto.clarifai.api.AnnotationSearchMetrics = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.AnnotationSearchMetrics, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.AnnotationSearchMetrics.displayName = 'proto.clarifai.api.AnnotationSearchMetrics';
}
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
proto.clarifai.api.Text = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Text, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Text.displayName = 'proto.clarifai.api.Text';
}
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
proto.clarifai.api.User = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.User.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.User, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.User.displayName = 'proto.clarifai.api.User';
}
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
proto.clarifai.api.EmailAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.EmailAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.EmailAddress.displayName = 'proto.clarifai.api.EmailAddress';
}
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
proto.clarifai.api.Password = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Password, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Password.displayName = 'proto.clarifai.api.Password';
}
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
proto.clarifai.api.PasswordViolations = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.PasswordViolations, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.PasswordViolations.displayName = 'proto.clarifai.api.PasswordViolations';
}
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
proto.clarifai.api.Video = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Video, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Video.displayName = 'proto.clarifai.api.Video';
}
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
proto.clarifai.api.Workflow = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Workflow.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Workflow, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Workflow.displayName = 'proto.clarifai.api.Workflow';
}
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
proto.clarifai.api.WorkflowNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.WorkflowNode.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.WorkflowNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.WorkflowNode.displayName = 'proto.clarifai.api.WorkflowNode';
}
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
proto.clarifai.api.NodeInput = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.NodeInput, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.NodeInput.displayName = 'proto.clarifai.api.NodeInput';
}
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
proto.clarifai.api.WorkflowResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.WorkflowResult.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.WorkflowResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.WorkflowResult.displayName = 'proto.clarifai.api.WorkflowResult';
}
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
proto.clarifai.api.AppDuplication = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.AppDuplication, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.AppDuplication.displayName = 'proto.clarifai.api.AppDuplication';
}
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
proto.clarifai.api.AppDuplicationFilters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.AppDuplicationFilters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.AppDuplicationFilters.displayName = 'proto.clarifai.api.AppDuplicationFilters';
}
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
proto.clarifai.api.Task = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.Task.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.Task, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Task.displayName = 'proto.clarifai.api.Task';
}
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
proto.clarifai.api.AiAssistParameters = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.AiAssistParameters.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.AiAssistParameters, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.AiAssistParameters.displayName = 'proto.clarifai.api.AiAssistParameters';
}
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
proto.clarifai.api.TaskWorker = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.TaskWorker.repeatedFields_, proto.clarifai.api.TaskWorker.oneofGroups_);
};
goog.inherits(proto.clarifai.api.TaskWorker, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskWorker.displayName = 'proto.clarifai.api.TaskWorker';
}
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
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskWorkerPartitionedStrategyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.displayName = 'proto.clarifai.api.TaskWorkerPartitionedStrategyInfo';
}
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
proto.clarifai.api.TaskInputSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskInputSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskInputSource.displayName = 'proto.clarifai.api.TaskInputSource';
}
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
proto.clarifai.api.TaskReview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.TaskReview.repeatedFields_, proto.clarifai.api.TaskReview.oneofGroups_);
};
goog.inherits(proto.clarifai.api.TaskReview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskReview.displayName = 'proto.clarifai.api.TaskReview';
}
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
proto.clarifai.api.TaskReviewManualStrategyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskReviewManualStrategyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskReviewManualStrategyInfo.displayName = 'proto.clarifai.api.TaskReviewManualStrategyInfo';
}
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
proto.clarifai.api.TaskReviewConsensusStrategyInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskReviewConsensusStrategyInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskReviewConsensusStrategyInfo.displayName = 'proto.clarifai.api.TaskReviewConsensusStrategyInfo';
}
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
proto.clarifai.api.TaskAIAssistant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskAIAssistant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskAIAssistant.displayName = 'proto.clarifai.api.TaskAIAssistant';
}
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
proto.clarifai.api.TaskStatusCountPerUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.TaskStatusCountPerUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.TaskStatusCountPerUser.displayName = 'proto.clarifai.api.TaskStatusCountPerUser';
}
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
proto.clarifai.api.Collector = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.Collector, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.Collector.displayName = 'proto.clarifai.api.Collector';
}
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
proto.clarifai.api.CollectorSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.CollectorSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.CollectorSource.displayName = 'proto.clarifai.api.CollectorSource';
}
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
proto.clarifai.api.APIPostModelOutputsCollectorSource = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.clarifai.api.APIPostModelOutputsCollectorSource, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.APIPostModelOutputsCollectorSource.displayName = 'proto.clarifai.api.APIPostModelOutputsCollectorSource';
}
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
proto.clarifai.api.StatValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.StatValue.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.StatValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.StatValue.displayName = 'proto.clarifai.api.StatValue';
}
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
proto.clarifai.api.StatValueAggregateResult = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.StatValueAggregateResult.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.StatValueAggregateResult, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.StatValueAggregateResult.displayName = 'proto.clarifai.api.StatValueAggregateResult';
}
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
proto.clarifai.api.StatValueAggregate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.StatValueAggregate.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.StatValueAggregate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.StatValueAggregate.displayName = 'proto.clarifai.api.StatValueAggregate';
}
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
proto.clarifai.api.StatValueAggregateQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.clarifai.api.StatValueAggregateQuery.repeatedFields_, null);
};
goog.inherits(proto.clarifai.api.StatValueAggregateQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.clarifai.api.StatValueAggregateQuery.displayName = 'proto.clarifai.api.StatValueAggregateQuery';
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
proto.clarifai.api.Annotation.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Annotation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Annotation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Annotation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    inputId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    annotationInfo: (f = msg.getAnnotationInfo()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    userId: jspb.Message.getFieldWithDefault(msg, 15, ""),
    modelVersionId: jspb.Message.getFieldWithDefault(msg, 16, ""),
    embedModelVersionId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    trusted: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    inputLevel: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    consensusInfo: (f = msg.getConsensusInfo()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Annotation}
 */
proto.clarifai.api.Annotation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Annotation;
  return proto.clarifai.api.Annotation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Annotation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Annotation}
 */
proto.clarifai.api.Annotation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInputId(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 13:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setAnnotationInfo(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersionId(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbedModelVersionId(value);
      break;
    case 7:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrusted(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInputLevel(value);
      break;
    case 18:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setConsensusInfo(value);
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
proto.clarifai.api.Annotation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Annotation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Annotation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Annotation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInputId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getAnnotationInfo();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getModelVersionId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getEmbedModelVersionId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTrusted();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getInputLevel();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getConsensusInfo();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Annotation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string input_id = 2;
 * @return {string}
 */
proto.clarifai.api.Annotation.prototype.getInputId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setInputId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Data data = 3;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Annotation.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 3));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct annotation_info = 13;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.Annotation.prototype.getAnnotationInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 13));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setAnnotationInfo = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearAnnotationInfo = function() {
  return this.setAnnotationInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasAnnotationInfo = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string user_id = 15;
 * @return {string}
 */
proto.clarifai.api.Annotation.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string model_version_id = 16;
 * @return {string}
 */
proto.clarifai.api.Annotation.prototype.getModelVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setModelVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string embed_model_version_id = 14;
 * @return {string}
 */
proto.clarifai.api.Annotation.prototype.getEmbedModelVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setEmbedModelVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional status.Status status = 7;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.Annotation.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 7));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Annotation.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Annotation.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool trusted = 10;
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.getTrusted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setTrusted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool input_level = 17;
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.getInputLevel = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.setInputLevel = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional google.protobuf.Struct consensus_info = 18;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.Annotation.prototype.getConsensusInfo = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 18));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.Annotation} returns this
*/
proto.clarifai.api.Annotation.prototype.setConsensusInfo = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Annotation} returns this
 */
proto.clarifai.api.Annotation.prototype.clearConsensusInfo = function() {
  return this.setConsensusInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Annotation.prototype.hasConsensusInfo = function() {
  return jspb.Message.getField(this, 18) != null;
};





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
proto.clarifai.api.App.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.App.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.App} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.App.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    defaultLanguage: jspb.Message.getFieldWithDefault(msg, 3, ""),
    defaultWorkflowId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    legalConsentStatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 14, ""),
    sampleMs: jspb.Message.getFieldWithDefault(msg, 15, 0)
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
 * @return {!proto.clarifai.api.App}
 */
proto.clarifai.api.App.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.App;
  return proto.clarifai.api.App.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.App} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.App}
 */
proto.clarifai.api.App.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultLanguage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultWorkflowId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setLegalConsentStatus(value);
      break;
    case 13:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSampleMs(value);
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
proto.clarifai.api.App.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.App.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.App} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.App.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefaultLanguage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDefaultWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLegalConsentStatus();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getSampleMs();
  if (f !== 0) {
    writer.writeUint32(
      15,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string default_language = 3;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getDefaultLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setDefaultLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string default_workflow_id = 4;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getDefaultWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setDefaultWorkflowId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_id = 5;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.App.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.App} returns this
*/
proto.clarifai.api.App.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.App.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional uint32 legal_consent_status = 7;
 * @return {number}
 */
proto.clarifai.api.App.prototype.getLegalConsentStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setLegalConsentStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional google.protobuf.Struct metadata = 13;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.App.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 13));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.App} returns this
*/
proto.clarifai.api.App.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.App.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string description = 14;
 * @return {string}
 */
proto.clarifai.api.App.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional uint32 sample_ms = 15;
 * @return {number}
 */
proto.clarifai.api.App.prototype.getSampleMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.App} returns this
 */
proto.clarifai.api.App.prototype.setSampleMs = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};





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
proto.clarifai.api.AppQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.AppQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.AppQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clarifai.api.AppQuery}
 */
proto.clarifai.api.AppQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.AppQuery;
  return proto.clarifai.api.AppQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.AppQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.AppQuery}
 */
proto.clarifai.api.AppQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.clarifai.api.AppQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.AppQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.AppQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.clarifai.api.AppQuery.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.AppQuery} returns this
 */
proto.clarifai.api.AppQuery.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Collaborator.repeatedFields_ = [4,5];



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
proto.clarifai.api.Collaborator.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Collaborator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Collaborator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collaborator.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    app: (f = msg.getApp()) && proto.clarifai.api.App.toObject(includeInstance, f),
    user: (f = msg.getUser()) && proto.clarifai.api.User.toObject(includeInstance, f),
    scopesList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    endpointsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    deletedAt: (f = msg.getDeletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Collaborator}
 */
proto.clarifai.api.Collaborator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Collaborator;
  return proto.clarifai.api.Collaborator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Collaborator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Collaborator}
 */
proto.clarifai.api.Collaborator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.App;
      reader.readMessage(value,proto.clarifai.api.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 3:
      var value = new proto.clarifai.api.User;
      reader.readMessage(value,proto.clarifai.api.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndpoints(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDeletedAt(value);
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
proto.clarifai.api.Collaborator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Collaborator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Collaborator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collaborator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.App.serializeBinaryToWriter
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.User.serializeBinaryToWriter
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDeletedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Collaborator.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional App app = 2;
 * @return {?proto.clarifai.api.App}
 */
proto.clarifai.api.Collaborator.prototype.getApp = function() {
  return /** @type{?proto.clarifai.api.App} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.App, 2));
};


/**
 * @param {?proto.clarifai.api.App|undefined} value
 * @return {!proto.clarifai.api.Collaborator} returns this
*/
proto.clarifai.api.Collaborator.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaborator.prototype.hasApp = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional User user = 3;
 * @return {?proto.clarifai.api.User}
 */
proto.clarifai.api.Collaborator.prototype.getUser = function() {
  return /** @type{?proto.clarifai.api.User} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.User, 3));
};


/**
 * @param {?proto.clarifai.api.User|undefined} value
 * @return {!proto.clarifai.api.Collaborator} returns this
*/
proto.clarifai.api.Collaborator.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaborator.prototype.hasUser = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated string scopes = 4;
 * @return {!Array<string>}
 */
proto.clarifai.api.Collaborator.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated string endpoints = 5;
 * @return {!Array<string>}
 */
proto.clarifai.api.Collaborator.prototype.getEndpointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.setEndpointsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.addEndpoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Collaborator.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Collaborator} returns this
*/
proto.clarifai.api.Collaborator.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaborator.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Collaborator.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Collaborator} returns this
*/
proto.clarifai.api.Collaborator.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaborator.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp deleted_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Collaborator.prototype.getDeletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Collaborator} returns this
*/
proto.clarifai.api.Collaborator.prototype.setDeletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaborator} returns this
 */
proto.clarifai.api.Collaborator.prototype.clearDeletedAt = function() {
  return this.setDeletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaborator.prototype.hasDeletedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Collaboration.repeatedFields_ = [3,4];



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
proto.clarifai.api.Collaboration.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Collaboration.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Collaboration} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collaboration.toObject = function(includeInstance, msg) {
  var f, obj = {
    app: (f = msg.getApp()) && proto.clarifai.api.App.toObject(includeInstance, f),
    appOwner: (f = msg.getAppOwner()) && proto.clarifai.api.User.toObject(includeInstance, f),
    scopesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    endpointsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Collaboration}
 */
proto.clarifai.api.Collaboration.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Collaboration;
  return proto.clarifai.api.Collaboration.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Collaboration} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Collaboration}
 */
proto.clarifai.api.Collaboration.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.App;
      reader.readMessage(value,proto.clarifai.api.App.deserializeBinaryFromReader);
      msg.setApp(value);
      break;
    case 2:
      var value = new proto.clarifai.api.User;
      reader.readMessage(value,proto.clarifai.api.User.deserializeBinaryFromReader);
      msg.setAppOwner(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndpoints(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
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
proto.clarifai.api.Collaboration.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Collaboration.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Collaboration} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collaboration.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApp();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.App.serializeBinaryToWriter
    );
  }
  f = message.getAppOwner();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.User.serializeBinaryToWriter
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional App app = 1;
 * @return {?proto.clarifai.api.App}
 */
proto.clarifai.api.Collaboration.prototype.getApp = function() {
  return /** @type{?proto.clarifai.api.App} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.App, 1));
};


/**
 * @param {?proto.clarifai.api.App|undefined} value
 * @return {!proto.clarifai.api.Collaboration} returns this
*/
proto.clarifai.api.Collaboration.prototype.setApp = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.clearApp = function() {
  return this.setApp(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaboration.prototype.hasApp = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional User app_owner = 2;
 * @return {?proto.clarifai.api.User}
 */
proto.clarifai.api.Collaboration.prototype.getAppOwner = function() {
  return /** @type{?proto.clarifai.api.User} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.User, 2));
};


/**
 * @param {?proto.clarifai.api.User|undefined} value
 * @return {!proto.clarifai.api.Collaboration} returns this
*/
proto.clarifai.api.Collaboration.prototype.setAppOwner = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.clearAppOwner = function() {
  return this.setAppOwner(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaboration.prototype.hasAppOwner = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string scopes = 3;
 * @return {!Array<string>}
 */
proto.clarifai.api.Collaboration.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated string endpoints = 4;
 * @return {!Array<string>}
 */
proto.clarifai.api.Collaboration.prototype.getEndpointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.setEndpointsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.addEndpoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Collaboration.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Collaboration} returns this
*/
proto.clarifai.api.Collaboration.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collaboration} returns this
 */
proto.clarifai.api.Collaboration.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collaboration.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.clarifai.api.Audio.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Audio.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Audio} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Audio.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    base64: msg.getBase64_asB64(),
    allowDuplicateUrl: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    hosted: (f = msg.getHosted()) && proto.clarifai.api.HostedURL.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Audio}
 */
proto.clarifai.api.Audio.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Audio;
  return proto.clarifai.api.Audio.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Audio} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Audio}
 */
proto.clarifai.api.Audio.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBase64(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowDuplicateUrl(value);
      break;
    case 5:
      var value = new proto.clarifai.api.HostedURL;
      reader.readMessage(value,proto.clarifai.api.HostedURL.deserializeBinaryFromReader);
      msg.setHosted(value);
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
proto.clarifai.api.Audio.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Audio.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Audio} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Audio.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBase64_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAllowDuplicateUrl();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHosted();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.HostedURL.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.clarifai.api.Audio.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Audio} returns this
 */
proto.clarifai.api.Audio.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes base64 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.clarifai.api.Audio.prototype.getBase64 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes base64 = 2;
 * This is a type-conversion wrapper around `getBase64()`
 * @return {string}
 */
proto.clarifai.api.Audio.prototype.getBase64_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBase64()));
};


/**
 * optional bytes base64 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBase64()`
 * @return {!Uint8Array}
 */
proto.clarifai.api.Audio.prototype.getBase64_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBase64()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clarifai.api.Audio} returns this
 */
proto.clarifai.api.Audio.prototype.setBase64 = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool allow_duplicate_url = 4;
 * @return {boolean}
 */
proto.clarifai.api.Audio.prototype.getAllowDuplicateUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Audio} returns this
 */
proto.clarifai.api.Audio.prototype.setAllowDuplicateUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional HostedURL hosted = 5;
 * @return {?proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.Audio.prototype.getHosted = function() {
  return /** @type{?proto.clarifai.api.HostedURL} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.HostedURL, 5));
};


/**
 * @param {?proto.clarifai.api.HostedURL|undefined} value
 * @return {!proto.clarifai.api.Audio} returns this
*/
proto.clarifai.api.Audio.prototype.setHosted = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Audio} returns this
 */
proto.clarifai.api.Audio.prototype.clearHosted = function() {
  return this.setHosted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Audio.prototype.hasHosted = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.clarifai.api.Track.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Track.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Track} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Track.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    trackInfo: (f = msg.getTrackInfo()) && proto.clarifai.api.Track.TrackInfo.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Track}
 */
proto.clarifai.api.Track.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Track;
  return proto.clarifai.api.Track.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Track} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Track}
 */
proto.clarifai.api.Track.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Track.TrackInfo;
      reader.readMessage(value,proto.clarifai.api.Track.TrackInfo.deserializeBinaryFromReader);
      msg.setTrackInfo(value);
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
proto.clarifai.api.Track.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Track.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Track} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Track.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getTrackInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.Track.TrackInfo.serializeBinaryToWriter
    );
  }
};





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
proto.clarifai.api.Track.TrackInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Track.TrackInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Track.TrackInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Track.TrackInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    numFrames: jspb.Message.getFieldWithDefault(msg, 1, 0),
    beginTime: (f = msg.getBeginTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    quality: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.clarifai.api.Track.TrackInfo}
 */
proto.clarifai.api.Track.TrackInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Track.TrackInfo;
  return proto.clarifai.api.Track.TrackInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Track.TrackInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Track.TrackInfo}
 */
proto.clarifai.api.Track.TrackInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumFrames(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setBeginTime(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setQuality(value);
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
proto.clarifai.api.Track.TrackInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Track.TrackInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Track.TrackInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Track.TrackInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumFrames();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getBeginTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getQuality();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional uint32 num_frames = 1;
 * @return {number}
 */
proto.clarifai.api.Track.TrackInfo.prototype.getNumFrames = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
 */
proto.clarifai.api.Track.TrackInfo.prototype.setNumFrames = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp begin_time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Track.TrackInfo.prototype.getBeginTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
*/
proto.clarifai.api.Track.TrackInfo.prototype.setBeginTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
 */
proto.clarifai.api.Track.TrackInfo.prototype.clearBeginTime = function() {
  return this.setBeginTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Track.TrackInfo.prototype.hasBeginTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Track.TrackInfo.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
*/
proto.clarifai.api.Track.TrackInfo.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
 */
proto.clarifai.api.Track.TrackInfo.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Track.TrackInfo.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float quality = 4;
 * @return {number}
 */
proto.clarifai.api.Track.TrackInfo.prototype.getQuality = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Track.TrackInfo} returns this
 */
proto.clarifai.api.Track.TrackInfo.prototype.setQuality = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Track.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Track} returns this
 */
proto.clarifai.api.Track.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Data data = 2;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Track.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 2));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Track} returns this
*/
proto.clarifai.api.Track.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Track} returns this
 */
proto.clarifai.api.Track.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Track.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional TrackInfo track_info = 3;
 * @return {?proto.clarifai.api.Track.TrackInfo}
 */
proto.clarifai.api.Track.prototype.getTrackInfo = function() {
  return /** @type{?proto.clarifai.api.Track.TrackInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Track.TrackInfo, 3));
};


/**
 * @param {?proto.clarifai.api.Track.TrackInfo|undefined} value
 * @return {!proto.clarifai.api.Track} returns this
*/
proto.clarifai.api.Track.prototype.setTrackInfo = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Track} returns this
 */
proto.clarifai.api.Track.prototype.clearTrackInfo = function() {
  return this.setTrackInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Track.prototype.hasTrackInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Cluster.repeatedFields_ = [4];



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
proto.clarifai.api.Cluster.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Cluster.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Cluster} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Cluster.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0),
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    hitsList: jspb.Message.toObjectList(msg.getHitsList(),
    proto.clarifai.api.Hit.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.Cluster}
 */
proto.clarifai.api.Cluster.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Cluster;
  return proto.clarifai.api.Cluster.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Cluster} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Cluster}
 */
proto.clarifai.api.Cluster.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Hit;
      reader.readMessage(value,proto.clarifai.api.Hit.deserializeBinaryFromReader);
      msg.addHits(value);
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
proto.clarifai.api.Cluster.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Cluster.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Cluster} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Cluster.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getHitsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clarifai.api.Hit.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Cluster.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Cluster} returns this
 */
proto.clarifai.api.Cluster.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.clarifai.api.Cluster.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Cluster} returns this
 */
proto.clarifai.api.Cluster.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float score = 3;
 * @return {number}
 */
proto.clarifai.api.Cluster.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Cluster} returns this
 */
proto.clarifai.api.Cluster.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * repeated Hit hits = 4;
 * @return {!Array<!proto.clarifai.api.Hit>}
 */
proto.clarifai.api.Cluster.prototype.getHitsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Hit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Hit, 4));
};


/**
 * @param {!Array<!proto.clarifai.api.Hit>} value
 * @return {!proto.clarifai.api.Cluster} returns this
*/
proto.clarifai.api.Cluster.prototype.setHitsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clarifai.api.Hit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Hit}
 */
proto.clarifai.api.Cluster.prototype.addHits = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clarifai.api.Hit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Cluster} returns this
 */
proto.clarifai.api.Cluster.prototype.clearHitsList = function() {
  return this.setHitsList([]);
};





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
proto.clarifai.api.Color.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Color.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Color} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Color.toObject = function(includeInstance, msg) {
  var f, obj = {
    rawHex: jspb.Message.getFieldWithDefault(msg, 1, ""),
    w3c: (f = msg.getW3c()) && proto.clarifai.api.W3C.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.clarifai.api.Color}
 */
proto.clarifai.api.Color.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Color;
  return proto.clarifai.api.Color.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Color} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Color}
 */
proto.clarifai.api.Color.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRawHex(value);
      break;
    case 2:
      var value = new proto.clarifai.api.W3C;
      reader.readMessage(value,proto.clarifai.api.W3C.deserializeBinaryFromReader);
      msg.setW3c(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.clarifai.api.Color.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Color.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Color} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Color.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRawHex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getW3c();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.W3C.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional string raw_hex = 1;
 * @return {string}
 */
proto.clarifai.api.Color.prototype.getRawHex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Color} returns this
 */
proto.clarifai.api.Color.prototype.setRawHex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional W3C w3c = 2;
 * @return {?proto.clarifai.api.W3C}
 */
proto.clarifai.api.Color.prototype.getW3c = function() {
  return /** @type{?proto.clarifai.api.W3C} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.W3C, 2));
};


/**
 * @param {?proto.clarifai.api.W3C|undefined} value
 * @return {!proto.clarifai.api.Color} returns this
*/
proto.clarifai.api.Color.prototype.setW3c = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Color} returns this
 */
proto.clarifai.api.Color.prototype.clearW3c = function() {
  return this.setW3c(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Color.prototype.hasW3c = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional float value = 3;
 * @return {number}
 */
proto.clarifai.api.Color.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Color} returns this
 */
proto.clarifai.api.Color.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





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
proto.clarifai.api.W3C.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.W3C.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.W3C} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.W3C.toObject = function(includeInstance, msg) {
  var f, obj = {
    hex: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.clarifai.api.W3C}
 */
proto.clarifai.api.W3C.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.W3C;
  return proto.clarifai.api.W3C.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.W3C} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.W3C}
 */
proto.clarifai.api.W3C.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHex(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.clarifai.api.W3C.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.W3C.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.W3C} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.W3C.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHex();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string hex = 1;
 * @return {string}
 */
proto.clarifai.api.W3C.prototype.getHex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.W3C} returns this
 */
proto.clarifai.api.W3C.prototype.setHex = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.W3C.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.W3C} returns this
 */
proto.clarifai.api.W3C.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





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
proto.clarifai.api.UserAppIDSet.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.UserAppIDSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.UserAppIDSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.UserAppIDSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.clarifai.api.UserAppIDSet}
 */
proto.clarifai.api.UserAppIDSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.UserAppIDSet;
  return proto.clarifai.api.UserAppIDSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.UserAppIDSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.UserAppIDSet}
 */
proto.clarifai.api.UserAppIDSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
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
proto.clarifai.api.UserAppIDSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.UserAppIDSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.UserAppIDSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.UserAppIDSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.clarifai.api.UserAppIDSet.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.UserAppIDSet} returns this
 */
proto.clarifai.api.UserAppIDSet.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.clarifai.api.UserAppIDSet.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.UserAppIDSet} returns this
 */
proto.clarifai.api.UserAppIDSet.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





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
proto.clarifai.api.PatchAction.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.PatchAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.PatchAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PatchAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    op: jspb.Message.getFieldWithDefault(msg, 1, ""),
    mergeConflictResolution: jspb.Message.getFieldWithDefault(msg, 2, ""),
    path: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clarifai.api.PatchAction}
 */
proto.clarifai.api.PatchAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.PatchAction;
  return proto.clarifai.api.PatchAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.PatchAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.PatchAction}
 */
proto.clarifai.api.PatchAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMergeConflictResolution(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
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
proto.clarifai.api.PatchAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.PatchAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.PatchAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PatchAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOp();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMergeConflictResolution();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string op = 1;
 * @return {string}
 */
proto.clarifai.api.PatchAction.prototype.getOp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PatchAction} returns this
 */
proto.clarifai.api.PatchAction.prototype.setOp = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string merge_conflict_resolution = 2;
 * @return {string}
 */
proto.clarifai.api.PatchAction.prototype.getMergeConflictResolution = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PatchAction} returns this
 */
proto.clarifai.api.PatchAction.prototype.setMergeConflictResolution = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string path = 3;
 * @return {string}
 */
proto.clarifai.api.PatchAction.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PatchAction} returns this
 */
proto.clarifai.api.PatchAction.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.clarifai.api.Concept.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Concept.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Concept} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Concept.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 6, ""),
    definition: jspb.Message.getFieldWithDefault(msg, 7, ""),
    vocabId: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.Concept.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Concept;
  return proto.clarifai.api.Concept.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Concept} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.Concept.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinition(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVocabId(value);
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
proto.clarifai.api.Concept.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Concept.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Concept} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Concept.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDefinition();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getVocabId();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float value = 3;
 * @return {number}
 */
proto.clarifai.api.Concept.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Concept.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Concept} returns this
*/
proto.clarifai.api.Concept.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Concept.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string app_id = 6;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string definition = 7;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getDefinition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setDefinition = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string vocab_id = 8;
 * @return {string}
 */
proto.clarifai.api.Concept.prototype.getVocabId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Concept} returns this
 */
proto.clarifai.api.Concept.prototype.setVocabId = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





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
proto.clarifai.api.ConceptCount.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    conceptTypeCount: (f = msg.getConceptTypeCount()) && proto.clarifai.api.ConceptTypeCount.toObject(includeInstance, f),
    detailConceptCount: (f = msg.getDetailConceptCount()) && proto.clarifai.api.DetailConceptCount.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.ConceptCount}
 */
proto.clarifai.api.ConceptCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptCount;
  return proto.clarifai.api.ConceptCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptCount}
 */
proto.clarifai.api.ConceptCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.clarifai.api.ConceptTypeCount;
      reader.readMessage(value,proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader);
      msg.setConceptTypeCount(value);
      break;
    case 4:
      var value = new proto.clarifai.api.DetailConceptCount;
      reader.readMessage(value,proto.clarifai.api.DetailConceptCount.deserializeBinaryFromReader);
      msg.setDetailConceptCount(value);
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
proto.clarifai.api.ConceptCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getConceptTypeCount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter
    );
  }
  f = message.getDetailConceptCount();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.DetailConceptCount.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ConceptCount.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptCount} returns this
 */
proto.clarifai.api.ConceptCount.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.ConceptCount.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptCount} returns this
 */
proto.clarifai.api.ConceptCount.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ConceptTypeCount concept_type_count = 3;
 * @return {?proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.ConceptCount.prototype.getConceptTypeCount = function() {
  return /** @type{?proto.clarifai.api.ConceptTypeCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConceptTypeCount, 3));
};


/**
 * @param {?proto.clarifai.api.ConceptTypeCount|undefined} value
 * @return {!proto.clarifai.api.ConceptCount} returns this
*/
proto.clarifai.api.ConceptCount.prototype.setConceptTypeCount = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ConceptCount} returns this
 */
proto.clarifai.api.ConceptCount.prototype.clearConceptTypeCount = function() {
  return this.setConceptTypeCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ConceptCount.prototype.hasConceptTypeCount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DetailConceptCount detail_concept_count = 4;
 * @return {?proto.clarifai.api.DetailConceptCount}
 */
proto.clarifai.api.ConceptCount.prototype.getDetailConceptCount = function() {
  return /** @type{?proto.clarifai.api.DetailConceptCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.DetailConceptCount, 4));
};


/**
 * @param {?proto.clarifai.api.DetailConceptCount|undefined} value
 * @return {!proto.clarifai.api.ConceptCount} returns this
*/
proto.clarifai.api.ConceptCount.prototype.setDetailConceptCount = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ConceptCount} returns this
 */
proto.clarifai.api.ConceptCount.prototype.clearDetailConceptCount = function() {
  return this.setDetailConceptCount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ConceptCount.prototype.hasDetailConceptCount = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.clarifai.api.ConceptTypeCount.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptTypeCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptTypeCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptTypeCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    positive: jspb.Message.getFieldWithDefault(msg, 1, 0),
    negative: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.ConceptTypeCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptTypeCount;
  return proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptTypeCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPositive(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNegative(value);
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
proto.clarifai.api.ConceptTypeCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptTypeCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositive();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNegative();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 positive = 1;
 * @return {number}
 */
proto.clarifai.api.ConceptTypeCount.prototype.getPositive = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ConceptTypeCount} returns this
 */
proto.clarifai.api.ConceptTypeCount.prototype.setPositive = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 negative = 2;
 * @return {number}
 */
proto.clarifai.api.ConceptTypeCount.prototype.getNegative = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ConceptTypeCount} returns this
 */
proto.clarifai.api.ConceptTypeCount.prototype.setNegative = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.clarifai.api.DetailConceptCount.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.DetailConceptCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.DetailConceptCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.DetailConceptCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    processed: (f = msg.getProcessed()) && proto.clarifai.api.ConceptTypeCount.toObject(includeInstance, f),
    toProcess: (f = msg.getToProcess()) && proto.clarifai.api.ConceptTypeCount.toObject(includeInstance, f),
    errors: (f = msg.getErrors()) && proto.clarifai.api.ConceptTypeCount.toObject(includeInstance, f),
    processing: (f = msg.getProcessing()) && proto.clarifai.api.ConceptTypeCount.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.DetailConceptCount}
 */
proto.clarifai.api.DetailConceptCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.DetailConceptCount;
  return proto.clarifai.api.DetailConceptCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.DetailConceptCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.DetailConceptCount}
 */
proto.clarifai.api.DetailConceptCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.ConceptTypeCount;
      reader.readMessage(value,proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader);
      msg.setProcessed(value);
      break;
    case 2:
      var value = new proto.clarifai.api.ConceptTypeCount;
      reader.readMessage(value,proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader);
      msg.setToProcess(value);
      break;
    case 3:
      var value = new proto.clarifai.api.ConceptTypeCount;
      reader.readMessage(value,proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader);
      msg.setErrors(value);
      break;
    case 4:
      var value = new proto.clarifai.api.ConceptTypeCount;
      reader.readMessage(value,proto.clarifai.api.ConceptTypeCount.deserializeBinaryFromReader);
      msg.setProcessing(value);
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
proto.clarifai.api.DetailConceptCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.DetailConceptCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.DetailConceptCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.DetailConceptCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessed();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter
    );
  }
  f = message.getToProcess();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter
    );
  }
  f = message.getErrors();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter
    );
  }
  f = message.getProcessing();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.ConceptTypeCount.serializeBinaryToWriter
    );
  }
};


/**
 * optional ConceptTypeCount processed = 1;
 * @return {?proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.DetailConceptCount.prototype.getProcessed = function() {
  return /** @type{?proto.clarifai.api.ConceptTypeCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConceptTypeCount, 1));
};


/**
 * @param {?proto.clarifai.api.ConceptTypeCount|undefined} value
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
*/
proto.clarifai.api.DetailConceptCount.prototype.setProcessed = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
 */
proto.clarifai.api.DetailConceptCount.prototype.clearProcessed = function() {
  return this.setProcessed(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.DetailConceptCount.prototype.hasProcessed = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ConceptTypeCount to_process = 2;
 * @return {?proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.DetailConceptCount.prototype.getToProcess = function() {
  return /** @type{?proto.clarifai.api.ConceptTypeCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConceptTypeCount, 2));
};


/**
 * @param {?proto.clarifai.api.ConceptTypeCount|undefined} value
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
*/
proto.clarifai.api.DetailConceptCount.prototype.setToProcess = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
 */
proto.clarifai.api.DetailConceptCount.prototype.clearToProcess = function() {
  return this.setToProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.DetailConceptCount.prototype.hasToProcess = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConceptTypeCount errors = 3;
 * @return {?proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.DetailConceptCount.prototype.getErrors = function() {
  return /** @type{?proto.clarifai.api.ConceptTypeCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConceptTypeCount, 3));
};


/**
 * @param {?proto.clarifai.api.ConceptTypeCount|undefined} value
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
*/
proto.clarifai.api.DetailConceptCount.prototype.setErrors = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
 */
proto.clarifai.api.DetailConceptCount.prototype.clearErrors = function() {
  return this.setErrors(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.DetailConceptCount.prototype.hasErrors = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ConceptTypeCount processing = 4;
 * @return {?proto.clarifai.api.ConceptTypeCount}
 */
proto.clarifai.api.DetailConceptCount.prototype.getProcessing = function() {
  return /** @type{?proto.clarifai.api.ConceptTypeCount} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConceptTypeCount, 4));
};


/**
 * @param {?proto.clarifai.api.ConceptTypeCount|undefined} value
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
*/
proto.clarifai.api.DetailConceptCount.prototype.setProcessing = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.DetailConceptCount} returns this
 */
proto.clarifai.api.DetailConceptCount.prototype.clearProcessing = function() {
  return this.setProcessing(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.DetailConceptCount.prototype.hasProcessing = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.clarifai.api.ConceptQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    language: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clarifai.api.ConceptQuery}
 */
proto.clarifai.api.ConceptQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptQuery;
  return proto.clarifai.api.ConceptQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptQuery}
 */
proto.clarifai.api.ConceptQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
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
proto.clarifai.api.ConceptQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.clarifai.api.ConceptQuery.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptQuery} returns this
 */
proto.clarifai.api.ConceptQuery.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language = 2;
 * @return {string}
 */
proto.clarifai.api.ConceptQuery.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptQuery} returns this
 */
proto.clarifai.api.ConceptQuery.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workflow_id = 3;
 * @return {string}
 */
proto.clarifai.api.ConceptQuery.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptQuery} returns this
 */
proto.clarifai.api.ConceptQuery.prototype.setWorkflowId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.clarifai.api.ConceptRelation.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptRelation.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptRelation} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptRelation.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    subjectConcept: (f = msg.getSubjectConcept()) && proto.clarifai.api.Concept.toObject(includeInstance, f),
    objectConcept: (f = msg.getObjectConcept()) && proto.clarifai.api.Concept.toObject(includeInstance, f),
    predicate: jspb.Message.getFieldWithDefault(msg, 4, ""),
    knowledgeGraphId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.clarifai.api.ConceptRelation}
 */
proto.clarifai.api.ConceptRelation.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptRelation;
  return proto.clarifai.api.ConceptRelation.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptRelation} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptRelation}
 */
proto.clarifai.api.ConceptRelation.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.setSubjectConcept(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.setObjectConcept(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredicate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKnowledgeGraphId(value);
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
proto.clarifai.api.ConceptRelation.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptRelation.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptRelation} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptRelation.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubjectConcept();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getObjectConcept();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getPredicate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getKnowledgeGraphId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ConceptRelation.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptRelation} returns this
 */
proto.clarifai.api.ConceptRelation.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Concept subject_concept = 2;
 * @return {?proto.clarifai.api.Concept}
 */
proto.clarifai.api.ConceptRelation.prototype.getSubjectConcept = function() {
  return /** @type{?proto.clarifai.api.Concept} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Concept, 2));
};


/**
 * @param {?proto.clarifai.api.Concept|undefined} value
 * @return {!proto.clarifai.api.ConceptRelation} returns this
*/
proto.clarifai.api.ConceptRelation.prototype.setSubjectConcept = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ConceptRelation} returns this
 */
proto.clarifai.api.ConceptRelation.prototype.clearSubjectConcept = function() {
  return this.setSubjectConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ConceptRelation.prototype.hasSubjectConcept = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Concept object_concept = 3;
 * @return {?proto.clarifai.api.Concept}
 */
proto.clarifai.api.ConceptRelation.prototype.getObjectConcept = function() {
  return /** @type{?proto.clarifai.api.Concept} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Concept, 3));
};


/**
 * @param {?proto.clarifai.api.Concept|undefined} value
 * @return {!proto.clarifai.api.ConceptRelation} returns this
*/
proto.clarifai.api.ConceptRelation.prototype.setObjectConcept = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ConceptRelation} returns this
 */
proto.clarifai.api.ConceptRelation.prototype.clearObjectConcept = function() {
  return this.setObjectConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ConceptRelation.prototype.hasObjectConcept = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string predicate = 4;
 * @return {string}
 */
proto.clarifai.api.ConceptRelation.prototype.getPredicate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptRelation} returns this
 */
proto.clarifai.api.ConceptRelation.prototype.setPredicate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string knowledge_graph_id = 5;
 * @return {string}
 */
proto.clarifai.api.ConceptRelation.prototype.getKnowledgeGraphId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptRelation} returns this
 */
proto.clarifai.api.ConceptRelation.prototype.setKnowledgeGraphId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





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
proto.clarifai.api.KnowledgeGraph.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.KnowledgeGraph.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.KnowledgeGraph} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.KnowledgeGraph.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    examplesAppId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sampledExamplesAppId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.clarifai.api.KnowledgeGraph}
 */
proto.clarifai.api.KnowledgeGraph.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.KnowledgeGraph;
  return proto.clarifai.api.KnowledgeGraph.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.KnowledgeGraph} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.KnowledgeGraph}
 */
proto.clarifai.api.KnowledgeGraph.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExamplesAppId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSampledExamplesAppId(value);
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
proto.clarifai.api.KnowledgeGraph.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.KnowledgeGraph.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.KnowledgeGraph} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.KnowledgeGraph.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getExamplesAppId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSampledExamplesAppId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.KnowledgeGraph.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.KnowledgeGraph} returns this
 */
proto.clarifai.api.KnowledgeGraph.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.KnowledgeGraph.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.KnowledgeGraph} returns this
 */
proto.clarifai.api.KnowledgeGraph.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.clarifai.api.KnowledgeGraph.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.KnowledgeGraph} returns this
 */
proto.clarifai.api.KnowledgeGraph.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string examples_app_id = 4;
 * @return {string}
 */
proto.clarifai.api.KnowledgeGraph.prototype.getExamplesAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.KnowledgeGraph} returns this
 */
proto.clarifai.api.KnowledgeGraph.prototype.setExamplesAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string sampled_examples_app_id = 5;
 * @return {string}
 */
proto.clarifai.api.KnowledgeGraph.prototype.getSampledExamplesAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.KnowledgeGraph} returns this
 */
proto.clarifai.api.KnowledgeGraph.prototype.setSampledExamplesAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ConceptMappingJob.repeatedFields_ = [2];



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
proto.clarifai.api.ConceptMappingJob.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptMappingJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptMappingJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptMappingJob.toObject = function(includeInstance, msg) {
  var f, obj = {
    knowledgeGraphId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conceptIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.ConceptMappingJob}
 */
proto.clarifai.api.ConceptMappingJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptMappingJob;
  return proto.clarifai.api.ConceptMappingJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptMappingJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptMappingJob}
 */
proto.clarifai.api.ConceptMappingJob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKnowledgeGraphId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addConceptIds(value);
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
proto.clarifai.api.ConceptMappingJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptMappingJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptMappingJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptMappingJob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKnowledgeGraphId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConceptIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string knowledge_graph_id = 1;
 * @return {string}
 */
proto.clarifai.api.ConceptMappingJob.prototype.getKnowledgeGraphId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptMappingJob} returns this
 */
proto.clarifai.api.ConceptMappingJob.prototype.setKnowledgeGraphId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string concept_ids = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.ConceptMappingJob.prototype.getConceptIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.ConceptMappingJob} returns this
 */
proto.clarifai.api.ConceptMappingJob.prototype.setConceptIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ConceptMappingJob} returns this
 */
proto.clarifai.api.ConceptMappingJob.prototype.addConceptIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ConceptMappingJob} returns this
 */
proto.clarifai.api.ConceptMappingJob.prototype.clearConceptIdsList = function() {
  return this.setConceptIdsList([]);
};





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
proto.clarifai.api.ConceptLanguage.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConceptLanguage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConceptLanguage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptLanguage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    definition: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clarifai.api.ConceptLanguage}
 */
proto.clarifai.api.ConceptLanguage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConceptLanguage;
  return proto.clarifai.api.ConceptLanguage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConceptLanguage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConceptLanguage}
 */
proto.clarifai.api.ConceptLanguage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefinition(value);
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
proto.clarifai.api.ConceptLanguage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConceptLanguage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConceptLanguage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConceptLanguage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDefinition();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ConceptLanguage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptLanguage} returns this
 */
proto.clarifai.api.ConceptLanguage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.ConceptLanguage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptLanguage} returns this
 */
proto.clarifai.api.ConceptLanguage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string definition = 3;
 * @return {string}
 */
proto.clarifai.api.ConceptLanguage.prototype.getDefinition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConceptLanguage} returns this
 */
proto.clarifai.api.ConceptLanguage.prototype.setDefinition = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Data.repeatedFields_ = [3,7,8,9,11,12,15];



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
proto.clarifai.api.Data.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Data.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Data} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Data.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: (f = msg.getImage()) && proto.clarifai.api.Image.toObject(includeInstance, f),
    video: (f = msg.getVideo()) && proto.clarifai.api.Video.toObject(includeInstance, f),
    conceptsList: jspb.Message.toObjectList(msg.getConceptsList(),
    proto.clarifai.api.Concept.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    geo: (f = msg.getGeo()) && proto.clarifai.api.Geo.toObject(includeInstance, f),
    colorsList: jspb.Message.toObjectList(msg.getColorsList(),
    proto.clarifai.api.Color.toObject, includeInstance),
    clustersList: jspb.Message.toObjectList(msg.getClustersList(),
    proto.clarifai.api.Cluster.toObject, includeInstance),
    embeddingsList: jspb.Message.toObjectList(msg.getEmbeddingsList(),
    proto.clarifai.api.Embedding.toObject, includeInstance),
    regionsList: jspb.Message.toObjectList(msg.getRegionsList(),
    proto.clarifai.api.Region.toObject, includeInstance),
    framesList: jspb.Message.toObjectList(msg.getFramesList(),
    proto.clarifai.api.Frame.toObject, includeInstance),
    text: (f = msg.getText()) && proto.clarifai.api.Text.toObject(includeInstance, f),
    audio: (f = msg.getAudio()) && proto.clarifai.api.Audio.toObject(includeInstance, f),
    tracksList: jspb.Message.toObjectList(msg.getTracksList(),
    proto.clarifai.api.Track.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.Data}
 */
proto.clarifai.api.Data.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Data;
  return proto.clarifai.api.Data.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Data} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Data}
 */
proto.clarifai.api.Data.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Image;
      reader.readMessage(value,proto.clarifai.api.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Video;
      reader.readMessage(value,proto.clarifai.api.Video.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.addConcepts(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 6:
      var value = new proto.clarifai.api.Geo;
      reader.readMessage(value,proto.clarifai.api.Geo.deserializeBinaryFromReader);
      msg.setGeo(value);
      break;
    case 7:
      var value = new proto.clarifai.api.Color;
      reader.readMessage(value,proto.clarifai.api.Color.deserializeBinaryFromReader);
      msg.addColors(value);
      break;
    case 8:
      var value = new proto.clarifai.api.Cluster;
      reader.readMessage(value,proto.clarifai.api.Cluster.deserializeBinaryFromReader);
      msg.addClusters(value);
      break;
    case 9:
      var value = new proto.clarifai.api.Embedding;
      reader.readMessage(value,proto.clarifai.api.Embedding.deserializeBinaryFromReader);
      msg.addEmbeddings(value);
      break;
    case 11:
      var value = new proto.clarifai.api.Region;
      reader.readMessage(value,proto.clarifai.api.Region.deserializeBinaryFromReader);
      msg.addRegions(value);
      break;
    case 12:
      var value = new proto.clarifai.api.Frame;
      reader.readMessage(value,proto.clarifai.api.Frame.deserializeBinaryFromReader);
      msg.addFrames(value);
      break;
    case 13:
      var value = new proto.clarifai.api.Text;
      reader.readMessage(value,proto.clarifai.api.Text.deserializeBinaryFromReader);
      msg.setText(value);
      break;
    case 14:
      var value = new proto.clarifai.api.Audio;
      reader.readMessage(value,proto.clarifai.api.Audio.deserializeBinaryFromReader);
      msg.setAudio(value);
      break;
    case 15:
      var value = new proto.clarifai.api.Track;
      reader.readMessage(value,proto.clarifai.api.Track.deserializeBinaryFromReader);
      msg.addTracks(value);
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
proto.clarifai.api.Data.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Data.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Data} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Data.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Image.serializeBinaryToWriter
    );
  }
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Video.serializeBinaryToWriter
    );
  }
  f = message.getConceptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getGeo();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.Geo.serializeBinaryToWriter
    );
  }
  f = message.getColorsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.clarifai.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getClustersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.clarifai.api.Cluster.serializeBinaryToWriter
    );
  }
  f = message.getEmbeddingsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.clarifai.api.Embedding.serializeBinaryToWriter
    );
  }
  f = message.getRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.clarifai.api.Region.serializeBinaryToWriter
    );
  }
  f = message.getFramesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.clarifai.api.Frame.serializeBinaryToWriter
    );
  }
  f = message.getText();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.clarifai.api.Text.serializeBinaryToWriter
    );
  }
  f = message.getAudio();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.clarifai.api.Audio.serializeBinaryToWriter
    );
  }
  f = message.getTracksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.clarifai.api.Track.serializeBinaryToWriter
    );
  }
};


/**
 * optional Image image = 1;
 * @return {?proto.clarifai.api.Image}
 */
proto.clarifai.api.Data.prototype.getImage = function() {
  return /** @type{?proto.clarifai.api.Image} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Image, 1));
};


/**
 * @param {?proto.clarifai.api.Image|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Video video = 2;
 * @return {?proto.clarifai.api.Video}
 */
proto.clarifai.api.Data.prototype.getVideo = function() {
  return /** @type{?proto.clarifai.api.Video} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Video, 2));
};


/**
 * @param {?proto.clarifai.api.Video|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setVideo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated Concept concepts = 3;
 * @return {!Array<!proto.clarifai.api.Concept>}
 */
proto.clarifai.api.Data.prototype.getConceptsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Concept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Concept, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.Concept>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setConceptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.Concept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.Data.prototype.addConcepts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.Concept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearConceptsList = function() {
  return this.setConceptsList([]);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.Data.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Geo geo = 6;
 * @return {?proto.clarifai.api.Geo}
 */
proto.clarifai.api.Data.prototype.getGeo = function() {
  return /** @type{?proto.clarifai.api.Geo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Geo, 6));
};


/**
 * @param {?proto.clarifai.api.Geo|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setGeo = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearGeo = function() {
  return this.setGeo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasGeo = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated Color colors = 7;
 * @return {!Array<!proto.clarifai.api.Color>}
 */
proto.clarifai.api.Data.prototype.getColorsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Color>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Color, 7));
};


/**
 * @param {!Array<!proto.clarifai.api.Color>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setColorsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.clarifai.api.Color=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Color}
 */
proto.clarifai.api.Data.prototype.addColors = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.clarifai.api.Color, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearColorsList = function() {
  return this.setColorsList([]);
};


/**
 * repeated Cluster clusters = 8;
 * @return {!Array<!proto.clarifai.api.Cluster>}
 */
proto.clarifai.api.Data.prototype.getClustersList = function() {
  return /** @type{!Array<!proto.clarifai.api.Cluster>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Cluster, 8));
};


/**
 * @param {!Array<!proto.clarifai.api.Cluster>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setClustersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.clarifai.api.Cluster=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Cluster}
 */
proto.clarifai.api.Data.prototype.addClusters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.clarifai.api.Cluster, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearClustersList = function() {
  return this.setClustersList([]);
};


/**
 * repeated Embedding embeddings = 9;
 * @return {!Array<!proto.clarifai.api.Embedding>}
 */
proto.clarifai.api.Data.prototype.getEmbeddingsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Embedding>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Embedding, 9));
};


/**
 * @param {!Array<!proto.clarifai.api.Embedding>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setEmbeddingsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.clarifai.api.Embedding=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Embedding}
 */
proto.clarifai.api.Data.prototype.addEmbeddings = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.clarifai.api.Embedding, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearEmbeddingsList = function() {
  return this.setEmbeddingsList([]);
};


/**
 * repeated Region regions = 11;
 * @return {!Array<!proto.clarifai.api.Region>}
 */
proto.clarifai.api.Data.prototype.getRegionsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Region>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Region, 11));
};


/**
 * @param {!Array<!proto.clarifai.api.Region>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setRegionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.clarifai.api.Region=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Region}
 */
proto.clarifai.api.Data.prototype.addRegions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.clarifai.api.Region, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearRegionsList = function() {
  return this.setRegionsList([]);
};


/**
 * repeated Frame frames = 12;
 * @return {!Array<!proto.clarifai.api.Frame>}
 */
proto.clarifai.api.Data.prototype.getFramesList = function() {
  return /** @type{!Array<!proto.clarifai.api.Frame>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Frame, 12));
};


/**
 * @param {!Array<!proto.clarifai.api.Frame>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setFramesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.clarifai.api.Frame=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Frame}
 */
proto.clarifai.api.Data.prototype.addFrames = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.clarifai.api.Frame, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearFramesList = function() {
  return this.setFramesList([]);
};


/**
 * optional Text text = 13;
 * @return {?proto.clarifai.api.Text}
 */
proto.clarifai.api.Data.prototype.getText = function() {
  return /** @type{?proto.clarifai.api.Text} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Text, 13));
};


/**
 * @param {?proto.clarifai.api.Text|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setText = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearText = function() {
  return this.setText(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasText = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Audio audio = 14;
 * @return {?proto.clarifai.api.Audio}
 */
proto.clarifai.api.Data.prototype.getAudio = function() {
  return /** @type{?proto.clarifai.api.Audio} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Audio, 14));
};


/**
 * @param {?proto.clarifai.api.Audio|undefined} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setAudio = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearAudio = function() {
  return this.setAudio(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Data.prototype.hasAudio = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * repeated Track tracks = 15;
 * @return {!Array<!proto.clarifai.api.Track>}
 */
proto.clarifai.api.Data.prototype.getTracksList = function() {
  return /** @type{!Array<!proto.clarifai.api.Track>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Track, 15));
};


/**
 * @param {!Array<!proto.clarifai.api.Track>} value
 * @return {!proto.clarifai.api.Data} returns this
*/
proto.clarifai.api.Data.prototype.setTracksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.clarifai.api.Track=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Track}
 */
proto.clarifai.api.Data.prototype.addTracks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.clarifai.api.Track, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Data} returns this
 */
proto.clarifai.api.Data.prototype.clearTracksList = function() {
  return this.setTracksList([]);
};





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
proto.clarifai.api.Region.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Region.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Region} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Region.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    regionInfo: (f = msg.getRegionInfo()) && proto.clarifai.api.RegionInfo.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    trackId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.clarifai.api.Region}
 */
proto.clarifai.api.Region.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Region;
  return proto.clarifai.api.Region.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Region} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Region}
 */
proto.clarifai.api.Region.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.RegionInfo;
      reader.readMessage(value,proto.clarifai.api.RegionInfo.deserializeBinaryFromReader);
      msg.setRegionInfo(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackId(value);
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
proto.clarifai.api.Region.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Region.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Region} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Region.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRegionInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.RegionInfo.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getTrackId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Region.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Region} returns this
 */
proto.clarifai.api.Region.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RegionInfo region_info = 2;
 * @return {?proto.clarifai.api.RegionInfo}
 */
proto.clarifai.api.Region.prototype.getRegionInfo = function() {
  return /** @type{?proto.clarifai.api.RegionInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.RegionInfo, 2));
};


/**
 * @param {?proto.clarifai.api.RegionInfo|undefined} value
 * @return {!proto.clarifai.api.Region} returns this
*/
proto.clarifai.api.Region.prototype.setRegionInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Region} returns this
 */
proto.clarifai.api.Region.prototype.clearRegionInfo = function() {
  return this.setRegionInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Region.prototype.hasRegionInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Data data = 3;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Region.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 3));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Region} returns this
*/
proto.clarifai.api.Region.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Region} returns this
 */
proto.clarifai.api.Region.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Region.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional float value = 4;
 * @return {number}
 */
proto.clarifai.api.Region.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Region} returns this
 */
proto.clarifai.api.Region.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string track_id = 5;
 * @return {string}
 */
proto.clarifai.api.Region.prototype.getTrackId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Region} returns this
 */
proto.clarifai.api.Region.prototype.setTrackId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





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
proto.clarifai.api.RegionInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.RegionInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.RegionInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.RegionInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    boundingBox: (f = msg.getBoundingBox()) && proto.clarifai.api.BoundingBox.toObject(includeInstance, f),
    mask: (f = msg.getMask()) && proto.clarifai.api.Mask.toObject(includeInstance, f),
    polygon: (f = msg.getPolygon()) && proto.clarifai.api.Polygon.toObject(includeInstance, f),
    point: (f = msg.getPoint()) && proto.clarifai.api.Point.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.RegionInfo}
 */
proto.clarifai.api.RegionInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.RegionInfo;
  return proto.clarifai.api.RegionInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.RegionInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.RegionInfo}
 */
proto.clarifai.api.RegionInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.BoundingBox;
      reader.readMessage(value,proto.clarifai.api.BoundingBox.deserializeBinaryFromReader);
      msg.setBoundingBox(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Mask;
      reader.readMessage(value,proto.clarifai.api.Mask.deserializeBinaryFromReader);
      msg.setMask(value);
      break;
    case 5:
      var value = new proto.clarifai.api.Polygon;
      reader.readMessage(value,proto.clarifai.api.Polygon.deserializeBinaryFromReader);
      msg.setPolygon(value);
      break;
    case 6:
      var value = new proto.clarifai.api.Point;
      reader.readMessage(value,proto.clarifai.api.Point.deserializeBinaryFromReader);
      msg.setPoint(value);
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
proto.clarifai.api.RegionInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.RegionInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.RegionInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.RegionInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBoundingBox();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.BoundingBox.serializeBinaryToWriter
    );
  }
  f = message.getMask();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Mask.serializeBinaryToWriter
    );
  }
  f = message.getPolygon();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.Polygon.serializeBinaryToWriter
    );
  }
  f = message.getPoint();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.Point.serializeBinaryToWriter
    );
  }
};


/**
 * optional BoundingBox bounding_box = 1;
 * @return {?proto.clarifai.api.BoundingBox}
 */
proto.clarifai.api.RegionInfo.prototype.getBoundingBox = function() {
  return /** @type{?proto.clarifai.api.BoundingBox} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.BoundingBox, 1));
};


/**
 * @param {?proto.clarifai.api.BoundingBox|undefined} value
 * @return {!proto.clarifai.api.RegionInfo} returns this
*/
proto.clarifai.api.RegionInfo.prototype.setBoundingBox = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.RegionInfo} returns this
 */
proto.clarifai.api.RegionInfo.prototype.clearBoundingBox = function() {
  return this.setBoundingBox(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.RegionInfo.prototype.hasBoundingBox = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Mask mask = 4;
 * @return {?proto.clarifai.api.Mask}
 */
proto.clarifai.api.RegionInfo.prototype.getMask = function() {
  return /** @type{?proto.clarifai.api.Mask} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Mask, 4));
};


/**
 * @param {?proto.clarifai.api.Mask|undefined} value
 * @return {!proto.clarifai.api.RegionInfo} returns this
*/
proto.clarifai.api.RegionInfo.prototype.setMask = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.RegionInfo} returns this
 */
proto.clarifai.api.RegionInfo.prototype.clearMask = function() {
  return this.setMask(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.RegionInfo.prototype.hasMask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Polygon polygon = 5;
 * @return {?proto.clarifai.api.Polygon}
 */
proto.clarifai.api.RegionInfo.prototype.getPolygon = function() {
  return /** @type{?proto.clarifai.api.Polygon} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Polygon, 5));
};


/**
 * @param {?proto.clarifai.api.Polygon|undefined} value
 * @return {!proto.clarifai.api.RegionInfo} returns this
*/
proto.clarifai.api.RegionInfo.prototype.setPolygon = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.RegionInfo} returns this
 */
proto.clarifai.api.RegionInfo.prototype.clearPolygon = function() {
  return this.setPolygon(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.RegionInfo.prototype.hasPolygon = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Point point = 6;
 * @return {?proto.clarifai.api.Point}
 */
proto.clarifai.api.RegionInfo.prototype.getPoint = function() {
  return /** @type{?proto.clarifai.api.Point} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Point, 6));
};


/**
 * @param {?proto.clarifai.api.Point|undefined} value
 * @return {!proto.clarifai.api.RegionInfo} returns this
*/
proto.clarifai.api.RegionInfo.prototype.setPoint = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.RegionInfo} returns this
 */
proto.clarifai.api.RegionInfo.prototype.clearPoint = function() {
  return this.setPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.RegionInfo.prototype.hasPoint = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.clarifai.api.BoundingBox.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.BoundingBox.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.BoundingBox} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.BoundingBox.toObject = function(includeInstance, msg) {
  var f, obj = {
    topRow: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    leftCol: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    bottomRow: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    rightCol: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.clarifai.api.BoundingBox}
 */
proto.clarifai.api.BoundingBox.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.BoundingBox;
  return proto.clarifai.api.BoundingBox.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.BoundingBox} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.BoundingBox}
 */
proto.clarifai.api.BoundingBox.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTopRow(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLeftCol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBottomRow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRightCol(value);
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
proto.clarifai.api.BoundingBox.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.BoundingBox.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.BoundingBox} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.BoundingBox.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTopRow();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getLeftCol();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBottomRow();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getRightCol();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional float top_row = 1;
 * @return {number}
 */
proto.clarifai.api.BoundingBox.prototype.getTopRow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BoundingBox} returns this
 */
proto.clarifai.api.BoundingBox.prototype.setTopRow = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float left_col = 2;
 * @return {number}
 */
proto.clarifai.api.BoundingBox.prototype.getLeftCol = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BoundingBox} returns this
 */
proto.clarifai.api.BoundingBox.prototype.setLeftCol = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float bottom_row = 3;
 * @return {number}
 */
proto.clarifai.api.BoundingBox.prototype.getBottomRow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BoundingBox} returns this
 */
proto.clarifai.api.BoundingBox.prototype.setBottomRow = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float right_col = 4;
 * @return {number}
 */
proto.clarifai.api.BoundingBox.prototype.getRightCol = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BoundingBox} returns this
 */
proto.clarifai.api.BoundingBox.prototype.setRightCol = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};





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
proto.clarifai.api.FrameInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.FrameInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.FrameInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.FrameInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.clarifai.api.FrameInfo}
 */
proto.clarifai.api.FrameInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.FrameInfo;
  return proto.clarifai.api.FrameInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.FrameInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.FrameInfo}
 */
proto.clarifai.api.FrameInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setIndex(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTime(value);
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
proto.clarifai.api.FrameInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.FrameInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.FrameInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.FrameInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 index = 1;
 * @return {number}
 */
proto.clarifai.api.FrameInfo.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.FrameInfo} returns this
 */
proto.clarifai.api.FrameInfo.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 time = 2;
 * @return {number}
 */
proto.clarifai.api.FrameInfo.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.FrameInfo} returns this
 */
proto.clarifai.api.FrameInfo.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.clarifai.api.Frame.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Frame.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Frame} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Frame.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameInfo: (f = msg.getFrameInfo()) && proto.clarifai.api.FrameInfo.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clarifai.api.Frame}
 */
proto.clarifai.api.Frame.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Frame;
  return proto.clarifai.api.Frame.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Frame} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Frame}
 */
proto.clarifai.api.Frame.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.FrameInfo;
      reader.readMessage(value,proto.clarifai.api.FrameInfo.deserializeBinaryFromReader);
      msg.setFrameInfo(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.clarifai.api.Frame.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Frame.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Frame} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Frame.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrameInfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.FrameInfo.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional FrameInfo frame_info = 1;
 * @return {?proto.clarifai.api.FrameInfo}
 */
proto.clarifai.api.Frame.prototype.getFrameInfo = function() {
  return /** @type{?proto.clarifai.api.FrameInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.FrameInfo, 1));
};


/**
 * @param {?proto.clarifai.api.FrameInfo|undefined} value
 * @return {!proto.clarifai.api.Frame} returns this
*/
proto.clarifai.api.Frame.prototype.setFrameInfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Frame} returns this
 */
proto.clarifai.api.Frame.prototype.clearFrameInfo = function() {
  return this.setFrameInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Frame.prototype.hasFrameInfo = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Data data = 2;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Frame.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 2));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Frame} returns this
*/
proto.clarifai.api.Frame.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Frame} returns this
 */
proto.clarifai.api.Frame.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Frame.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.clarifai.api.Frame.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Frame} returns this
 */
proto.clarifai.api.Frame.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.clarifai.api.Mask.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Mask.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Mask} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Mask.toObject = function(includeInstance, msg) {
  var f, obj = {
    color: (f = msg.getColor()) && proto.clarifai.api.Color.toObject(includeInstance, f),
    image: (f = msg.getImage()) && proto.clarifai.api.Image.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Mask}
 */
proto.clarifai.api.Mask.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Mask;
  return proto.clarifai.api.Mask.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Mask} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Mask}
 */
proto.clarifai.api.Mask.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Color;
      reader.readMessage(value,proto.clarifai.api.Color.deserializeBinaryFromReader);
      msg.setColor(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Image;
      reader.readMessage(value,proto.clarifai.api.Image.deserializeBinaryFromReader);
      msg.setImage(value);
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
proto.clarifai.api.Mask.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Mask.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Mask} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Mask.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getColor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Color.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Image.serializeBinaryToWriter
    );
  }
};


/**
 * optional Color color = 1;
 * @return {?proto.clarifai.api.Color}
 */
proto.clarifai.api.Mask.prototype.getColor = function() {
  return /** @type{?proto.clarifai.api.Color} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Color, 1));
};


/**
 * @param {?proto.clarifai.api.Color|undefined} value
 * @return {!proto.clarifai.api.Mask} returns this
*/
proto.clarifai.api.Mask.prototype.setColor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Mask} returns this
 */
proto.clarifai.api.Mask.prototype.clearColor = function() {
  return this.setColor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Mask.prototype.hasColor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Image image = 2;
 * @return {?proto.clarifai.api.Image}
 */
proto.clarifai.api.Mask.prototype.getImage = function() {
  return /** @type{?proto.clarifai.api.Image} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Image, 2));
};


/**
 * @param {?proto.clarifai.api.Image|undefined} value
 * @return {!proto.clarifai.api.Mask} returns this
*/
proto.clarifai.api.Mask.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Mask} returns this
 */
proto.clarifai.api.Mask.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Mask.prototype.hasImage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Polygon.repeatedFields_ = [1];



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
proto.clarifai.api.Polygon.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Polygon.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Polygon} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Polygon.toObject = function(includeInstance, msg) {
  var f, obj = {
    pointsList: jspb.Message.toObjectList(msg.getPointsList(),
    proto.clarifai.api.Point.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.Polygon}
 */
proto.clarifai.api.Polygon.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Polygon;
  return proto.clarifai.api.Polygon.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Polygon} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Polygon}
 */
proto.clarifai.api.Polygon.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Point;
      reader.readMessage(value,proto.clarifai.api.Point.deserializeBinaryFromReader);
      msg.addPoints(value);
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
proto.clarifai.api.Polygon.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Polygon.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Polygon} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Polygon.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPointsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.Point.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Point points = 1;
 * @return {!Array<!proto.clarifai.api.Point>}
 */
proto.clarifai.api.Polygon.prototype.getPointsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Point>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Point, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.Point>} value
 * @return {!proto.clarifai.api.Polygon} returns this
*/
proto.clarifai.api.Polygon.prototype.setPointsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.Point=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Point}
 */
proto.clarifai.api.Polygon.prototype.addPoints = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.Point, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Polygon} returns this
 */
proto.clarifai.api.Polygon.prototype.clearPointsList = function() {
  return this.setPointsList([]);
};





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
proto.clarifai.api.Point.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Point.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Point} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Point.toObject = function(includeInstance, msg) {
  var f, obj = {
    row: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    col: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    z: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.clarifai.api.Point}
 */
proto.clarifai.api.Point.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Point;
  return proto.clarifai.api.Point.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Point} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Point}
 */
proto.clarifai.api.Point.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRow(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZ(value);
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
proto.clarifai.api.Point.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Point.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Point} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Point.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRow();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getCol();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getZ();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float row = 1;
 * @return {number}
 */
proto.clarifai.api.Point.prototype.getRow = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Point} returns this
 */
proto.clarifai.api.Point.prototype.setRow = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float col = 2;
 * @return {number}
 */
proto.clarifai.api.Point.prototype.getCol = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Point} returns this
 */
proto.clarifai.api.Point.prototype.setCol = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float z = 3;
 * @return {number}
 */
proto.clarifai.api.Point.prototype.getZ = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Point} returns this
 */
proto.clarifai.api.Point.prototype.setZ = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Embedding.repeatedFields_ = [1];



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
proto.clarifai.api.Embedding.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Embedding.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Embedding} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Embedding.toObject = function(includeInstance, msg) {
  var f, obj = {
    vectorList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    numDimensions: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.clarifai.api.Embedding}
 */
proto.clarifai.api.Embedding.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Embedding;
  return proto.clarifai.api.Embedding.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Embedding} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Embedding}
 */
proto.clarifai.api.Embedding.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addVector(values[i]);
      }
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumDimensions(value);
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
proto.clarifai.api.Embedding.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Embedding.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Embedding} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Embedding.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVectorList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getNumDimensions();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * repeated float vector = 1;
 * @return {!Array<number>}
 */
proto.clarifai.api.Embedding.prototype.getVectorList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.Embedding} returns this
 */
proto.clarifai.api.Embedding.prototype.setVectorList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Embedding} returns this
 */
proto.clarifai.api.Embedding.prototype.addVector = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Embedding} returns this
 */
proto.clarifai.api.Embedding.prototype.clearVectorList = function() {
  return this.setVectorList([]);
};


/**
 * optional uint32 num_dimensions = 2;
 * @return {number}
 */
proto.clarifai.api.Embedding.prototype.getNumDimensions = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Embedding} returns this
 */
proto.clarifai.api.Embedding.prototype.setNumDimensions = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.clarifai.api.GeoPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.GeoPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.GeoPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    longitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    latitude: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.clarifai.api.GeoPoint}
 */
proto.clarifai.api.GeoPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.GeoPoint;
  return proto.clarifai.api.GeoPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.GeoPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.GeoPoint}
 */
proto.clarifai.api.GeoPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLongitude(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLatitude(value);
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
proto.clarifai.api.GeoPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.GeoPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.GeoPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLongitude();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getLatitude();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional float longitude = 1;
 * @return {number}
 */
proto.clarifai.api.GeoPoint.prototype.getLongitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.GeoPoint} returns this
 */
proto.clarifai.api.GeoPoint.prototype.setLongitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float latitude = 2;
 * @return {number}
 */
proto.clarifai.api.GeoPoint.prototype.getLatitude = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.GeoPoint} returns this
 */
proto.clarifai.api.GeoPoint.prototype.setLatitude = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.clarifai.api.GeoLimit.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.GeoLimit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.GeoLimit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoLimit.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
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
 * @return {!proto.clarifai.api.GeoLimit}
 */
proto.clarifai.api.GeoLimit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.GeoLimit;
  return proto.clarifai.api.GeoLimit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.GeoLimit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.GeoLimit}
 */
proto.clarifai.api.GeoLimit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.clarifai.api.GeoLimit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.GeoLimit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.GeoLimit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoLimit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.clarifai.api.GeoLimit.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.GeoLimit} returns this
 */
proto.clarifai.api.GeoLimit.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.clarifai.api.GeoLimit.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.GeoLimit} returns this
 */
proto.clarifai.api.GeoLimit.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};





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
proto.clarifai.api.GeoBoxedPoint.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.GeoBoxedPoint.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.GeoBoxedPoint} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoBoxedPoint.toObject = function(includeInstance, msg) {
  var f, obj = {
    geoPoint: (f = msg.getGeoPoint()) && proto.clarifai.api.GeoPoint.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.GeoBoxedPoint}
 */
proto.clarifai.api.GeoBoxedPoint.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.GeoBoxedPoint;
  return proto.clarifai.api.GeoBoxedPoint.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.GeoBoxedPoint} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.GeoBoxedPoint}
 */
proto.clarifai.api.GeoBoxedPoint.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.GeoPoint;
      reader.readMessage(value,proto.clarifai.api.GeoPoint.deserializeBinaryFromReader);
      msg.setGeoPoint(value);
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
proto.clarifai.api.GeoBoxedPoint.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.GeoBoxedPoint.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.GeoBoxedPoint} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.GeoBoxedPoint.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeoPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.GeoPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional GeoPoint geo_point = 1;
 * @return {?proto.clarifai.api.GeoPoint}
 */
proto.clarifai.api.GeoBoxedPoint.prototype.getGeoPoint = function() {
  return /** @type{?proto.clarifai.api.GeoPoint} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.GeoPoint, 1));
};


/**
 * @param {?proto.clarifai.api.GeoPoint|undefined} value
 * @return {!proto.clarifai.api.GeoBoxedPoint} returns this
*/
proto.clarifai.api.GeoBoxedPoint.prototype.setGeoPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.GeoBoxedPoint} returns this
 */
proto.clarifai.api.GeoBoxedPoint.prototype.clearGeoPoint = function() {
  return this.setGeoPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.GeoBoxedPoint.prototype.hasGeoPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Geo.repeatedFields_ = [3];



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
proto.clarifai.api.Geo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Geo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Geo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Geo.toObject = function(includeInstance, msg) {
  var f, obj = {
    geoPoint: (f = msg.getGeoPoint()) && proto.clarifai.api.GeoPoint.toObject(includeInstance, f),
    geoLimit: (f = msg.getGeoLimit()) && proto.clarifai.api.GeoLimit.toObject(includeInstance, f),
    geoBoxList: jspb.Message.toObjectList(msg.getGeoBoxList(),
    proto.clarifai.api.GeoBoxedPoint.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.Geo}
 */
proto.clarifai.api.Geo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Geo;
  return proto.clarifai.api.Geo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Geo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Geo}
 */
proto.clarifai.api.Geo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.GeoPoint;
      reader.readMessage(value,proto.clarifai.api.GeoPoint.deserializeBinaryFromReader);
      msg.setGeoPoint(value);
      break;
    case 2:
      var value = new proto.clarifai.api.GeoLimit;
      reader.readMessage(value,proto.clarifai.api.GeoLimit.deserializeBinaryFromReader);
      msg.setGeoLimit(value);
      break;
    case 3:
      var value = new proto.clarifai.api.GeoBoxedPoint;
      reader.readMessage(value,proto.clarifai.api.GeoBoxedPoint.deserializeBinaryFromReader);
      msg.addGeoBox(value);
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
proto.clarifai.api.Geo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Geo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Geo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Geo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGeoPoint();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.GeoPoint.serializeBinaryToWriter
    );
  }
  f = message.getGeoLimit();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.GeoLimit.serializeBinaryToWriter
    );
  }
  f = message.getGeoBoxList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.GeoBoxedPoint.serializeBinaryToWriter
    );
  }
};


/**
 * optional GeoPoint geo_point = 1;
 * @return {?proto.clarifai.api.GeoPoint}
 */
proto.clarifai.api.Geo.prototype.getGeoPoint = function() {
  return /** @type{?proto.clarifai.api.GeoPoint} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.GeoPoint, 1));
};


/**
 * @param {?proto.clarifai.api.GeoPoint|undefined} value
 * @return {!proto.clarifai.api.Geo} returns this
*/
proto.clarifai.api.Geo.prototype.setGeoPoint = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Geo} returns this
 */
proto.clarifai.api.Geo.prototype.clearGeoPoint = function() {
  return this.setGeoPoint(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Geo.prototype.hasGeoPoint = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GeoLimit geo_limit = 2;
 * @return {?proto.clarifai.api.GeoLimit}
 */
proto.clarifai.api.Geo.prototype.getGeoLimit = function() {
  return /** @type{?proto.clarifai.api.GeoLimit} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.GeoLimit, 2));
};


/**
 * @param {?proto.clarifai.api.GeoLimit|undefined} value
 * @return {!proto.clarifai.api.Geo} returns this
*/
proto.clarifai.api.Geo.prototype.setGeoLimit = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Geo} returns this
 */
proto.clarifai.api.Geo.prototype.clearGeoLimit = function() {
  return this.setGeoLimit(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Geo.prototype.hasGeoLimit = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated GeoBoxedPoint geo_box = 3;
 * @return {!Array<!proto.clarifai.api.GeoBoxedPoint>}
 */
proto.clarifai.api.Geo.prototype.getGeoBoxList = function() {
  return /** @type{!Array<!proto.clarifai.api.GeoBoxedPoint>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.GeoBoxedPoint, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.GeoBoxedPoint>} value
 * @return {!proto.clarifai.api.Geo} returns this
*/
proto.clarifai.api.Geo.prototype.setGeoBoxList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.GeoBoxedPoint=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.GeoBoxedPoint}
 */
proto.clarifai.api.Geo.prototype.addGeoBox = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.GeoBoxedPoint, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Geo} returns this
 */
proto.clarifai.api.Geo.prototype.clearGeoBoxList = function() {
  return this.setGeoBoxList([]);
};





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
proto.clarifai.api.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    base64: msg.getBase64_asB64(),
    allowDuplicateUrl: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    hosted: (f = msg.getHosted()) && proto.clarifai.api.HostedURL.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Image}
 */
proto.clarifai.api.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Image;
  return proto.clarifai.api.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Image}
 */
proto.clarifai.api.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBase64(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowDuplicateUrl(value);
      break;
    case 5:
      var value = new proto.clarifai.api.HostedURL;
      reader.readMessage(value,proto.clarifai.api.HostedURL.deserializeBinaryFromReader);
      msg.setHosted(value);
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
proto.clarifai.api.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBase64_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAllowDuplicateUrl();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getHosted();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.HostedURL.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.clarifai.api.Image.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Image} returns this
 */
proto.clarifai.api.Image.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes base64 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.clarifai.api.Image.prototype.getBase64 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes base64 = 2;
 * This is a type-conversion wrapper around `getBase64()`
 * @return {string}
 */
proto.clarifai.api.Image.prototype.getBase64_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBase64()));
};


/**
 * optional bytes base64 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBase64()`
 * @return {!Uint8Array}
 */
proto.clarifai.api.Image.prototype.getBase64_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBase64()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clarifai.api.Image} returns this
 */
proto.clarifai.api.Image.prototype.setBase64 = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool allow_duplicate_url = 4;
 * @return {boolean}
 */
proto.clarifai.api.Image.prototype.getAllowDuplicateUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Image} returns this
 */
proto.clarifai.api.Image.prototype.setAllowDuplicateUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional HostedURL hosted = 5;
 * @return {?proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.Image.prototype.getHosted = function() {
  return /** @type{?proto.clarifai.api.HostedURL} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.HostedURL, 5));
};


/**
 * @param {?proto.clarifai.api.HostedURL|undefined} value
 * @return {!proto.clarifai.api.Image} returns this
*/
proto.clarifai.api.Image.prototype.setHosted = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Image} returns this
 */
proto.clarifai.api.Image.prototype.clearHosted = function() {
  return this.setHosted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Image.prototype.hasHosted = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.HostedURL.repeatedFields_ = [3];



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
proto.clarifai.api.HostedURL.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.HostedURL.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.HostedURL} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.HostedURL.toObject = function(includeInstance, msg) {
  var f, obj = {
    prefix: jspb.Message.getFieldWithDefault(msg, 1, ""),
    suffix: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sizesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    crossorigin: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.HostedURL.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.HostedURL;
  return proto.clarifai.api.HostedURL.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.HostedURL} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.HostedURL.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuffix(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addSizes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCrossorigin(value);
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
proto.clarifai.api.HostedURL.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.HostedURL.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.HostedURL} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.HostedURL.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrefix();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuffix();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSizesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCrossorigin();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string prefix = 1;
 * @return {string}
 */
proto.clarifai.api.HostedURL.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string suffix = 2;
 * @return {string}
 */
proto.clarifai.api.HostedURL.prototype.getSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.setSuffix = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string sizes = 3;
 * @return {!Array<string>}
 */
proto.clarifai.api.HostedURL.prototype.getSizesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.setSizesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.addSizes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.clearSizesList = function() {
  return this.setSizesList([]);
};


/**
 * optional string crossorigin = 4;
 * @return {string}
 */
proto.clarifai.api.HostedURL.prototype.getCrossorigin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.HostedURL} returns this
 */
proto.clarifai.api.HostedURL.prototype.setCrossorigin = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





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
proto.clarifai.api.Input.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Input.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Input} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Input.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Input}
 */
proto.clarifai.api.Input.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Input;
  return proto.clarifai.api.Input.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Input} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Input}
 */
proto.clarifai.api.Input.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 6:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.clarifai.api.Input.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Input.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Input} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Input.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Input.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Input} returns this
 */
proto.clarifai.api.Input.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Data data = 2;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Input.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 2));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Input} returns this
*/
proto.clarifai.api.Input.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Input} returns this
 */
proto.clarifai.api.Input.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Input.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Input.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Input} returns this
*/
proto.clarifai.api.Input.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Input} returns this
 */
proto.clarifai.api.Input.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Input.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Input.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Input} returns this
*/
proto.clarifai.api.Input.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Input} returns this
 */
proto.clarifai.api.Input.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Input.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional status.Status status = 6;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.Input.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 6));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.Input} returns this
*/
proto.clarifai.api.Input.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Input} returns this
 */
proto.clarifai.api.Input.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Input.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.clarifai.api.InputCount.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.InputCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.InputCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.InputCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    processed: jspb.Message.getFieldWithDefault(msg, 1, 0),
    toProcess: jspb.Message.getFieldWithDefault(msg, 2, 0),
    errors: jspb.Message.getFieldWithDefault(msg, 3, 0),
    processing: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reindexed: jspb.Message.getFieldWithDefault(msg, 5, 0),
    toReindex: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reindexErrors: jspb.Message.getFieldWithDefault(msg, 7, 0),
    reindexing: jspb.Message.getFieldWithDefault(msg, 8, 0)
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
 * @return {!proto.clarifai.api.InputCount}
 */
proto.clarifai.api.InputCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.InputCount;
  return proto.clarifai.api.InputCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.InputCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.InputCount}
 */
proto.clarifai.api.InputCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProcessed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToProcess(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setErrors(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setProcessing(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReindexed(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setToReindex(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReindexErrors(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReindexing(value);
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
proto.clarifai.api.InputCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.InputCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.InputCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.InputCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessed();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getToProcess();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getErrors();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getProcessing();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getReindexed();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getToReindex();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getReindexErrors();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getReindexing();
  if (f !== 0) {
    writer.writeUint32(
      8,
      f
    );
  }
};


/**
 * optional uint32 processed = 1;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getProcessed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 to_process = 2;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getToProcess = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setToProcess = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 errors = 3;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getErrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setErrors = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 processing = 4;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getProcessing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setProcessing = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 reindexed = 5;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getReindexed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setReindexed = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 to_reindex = 6;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getToReindex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setToReindex = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint32 reindex_errors = 7;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getReindexErrors = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setReindexErrors = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional uint32 reindexing = 8;
 * @return {number}
 */
proto.clarifai.api.InputCount.prototype.getReindexing = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.InputCount} returns this
 */
proto.clarifai.api.InputCount.prototype.setReindexing = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.WorkflowResultsSimilarity.repeatedFields_ = [2];



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
proto.clarifai.api.WorkflowResultsSimilarity.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.WorkflowResultsSimilarity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.WorkflowResultsSimilarity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowResultsSimilarity.toObject = function(includeInstance, msg) {
  var f, obj = {
    probeInput: (f = msg.getProbeInput()) && proto.clarifai.api.Input.toObject(includeInstance, f),
    poolResultsList: jspb.Message.toObjectList(msg.getPoolResultsList(),
    proto.clarifai.api.Hit.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity}
 */
proto.clarifai.api.WorkflowResultsSimilarity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.WorkflowResultsSimilarity;
  return proto.clarifai.api.WorkflowResultsSimilarity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.WorkflowResultsSimilarity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity}
 */
proto.clarifai.api.WorkflowResultsSimilarity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setProbeInput(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Hit;
      reader.readMessage(value,proto.clarifai.api.Hit.deserializeBinaryFromReader);
      msg.addPoolResults(value);
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
proto.clarifai.api.WorkflowResultsSimilarity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.WorkflowResultsSimilarity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.WorkflowResultsSimilarity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowResultsSimilarity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProbeInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
  f = message.getPoolResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.clarifai.api.Hit.serializeBinaryToWriter
    );
  }
};


/**
 * optional Input probe_input = 1;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.getProbeInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 1));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity} returns this
*/
proto.clarifai.api.WorkflowResultsSimilarity.prototype.setProbeInput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity} returns this
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.clearProbeInput = function() {
  return this.setProbeInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.hasProbeInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Hit pool_results = 2;
 * @return {!Array<!proto.clarifai.api.Hit>}
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.getPoolResultsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Hit>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Hit, 2));
};


/**
 * @param {!Array<!proto.clarifai.api.Hit>} value
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity} returns this
*/
proto.clarifai.api.WorkflowResultsSimilarity.prototype.setPoolResultsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.clarifai.api.Hit=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Hit}
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.addPoolResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.clarifai.api.Hit, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.WorkflowResultsSimilarity} returns this
 */
proto.clarifai.api.WorkflowResultsSimilarity.prototype.clearPoolResultsList = function() {
  return this.setPoolResultsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Key.repeatedFields_ = [3,7,4];



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
proto.clarifai.api.Key.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Key.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Key} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Key.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 8, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scopesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    endpointsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    appsList: jspb.Message.toObjectList(msg.getAppsList(),
    proto.clarifai.api.App.toObject, includeInstance),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    expiresAt: (f = msg.getExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Key}
 */
proto.clarifai.api.Key.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Key;
  return proto.clarifai.api.Key.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Key} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Key}
 */
proto.clarifai.api.Key.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndpoints(value);
      break;
    case 4:
      var value = new proto.clarifai.api.App;
      reader.readMessage(value,proto.clarifai.api.App.deserializeBinaryFromReader);
      msg.addApps(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setExpiresAt(value);
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
proto.clarifai.api.Key.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Key.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Key} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Key.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getEndpointsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getAppsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clarifai.api.App.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getExpiresAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Key.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 8;
 * @return {string}
 */
proto.clarifai.api.Key.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.clarifai.api.Key.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string scopes = 3;
 * @return {!Array<string>}
 */
proto.clarifai.api.Key.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * repeated string endpoints = 7;
 * @return {!Array<string>}
 */
proto.clarifai.api.Key.prototype.getEndpointsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.setEndpointsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.addEndpoints = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.clearEndpointsList = function() {
  return this.setEndpointsList([]);
};


/**
 * repeated App apps = 4;
 * @return {!Array<!proto.clarifai.api.App>}
 */
proto.clarifai.api.Key.prototype.getAppsList = function() {
  return /** @type{!Array<!proto.clarifai.api.App>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.App, 4));
};


/**
 * @param {!Array<!proto.clarifai.api.App>} value
 * @return {!proto.clarifai.api.Key} returns this
*/
proto.clarifai.api.Key.prototype.setAppsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clarifai.api.App=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.App}
 */
proto.clarifai.api.Key.prototype.addApps = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clarifai.api.App, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.clearAppsList = function() {
  return this.setAppsList([]);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Key.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Key} returns this
*/
proto.clarifai.api.Key.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Key.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp expires_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Key.prototype.getExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Key} returns this
*/
proto.clarifai.api.Key.prototype.setExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Key} returns this
 */
proto.clarifai.api.Key.prototype.clearExpiresAt = function() {
  return this.setExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Key.prototype.hasExpiresAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





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
proto.clarifai.api.Model.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Model.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Model} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Model.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    appId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    outputInfo: (f = msg.getOutputInfo()) && proto.clarifai.api.OutputInfo.toObject(includeInstance, f),
    modelVersion: (f = msg.getModelVersion()) && proto.clarifai.api.ModelVersion.toObject(includeInstance, f),
    displayName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 9, ""),
    inputInfo: (f = msg.getInputInfo()) && proto.clarifai.api.InputInfo.toObject(includeInstance, f),
    trainInfo: (f = msg.getTrainInfo()) && proto.clarifai.api.TrainInfo.toObject(includeInstance, f),
    modelTypeId: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.clarifai.api.Model}
 */
proto.clarifai.api.Model.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Model;
  return proto.clarifai.api.Model.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Model} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Model}
 */
proto.clarifai.api.Model.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 5:
      var value = new proto.clarifai.api.OutputInfo;
      reader.readMessage(value,proto.clarifai.api.OutputInfo.deserializeBinaryFromReader);
      msg.setOutputInfo(value);
      break;
    case 6:
      var value = new proto.clarifai.api.ModelVersion;
      reader.readMessage(value,proto.clarifai.api.ModelVersion.deserializeBinaryFromReader);
      msg.setModelVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 12:
      var value = new proto.clarifai.api.InputInfo;
      reader.readMessage(value,proto.clarifai.api.InputInfo.deserializeBinaryFromReader);
      msg.setInputInfo(value);
      break;
    case 13:
      var value = new proto.clarifai.api.TrainInfo;
      reader.readMessage(value,proto.clarifai.api.TrainInfo.deserializeBinaryFromReader);
      msg.setTrainInfo(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelTypeId(value);
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
proto.clarifai.api.Model.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Model.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Model} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Model.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOutputInfo();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.OutputInfo.serializeBinaryToWriter
    );
  }
  f = message.getModelVersion();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.ModelVersion.serializeBinaryToWriter
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getInputInfo();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.clarifai.api.InputInfo.serializeBinaryToWriter
    );
  }
  f = message.getTrainInfo();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.clarifai.api.TrainInfo.serializeBinaryToWriter
    );
  }
  f = message.getModelTypeId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Model.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Model} returns this
*/
proto.clarifai.api.Model.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Model.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string app_id = 4;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional OutputInfo output_info = 5;
 * @return {?proto.clarifai.api.OutputInfo}
 */
proto.clarifai.api.Model.prototype.getOutputInfo = function() {
  return /** @type{?proto.clarifai.api.OutputInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.OutputInfo, 5));
};


/**
 * @param {?proto.clarifai.api.OutputInfo|undefined} value
 * @return {!proto.clarifai.api.Model} returns this
*/
proto.clarifai.api.Model.prototype.setOutputInfo = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.clearOutputInfo = function() {
  return this.setOutputInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Model.prototype.hasOutputInfo = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ModelVersion model_version = 6;
 * @return {?proto.clarifai.api.ModelVersion}
 */
proto.clarifai.api.Model.prototype.getModelVersion = function() {
  return /** @type{?proto.clarifai.api.ModelVersion} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ModelVersion, 6));
};


/**
 * @param {?proto.clarifai.api.ModelVersion|undefined} value
 * @return {!proto.clarifai.api.Model} returns this
*/
proto.clarifai.api.Model.prototype.setModelVersion = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.clearModelVersion = function() {
  return this.setModelVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Model.prototype.hasModelVersion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string display_name = 7;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string user_id = 9;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional InputInfo input_info = 12;
 * @return {?proto.clarifai.api.InputInfo}
 */
proto.clarifai.api.Model.prototype.getInputInfo = function() {
  return /** @type{?proto.clarifai.api.InputInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.InputInfo, 12));
};


/**
 * @param {?proto.clarifai.api.InputInfo|undefined} value
 * @return {!proto.clarifai.api.Model} returns this
*/
proto.clarifai.api.Model.prototype.setInputInfo = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.clearInputInfo = function() {
  return this.setInputInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Model.prototype.hasInputInfo = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional TrainInfo train_info = 13;
 * @return {?proto.clarifai.api.TrainInfo}
 */
proto.clarifai.api.Model.prototype.getTrainInfo = function() {
  return /** @type{?proto.clarifai.api.TrainInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TrainInfo, 13));
};


/**
 * @param {?proto.clarifai.api.TrainInfo|undefined} value
 * @return {!proto.clarifai.api.Model} returns this
*/
proto.clarifai.api.Model.prototype.setTrainInfo = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.clearTrainInfo = function() {
  return this.setTrainInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Model.prototype.hasTrainInfo = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string model_type_id = 14;
 * @return {string}
 */
proto.clarifai.api.Model.prototype.getModelTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Model} returns this
 */
proto.clarifai.api.Model.prototype.setModelTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};





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
proto.clarifai.api.OutputInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.OutputInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.OutputInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.OutputInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    outputConfig: (f = msg.getOutputConfig()) && proto.clarifai.api.OutputConfig.toObject(includeInstance, f),
    message: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, ""),
    typeExt: jspb.Message.getFieldWithDefault(msg, 5, ""),
    fieldsMap: (f = msg.getFieldsMap()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.OutputInfo}
 */
proto.clarifai.api.OutputInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.OutputInfo;
  return proto.clarifai.api.OutputInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.OutputInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.OutputInfo}
 */
proto.clarifai.api.OutputInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 2:
      var value = new proto.clarifai.api.OutputConfig;
      reader.readMessage(value,proto.clarifai.api.OutputConfig.deserializeBinaryFromReader);
      msg.setOutputConfig(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeExt(value);
      break;
    case 6:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setFieldsMap(value);
      break;
    case 7:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.clarifai.api.OutputInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.OutputInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.OutputInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.OutputInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getOutputConfig();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.OutputConfig.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTypeExt();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getFieldsMap();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional Data data = 1;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.OutputInfo.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 1));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
*/
proto.clarifai.api.OutputInfo.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputInfo.prototype.hasData = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional OutputConfig output_config = 2;
 * @return {?proto.clarifai.api.OutputConfig}
 */
proto.clarifai.api.OutputInfo.prototype.getOutputConfig = function() {
  return /** @type{?proto.clarifai.api.OutputConfig} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.OutputConfig, 2));
};


/**
 * @param {?proto.clarifai.api.OutputConfig|undefined} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
*/
proto.clarifai.api.OutputInfo.prototype.setOutputConfig = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.clearOutputConfig = function() {
  return this.setOutputConfig(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputInfo.prototype.hasOutputConfig = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string message = 3;
 * @return {string}
 */
proto.clarifai.api.OutputInfo.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.clarifai.api.OutputInfo.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type_ext = 5;
 * @return {string}
 */
proto.clarifai.api.OutputInfo.prototype.getTypeExt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.setTypeExt = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Struct fields_map = 6;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.OutputInfo.prototype.getFieldsMap = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 6));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
*/
proto.clarifai.api.OutputInfo.prototype.setFieldsMap = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.clearFieldsMap = function() {
  return this.setFieldsMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputInfo.prototype.hasFieldsMap = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Struct params = 7;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.OutputInfo.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 7));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.OutputInfo} returns this
*/
proto.clarifai.api.OutputInfo.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputInfo} returns this
 */
proto.clarifai.api.OutputInfo.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputInfo.prototype.hasParams = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.clarifai.api.InputInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.InputInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.InputInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.InputInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fieldsMap: (f = msg.getFieldsMap()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.InputInfo}
 */
proto.clarifai.api.InputInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.InputInfo;
  return proto.clarifai.api.InputInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.InputInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.InputInfo}
 */
proto.clarifai.api.InputInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setFieldsMap(value);
      break;
    case 2:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.clarifai.api.InputInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.InputInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.InputInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.InputInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFieldsMap();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct fields_map = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.InputInfo.prototype.getFieldsMap = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.InputInfo} returns this
*/
proto.clarifai.api.InputInfo.prototype.setFieldsMap = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.InputInfo} returns this
 */
proto.clarifai.api.InputInfo.prototype.clearFieldsMap = function() {
  return this.setFieldsMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.InputInfo.prototype.hasFieldsMap = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional google.protobuf.Struct params = 2;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.InputInfo.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 2));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.InputInfo} returns this
*/
proto.clarifai.api.InputInfo.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.InputInfo} returns this
 */
proto.clarifai.api.InputInfo.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.InputInfo.prototype.hasParams = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.clarifai.api.TrainInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TrainInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TrainInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TrainInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    params: (f = msg.getParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.TrainInfo}
 */
proto.clarifai.api.TrainInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TrainInfo;
  return proto.clarifai.api.TrainInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TrainInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TrainInfo}
 */
proto.clarifai.api.TrainInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setParams(value);
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
proto.clarifai.api.TrainInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TrainInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TrainInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TrainInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParams();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Struct params = 1;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.TrainInfo.prototype.getParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 1));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.TrainInfo} returns this
*/
proto.clarifai.api.TrainInfo.prototype.setParams = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.TrainInfo} returns this
 */
proto.clarifai.api.TrainInfo.prototype.clearParams = function() {
  return this.setParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.TrainInfo.prototype.hasParams = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.OutputConfig.repeatedFields_ = [8];



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
proto.clarifai.api.OutputConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.OutputConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.OutputConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.OutputConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    conceptsMutuallyExclusive: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    closedEnvironment: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    existingModelId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    language: jspb.Message.getFieldWithDefault(msg, 4, ""),
    hyperParameters: jspb.Message.getFieldWithDefault(msg, 5, ""),
    maxConcepts: jspb.Message.getFieldWithDefault(msg, 6, 0),
    minValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    selectConceptsList: jspb.Message.toObjectList(msg.getSelectConceptsList(),
    proto.clarifai.api.Concept.toObject, includeInstance),
    trainingTimeout: jspb.Message.getFieldWithDefault(msg, 9, 0),
    sampleMs: jspb.Message.getFieldWithDefault(msg, 10, 0),
    hyperParams: (f = msg.getHyperParams()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    embedModelVersionId: jspb.Message.getFieldWithDefault(msg, 14, ""),
    failOnMissingPositiveExamples: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    modelMetadata: (f = msg.getModelMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.OutputConfig}
 */
proto.clarifai.api.OutputConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.OutputConfig;
  return proto.clarifai.api.OutputConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.OutputConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.OutputConfig}
 */
proto.clarifai.api.OutputConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConceptsMutuallyExclusive(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setClosedEnvironment(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setExistingModelId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHyperParameters(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setMaxConcepts(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinValue(value);
      break;
    case 8:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.addSelectConcepts(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTrainingTimeout(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSampleMs(value);
      break;
    case 13:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setHyperParams(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmbedModelVersionId(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFailOnMissingPositiveExamples(value);
      break;
    case 17:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setModelMetadata(value);
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
proto.clarifai.api.OutputConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.OutputConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.OutputConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.OutputConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConceptsMutuallyExclusive();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getClosedEnvironment();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getExistingModelId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHyperParameters();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMaxConcepts();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getMinValue();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getSelectConceptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getTrainingTimeout();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getSampleMs();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getHyperParams();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getEmbedModelVersionId();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getFailOnMissingPositiveExamples();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getModelMetadata();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool concepts_mutually_exclusive = 1;
 * @return {boolean}
 */
proto.clarifai.api.OutputConfig.prototype.getConceptsMutuallyExclusive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setConceptsMutuallyExclusive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool closed_environment = 2;
 * @return {boolean}
 */
proto.clarifai.api.OutputConfig.prototype.getClosedEnvironment = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setClosedEnvironment = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string existing_model_id = 3;
 * @return {string}
 */
proto.clarifai.api.OutputConfig.prototype.getExistingModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setExistingModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language = 4;
 * @return {string}
 */
proto.clarifai.api.OutputConfig.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string hyper_parameters = 5;
 * @return {string}
 */
proto.clarifai.api.OutputConfig.prototype.getHyperParameters = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setHyperParameters = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 max_concepts = 6;
 * @return {number}
 */
proto.clarifai.api.OutputConfig.prototype.getMaxConcepts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setMaxConcepts = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional float min_value = 7;
 * @return {number}
 */
proto.clarifai.api.OutputConfig.prototype.getMinValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setMinValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * repeated Concept select_concepts = 8;
 * @return {!Array<!proto.clarifai.api.Concept>}
 */
proto.clarifai.api.OutputConfig.prototype.getSelectConceptsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Concept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Concept, 8));
};


/**
 * @param {!Array<!proto.clarifai.api.Concept>} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
*/
proto.clarifai.api.OutputConfig.prototype.setSelectConceptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.clarifai.api.Concept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.OutputConfig.prototype.addSelectConcepts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.clarifai.api.Concept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.clearSelectConceptsList = function() {
  return this.setSelectConceptsList([]);
};


/**
 * optional uint32 training_timeout = 9;
 * @return {number}
 */
proto.clarifai.api.OutputConfig.prototype.getTrainingTimeout = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setTrainingTimeout = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional uint32 sample_ms = 10;
 * @return {number}
 */
proto.clarifai.api.OutputConfig.prototype.getSampleMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setSampleMs = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional google.protobuf.Struct hyper_params = 13;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.OutputConfig.prototype.getHyperParams = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 13));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
*/
proto.clarifai.api.OutputConfig.prototype.setHyperParams = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.clearHyperParams = function() {
  return this.setHyperParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputConfig.prototype.hasHyperParams = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string embed_model_version_id = 14;
 * @return {string}
 */
proto.clarifai.api.OutputConfig.prototype.getEmbedModelVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setEmbedModelVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional bool fail_on_missing_positive_examples = 15;
 * @return {boolean}
 */
proto.clarifai.api.OutputConfig.prototype.getFailOnMissingPositiveExamples = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.setFailOnMissingPositiveExamples = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional google.protobuf.Struct model_metadata = 17;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.OutputConfig.prototype.getModelMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 17));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.OutputConfig} returns this
*/
proto.clarifai.api.OutputConfig.prototype.setModelMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.OutputConfig} returns this
 */
proto.clarifai.api.OutputConfig.prototype.clearModelMetadata = function() {
  return this.setModelMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.OutputConfig.prototype.hasModelMetadata = function() {
  return jspb.Message.getField(this, 17) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ModelType.repeatedFields_ = [5,6,11];



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
proto.clarifai.api.ModelType.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelType.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelType} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelType.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    title: jspb.Message.getFieldWithDefault(msg, 2, ""),
    description: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, ""),
    inputFieldsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    outputFieldsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    trainable: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    creatable: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    internalOnly: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    modelTypeFieldsList: jspb.Message.toObjectList(msg.getModelTypeFieldsList(),
    proto.clarifai.api.ModelTypeField.toObject, includeInstance),
    requiresSequentialFrames: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    evaluable: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    expectedPretrainedInputFields: (f = msg.getExpectedPretrainedInputFields()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    expectedPretrainedOutputFields: (f = msg.getExpectedPretrainedOutputFields()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.ModelType}
 */
proto.clarifai.api.ModelType.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelType;
  return proto.clarifai.api.ModelType.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelType} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelType}
 */
proto.clarifai.api.ModelType.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addInputFields(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addOutputFields(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTrainable(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCreatable(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInternalOnly(value);
      break;
    case 11:
      var value = new proto.clarifai.api.ModelTypeField;
      reader.readMessage(value,proto.clarifai.api.ModelTypeField.deserializeBinaryFromReader);
      msg.addModelTypeFields(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequiresSequentialFrames(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEvaluable(value);
      break;
    case 14:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setExpectedPretrainedInputFields(value);
      break;
    case 15:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setExpectedPretrainedOutputFields(value);
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
proto.clarifai.api.ModelType.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelType.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelType} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelType.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getInputFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getOutputFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getTrainable();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getCreatable();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getInternalOnly();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getModelTypeFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.clarifai.api.ModelTypeField.serializeBinaryToWriter
    );
  }
  f = message.getRequiresSequentialFrames();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getEvaluable();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getExpectedPretrainedInputFields();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getExpectedPretrainedOutputFields();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ModelType.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.clarifai.api.ModelType.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.clarifai.api.ModelType.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.clarifai.api.ModelType.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string input_fields = 5;
 * @return {!Array<string>}
 */
proto.clarifai.api.ModelType.prototype.getInputFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setInputFieldsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.addInputFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.clearInputFieldsList = function() {
  return this.setInputFieldsList([]);
};


/**
 * repeated string output_fields = 6;
 * @return {!Array<string>}
 */
proto.clarifai.api.ModelType.prototype.getOutputFieldsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setOutputFieldsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.addOutputFields = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.clearOutputFieldsList = function() {
  return this.setOutputFieldsList([]);
};


/**
 * optional bool trainable = 8;
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.getTrainable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setTrainable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool creatable = 9;
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.getCreatable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setCreatable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool internal_only = 10;
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.getInternalOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setInternalOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated ModelTypeField model_type_fields = 11;
 * @return {!Array<!proto.clarifai.api.ModelTypeField>}
 */
proto.clarifai.api.ModelType.prototype.getModelTypeFieldsList = function() {
  return /** @type{!Array<!proto.clarifai.api.ModelTypeField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.ModelTypeField, 11));
};


/**
 * @param {!Array<!proto.clarifai.api.ModelTypeField>} value
 * @return {!proto.clarifai.api.ModelType} returns this
*/
proto.clarifai.api.ModelType.prototype.setModelTypeFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.clarifai.api.ModelTypeField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ModelTypeField}
 */
proto.clarifai.api.ModelType.prototype.addModelTypeFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.clarifai.api.ModelTypeField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.clearModelTypeFieldsList = function() {
  return this.setModelTypeFieldsList([]);
};


/**
 * optional bool requires_sequential_frames = 12;
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.getRequiresSequentialFrames = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setRequiresSequentialFrames = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool evaluable = 13;
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.getEvaluable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.setEvaluable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional google.protobuf.Struct expected_pretrained_input_fields = 14;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.ModelType.prototype.getExpectedPretrainedInputFields = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 14));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.ModelType} returns this
*/
proto.clarifai.api.ModelType.prototype.setExpectedPretrainedInputFields = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.clearExpectedPretrainedInputFields = function() {
  return this.setExpectedPretrainedInputFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.hasExpectedPretrainedInputFields = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Struct expected_pretrained_output_fields = 15;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.ModelType.prototype.getExpectedPretrainedOutputFields = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 15));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.ModelType} returns this
*/
proto.clarifai.api.ModelType.prototype.setExpectedPretrainedOutputFields = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelType} returns this
 */
proto.clarifai.api.ModelType.prototype.clearExpectedPretrainedOutputFields = function() {
  return this.setExpectedPretrainedOutputFields(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelType.prototype.hasExpectedPretrainedOutputFields = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ModelTypeField.repeatedFields_ = [6];



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
proto.clarifai.api.ModelTypeField.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelTypeField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelTypeField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeField.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fieldType: jspb.Message.getFieldWithDefault(msg, 2, 0),
    defaultValue: (f = msg.getDefaultValue()) && google_protobuf_struct_pb.Value.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    placeholder: jspb.Message.getFieldWithDefault(msg, 5, ""),
    modelTypeEnumOptionsList: jspb.Message.toObjectList(msg.getModelTypeEnumOptionsList(),
    proto.clarifai.api.ModelTypeEnumOption.toObject, includeInstance),
    internalOnly: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    required: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    modelTypeRangeInfo: (f = msg.getModelTypeRangeInfo()) && proto.clarifai.api.ModelTypeRangeInfo.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.ModelTypeField}
 */
proto.clarifai.api.ModelTypeField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelTypeField;
  return proto.clarifai.api.ModelTypeField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelTypeField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelTypeField}
 */
proto.clarifai.api.ModelTypeField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 2:
      var value = /** @type {!proto.clarifai.api.ModelTypeField.ModelTypeFieldType} */ (reader.readEnum());
      msg.setFieldType(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Value;
      reader.readMessage(value,google_protobuf_struct_pb.Value.deserializeBinaryFromReader);
      msg.setDefaultValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaceholder(value);
      break;
    case 6:
      var value = new proto.clarifai.api.ModelTypeEnumOption;
      reader.readMessage(value,proto.clarifai.api.ModelTypeEnumOption.deserializeBinaryFromReader);
      msg.addModelTypeEnumOptions(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInternalOnly(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequired(value);
      break;
    case 9:
      var value = new proto.clarifai.api.ModelTypeRangeInfo;
      reader.readMessage(value,proto.clarifai.api.ModelTypeRangeInfo.deserializeBinaryFromReader);
      msg.setModelTypeRangeInfo(value);
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
proto.clarifai.api.ModelTypeField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelTypeField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelTypeField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFieldType();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = message.getDefaultValue();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPlaceholder();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModelTypeEnumOptionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.clarifai.api.ModelTypeEnumOption.serializeBinaryToWriter
    );
  }
  f = message.getInternalOnly();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getRequired();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getModelTypeRangeInfo();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.clarifai.api.ModelTypeRangeInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.ModelTypeField.ModelTypeFieldType = {
  INVALID_MODEL_TYPE_FIELD_TYPE: 0,
  BOOLEAN: 1,
  STRING: 2,
  NUMBER: 3,
  ARRAY_OF_CONCEPTS: 4,
  ARRAY_OF_CONCEPTS_WITH_THRESHOLD: 5,
  RANGE: 7,
  ENUM: 8,
  COLLABORATORS: 9,
  JSON: 10,
  ARRAY_OF_NUMBERS: 11,
  WORKFLOW_EMBED_MODELS: 12
};

/**
 * optional string path = 1;
 * @return {string}
 */
proto.clarifai.api.ModelTypeField.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ModelTypeFieldType field_type = 2;
 * @return {!proto.clarifai.api.ModelTypeField.ModelTypeFieldType}
 */
proto.clarifai.api.ModelTypeField.prototype.getFieldType = function() {
  return /** @type {!proto.clarifai.api.ModelTypeField.ModelTypeFieldType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.clarifai.api.ModelTypeField.ModelTypeFieldType} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setFieldType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional google.protobuf.Value default_value = 3;
 * @return {?proto.google.protobuf.Value}
 */
proto.clarifai.api.ModelTypeField.prototype.getDefaultValue = function() {
  return /** @type{?proto.google.protobuf.Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Value, 3));
};


/**
 * @param {?proto.google.protobuf.Value|undefined} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
*/
proto.clarifai.api.ModelTypeField.prototype.setDefaultValue = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.clearDefaultValue = function() {
  return this.setDefaultValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelTypeField.prototype.hasDefaultValue = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.clarifai.api.ModelTypeField.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string placeholder = 5;
 * @return {string}
 */
proto.clarifai.api.ModelTypeField.prototype.getPlaceholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setPlaceholder = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated ModelTypeEnumOption model_type_enum_options = 6;
 * @return {!Array<!proto.clarifai.api.ModelTypeEnumOption>}
 */
proto.clarifai.api.ModelTypeField.prototype.getModelTypeEnumOptionsList = function() {
  return /** @type{!Array<!proto.clarifai.api.ModelTypeEnumOption>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.ModelTypeEnumOption, 6));
};


/**
 * @param {!Array<!proto.clarifai.api.ModelTypeEnumOption>} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
*/
proto.clarifai.api.ModelTypeField.prototype.setModelTypeEnumOptionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.clarifai.api.ModelTypeEnumOption=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ModelTypeEnumOption}
 */
proto.clarifai.api.ModelTypeField.prototype.addModelTypeEnumOptions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.clarifai.api.ModelTypeEnumOption, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.clearModelTypeEnumOptionsList = function() {
  return this.setModelTypeEnumOptionsList([]);
};


/**
 * optional bool internal_only = 7;
 * @return {boolean}
 */
proto.clarifai.api.ModelTypeField.prototype.getInternalOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setInternalOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool required = 8;
 * @return {boolean}
 */
proto.clarifai.api.ModelTypeField.prototype.getRequired = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.setRequired = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional ModelTypeRangeInfo model_type_range_info = 9;
 * @return {?proto.clarifai.api.ModelTypeRangeInfo}
 */
proto.clarifai.api.ModelTypeField.prototype.getModelTypeRangeInfo = function() {
  return /** @type{?proto.clarifai.api.ModelTypeRangeInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ModelTypeRangeInfo, 9));
};


/**
 * @param {?proto.clarifai.api.ModelTypeRangeInfo|undefined} value
 * @return {!proto.clarifai.api.ModelTypeField} returns this
*/
proto.clarifai.api.ModelTypeField.prototype.setModelTypeRangeInfo = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelTypeField} returns this
 */
proto.clarifai.api.ModelTypeField.prototype.clearModelTypeRangeInfo = function() {
  return this.setModelTypeRangeInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelTypeField.prototype.hasModelTypeRangeInfo = function() {
  return jspb.Message.getField(this, 9) != null;
};





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
proto.clarifai.api.ModelTypeRangeInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelTypeRangeInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelTypeRangeInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeRangeInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    min: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    max: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    step: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.clarifai.api.ModelTypeRangeInfo}
 */
proto.clarifai.api.ModelTypeRangeInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelTypeRangeInfo;
  return proto.clarifai.api.ModelTypeRangeInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelTypeRangeInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelTypeRangeInfo}
 */
proto.clarifai.api.ModelTypeRangeInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMin(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMax(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setStep(value);
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
proto.clarifai.api.ModelTypeRangeInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelTypeRangeInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelTypeRangeInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeRangeInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMin();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMax();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getStep();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional float min = 1;
 * @return {number}
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.getMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ModelTypeRangeInfo} returns this
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.setMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float max = 2;
 * @return {number}
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.getMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ModelTypeRangeInfo} returns this
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.setMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float step = 3;
 * @return {number}
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.getStep = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ModelTypeRangeInfo} returns this
 */
proto.clarifai.api.ModelTypeRangeInfo.prototype.setStep = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ModelTypeEnumOption.repeatedFields_ = [3];



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
proto.clarifai.api.ModelTypeEnumOption.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelTypeEnumOption.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelTypeEnumOption} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeEnumOption.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelTypeFieldsList: jspb.Message.toObjectList(msg.getModelTypeFieldsList(),
    proto.clarifai.api.ModelTypeField.toObject, includeInstance),
    internalOnly: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.clarifai.api.ModelTypeEnumOption}
 */
proto.clarifai.api.ModelTypeEnumOption.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelTypeEnumOption;
  return proto.clarifai.api.ModelTypeEnumOption.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelTypeEnumOption} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelTypeEnumOption}
 */
proto.clarifai.api.ModelTypeEnumOption.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.clarifai.api.ModelTypeField;
      reader.readMessage(value,proto.clarifai.api.ModelTypeField.deserializeBinaryFromReader);
      msg.addModelTypeFields(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInternalOnly(value);
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
proto.clarifai.api.ModelTypeEnumOption.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelTypeEnumOption.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelTypeEnumOption} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelTypeEnumOption.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelTypeFieldsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.ModelTypeField.serializeBinaryToWriter
    );
  }
  f = message.getInternalOnly();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelTypeEnumOption} returns this
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelTypeEnumOption} returns this
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ModelTypeField model_type_fields = 3;
 * @return {!Array<!proto.clarifai.api.ModelTypeField>}
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.getModelTypeFieldsList = function() {
  return /** @type{!Array<!proto.clarifai.api.ModelTypeField>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.ModelTypeField, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.ModelTypeField>} value
 * @return {!proto.clarifai.api.ModelTypeEnumOption} returns this
*/
proto.clarifai.api.ModelTypeEnumOption.prototype.setModelTypeFieldsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.ModelTypeField=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ModelTypeField}
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.addModelTypeFields = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.ModelTypeField, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ModelTypeEnumOption} returns this
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.clearModelTypeFieldsList = function() {
  return this.setModelTypeFieldsList([]);
};


/**
 * optional bool internal_only = 4;
 * @return {boolean}
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.getInternalOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.ModelTypeEnumOption} returns this
 */
proto.clarifai.api.ModelTypeEnumOption.prototype.setInternalOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





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
proto.clarifai.api.ModelQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelTypeId: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.clarifai.api.ModelQuery}
 */
proto.clarifai.api.ModelQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelQuery;
  return proto.clarifai.api.ModelQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelQuery}
 */
proto.clarifai.api.ModelQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelTypeId(value);
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
proto.clarifai.api.ModelQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelTypeId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.clarifai.api.ModelQuery.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelQuery} returns this
 */
proto.clarifai.api.ModelQuery.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.clarifai.api.ModelQuery.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelQuery} returns this
 */
proto.clarifai.api.ModelQuery.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_type_id = 3;
 * @return {string}
 */
proto.clarifai.api.ModelQuery.prototype.getModelTypeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelQuery} returns this
 */
proto.clarifai.api.ModelQuery.prototype.setModelTypeId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





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
proto.clarifai.api.ModelVersion.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ModelVersion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ModelVersion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelVersion.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    activeConceptCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    metrics: (f = msg.getMetrics()) && proto.clarifai.api.EvalMetrics.toObject(includeInstance, f),
    totalInputCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    description: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.clarifai.api.ModelVersion}
 */
proto.clarifai.api.ModelVersion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ModelVersion;
  return proto.clarifai.api.ModelVersion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ModelVersion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ModelVersion}
 */
proto.clarifai.api.ModelVersion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiveConceptCount(value);
      break;
    case 5:
      var value = new proto.clarifai.api.EvalMetrics;
      reader.readMessage(value,proto.clarifai.api.EvalMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTotalInputCount(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
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
proto.clarifai.api.ModelVersion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ModelVersion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ModelVersion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ModelVersion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getActiveConceptCount();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.EvalMetrics.serializeBinaryToWriter
    );
  }
  f = message.getTotalInputCount();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.ModelVersion.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.ModelVersion.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
*/
proto.clarifai.api.ModelVersion.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelVersion.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional status.Status status = 3;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.ModelVersion.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 3));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
*/
proto.clarifai.api.ModelVersion.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelVersion.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 active_concept_count = 4;
 * @return {number}
 */
proto.clarifai.api.ModelVersion.prototype.getActiveConceptCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.setActiveConceptCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional EvalMetrics metrics = 5;
 * @return {?proto.clarifai.api.EvalMetrics}
 */
proto.clarifai.api.ModelVersion.prototype.getMetrics = function() {
  return /** @type{?proto.clarifai.api.EvalMetrics} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.EvalMetrics, 5));
};


/**
 * @param {?proto.clarifai.api.EvalMetrics|undefined} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
*/
proto.clarifai.api.ModelVersion.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelVersion.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 total_input_count = 6;
 * @return {number}
 */
proto.clarifai.api.ModelVersion.prototype.getTotalInputCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.setTotalInputCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp completed_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.ModelVersion.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
*/
proto.clarifai.api.ModelVersion.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.ModelVersion.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string description = 11;
 * @return {string}
 */
proto.clarifai.api.ModelVersion.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ModelVersion} returns this
 */
proto.clarifai.api.ModelVersion.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};





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
proto.clarifai.api.PretrainedModelConfig.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.PretrainedModelConfig.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.PretrainedModelConfig} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PretrainedModelConfig.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    inputFieldsMap: (f = msg.getInputFieldsMap()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    outputFieldsMap: (f = msg.getOutputFieldsMap()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    dataProviderParams: jspb.Message.getFieldWithDefault(msg, 5, ""),
    modelZipUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
    overwrite: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.clarifai.api.PretrainedModelConfig}
 */
proto.clarifai.api.PretrainedModelConfig.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.PretrainedModelConfig;
  return proto.clarifai.api.PretrainedModelConfig.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.PretrainedModelConfig} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.PretrainedModelConfig}
 */
proto.clarifai.api.PretrainedModelConfig.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setInputFieldsMap(value);
      break;
    case 4:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setOutputFieldsMap(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataProviderParams(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelZipUrl(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOverwrite(value);
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
proto.clarifai.api.PretrainedModelConfig.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.PretrainedModelConfig.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.PretrainedModelConfig} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PretrainedModelConfig.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInputFieldsMap();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getOutputFieldsMap();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getDataProviderParams();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getModelZipUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOverwrite();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Struct input_fields_map = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getInputFieldsMap = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
*/
proto.clarifai.api.PretrainedModelConfig.prototype.setInputFieldsMap = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.clearInputFieldsMap = function() {
  return this.setInputFieldsMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.hasInputFieldsMap = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.Struct output_fields_map = 4;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getOutputFieldsMap = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 4));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
*/
proto.clarifai.api.PretrainedModelConfig.prototype.setOutputFieldsMap = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.clearOutputFieldsMap = function() {
  return this.setOutputFieldsMap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.hasOutputFieldsMap = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string data_provider_params = 5;
 * @return {string}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getDataProviderParams = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.setDataProviderParams = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string model_zip_url = 6;
 * @return {string}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getModelZipUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.setModelZipUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool overwrite = 7;
 * @return {boolean}
 */
proto.clarifai.api.PretrainedModelConfig.prototype.getOverwrite = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PretrainedModelConfig} returns this
 */
proto.clarifai.api.PretrainedModelConfig.prototype.setOverwrite = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.TrainStats.repeatedFields_ = [1];



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
proto.clarifai.api.TrainStats.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TrainStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TrainStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TrainStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    lossCurveList: jspb.Message.toObjectList(msg.getLossCurveList(),
    proto.clarifai.api.LossCurveEntry.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.TrainStats}
 */
proto.clarifai.api.TrainStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TrainStats;
  return proto.clarifai.api.TrainStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TrainStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TrainStats}
 */
proto.clarifai.api.TrainStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.LossCurveEntry;
      reader.readMessage(value,proto.clarifai.api.LossCurveEntry.deserializeBinaryFromReader);
      msg.addLossCurve(value);
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
proto.clarifai.api.TrainStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TrainStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TrainStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TrainStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLossCurveList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.LossCurveEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LossCurveEntry loss_curve = 1;
 * @return {!Array<!proto.clarifai.api.LossCurveEntry>}
 */
proto.clarifai.api.TrainStats.prototype.getLossCurveList = function() {
  return /** @type{!Array<!proto.clarifai.api.LossCurveEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.LossCurveEntry, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.LossCurveEntry>} value
 * @return {!proto.clarifai.api.TrainStats} returns this
*/
proto.clarifai.api.TrainStats.prototype.setLossCurveList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.LossCurveEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.LossCurveEntry}
 */
proto.clarifai.api.TrainStats.prototype.addLossCurve = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.LossCurveEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.TrainStats} returns this
 */
proto.clarifai.api.TrainStats.prototype.clearLossCurveList = function() {
  return this.setLossCurveList([]);
};





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
proto.clarifai.api.LossCurveEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.LossCurveEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.LossCurveEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LossCurveEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    epoch: jspb.Message.getFieldWithDefault(msg, 1, 0),
    globalStep: jspb.Message.getFieldWithDefault(msg, 2, 0),
    cost: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
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
 * @return {!proto.clarifai.api.LossCurveEntry}
 */
proto.clarifai.api.LossCurveEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.LossCurveEntry;
  return proto.clarifai.api.LossCurveEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.LossCurveEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.LossCurveEntry}
 */
proto.clarifai.api.LossCurveEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setEpoch(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setGlobalStep(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCost(value);
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
proto.clarifai.api.LossCurveEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.LossCurveEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.LossCurveEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LossCurveEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEpoch();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getGlobalStep();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getCost();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional uint32 epoch = 1;
 * @return {number}
 */
proto.clarifai.api.LossCurveEntry.prototype.getEpoch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LossCurveEntry} returns this
 */
proto.clarifai.api.LossCurveEntry.prototype.setEpoch = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 global_step = 2;
 * @return {number}
 */
proto.clarifai.api.LossCurveEntry.prototype.getGlobalStep = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LossCurveEntry} returns this
 */
proto.clarifai.api.LossCurveEntry.prototype.setGlobalStep = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional float cost = 3;
 * @return {number}
 */
proto.clarifai.api.LossCurveEntry.prototype.getCost = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LossCurveEntry} returns this
 */
proto.clarifai.api.LossCurveEntry.prototype.setCost = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};





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
proto.clarifai.api.LabelCount.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.LabelCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.LabelCount} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LabelCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    conceptName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.clarifai.api.LabelCount}
 */
proto.clarifai.api.LabelCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.LabelCount;
  return proto.clarifai.api.LabelCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.LabelCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.LabelCount}
 */
proto.clarifai.api.LabelCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConceptName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.clarifai.api.LabelCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.LabelCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.LabelCount} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LabelCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConceptName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional string concept_name = 1;
 * @return {string}
 */
proto.clarifai.api.LabelCount.prototype.getConceptName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.LabelCount} returns this
 */
proto.clarifai.api.LabelCount.prototype.setConceptName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 count = 2;
 * @return {number}
 */
proto.clarifai.api.LabelCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LabelCount} returns this
 */
proto.clarifai.api.LabelCount.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.LabelDistribution.repeatedFields_ = [1];



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
proto.clarifai.api.LabelDistribution.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.LabelDistribution.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.LabelDistribution} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LabelDistribution.toObject = function(includeInstance, msg) {
  var f, obj = {
    positiveLabelCountsList: jspb.Message.toObjectList(msg.getPositiveLabelCountsList(),
    proto.clarifai.api.LabelCount.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.LabelDistribution}
 */
proto.clarifai.api.LabelDistribution.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.LabelDistribution;
  return proto.clarifai.api.LabelDistribution.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.LabelDistribution} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.LabelDistribution}
 */
proto.clarifai.api.LabelDistribution.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.LabelCount;
      reader.readMessage(value,proto.clarifai.api.LabelCount.deserializeBinaryFromReader);
      msg.addPositiveLabelCounts(value);
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
proto.clarifai.api.LabelDistribution.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.LabelDistribution.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.LabelDistribution} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LabelDistribution.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositiveLabelCountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.LabelCount.serializeBinaryToWriter
    );
  }
};


/**
 * repeated LabelCount positive_label_counts = 1;
 * @return {!Array<!proto.clarifai.api.LabelCount>}
 */
proto.clarifai.api.LabelDistribution.prototype.getPositiveLabelCountsList = function() {
  return /** @type{!Array<!proto.clarifai.api.LabelCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.LabelCount, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.LabelCount>} value
 * @return {!proto.clarifai.api.LabelDistribution} returns this
*/
proto.clarifai.api.LabelDistribution.prototype.setPositiveLabelCountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.LabelCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.LabelCount}
 */
proto.clarifai.api.LabelDistribution.prototype.addPositiveLabelCounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.LabelCount, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.LabelDistribution} returns this
 */
proto.clarifai.api.LabelDistribution.prototype.clearPositiveLabelCountsList = function() {
  return this.setPositiveLabelCountsList([]);
};





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
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.CooccurrenceMatrixEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.CooccurrenceMatrixEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CooccurrenceMatrixEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    row: jspb.Message.getFieldWithDefault(msg, 1, ""),
    col: jspb.Message.getFieldWithDefault(msg, 2, ""),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry}
 */
proto.clarifai.api.CooccurrenceMatrixEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.CooccurrenceMatrixEntry;
  return proto.clarifai.api.CooccurrenceMatrixEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.CooccurrenceMatrixEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry}
 */
proto.clarifai.api.CooccurrenceMatrixEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRow(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setCount(value);
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
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.CooccurrenceMatrixEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.CooccurrenceMatrixEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CooccurrenceMatrixEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRow();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
};


/**
 * optional string row = 1;
 * @return {string}
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.getRow = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry} returns this
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.setRow = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string col = 2;
 * @return {string}
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.getCol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry} returns this
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.setCol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 count = 3;
 * @return {number}
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry} returns this
 */
proto.clarifai.api.CooccurrenceMatrixEntry.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.CooccurrenceMatrix.repeatedFields_ = [1,2];



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
proto.clarifai.api.CooccurrenceMatrix.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.CooccurrenceMatrix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.CooccurrenceMatrix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CooccurrenceMatrix.toObject = function(includeInstance, msg) {
  var f, obj = {
    matrixList: jspb.Message.toObjectList(msg.getMatrixList(),
    proto.clarifai.api.CooccurrenceMatrixEntry.toObject, includeInstance),
    conceptIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.CooccurrenceMatrix}
 */
proto.clarifai.api.CooccurrenceMatrix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.CooccurrenceMatrix;
  return proto.clarifai.api.CooccurrenceMatrix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.CooccurrenceMatrix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.CooccurrenceMatrix}
 */
proto.clarifai.api.CooccurrenceMatrix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.CooccurrenceMatrixEntry;
      reader.readMessage(value,proto.clarifai.api.CooccurrenceMatrixEntry.deserializeBinaryFromReader);
      msg.addMatrix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addConceptIds(value);
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
proto.clarifai.api.CooccurrenceMatrix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.CooccurrenceMatrix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.CooccurrenceMatrix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CooccurrenceMatrix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatrixList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.CooccurrenceMatrixEntry.serializeBinaryToWriter
    );
  }
  f = message.getConceptIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated CooccurrenceMatrixEntry matrix = 1;
 * @return {!Array<!proto.clarifai.api.CooccurrenceMatrixEntry>}
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.getMatrixList = function() {
  return /** @type{!Array<!proto.clarifai.api.CooccurrenceMatrixEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.CooccurrenceMatrixEntry, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.CooccurrenceMatrixEntry>} value
 * @return {!proto.clarifai.api.CooccurrenceMatrix} returns this
*/
proto.clarifai.api.CooccurrenceMatrix.prototype.setMatrixList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.CooccurrenceMatrixEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.CooccurrenceMatrixEntry}
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.addMatrix = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.CooccurrenceMatrixEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.CooccurrenceMatrix} returns this
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.clearMatrixList = function() {
  return this.setMatrixList([]);
};


/**
 * repeated string concept_ids = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.getConceptIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.CooccurrenceMatrix} returns this
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.setConceptIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.CooccurrenceMatrix} returns this
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.addConceptIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.CooccurrenceMatrix} returns this
 */
proto.clarifai.api.CooccurrenceMatrix.prototype.clearConceptIdsList = function() {
  return this.setConceptIdsList([]);
};





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
proto.clarifai.api.ConfusionMatrixEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConfusionMatrixEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConfusionMatrixEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConfusionMatrixEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    predicted: jspb.Message.getFieldWithDefault(msg, 1, ""),
    actual: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0)
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
 * @return {!proto.clarifai.api.ConfusionMatrixEntry}
 */
proto.clarifai.api.ConfusionMatrixEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConfusionMatrixEntry;
  return proto.clarifai.api.ConfusionMatrixEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConfusionMatrixEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConfusionMatrixEntry}
 */
proto.clarifai.api.ConfusionMatrixEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPredicted(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setActual(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
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
proto.clarifai.api.ConfusionMatrixEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConfusionMatrixEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConfusionMatrixEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConfusionMatrixEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPredicted();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getActual();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string predicted = 1;
 * @return {string}
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.getPredicted = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConfusionMatrixEntry} returns this
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.setPredicted = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string actual = 2;
 * @return {string}
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.getActual = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ConfusionMatrixEntry} returns this
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.setActual = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float value = 4;
 * @return {number}
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.ConfusionMatrixEntry} returns this
 */
proto.clarifai.api.ConfusionMatrixEntry.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ConfusionMatrix.repeatedFields_ = [1,2];



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
proto.clarifai.api.ConfusionMatrix.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ConfusionMatrix.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ConfusionMatrix} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConfusionMatrix.toObject = function(includeInstance, msg) {
  var f, obj = {
    matrixList: jspb.Message.toObjectList(msg.getMatrixList(),
    proto.clarifai.api.ConfusionMatrixEntry.toObject, includeInstance),
    conceptIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.ConfusionMatrix}
 */
proto.clarifai.api.ConfusionMatrix.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ConfusionMatrix;
  return proto.clarifai.api.ConfusionMatrix.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ConfusionMatrix} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ConfusionMatrix}
 */
proto.clarifai.api.ConfusionMatrix.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.ConfusionMatrixEntry;
      reader.readMessage(value,proto.clarifai.api.ConfusionMatrixEntry.deserializeBinaryFromReader);
      msg.addMatrix(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addConceptIds(value);
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
proto.clarifai.api.ConfusionMatrix.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ConfusionMatrix.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ConfusionMatrix} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ConfusionMatrix.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMatrixList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.ConfusionMatrixEntry.serializeBinaryToWriter
    );
  }
  f = message.getConceptIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated ConfusionMatrixEntry matrix = 1;
 * @return {!Array<!proto.clarifai.api.ConfusionMatrixEntry>}
 */
proto.clarifai.api.ConfusionMatrix.prototype.getMatrixList = function() {
  return /** @type{!Array<!proto.clarifai.api.ConfusionMatrixEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.ConfusionMatrixEntry, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.ConfusionMatrixEntry>} value
 * @return {!proto.clarifai.api.ConfusionMatrix} returns this
*/
proto.clarifai.api.ConfusionMatrix.prototype.setMatrixList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.ConfusionMatrixEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ConfusionMatrixEntry}
 */
proto.clarifai.api.ConfusionMatrix.prototype.addMatrix = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.ConfusionMatrixEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ConfusionMatrix} returns this
 */
proto.clarifai.api.ConfusionMatrix.prototype.clearMatrixList = function() {
  return this.setMatrixList([]);
};


/**
 * repeated string concept_ids = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.ConfusionMatrix.prototype.getConceptIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.ConfusionMatrix} returns this
 */
proto.clarifai.api.ConfusionMatrix.prototype.setConceptIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ConfusionMatrix} returns this
 */
proto.clarifai.api.ConfusionMatrix.prototype.addConceptIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ConfusionMatrix} returns this
 */
proto.clarifai.api.ConfusionMatrix.prototype.clearConceptIdsList = function() {
  return this.setConceptIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ROC.repeatedFields_ = [1,2,3,4,5];



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
proto.clarifai.api.ROC.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ROC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ROC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ROC.toObject = function(includeInstance, msg) {
  var f, obj = {
    fprList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    tprList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    thresholdsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f,
    fprPerImageList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 4)) == null ? undefined : f,
    fprPerObjectList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.ROC}
 */
proto.clarifai.api.ROC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ROC;
  return proto.clarifai.api.ROC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ROC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ROC}
 */
proto.clarifai.api.ROC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFpr(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addTpr(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addThresholds(values[i]);
      }
      break;
    case 4:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFprPerImage(values[i]);
      }
      break;
    case 5:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addFprPerObject(values[i]);
      }
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
proto.clarifai.api.ROC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ROC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ROC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ROC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFprList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getTprList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getThresholdsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
  f = message.getFprPerImageList();
  if (f.length > 0) {
    writer.writePackedFloat(
      4,
      f
    );
  }
  f = message.getFprPerObjectList();
  if (f.length > 0) {
    writer.writePackedFloat(
      5,
      f
    );
  }
};


/**
 * repeated float fpr = 1;
 * @return {!Array<number>}
 */
proto.clarifai.api.ROC.prototype.getFprList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.setFprList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.addFpr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.clearFprList = function() {
  return this.setFprList([]);
};


/**
 * repeated float tpr = 2;
 * @return {!Array<number>}
 */
proto.clarifai.api.ROC.prototype.getTprList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.setTprList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.addTpr = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.clearTprList = function() {
  return this.setTprList([]);
};


/**
 * repeated float thresholds = 3;
 * @return {!Array<number>}
 */
proto.clarifai.api.ROC.prototype.getThresholdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.setThresholdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.addThresholds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.clearThresholdsList = function() {
  return this.setThresholdsList([]);
};


/**
 * repeated float fpr_per_image = 4;
 * @return {!Array<number>}
 */
proto.clarifai.api.ROC.prototype.getFprPerImageList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 4));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.setFprPerImageList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.addFprPerImage = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.clearFprPerImageList = function() {
  return this.setFprPerImageList([]);
};


/**
 * repeated float fpr_per_object = 5;
 * @return {!Array<number>}
 */
proto.clarifai.api.ROC.prototype.getFprPerObjectList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 5));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.setFprPerObjectList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.addFprPerObject = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ROC} returns this
 */
proto.clarifai.api.ROC.prototype.clearFprPerObjectList = function() {
  return this.setFprPerObjectList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.PrecisionRecallCurve.repeatedFields_ = [1,2,3];



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
proto.clarifai.api.PrecisionRecallCurve.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.PrecisionRecallCurve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.PrecisionRecallCurve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PrecisionRecallCurve.toObject = function(includeInstance, msg) {
  var f, obj = {
    recallList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 1)) == null ? undefined : f,
    precisionList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f,
    thresholdsList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.PrecisionRecallCurve}
 */
proto.clarifai.api.PrecisionRecallCurve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.PrecisionRecallCurve;
  return proto.clarifai.api.PrecisionRecallCurve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.PrecisionRecallCurve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.PrecisionRecallCurve}
 */
proto.clarifai.api.PrecisionRecallCurve.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addRecall(values[i]);
      }
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addPrecision(values[i]);
      }
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedFloat() : [reader.readFloat()]);
      for (var i = 0; i < values.length; i++) {
        msg.addThresholds(values[i]);
      }
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
proto.clarifai.api.PrecisionRecallCurve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.PrecisionRecallCurve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.PrecisionRecallCurve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PrecisionRecallCurve.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecallList();
  if (f.length > 0) {
    writer.writePackedFloat(
      1,
      f
    );
  }
  f = message.getPrecisionList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
  f = message.getThresholdsList();
  if (f.length > 0) {
    writer.writePackedFloat(
      3,
      f
    );
  }
};


/**
 * repeated float recall = 1;
 * @return {!Array<number>}
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.getRecallList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 1));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.setRecallList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.addRecall = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.clearRecallList = function() {
  return this.setRecallList([]);
};


/**
 * repeated float precision = 2;
 * @return {!Array<number>}
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.getPrecisionList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.setPrecisionList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.addPrecision = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.clearPrecisionList = function() {
  return this.setPrecisionList([]);
};


/**
 * repeated float thresholds = 3;
 * @return {!Array<number>}
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.getThresholdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.setThresholdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.addThresholds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.PrecisionRecallCurve} returns this
 */
proto.clarifai.api.PrecisionRecallCurve.prototype.clearThresholdsList = function() {
  return this.setThresholdsList([]);
};





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
proto.clarifai.api.BinaryMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.BinaryMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.BinaryMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.BinaryMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    numPos: jspb.Message.getFieldWithDefault(msg, 1, 0),
    numNeg: jspb.Message.getFieldWithDefault(msg, 2, 0),
    numTot: jspb.Message.getFieldWithDefault(msg, 3, 0),
    rocAuc: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    f1: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    concept: (f = msg.getConcept()) && proto.clarifai.api.Concept.toObject(includeInstance, f),
    rocCurve: (f = msg.getRocCurve()) && proto.clarifai.api.ROC.toObject(includeInstance, f),
    precisionRecallCurve: (f = msg.getPrecisionRecallCurve()) && proto.clarifai.api.PrecisionRecallCurve.toObject(includeInstance, f),
    avgPrecision: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    areaName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    areaMin: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    areaMax: jspb.Message.getFloatingPointFieldWithDefault(msg, 12, 0.0),
    iou: jspb.Message.getFloatingPointFieldWithDefault(msg, 13, 0.0)
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
 * @return {!proto.clarifai.api.BinaryMetrics}
 */
proto.clarifai.api.BinaryMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.BinaryMetrics;
  return proto.clarifai.api.BinaryMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.BinaryMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.BinaryMetrics}
 */
proto.clarifai.api.BinaryMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumPos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumNeg(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNumTot(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRocAuc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setF1(value);
      break;
    case 6:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.setConcept(value);
      break;
    case 7:
      var value = new proto.clarifai.api.ROC;
      reader.readMessage(value,proto.clarifai.api.ROC.deserializeBinaryFromReader);
      msg.setRocCurve(value);
      break;
    case 8:
      var value = new proto.clarifai.api.PrecisionRecallCurve;
      reader.readMessage(value,proto.clarifai.api.PrecisionRecallCurve.deserializeBinaryFromReader);
      msg.setPrecisionRecallCurve(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAvgPrecision(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAreaName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAreaMin(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAreaMax(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setIou(value);
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
proto.clarifai.api.BinaryMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.BinaryMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.BinaryMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.BinaryMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNumPos();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
  f = message.getNumNeg();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getNumTot();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getRocAuc();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getF1();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getConcept();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getRocCurve();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.clarifai.api.ROC.serializeBinaryToWriter
    );
  }
  f = message.getPrecisionRecallCurve();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.clarifai.api.PrecisionRecallCurve.serializeBinaryToWriter
    );
  }
  f = message.getAvgPrecision();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getAreaName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAreaMin();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getAreaMax();
  if (f !== 0.0) {
    writer.writeDouble(
      12,
      f
    );
  }
  f = message.getIou();
  if (f !== 0.0) {
    writer.writeFloat(
      13,
      f
    );
  }
};


/**
 * optional uint32 num_pos = 1;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getNumPos = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setNumPos = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 num_neg = 2;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getNumNeg = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setNumNeg = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 num_tot = 3;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getNumTot = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setNumTot = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float roc_auc = 4;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getRocAuc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setRocAuc = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float f1 = 5;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getF1 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setF1 = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional Concept concept = 6;
 * @return {?proto.clarifai.api.Concept}
 */
proto.clarifai.api.BinaryMetrics.prototype.getConcept = function() {
  return /** @type{?proto.clarifai.api.Concept} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Concept, 6));
};


/**
 * @param {?proto.clarifai.api.Concept|undefined} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
*/
proto.clarifai.api.BinaryMetrics.prototype.setConcept = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.clearConcept = function() {
  return this.setConcept(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.BinaryMetrics.prototype.hasConcept = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ROC roc_curve = 7;
 * @return {?proto.clarifai.api.ROC}
 */
proto.clarifai.api.BinaryMetrics.prototype.getRocCurve = function() {
  return /** @type{?proto.clarifai.api.ROC} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ROC, 7));
};


/**
 * @param {?proto.clarifai.api.ROC|undefined} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
*/
proto.clarifai.api.BinaryMetrics.prototype.setRocCurve = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.clearRocCurve = function() {
  return this.setRocCurve(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.BinaryMetrics.prototype.hasRocCurve = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional PrecisionRecallCurve precision_recall_curve = 8;
 * @return {?proto.clarifai.api.PrecisionRecallCurve}
 */
proto.clarifai.api.BinaryMetrics.prototype.getPrecisionRecallCurve = function() {
  return /** @type{?proto.clarifai.api.PrecisionRecallCurve} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.PrecisionRecallCurve, 8));
};


/**
 * @param {?proto.clarifai.api.PrecisionRecallCurve|undefined} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
*/
proto.clarifai.api.BinaryMetrics.prototype.setPrecisionRecallCurve = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.clearPrecisionRecallCurve = function() {
  return this.setPrecisionRecallCurve(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.BinaryMetrics.prototype.hasPrecisionRecallCurve = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional float avg_precision = 9;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getAvgPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setAvgPrecision = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional string area_name = 10;
 * @return {string}
 */
proto.clarifai.api.BinaryMetrics.prototype.getAreaName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setAreaName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional double area_min = 11;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getAreaMin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setAreaMin = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional double area_max = 12;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getAreaMax = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 12, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setAreaMax = function(value) {
  return jspb.Message.setProto3FloatField(this, 12, value);
};


/**
 * optional float iou = 13;
 * @return {number}
 */
proto.clarifai.api.BinaryMetrics.prototype.getIou = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 13, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.BinaryMetrics} returns this
 */
proto.clarifai.api.BinaryMetrics.prototype.setIou = function(value) {
  return jspb.Message.setProto3FloatField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.EvalTestSetEntry.repeatedFields_ = [3,4];



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
proto.clarifai.api.EvalTestSetEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.EvalTestSetEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.EvalTestSetEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EvalTestSetEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    predictedConceptsList: jspb.Message.toObjectList(msg.getPredictedConceptsList(),
    proto.clarifai.api.Concept.toObject, includeInstance),
    groundTruthConceptsList: jspb.Message.toObjectList(msg.getGroundTruthConceptsList(),
    proto.clarifai.api.Concept.toObject, includeInstance),
    annotation: (f = msg.getAnnotation()) && proto.clarifai.api.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.EvalTestSetEntry}
 */
proto.clarifai.api.EvalTestSetEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.EvalTestSetEntry;
  return proto.clarifai.api.EvalTestSetEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.EvalTestSetEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.EvalTestSetEntry}
 */
proto.clarifai.api.EvalTestSetEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.addPredictedConcepts(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Concept;
      reader.readMessage(value,proto.clarifai.api.Concept.deserializeBinaryFromReader);
      msg.addGroundTruthConcepts(value);
      break;
    case 5:
      var value = new proto.clarifai.api.Annotation;
      reader.readMessage(value,proto.clarifai.api.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.clarifai.api.EvalTestSetEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.EvalTestSetEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.EvalTestSetEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EvalTestSetEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPredictedConceptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getGroundTruthConceptsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clarifai.api.Concept.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
 */
proto.clarifai.api.EvalTestSetEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
 */
proto.clarifai.api.EvalTestSetEntry.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Concept predicted_concepts = 3;
 * @return {!Array<!proto.clarifai.api.Concept>}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.getPredictedConceptsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Concept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Concept, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.Concept>} value
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
*/
proto.clarifai.api.EvalTestSetEntry.prototype.setPredictedConceptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.Concept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.addPredictedConcepts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.Concept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
 */
proto.clarifai.api.EvalTestSetEntry.prototype.clearPredictedConceptsList = function() {
  return this.setPredictedConceptsList([]);
};


/**
 * repeated Concept ground_truth_concepts = 4;
 * @return {!Array<!proto.clarifai.api.Concept>}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.getGroundTruthConceptsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Concept>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Concept, 4));
};


/**
 * @param {!Array<!proto.clarifai.api.Concept>} value
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
*/
proto.clarifai.api.EvalTestSetEntry.prototype.setGroundTruthConceptsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clarifai.api.Concept=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Concept}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.addGroundTruthConcepts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clarifai.api.Concept, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
 */
proto.clarifai.api.EvalTestSetEntry.prototype.clearGroundTruthConceptsList = function() {
  return this.setGroundTruthConceptsList([]);
};


/**
 * optional Annotation annotation = 5;
 * @return {?proto.clarifai.api.Annotation}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.getAnnotation = function() {
  return /** @type{?proto.clarifai.api.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Annotation, 5));
};


/**
 * @param {?proto.clarifai.api.Annotation|undefined} value
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
*/
proto.clarifai.api.EvalTestSetEntry.prototype.setAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalTestSetEntry} returns this
 */
proto.clarifai.api.EvalTestSetEntry.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalTestSetEntry.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.clarifai.api.LOPQEvalResult.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.LOPQEvalResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.LOPQEvalResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LOPQEvalResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    k: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recallVsBruteForce: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    kendallTauVsBruteForce: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    mostFrequentCodePercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    lopqNdcg: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    bruteForceNdcg: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0)
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
 * @return {!proto.clarifai.api.LOPQEvalResult}
 */
proto.clarifai.api.LOPQEvalResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.LOPQEvalResult;
  return proto.clarifai.api.LOPQEvalResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.LOPQEvalResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.LOPQEvalResult}
 */
proto.clarifai.api.LOPQEvalResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setK(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setRecallVsBruteForce(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setKendallTauVsBruteForce(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMostFrequentCodePercent(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setLopqNdcg(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBruteForceNdcg(value);
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
proto.clarifai.api.LOPQEvalResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.LOPQEvalResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.LOPQEvalResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.LOPQEvalResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getK();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRecallVsBruteForce();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getKendallTauVsBruteForce();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMostFrequentCodePercent();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getLopqNdcg();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getBruteForceNdcg();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
};


/**
 * optional int32 k = 1;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getK = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setK = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional float recall_vs_brute_force = 2;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getRecallVsBruteForce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setRecallVsBruteForce = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float kendall_tau_vs_brute_force = 3;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getKendallTauVsBruteForce = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setKendallTauVsBruteForce = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float most_frequent_code_percent = 4;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getMostFrequentCodePercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setMostFrequentCodePercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float lopq_ndcg = 5;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getLopqNdcg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setLopqNdcg = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float brute_force_ndcg = 6;
 * @return {number}
 */
proto.clarifai.api.LOPQEvalResult.prototype.getBruteForceNdcg = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.LOPQEvalResult} returns this
 */
proto.clarifai.api.LOPQEvalResult.prototype.setBruteForceNdcg = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.MetricsSummary.repeatedFields_ = [9];



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
proto.clarifai.api.MetricsSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.MetricsSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.MetricsSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.MetricsSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
    top1Accuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    top5Accuracy: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    macroAvgRocAuc: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    macroStdRocAuc: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    macroAvgF1Score: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    macroStdF1Score: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    macroAvgPrecision: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
    macroAvgRecall: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    meanAvgPrecisionIou50: jspb.Message.getFloatingPointFieldWithDefault(msg, 10, 0.0),
    meanAvgPrecisionIouRange: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    lopqMetricsList: jspb.Message.toObjectList(msg.getLopqMetricsList(),
    proto.clarifai.api.LOPQEvalResult.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.MetricsSummary}
 */
proto.clarifai.api.MetricsSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.MetricsSummary;
  return proto.clarifai.api.MetricsSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.MetricsSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.MetricsSummary}
 */
proto.clarifai.api.MetricsSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTop1Accuracy(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setTop5Accuracy(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroAvgRocAuc(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroStdRocAuc(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroAvgF1Score(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroStdF1Score(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroAvgPrecision(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMacroAvgRecall(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMeanAvgPrecisionIou50(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMeanAvgPrecisionIouRange(value);
      break;
    case 9:
      var value = new proto.clarifai.api.LOPQEvalResult;
      reader.readMessage(value,proto.clarifai.api.LOPQEvalResult.deserializeBinaryFromReader);
      msg.addLopqMetrics(value);
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
proto.clarifai.api.MetricsSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.MetricsSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.MetricsSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.MetricsSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTop1Accuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getTop5Accuracy();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getMacroAvgRocAuc();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getMacroStdRocAuc();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getMacroAvgF1Score();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getMacroStdF1Score();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getMacroAvgPrecision();
  if (f !== 0.0) {
    writer.writeFloat(
      7,
      f
    );
  }
  f = message.getMacroAvgRecall();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getMeanAvgPrecisionIou50();
  if (f !== 0.0) {
    writer.writeFloat(
      10,
      f
    );
  }
  f = message.getMeanAvgPrecisionIouRange();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
  f = message.getLopqMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.clarifai.api.LOPQEvalResult.serializeBinaryToWriter
    );
  }
};


/**
 * optional float top1_accuracy = 1;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getTop1Accuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setTop1Accuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float top5_accuracy = 2;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getTop5Accuracy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setTop5Accuracy = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float macro_avg_roc_auc = 3;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroAvgRocAuc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroAvgRocAuc = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float macro_std_roc_auc = 4;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroStdRocAuc = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroStdRocAuc = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional float macro_avg_f1_score = 5;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroAvgF1Score = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroAvgF1Score = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float macro_std_f1_score = 6;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroStdF1Score = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroStdF1Score = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional float macro_avg_precision = 7;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroAvgPrecision = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroAvgPrecision = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional float macro_avg_recall = 8;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMacroAvgRecall = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMacroAvgRecall = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float mean_avg_precision_iou_50 = 10;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMeanAvgPrecisionIou50 = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 10, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMeanAvgPrecisionIou50 = function(value) {
  return jspb.Message.setProto3FloatField(this, 10, value);
};


/**
 * optional float mean_avg_precision_iou_range = 11;
 * @return {number}
 */
proto.clarifai.api.MetricsSummary.prototype.getMeanAvgPrecisionIouRange = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.setMeanAvgPrecisionIouRange = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * repeated LOPQEvalResult lopq_metrics = 9;
 * @return {!Array<!proto.clarifai.api.LOPQEvalResult>}
 */
proto.clarifai.api.MetricsSummary.prototype.getLopqMetricsList = function() {
  return /** @type{!Array<!proto.clarifai.api.LOPQEvalResult>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.LOPQEvalResult, 9));
};


/**
 * @param {!Array<!proto.clarifai.api.LOPQEvalResult>} value
 * @return {!proto.clarifai.api.MetricsSummary} returns this
*/
proto.clarifai.api.MetricsSummary.prototype.setLopqMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.clarifai.api.LOPQEvalResult=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.LOPQEvalResult}
 */
proto.clarifai.api.MetricsSummary.prototype.addLopqMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.clarifai.api.LOPQEvalResult, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.MetricsSummary} returns this
 */
proto.clarifai.api.MetricsSummary.prototype.clearLopqMetricsList = function() {
  return this.setLopqMetricsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.EvalMetrics.repeatedFields_ = [6,7,8,9];



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
proto.clarifai.api.EvalMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.EvalMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.EvalMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EvalMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 10, ""),
    summary: (f = msg.getSummary()) && proto.clarifai.api.MetricsSummary.toObject(includeInstance, f),
    confusionMatrix: (f = msg.getConfusionMatrix()) && proto.clarifai.api.ConfusionMatrix.toObject(includeInstance, f),
    cooccurrenceMatrix: (f = msg.getCooccurrenceMatrix()) && proto.clarifai.api.CooccurrenceMatrix.toObject(includeInstance, f),
    labelCounts: (f = msg.getLabelCounts()) && proto.clarifai.api.LabelDistribution.toObject(includeInstance, f),
    binaryMetricsList: jspb.Message.toObjectList(msg.getBinaryMetricsList(),
    proto.clarifai.api.BinaryMetrics.toObject, includeInstance),
    testSetList: jspb.Message.toObjectList(msg.getTestSetList(),
    proto.clarifai.api.EvalTestSetEntry.toObject, includeInstance),
    metricsByAreaList: jspb.Message.toObjectList(msg.getMetricsByAreaList(),
    proto.clarifai.api.BinaryMetrics.toObject, includeInstance),
    metricsByClassList: jspb.Message.toObjectList(msg.getMetricsByClassList(),
    proto.clarifai.api.BinaryMetrics.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.EvalMetrics}
 */
proto.clarifai.api.EvalMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.EvalMetrics;
  return proto.clarifai.api.EvalMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.EvalMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.EvalMetrics}
 */
proto.clarifai.api.EvalMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.MetricsSummary;
      reader.readMessage(value,proto.clarifai.api.MetricsSummary.deserializeBinaryFromReader);
      msg.setSummary(value);
      break;
    case 3:
      var value = new proto.clarifai.api.ConfusionMatrix;
      reader.readMessage(value,proto.clarifai.api.ConfusionMatrix.deserializeBinaryFromReader);
      msg.setConfusionMatrix(value);
      break;
    case 4:
      var value = new proto.clarifai.api.CooccurrenceMatrix;
      reader.readMessage(value,proto.clarifai.api.CooccurrenceMatrix.deserializeBinaryFromReader);
      msg.setCooccurrenceMatrix(value);
      break;
    case 5:
      var value = new proto.clarifai.api.LabelDistribution;
      reader.readMessage(value,proto.clarifai.api.LabelDistribution.deserializeBinaryFromReader);
      msg.setLabelCounts(value);
      break;
    case 6:
      var value = new proto.clarifai.api.BinaryMetrics;
      reader.readMessage(value,proto.clarifai.api.BinaryMetrics.deserializeBinaryFromReader);
      msg.addBinaryMetrics(value);
      break;
    case 7:
      var value = new proto.clarifai.api.EvalTestSetEntry;
      reader.readMessage(value,proto.clarifai.api.EvalTestSetEntry.deserializeBinaryFromReader);
      msg.addTestSet(value);
      break;
    case 8:
      var value = new proto.clarifai.api.BinaryMetrics;
      reader.readMessage(value,proto.clarifai.api.BinaryMetrics.deserializeBinaryFromReader);
      msg.addMetricsByArea(value);
      break;
    case 9:
      var value = new proto.clarifai.api.BinaryMetrics;
      reader.readMessage(value,proto.clarifai.api.BinaryMetrics.deserializeBinaryFromReader);
      msg.addMetricsByClass(value);
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
proto.clarifai.api.EvalMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.EvalMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.EvalMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EvalMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSummary();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.MetricsSummary.serializeBinaryToWriter
    );
  }
  f = message.getConfusionMatrix();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.ConfusionMatrix.serializeBinaryToWriter
    );
  }
  f = message.getCooccurrenceMatrix();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.CooccurrenceMatrix.serializeBinaryToWriter
    );
  }
  f = message.getLabelCounts();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.LabelDistribution.serializeBinaryToWriter
    );
  }
  f = message.getBinaryMetricsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.clarifai.api.BinaryMetrics.serializeBinaryToWriter
    );
  }
  f = message.getTestSetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.clarifai.api.EvalTestSetEntry.serializeBinaryToWriter
    );
  }
  f = message.getMetricsByAreaList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.clarifai.api.BinaryMetrics.serializeBinaryToWriter
    );
  }
  f = message.getMetricsByClassList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.clarifai.api.BinaryMetrics.serializeBinaryToWriter
    );
  }
};


/**
 * optional status.Status status = 1;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.EvalMetrics.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 1));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalMetrics.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 10;
 * @return {string}
 */
proto.clarifai.api.EvalMetrics.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional MetricsSummary summary = 2;
 * @return {?proto.clarifai.api.MetricsSummary}
 */
proto.clarifai.api.EvalMetrics.prototype.getSummary = function() {
  return /** @type{?proto.clarifai.api.MetricsSummary} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.MetricsSummary, 2));
};


/**
 * @param {?proto.clarifai.api.MetricsSummary|undefined} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setSummary = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearSummary = function() {
  return this.setSummary(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalMetrics.prototype.hasSummary = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ConfusionMatrix confusion_matrix = 3;
 * @return {?proto.clarifai.api.ConfusionMatrix}
 */
proto.clarifai.api.EvalMetrics.prototype.getConfusionMatrix = function() {
  return /** @type{?proto.clarifai.api.ConfusionMatrix} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.ConfusionMatrix, 3));
};


/**
 * @param {?proto.clarifai.api.ConfusionMatrix|undefined} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setConfusionMatrix = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearConfusionMatrix = function() {
  return this.setConfusionMatrix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalMetrics.prototype.hasConfusionMatrix = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional CooccurrenceMatrix cooccurrence_matrix = 4;
 * @return {?proto.clarifai.api.CooccurrenceMatrix}
 */
proto.clarifai.api.EvalMetrics.prototype.getCooccurrenceMatrix = function() {
  return /** @type{?proto.clarifai.api.CooccurrenceMatrix} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.CooccurrenceMatrix, 4));
};


/**
 * @param {?proto.clarifai.api.CooccurrenceMatrix|undefined} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setCooccurrenceMatrix = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearCooccurrenceMatrix = function() {
  return this.setCooccurrenceMatrix(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalMetrics.prototype.hasCooccurrenceMatrix = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LabelDistribution label_counts = 5;
 * @return {?proto.clarifai.api.LabelDistribution}
 */
proto.clarifai.api.EvalMetrics.prototype.getLabelCounts = function() {
  return /** @type{?proto.clarifai.api.LabelDistribution} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.LabelDistribution, 5));
};


/**
 * @param {?proto.clarifai.api.LabelDistribution|undefined} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setLabelCounts = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearLabelCounts = function() {
  return this.setLabelCounts(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.EvalMetrics.prototype.hasLabelCounts = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated BinaryMetrics binary_metrics = 6;
 * @return {!Array<!proto.clarifai.api.BinaryMetrics>}
 */
proto.clarifai.api.EvalMetrics.prototype.getBinaryMetricsList = function() {
  return /** @type{!Array<!proto.clarifai.api.BinaryMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.BinaryMetrics, 6));
};


/**
 * @param {!Array<!proto.clarifai.api.BinaryMetrics>} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setBinaryMetricsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.clarifai.api.BinaryMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.BinaryMetrics}
 */
proto.clarifai.api.EvalMetrics.prototype.addBinaryMetrics = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.clarifai.api.BinaryMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearBinaryMetricsList = function() {
  return this.setBinaryMetricsList([]);
};


/**
 * repeated EvalTestSetEntry test_set = 7;
 * @return {!Array<!proto.clarifai.api.EvalTestSetEntry>}
 */
proto.clarifai.api.EvalMetrics.prototype.getTestSetList = function() {
  return /** @type{!Array<!proto.clarifai.api.EvalTestSetEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.EvalTestSetEntry, 7));
};


/**
 * @param {!Array<!proto.clarifai.api.EvalTestSetEntry>} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setTestSetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.clarifai.api.EvalTestSetEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.EvalTestSetEntry}
 */
proto.clarifai.api.EvalMetrics.prototype.addTestSet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.clarifai.api.EvalTestSetEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearTestSetList = function() {
  return this.setTestSetList([]);
};


/**
 * repeated BinaryMetrics metrics_by_area = 8;
 * @return {!Array<!proto.clarifai.api.BinaryMetrics>}
 */
proto.clarifai.api.EvalMetrics.prototype.getMetricsByAreaList = function() {
  return /** @type{!Array<!proto.clarifai.api.BinaryMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.BinaryMetrics, 8));
};


/**
 * @param {!Array<!proto.clarifai.api.BinaryMetrics>} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setMetricsByAreaList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.clarifai.api.BinaryMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.BinaryMetrics}
 */
proto.clarifai.api.EvalMetrics.prototype.addMetricsByArea = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.clarifai.api.BinaryMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearMetricsByAreaList = function() {
  return this.setMetricsByAreaList([]);
};


/**
 * repeated BinaryMetrics metrics_by_class = 9;
 * @return {!Array<!proto.clarifai.api.BinaryMetrics>}
 */
proto.clarifai.api.EvalMetrics.prototype.getMetricsByClassList = function() {
  return /** @type{!Array<!proto.clarifai.api.BinaryMetrics>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.BinaryMetrics, 9));
};


/**
 * @param {!Array<!proto.clarifai.api.BinaryMetrics>} value
 * @return {!proto.clarifai.api.EvalMetrics} returns this
*/
proto.clarifai.api.EvalMetrics.prototype.setMetricsByClassList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.clarifai.api.BinaryMetrics=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.BinaryMetrics}
 */
proto.clarifai.api.EvalMetrics.prototype.addMetricsByClass = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.clarifai.api.BinaryMetrics, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EvalMetrics} returns this
 */
proto.clarifai.api.EvalMetrics.prototype.clearMetricsByClassList = function() {
  return this.setMetricsByClassList([]);
};





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
proto.clarifai.api.FieldsValue.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.FieldsValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.FieldsValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.FieldsValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    confusionMatrix: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    cooccurrenceMatrix: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    labelCounts: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    binaryMetrics: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    testSet: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    metricsByArea: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    metricsByClass: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.clarifai.api.FieldsValue}
 */
proto.clarifai.api.FieldsValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.FieldsValue;
  return proto.clarifai.api.FieldsValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.FieldsValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.FieldsValue}
 */
proto.clarifai.api.FieldsValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setConfusionMatrix(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCooccurrenceMatrix(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLabelCounts(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBinaryMetrics(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTestSet(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMetricsByArea(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMetricsByClass(value);
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
proto.clarifai.api.FieldsValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.FieldsValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.FieldsValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.FieldsValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConfusionMatrix();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCooccurrenceMatrix();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getLabelCounts();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getBinaryMetrics();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTestSet();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getMetricsByArea();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getMetricsByClass();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional bool confusion_matrix = 1;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getConfusionMatrix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setConfusionMatrix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool cooccurrence_matrix = 2;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getCooccurrenceMatrix = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setCooccurrenceMatrix = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool label_counts = 3;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getLabelCounts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setLabelCounts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool binary_metrics = 4;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getBinaryMetrics = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setBinaryMetrics = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool test_set = 5;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getTestSet = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setTestSet = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool metrics_by_area = 6;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getMetricsByArea = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setMetricsByArea = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool metrics_by_class = 7;
 * @return {boolean}
 */
proto.clarifai.api.FieldsValue.prototype.getMetricsByClass = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.FieldsValue} returns this
 */
proto.clarifai.api.FieldsValue.prototype.setMetricsByClass = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





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
proto.clarifai.api.Output.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Output.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Output} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Output.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    model: (f = msg.getModel()) && proto.clarifai.api.Model.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.clarifai.api.Input.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Output}
 */
proto.clarifai.api.Output.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Output;
  return proto.clarifai.api.Output.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Output} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Output}
 */
proto.clarifai.api.Output.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Model;
      reader.readMessage(value,proto.clarifai.api.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 5:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.clarifai.api.Output.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Output.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Output} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Output.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Model.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Output.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional status.Status status = 2;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.Output.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 2));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.Output} returns this
*/
proto.clarifai.api.Output.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Output.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Output.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Output} returns this
*/
proto.clarifai.api.Output.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Output.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Model model = 4;
 * @return {?proto.clarifai.api.Model}
 */
proto.clarifai.api.Output.prototype.getModel = function() {
  return /** @type{?proto.clarifai.api.Model} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Model, 4));
};


/**
 * @param {?proto.clarifai.api.Model|undefined} value
 * @return {!proto.clarifai.api.Output} returns this
*/
proto.clarifai.api.Output.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Output.prototype.hasModel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Input input = 5;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.Output.prototype.getInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 5));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.Output} returns this
*/
proto.clarifai.api.Output.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Output.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Data data = 6;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.Output.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 6));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.Output} returns this
*/
proto.clarifai.api.Output.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Output} returns this
 */
proto.clarifai.api.Output.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Output.prototype.hasData = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.ScopeDeps.repeatedFields_ = [2];



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
proto.clarifai.api.ScopeDeps.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.ScopeDeps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.ScopeDeps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ScopeDeps.toObject = function(includeInstance, msg) {
  var f, obj = {
    scope: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dependingScopesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.ScopeDeps}
 */
proto.clarifai.api.ScopeDeps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.ScopeDeps;
  return proto.clarifai.api.ScopeDeps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.ScopeDeps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.ScopeDeps}
 */
proto.clarifai.api.ScopeDeps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setScope(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDependingScopes(value);
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
proto.clarifai.api.ScopeDeps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.ScopeDeps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.ScopeDeps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.ScopeDeps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScope();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDependingScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string scope = 1;
 * @return {string}
 */
proto.clarifai.api.ScopeDeps.prototype.getScope = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.ScopeDeps} returns this
 */
proto.clarifai.api.ScopeDeps.prototype.setScope = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string depending_scopes = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.ScopeDeps.prototype.getDependingScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.ScopeDeps} returns this
 */
proto.clarifai.api.ScopeDeps.prototype.setDependingScopesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.ScopeDeps} returns this
 */
proto.clarifai.api.ScopeDeps.prototype.addDependingScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.ScopeDeps} returns this
 */
proto.clarifai.api.ScopeDeps.prototype.clearDependingScopesList = function() {
  return this.setDependingScopesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.EndpointDeps.repeatedFields_ = [2];



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
proto.clarifai.api.EndpointDeps.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.EndpointDeps.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.EndpointDeps} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EndpointDeps.toObject = function(includeInstance, msg) {
  var f, obj = {
    endpoint: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dependingScopesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.EndpointDeps}
 */
proto.clarifai.api.EndpointDeps.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.EndpointDeps;
  return proto.clarifai.api.EndpointDeps.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.EndpointDeps} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.EndpointDeps}
 */
proto.clarifai.api.EndpointDeps.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEndpoint(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addDependingScopes(value);
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
proto.clarifai.api.EndpointDeps.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.EndpointDeps.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.EndpointDeps} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EndpointDeps.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndpoint();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDependingScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string endpoint = 1;
 * @return {string}
 */
proto.clarifai.api.EndpointDeps.prototype.getEndpoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.EndpointDeps} returns this
 */
proto.clarifai.api.EndpointDeps.prototype.setEndpoint = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string depending_scopes = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.EndpointDeps.prototype.getDependingScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.EndpointDeps} returns this
 */
proto.clarifai.api.EndpointDeps.prototype.setDependingScopesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.EndpointDeps} returns this
 */
proto.clarifai.api.EndpointDeps.prototype.addDependingScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.EndpointDeps} returns this
 */
proto.clarifai.api.EndpointDeps.prototype.clearDependingScopesList = function() {
  return this.setDependingScopesList([]);
};





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
proto.clarifai.api.Hit.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Hit.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Hit} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Hit.toObject = function(includeInstance, msg) {
  var f, obj = {
    score: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    input: (f = msg.getInput()) && proto.clarifai.api.Input.toObject(includeInstance, f),
    annotation: (f = msg.getAnnotation()) && proto.clarifai.api.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Hit}
 */
proto.clarifai.api.Hit.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Hit;
  return proto.clarifai.api.Hit.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Hit} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Hit}
 */
proto.clarifai.api.Hit.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setScore(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Annotation;
      reader.readMessage(value,proto.clarifai.api.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.clarifai.api.Hit.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Hit.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Hit} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Hit.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getScore();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional float score = 1;
 * @return {number}
 */
proto.clarifai.api.Hit.prototype.getScore = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Hit} returns this
 */
proto.clarifai.api.Hit.prototype.setScore = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional Input input = 2;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.Hit.prototype.getInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 2));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.Hit} returns this
*/
proto.clarifai.api.Hit.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Hit} returns this
 */
proto.clarifai.api.Hit.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Hit.prototype.hasInput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Annotation annotation = 3;
 * @return {?proto.clarifai.api.Annotation}
 */
proto.clarifai.api.Hit.prototype.getAnnotation = function() {
  return /** @type{?proto.clarifai.api.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Annotation, 3));
};


/**
 * @param {?proto.clarifai.api.Annotation|undefined} value
 * @return {!proto.clarifai.api.Hit} returns this
*/
proto.clarifai.api.Hit.prototype.setAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Hit} returns this
 */
proto.clarifai.api.Hit.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Hit.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.clarifai.api.And.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.And.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.And} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.And.toObject = function(includeInstance, msg) {
  var f, obj = {
    input: (f = msg.getInput()) && proto.clarifai.api.Input.toObject(includeInstance, f),
    output: (f = msg.getOutput()) && proto.clarifai.api.Output.toObject(includeInstance, f),
    negate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    annotation: (f = msg.getAnnotation()) && proto.clarifai.api.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.And}
 */
proto.clarifai.api.And.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.And;
  return proto.clarifai.api.And.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.And} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.And}
 */
proto.clarifai.api.And.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Output;
      reader.readMessage(value,proto.clarifai.api.Output.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNegate(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Annotation;
      reader.readMessage(value,proto.clarifai.api.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.clarifai.api.And.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.And.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.And} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.And.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Output.serializeBinaryToWriter
    );
  }
  f = message.getNegate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional Input input = 1;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.And.prototype.getInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 1));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.And} returns this
*/
proto.clarifai.api.And.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.And} returns this
 */
proto.clarifai.api.And.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.And.prototype.hasInput = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Output output = 2;
 * @return {?proto.clarifai.api.Output}
 */
proto.clarifai.api.And.prototype.getOutput = function() {
  return /** @type{?proto.clarifai.api.Output} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Output, 2));
};


/**
 * @param {?proto.clarifai.api.Output|undefined} value
 * @return {!proto.clarifai.api.And} returns this
*/
proto.clarifai.api.And.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.And} returns this
 */
proto.clarifai.api.And.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.And.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool negate = 3;
 * @return {boolean}
 */
proto.clarifai.api.And.prototype.getNegate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.And} returns this
 */
proto.clarifai.api.And.prototype.setNegate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Annotation annotation = 4;
 * @return {?proto.clarifai.api.Annotation}
 */
proto.clarifai.api.And.prototype.getAnnotation = function() {
  return /** @type{?proto.clarifai.api.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Annotation, 4));
};


/**
 * @param {?proto.clarifai.api.Annotation|undefined} value
 * @return {!proto.clarifai.api.And} returns this
*/
proto.clarifai.api.And.prototype.setAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.And} returns this
 */
proto.clarifai.api.And.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.And.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Query.repeatedFields_ = [1,3,4];



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
proto.clarifai.api.Query.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Query.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Query} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Query.toObject = function(includeInstance, msg) {
  var f, obj = {
    andsList: jspb.Message.toObjectList(msg.getAndsList(),
    proto.clarifai.api.And.toObject, includeInstance),
    language: jspb.Message.getFieldWithDefault(msg, 2, ""),
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.clarifai.api.Filter.toObject, includeInstance),
    ranksList: jspb.Message.toObjectList(msg.getRanksList(),
    proto.clarifai.api.Rank.toObject, includeInstance)
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
 * @return {!proto.clarifai.api.Query}
 */
proto.clarifai.api.Query.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Query;
  return proto.clarifai.api.Query.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Query} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Query}
 */
proto.clarifai.api.Query.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.And;
      reader.readMessage(value,proto.clarifai.api.And.deserializeBinaryFromReader);
      msg.addAnds(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 3:
      var value = new proto.clarifai.api.Filter;
      reader.readMessage(value,proto.clarifai.api.Filter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Rank;
      reader.readMessage(value,proto.clarifai.api.Rank.deserializeBinaryFromReader);
      msg.addRanks(value);
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
proto.clarifai.api.Query.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Query.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Query} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Query.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAndsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.And.serializeBinaryToWriter
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.Filter.serializeBinaryToWriter
    );
  }
  f = message.getRanksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clarifai.api.Rank.serializeBinaryToWriter
    );
  }
};


/**
 * repeated And ands = 1;
 * @return {!Array<!proto.clarifai.api.And>}
 */
proto.clarifai.api.Query.prototype.getAndsList = function() {
  return /** @type{!Array<!proto.clarifai.api.And>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.And, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.And>} value
 * @return {!proto.clarifai.api.Query} returns this
*/
proto.clarifai.api.Query.prototype.setAndsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.And=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.And}
 */
proto.clarifai.api.Query.prototype.addAnds = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.And, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Query} returns this
 */
proto.clarifai.api.Query.prototype.clearAndsList = function() {
  return this.setAndsList([]);
};


/**
 * optional string language = 2;
 * @return {string}
 */
proto.clarifai.api.Query.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Query} returns this
 */
proto.clarifai.api.Query.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Filter filters = 3;
 * @return {!Array<!proto.clarifai.api.Filter>}
 */
proto.clarifai.api.Query.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.clarifai.api.Filter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Filter, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.Filter>} value
 * @return {!proto.clarifai.api.Query} returns this
*/
proto.clarifai.api.Query.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.Filter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Filter}
 */
proto.clarifai.api.Query.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.Filter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Query} returns this
 */
proto.clarifai.api.Query.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};


/**
 * repeated Rank ranks = 4;
 * @return {!Array<!proto.clarifai.api.Rank>}
 */
proto.clarifai.api.Query.prototype.getRanksList = function() {
  return /** @type{!Array<!proto.clarifai.api.Rank>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Rank, 4));
};


/**
 * @param {!Array<!proto.clarifai.api.Rank>} value
 * @return {!proto.clarifai.api.Query} returns this
*/
proto.clarifai.api.Query.prototype.setRanksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clarifai.api.Rank=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Rank}
 */
proto.clarifai.api.Query.prototype.addRanks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clarifai.api.Rank, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Query} returns this
 */
proto.clarifai.api.Query.prototype.clearRanksList = function() {
  return this.setRanksList([]);
};





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
proto.clarifai.api.Search.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Search.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Search} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Search.toObject = function(includeInstance, msg) {
  var f, obj = {
    query: (f = msg.getQuery()) && proto.clarifai.api.Query.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 2, ""),
    applicationId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    asOf: (f = msg.getAsOf()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    gitHash: jspb.Message.getFieldWithDefault(msg, 6, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    algorithm: jspb.Message.getFieldWithDefault(msg, 9, ""),
    save: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    minValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0)
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
 * @return {!proto.clarifai.api.Search}
 */
proto.clarifai.api.Search.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Search;
  return proto.clarifai.api.Search.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Search} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Search}
 */
proto.clarifai.api.Search.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Query;
      reader.readMessage(value,proto.clarifai.api.Query.deserializeBinaryFromReader);
      msg.setQuery(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApplicationId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setAsOf(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setGitHash(value);
      break;
    case 7:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlgorithm(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSave(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinValue(value);
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
proto.clarifai.api.Search.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Search.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Search} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Search.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQuery();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Query.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApplicationId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAsOf();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getGitHash();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAlgorithm();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSave();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getMinValue();
  if (f !== 0.0) {
    writer.writeFloat(
      11,
      f
    );
  }
};


/**
 * optional Query query = 1;
 * @return {?proto.clarifai.api.Query}
 */
proto.clarifai.api.Search.prototype.getQuery = function() {
  return /** @type{?proto.clarifai.api.Query} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Query, 1));
};


/**
 * @param {?proto.clarifai.api.Query|undefined} value
 * @return {!proto.clarifai.api.Search} returns this
*/
proto.clarifai.api.Search.prototype.setQuery = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.clearQuery = function() {
  return this.setQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Search.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.clarifai.api.Search.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string application_id = 3;
 * @return {string}
 */
proto.clarifai.api.Search.prototype.getApplicationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setApplicationId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.clarifai.api.Search.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp as_of = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Search.prototype.getAsOf = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Search} returns this
*/
proto.clarifai.api.Search.prototype.setAsOf = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.clearAsOf = function() {
  return this.setAsOf(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Search.prototype.hasAsOf = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string git_hash = 6;
 * @return {string}
 */
proto.clarifai.api.Search.prototype.getGitHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setGitHash = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 7;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Search.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 7));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Search} returns this
*/
proto.clarifai.api.Search.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Search.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Search.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Search} returns this
*/
proto.clarifai.api.Search.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Search.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string algorithm = 9;
 * @return {string}
 */
proto.clarifai.api.Search.prototype.getAlgorithm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setAlgorithm = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool save = 10;
 * @return {boolean}
 */
proto.clarifai.api.Search.prototype.getSave = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setSave = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional float min_value = 11;
 * @return {number}
 */
proto.clarifai.api.Search.prototype.getMinValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Search} returns this
 */
proto.clarifai.api.Search.prototype.setMinValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};





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
proto.clarifai.api.Filter.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Filter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Filter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Filter.toObject = function(includeInstance, msg) {
  var f, obj = {
    negate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    annotation: (f = msg.getAnnotation()) && proto.clarifai.api.Annotation.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.clarifai.api.Input.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Filter}
 */
proto.clarifai.api.Filter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Filter;
  return proto.clarifai.api.Filter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Filter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Filter}
 */
proto.clarifai.api.Filter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNegate(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Annotation;
      reader.readMessage(value,proto.clarifai.api.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
      break;
    case 5:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setInput(value);
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
proto.clarifai.api.Filter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Filter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Filter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Filter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNegate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Annotation.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool negate = 3;
 * @return {boolean}
 */
proto.clarifai.api.Filter.prototype.getNegate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Filter} returns this
 */
proto.clarifai.api.Filter.prototype.setNegate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Annotation annotation = 4;
 * @return {?proto.clarifai.api.Annotation}
 */
proto.clarifai.api.Filter.prototype.getAnnotation = function() {
  return /** @type{?proto.clarifai.api.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Annotation, 4));
};


/**
 * @param {?proto.clarifai.api.Annotation|undefined} value
 * @return {!proto.clarifai.api.Filter} returns this
*/
proto.clarifai.api.Filter.prototype.setAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Filter} returns this
 */
proto.clarifai.api.Filter.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Filter.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Input input = 5;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.Filter.prototype.getInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 5));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.Filter} returns this
*/
proto.clarifai.api.Filter.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Filter} returns this
 */
proto.clarifai.api.Filter.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Filter.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};





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
proto.clarifai.api.Rank.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Rank.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Rank} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Rank.toObject = function(includeInstance, msg) {
  var f, obj = {
    negate: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    annotation: (f = msg.getAnnotation()) && proto.clarifai.api.Annotation.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Rank}
 */
proto.clarifai.api.Rank.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Rank;
  return proto.clarifai.api.Rank.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Rank} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Rank}
 */
proto.clarifai.api.Rank.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNegate(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Annotation;
      reader.readMessage(value,proto.clarifai.api.Annotation.deserializeBinaryFromReader);
      msg.setAnnotation(value);
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
proto.clarifai.api.Rank.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Rank.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Rank} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Rank.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNegate();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAnnotation();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Annotation.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool negate = 3;
 * @return {boolean}
 */
proto.clarifai.api.Rank.prototype.getNegate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Rank} returns this
 */
proto.clarifai.api.Rank.prototype.setNegate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional Annotation annotation = 4;
 * @return {?proto.clarifai.api.Annotation}
 */
proto.clarifai.api.Rank.prototype.getAnnotation = function() {
  return /** @type{?proto.clarifai.api.Annotation} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Annotation, 4));
};


/**
 * @param {?proto.clarifai.api.Annotation|undefined} value
 * @return {!proto.clarifai.api.Rank} returns this
*/
proto.clarifai.api.Rank.prototype.setAnnotation = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Rank} returns this
 */
proto.clarifai.api.Rank.prototype.clearAnnotation = function() {
  return this.setAnnotation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Rank.prototype.hasAnnotation = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.clarifai.api.AnnotationSearchMetrics.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.AnnotationSearchMetrics.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.AnnotationSearchMetrics} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AnnotationSearchMetrics.toObject = function(includeInstance, msg) {
  var f, obj = {
    groundTruth: (f = msg.getGroundTruth()) && proto.clarifai.api.Search.toObject(includeInstance, f),
    searchToEval: (f = msg.getSearchToEval()) && proto.clarifai.api.Search.toObject(includeInstance, f),
    metrics: (f = msg.getMetrics()) && proto.clarifai.api.EvalMetrics.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.clarifai.api.Data.toObject(includeInstance, f),
    activeConceptCount: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.clarifai.api.AnnotationSearchMetrics}
 */
proto.clarifai.api.AnnotationSearchMetrics.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.AnnotationSearchMetrics;
  return proto.clarifai.api.AnnotationSearchMetrics.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.AnnotationSearchMetrics} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.AnnotationSearchMetrics}
 */
proto.clarifai.api.AnnotationSearchMetrics.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.Search;
      reader.readMessage(value,proto.clarifai.api.Search.deserializeBinaryFromReader);
      msg.setGroundTruth(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Search;
      reader.readMessage(value,proto.clarifai.api.Search.deserializeBinaryFromReader);
      msg.setSearchToEval(value);
      break;
    case 3:
      var value = new proto.clarifai.api.EvalMetrics;
      reader.readMessage(value,proto.clarifai.api.EvalMetrics.deserializeBinaryFromReader);
      msg.setMetrics(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Data;
      reader.readMessage(value,proto.clarifai.api.Data.deserializeBinaryFromReader);
      msg.setData(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setActiveConceptCount(value);
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
proto.clarifai.api.AnnotationSearchMetrics.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.AnnotationSearchMetrics.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.AnnotationSearchMetrics} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AnnotationSearchMetrics.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroundTruth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.clarifai.api.Search.serializeBinaryToWriter
    );
  }
  f = message.getSearchToEval();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Search.serializeBinaryToWriter
    );
  }
  f = message.getMetrics();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.EvalMetrics.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Data.serializeBinaryToWriter
    );
  }
  f = message.getActiveConceptCount();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
};


/**
 * optional Search ground_truth = 1;
 * @return {?proto.clarifai.api.Search}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.getGroundTruth = function() {
  return /** @type{?proto.clarifai.api.Search} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Search, 1));
};


/**
 * @param {?proto.clarifai.api.Search|undefined} value
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
*/
proto.clarifai.api.AnnotationSearchMetrics.prototype.setGroundTruth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.clearGroundTruth = function() {
  return this.setGroundTruth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.hasGroundTruth = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Search search_to_eval = 2;
 * @return {?proto.clarifai.api.Search}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.getSearchToEval = function() {
  return /** @type{?proto.clarifai.api.Search} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Search, 2));
};


/**
 * @param {?proto.clarifai.api.Search|undefined} value
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
*/
proto.clarifai.api.AnnotationSearchMetrics.prototype.setSearchToEval = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.clearSearchToEval = function() {
  return this.setSearchToEval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.hasSearchToEval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EvalMetrics metrics = 3;
 * @return {?proto.clarifai.api.EvalMetrics}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.getMetrics = function() {
  return /** @type{?proto.clarifai.api.EvalMetrics} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.EvalMetrics, 3));
};


/**
 * @param {?proto.clarifai.api.EvalMetrics|undefined} value
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
*/
proto.clarifai.api.AnnotationSearchMetrics.prototype.setMetrics = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.clearMetrics = function() {
  return this.setMetrics(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.hasMetrics = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Data data = 4;
 * @return {?proto.clarifai.api.Data}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.getData = function() {
  return /** @type{?proto.clarifai.api.Data} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Data, 4));
};


/**
 * @param {?proto.clarifai.api.Data|undefined} value
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
*/
proto.clarifai.api.AnnotationSearchMetrics.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.hasData = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 active_concept_count = 5;
 * @return {number}
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.getActiveConceptCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.AnnotationSearchMetrics} returns this
 */
proto.clarifai.api.AnnotationSearchMetrics.prototype.setActiveConceptCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





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
proto.clarifai.api.Text.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Text.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Text} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Text.toObject = function(includeInstance, msg) {
  var f, obj = {
    raw: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, ""),
    allowDuplicateUrl: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    hosted: (f = msg.getHosted()) && proto.clarifai.api.HostedURL.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Text}
 */
proto.clarifai.api.Text.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Text;
  return proto.clarifai.api.Text.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Text} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Text}
 */
proto.clarifai.api.Text.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRaw(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowDuplicateUrl(value);
      break;
    case 4:
      var value = new proto.clarifai.api.HostedURL;
      reader.readMessage(value,proto.clarifai.api.HostedURL.deserializeBinaryFromReader);
      msg.setHosted(value);
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
proto.clarifai.api.Text.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Text.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Text} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Text.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRaw();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAllowDuplicateUrl();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHosted();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.HostedURL.serializeBinaryToWriter
    );
  }
};


/**
 * optional string raw = 1;
 * @return {string}
 */
proto.clarifai.api.Text.prototype.getRaw = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Text} returns this
 */
proto.clarifai.api.Text.prototype.setRaw = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.clarifai.api.Text.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Text} returns this
 */
proto.clarifai.api.Text.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool allow_duplicate_url = 3;
 * @return {boolean}
 */
proto.clarifai.api.Text.prototype.getAllowDuplicateUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Text} returns this
 */
proto.clarifai.api.Text.prototype.setAllowDuplicateUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional HostedURL hosted = 4;
 * @return {?proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.Text.prototype.getHosted = function() {
  return /** @type{?proto.clarifai.api.HostedURL} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.HostedURL, 4));
};


/**
 * @param {?proto.clarifai.api.HostedURL|undefined} value
 * @return {!proto.clarifai.api.Text} returns this
*/
proto.clarifai.api.Text.prototype.setHosted = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Text} returns this
 */
proto.clarifai.api.Text.prototype.clearHosted = function() {
  return this.setHosted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Text.prototype.hasHosted = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.User.repeatedFields_ = [12];



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
proto.clarifai.api.User.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.User.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.User} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.User.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primaryEmail: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    companyName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    billType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateGdprConsent: (f = msg.getDateGdprConsent()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateTosConsent: (f = msg.getDateTosConsent()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    dateMarketingConsent: (f = msg.getDateMarketingConsent()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f),
    emailAddressesList: jspb.Message.toObjectList(msg.getEmailAddressesList(),
    proto.clarifai.api.EmailAddress.toObject, includeInstance),
    isOrgAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    twoFactorAuthEnabled: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    teamsCount: jspb.Message.getFieldWithDefault(msg, 16, 0)
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
 * @return {!proto.clarifai.api.User}
 */
proto.clarifai.api.User.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.User;
  return proto.clarifai.api.User.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.User} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.User}
 */
proto.clarifai.api.User.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrimaryEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCompanyName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillType(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateGdprConsent(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateTosConsent(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDateMarketingConsent(value);
      break;
    case 11:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 12:
      var value = new proto.clarifai.api.EmailAddress;
      reader.readMessage(value,proto.clarifai.api.EmailAddress.deserializeBinaryFromReader);
      msg.addEmailAddresses(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOrgAdmin(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setTwoFactorAuthEnabled(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setTeamsCount(value);
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
proto.clarifai.api.User.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.User.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.User} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.User.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimaryEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCompanyName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBillType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateGdprConsent();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateTosConsent();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDateMarketingConsent();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
  f = message.getEmailAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.clarifai.api.EmailAddress.serializeBinaryToWriter
    );
  }
  f = message.getIsOrgAdmin();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getTwoFactorAuthEnabled();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getTeamsCount();
  if (f !== 0) {
    writer.writeUint32(
      16,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string primary_email = 2;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getPrimaryEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setPrimaryEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string first_name = 3;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getFirstName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setFirstName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string last_name = 4;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getLastName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setLastName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string company_name = 5;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getCompanyName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setCompanyName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bill_type = 7;
 * @return {string}
 */
proto.clarifai.api.User.prototype.getBillType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setBillType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.User.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.Timestamp date_gdpr_consent = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.User.prototype.getDateGdprConsent = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setDateGdprConsent = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearDateGdprConsent = function() {
  return this.setDateGdprConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.hasDateGdprConsent = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp date_tos_consent = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.User.prototype.getDateTosConsent = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setDateTosConsent = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearDateTosConsent = function() {
  return this.setDateTosConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.hasDateTosConsent = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp date_marketing_consent = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.User.prototype.getDateMarketingConsent = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setDateMarketingConsent = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearDateMarketingConsent = function() {
  return this.setDateMarketingConsent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.hasDateMarketingConsent = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Struct metadata = 11;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.User.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 11));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated EmailAddress email_addresses = 12;
 * @return {!Array<!proto.clarifai.api.EmailAddress>}
 */
proto.clarifai.api.User.prototype.getEmailAddressesList = function() {
  return /** @type{!Array<!proto.clarifai.api.EmailAddress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.EmailAddress, 12));
};


/**
 * @param {!Array<!proto.clarifai.api.EmailAddress>} value
 * @return {!proto.clarifai.api.User} returns this
*/
proto.clarifai.api.User.prototype.setEmailAddressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.clarifai.api.EmailAddress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.EmailAddress}
 */
proto.clarifai.api.User.prototype.addEmailAddresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.clarifai.api.EmailAddress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.clearEmailAddressesList = function() {
  return this.setEmailAddressesList([]);
};


/**
 * optional bool is_org_admin = 14;
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.getIsOrgAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setIsOrgAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool two_factor_auth_enabled = 15;
 * @return {boolean}
 */
proto.clarifai.api.User.prototype.getTwoFactorAuthEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setTwoFactorAuthEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional uint32 teams_count = 16;
 * @return {number}
 */
proto.clarifai.api.User.prototype.getTeamsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.User} returns this
 */
proto.clarifai.api.User.prototype.setTeamsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};





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
proto.clarifai.api.EmailAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.EmailAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.EmailAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EmailAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    primary: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    verified: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.clarifai.api.EmailAddress}
 */
proto.clarifai.api.EmailAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.EmailAddress;
  return proto.clarifai.api.EmailAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.EmailAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.EmailAddress}
 */
proto.clarifai.api.EmailAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPrimary(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVerified(value);
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
proto.clarifai.api.EmailAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.EmailAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.EmailAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.EmailAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrimary();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVerified();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.clarifai.api.EmailAddress.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.EmailAddress} returns this
 */
proto.clarifai.api.EmailAddress.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool primary = 2;
 * @return {boolean}
 */
proto.clarifai.api.EmailAddress.prototype.getPrimary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.EmailAddress} returns this
 */
proto.clarifai.api.EmailAddress.prototype.setPrimary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool verified = 3;
 * @return {boolean}
 */
proto.clarifai.api.EmailAddress.prototype.getVerified = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.EmailAddress} returns this
 */
proto.clarifai.api.EmailAddress.prototype.setVerified = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





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
proto.clarifai.api.Password.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Password.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Password} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Password.toObject = function(includeInstance, msg) {
  var f, obj = {
    plaintext: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clarifai.api.Password}
 */
proto.clarifai.api.Password.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Password;
  return proto.clarifai.api.Password.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Password} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Password}
 */
proto.clarifai.api.Password.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaintext(value);
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
proto.clarifai.api.Password.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Password.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Password} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Password.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlaintext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string plaintext = 1;
 * @return {string}
 */
proto.clarifai.api.Password.prototype.getPlaintext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Password} returns this
 */
proto.clarifai.api.Password.prototype.setPlaintext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





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
proto.clarifai.api.PasswordViolations.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.PasswordViolations.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.PasswordViolations} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PasswordViolations.toObject = function(includeInstance, msg) {
  var f, obj = {
    minimumLength: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    maximumLength: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    upperCaseNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    lowerCaseNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    numericNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    nonAlphanumericNeeded: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    passwordReuse: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    excludeNames: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    excludeEmail: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    noConfusingLetters: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    noSimplePasswords: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    noCommonVocabs: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    noOverlapWithOld: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    passwordLifespan: jspb.Message.getBooleanFieldWithDefault(msg, 14, false)
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
 * @return {!proto.clarifai.api.PasswordViolations}
 */
proto.clarifai.api.PasswordViolations.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.PasswordViolations;
  return proto.clarifai.api.PasswordViolations.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.PasswordViolations} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.PasswordViolations}
 */
proto.clarifai.api.PasswordViolations.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMinimumLength(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMaximumLength(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setUpperCaseNeeded(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLowerCaseNeeded(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNumericNeeded(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNonAlphanumericNeeded(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordReuse(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeNames(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setExcludeEmail(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoConfusingLetters(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoSimplePasswords(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoCommonVocabs(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNoOverlapWithOld(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPasswordLifespan(value);
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
proto.clarifai.api.PasswordViolations.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.PasswordViolations.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.PasswordViolations} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.PasswordViolations.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinimumLength();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMaximumLength();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getUpperCaseNeeded();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLowerCaseNeeded();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getNumericNeeded();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getNonAlphanumericNeeded();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPasswordReuse();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getExcludeNames();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getExcludeEmail();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getNoConfusingLetters();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getNoSimplePasswords();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getNoCommonVocabs();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getNoOverlapWithOld();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getPasswordLifespan();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
};


/**
 * optional bool minimum_length = 1;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getMinimumLength = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setMinimumLength = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool maximum_length = 2;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getMaximumLength = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setMaximumLength = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool upper_case_needed = 3;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getUpperCaseNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setUpperCaseNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool lower_case_needed = 4;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getLowerCaseNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setLowerCaseNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool numeric_needed = 5;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNumericNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNumericNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool non_alphanumeric_needed = 6;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNonAlphanumericNeeded = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNonAlphanumericNeeded = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool password_reuse = 7;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getPasswordReuse = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setPasswordReuse = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional bool exclude_names = 8;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getExcludeNames = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setExcludeNames = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool exclude_email = 9;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getExcludeEmail = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setExcludeEmail = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool no_confusing_letters = 10;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNoConfusingLetters = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNoConfusingLetters = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool no_simple_passwords = 11;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNoSimplePasswords = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNoSimplePasswords = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool no_common_vocabs = 12;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNoCommonVocabs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNoCommonVocabs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool no_overlap_with_old = 13;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getNoOverlapWithOld = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setNoOverlapWithOld = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool password_lifespan = 14;
 * @return {boolean}
 */
proto.clarifai.api.PasswordViolations.prototype.getPasswordLifespan = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.PasswordViolations} returns this
 */
proto.clarifai.api.PasswordViolations.prototype.setPasswordLifespan = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};





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
proto.clarifai.api.Video.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Video.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Video} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Video.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    base64: msg.getBase64_asB64(),
    allowDuplicateUrl: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    thumbnailUrl: jspb.Message.getFieldWithDefault(msg, 5, ""),
    hosted: (f = msg.getHosted()) && proto.clarifai.api.HostedURL.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Video}
 */
proto.clarifai.api.Video.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Video;
  return proto.clarifai.api.Video.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Video} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Video}
 */
proto.clarifai.api.Video.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBase64(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAllowDuplicateUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailUrl(value);
      break;
    case 6:
      var value = new proto.clarifai.api.HostedURL;
      reader.readMessage(value,proto.clarifai.api.HostedURL.deserializeBinaryFromReader);
      msg.setHosted(value);
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
proto.clarifai.api.Video.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Video.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Video} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Video.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBase64_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getAllowDuplicateUrl();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getThumbnailUrl();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHosted();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.HostedURL.serializeBinaryToWriter
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.clarifai.api.Video.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Video} returns this
 */
proto.clarifai.api.Video.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes base64 = 2;
 * @return {!(string|Uint8Array)}
 */
proto.clarifai.api.Video.prototype.getBase64 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes base64 = 2;
 * This is a type-conversion wrapper around `getBase64()`
 * @return {string}
 */
proto.clarifai.api.Video.prototype.getBase64_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBase64()));
};


/**
 * optional bytes base64 = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBase64()`
 * @return {!Uint8Array}
 */
proto.clarifai.api.Video.prototype.getBase64_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBase64()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.clarifai.api.Video} returns this
 */
proto.clarifai.api.Video.prototype.setBase64 = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional bool allow_duplicate_url = 4;
 * @return {boolean}
 */
proto.clarifai.api.Video.prototype.getAllowDuplicateUrl = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.Video} returns this
 */
proto.clarifai.api.Video.prototype.setAllowDuplicateUrl = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string thumbnail_url = 5;
 * @return {string}
 */
proto.clarifai.api.Video.prototype.getThumbnailUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Video} returns this
 */
proto.clarifai.api.Video.prototype.setThumbnailUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional HostedURL hosted = 6;
 * @return {?proto.clarifai.api.HostedURL}
 */
proto.clarifai.api.Video.prototype.getHosted = function() {
  return /** @type{?proto.clarifai.api.HostedURL} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.HostedURL, 6));
};


/**
 * @param {?proto.clarifai.api.HostedURL|undefined} value
 * @return {!proto.clarifai.api.Video} returns this
*/
proto.clarifai.api.Video.prototype.setHosted = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Video} returns this
 */
proto.clarifai.api.Video.prototype.clearHosted = function() {
  return this.setHosted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Video.prototype.hasHosted = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Workflow.repeatedFields_ = [4];



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
proto.clarifai.api.Workflow.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Workflow.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Workflow} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Workflow.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    appId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    nodesList: jspb.Message.toObjectList(msg.getNodesList(),
    proto.clarifai.api.WorkflowNode.toObject, includeInstance),
    metadata: (f = msg.getMetadata()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Workflow}
 */
proto.clarifai.api.Workflow.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Workflow;
  return proto.clarifai.api.Workflow.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Workflow} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Workflow}
 */
proto.clarifai.api.Workflow.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAppId(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new proto.clarifai.api.WorkflowNode;
      reader.readMessage(value,proto.clarifai.api.WorkflowNode.deserializeBinaryFromReader);
      msg.addNodes(value);
      break;
    case 5:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setMetadata(value);
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
proto.clarifai.api.Workflow.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Workflow.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Workflow} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Workflow.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.clarifai.api.WorkflowNode.serializeBinaryToWriter
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Workflow.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Workflow} returns this
 */
proto.clarifai.api.Workflow.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string app_id = 2;
 * @return {string}
 */
proto.clarifai.api.Workflow.prototype.getAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Workflow} returns this
 */
proto.clarifai.api.Workflow.prototype.setAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Workflow.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Workflow} returns this
*/
proto.clarifai.api.Workflow.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Workflow} returns this
 */
proto.clarifai.api.Workflow.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Workflow.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated WorkflowNode nodes = 4;
 * @return {!Array<!proto.clarifai.api.WorkflowNode>}
 */
proto.clarifai.api.Workflow.prototype.getNodesList = function() {
  return /** @type{!Array<!proto.clarifai.api.WorkflowNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.WorkflowNode, 4));
};


/**
 * @param {!Array<!proto.clarifai.api.WorkflowNode>} value
 * @return {!proto.clarifai.api.Workflow} returns this
*/
proto.clarifai.api.Workflow.prototype.setNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.clarifai.api.WorkflowNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.WorkflowNode}
 */
proto.clarifai.api.Workflow.prototype.addNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.clarifai.api.WorkflowNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Workflow} returns this
 */
proto.clarifai.api.Workflow.prototype.clearNodesList = function() {
  return this.setNodesList([]);
};


/**
 * optional google.protobuf.Struct metadata = 5;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.Workflow.prototype.getMetadata = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 5));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.Workflow} returns this
*/
proto.clarifai.api.Workflow.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Workflow} returns this
 */
proto.clarifai.api.Workflow.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Workflow.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.WorkflowNode.repeatedFields_ = [3];



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
proto.clarifai.api.WorkflowNode.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.WorkflowNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.WorkflowNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    model: (f = msg.getModel()) && proto.clarifai.api.Model.toObject(includeInstance, f),
    nodeInputsList: jspb.Message.toObjectList(msg.getNodeInputsList(),
    proto.clarifai.api.NodeInput.toObject, includeInstance),
    suppressOutput: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.clarifai.api.WorkflowNode}
 */
proto.clarifai.api.WorkflowNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.WorkflowNode;
  return proto.clarifai.api.WorkflowNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.WorkflowNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.WorkflowNode}
 */
proto.clarifai.api.WorkflowNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.clarifai.api.Model;
      reader.readMessage(value,proto.clarifai.api.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 3:
      var value = new proto.clarifai.api.NodeInput;
      reader.readMessage(value,proto.clarifai.api.NodeInput.deserializeBinaryFromReader);
      msg.addNodeInputs(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuppressOutput(value);
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
proto.clarifai.api.WorkflowNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.WorkflowNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.WorkflowNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.Model.serializeBinaryToWriter
    );
  }
  f = message.getNodeInputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.clarifai.api.NodeInput.serializeBinaryToWriter
    );
  }
  f = message.getSuppressOutput();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.WorkflowNode.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.WorkflowNode} returns this
 */
proto.clarifai.api.WorkflowNode.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Model model = 2;
 * @return {?proto.clarifai.api.Model}
 */
proto.clarifai.api.WorkflowNode.prototype.getModel = function() {
  return /** @type{?proto.clarifai.api.Model} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Model, 2));
};


/**
 * @param {?proto.clarifai.api.Model|undefined} value
 * @return {!proto.clarifai.api.WorkflowNode} returns this
*/
proto.clarifai.api.WorkflowNode.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowNode} returns this
 */
proto.clarifai.api.WorkflowNode.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowNode.prototype.hasModel = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated NodeInput node_inputs = 3;
 * @return {!Array<!proto.clarifai.api.NodeInput>}
 */
proto.clarifai.api.WorkflowNode.prototype.getNodeInputsList = function() {
  return /** @type{!Array<!proto.clarifai.api.NodeInput>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.NodeInput, 3));
};


/**
 * @param {!Array<!proto.clarifai.api.NodeInput>} value
 * @return {!proto.clarifai.api.WorkflowNode} returns this
*/
proto.clarifai.api.WorkflowNode.prototype.setNodeInputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.clarifai.api.NodeInput=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.NodeInput}
 */
proto.clarifai.api.WorkflowNode.prototype.addNodeInputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.clarifai.api.NodeInput, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.WorkflowNode} returns this
 */
proto.clarifai.api.WorkflowNode.prototype.clearNodeInputsList = function() {
  return this.setNodeInputsList([]);
};


/**
 * optional bool suppress_output = 4;
 * @return {boolean}
 */
proto.clarifai.api.WorkflowNode.prototype.getSuppressOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.WorkflowNode} returns this
 */
proto.clarifai.api.WorkflowNode.prototype.setSuppressOutput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





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
proto.clarifai.api.NodeInput.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.NodeInput.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.NodeInput} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.NodeInput.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clarifai.api.NodeInput}
 */
proto.clarifai.api.NodeInput.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.NodeInput;
  return proto.clarifai.api.NodeInput.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.NodeInput} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.NodeInput}
 */
proto.clarifai.api.NodeInput.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeId(value);
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
proto.clarifai.api.NodeInput.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.NodeInput.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.NodeInput} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.NodeInput.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string node_id = 1;
 * @return {string}
 */
proto.clarifai.api.NodeInput.prototype.getNodeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.NodeInput} returns this
 */
proto.clarifai.api.NodeInput.prototype.setNodeId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.WorkflowResult.repeatedFields_ = [6];



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
proto.clarifai.api.WorkflowResult.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.WorkflowResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.WorkflowResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    model: (f = msg.getModel()) && proto.clarifai.api.Model.toObject(includeInstance, f),
    input: (f = msg.getInput()) && proto.clarifai.api.Input.toObject(includeInstance, f),
    outputsList: jspb.Message.toObjectList(msg.getOutputsList(),
    proto.clarifai.api.Output.toObject, includeInstance),
    suppressOutput: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
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
 * @return {!proto.clarifai.api.WorkflowResult}
 */
proto.clarifai.api.WorkflowResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.WorkflowResult;
  return proto.clarifai.api.WorkflowResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.WorkflowResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.WorkflowResult}
 */
proto.clarifai.api.WorkflowResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = new proto.clarifai.api.Model;
      reader.readMessage(value,proto.clarifai.api.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 5:
      var value = new proto.clarifai.api.Input;
      reader.readMessage(value,proto.clarifai.api.Input.deserializeBinaryFromReader);
      msg.setInput(value);
      break;
    case 6:
      var value = new proto.clarifai.api.Output;
      reader.readMessage(value,proto.clarifai.api.Output.deserializeBinaryFromReader);
      msg.addOutputs(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuppressOutput(value);
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
proto.clarifai.api.WorkflowResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.WorkflowResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.WorkflowResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.WorkflowResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.Model.serializeBinaryToWriter
    );
  }
  f = message.getInput();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.clarifai.api.Input.serializeBinaryToWriter
    );
  }
  f = message.getOutputsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.clarifai.api.Output.serializeBinaryToWriter
    );
  }
  f = message.getSuppressOutput();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.WorkflowResult.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional status.Status status = 2;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.WorkflowResult.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 2));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
*/
proto.clarifai.api.WorkflowResult.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResult.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.WorkflowResult.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
*/
proto.clarifai.api.WorkflowResult.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResult.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional Model model = 4;
 * @return {?proto.clarifai.api.Model}
 */
proto.clarifai.api.WorkflowResult.prototype.getModel = function() {
  return /** @type{?proto.clarifai.api.Model} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Model, 4));
};


/**
 * @param {?proto.clarifai.api.Model|undefined} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
*/
proto.clarifai.api.WorkflowResult.prototype.setModel = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.clearModel = function() {
  return this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResult.prototype.hasModel = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Input input = 5;
 * @return {?proto.clarifai.api.Input}
 */
proto.clarifai.api.WorkflowResult.prototype.getInput = function() {
  return /** @type{?proto.clarifai.api.Input} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.Input, 5));
};


/**
 * @param {?proto.clarifai.api.Input|undefined} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
*/
proto.clarifai.api.WorkflowResult.prototype.setInput = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.clearInput = function() {
  return this.setInput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResult.prototype.hasInput = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated Output outputs = 6;
 * @return {!Array<!proto.clarifai.api.Output>}
 */
proto.clarifai.api.WorkflowResult.prototype.getOutputsList = function() {
  return /** @type{!Array<!proto.clarifai.api.Output>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.Output, 6));
};


/**
 * @param {!Array<!proto.clarifai.api.Output>} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
*/
proto.clarifai.api.WorkflowResult.prototype.setOutputsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.clarifai.api.Output=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Output}
 */
proto.clarifai.api.WorkflowResult.prototype.addOutputs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.clarifai.api.Output, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.clearOutputsList = function() {
  return this.setOutputsList([]);
};


/**
 * optional bool suppress_output = 7;
 * @return {boolean}
 */
proto.clarifai.api.WorkflowResult.prototype.getSuppressOutput = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.WorkflowResult} returns this
 */
proto.clarifai.api.WorkflowResult.prototype.setSuppressOutput = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





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
proto.clarifai.api.AppDuplication.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.AppDuplication.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.AppDuplication} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppDuplication.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    newAppId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    newAppName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    lastModifiedAt: (f = msg.getLastModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    filter: (f = msg.getFilter()) && proto.clarifai.api.AppDuplicationFilters.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.AppDuplication}
 */
proto.clarifai.api.AppDuplication.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.AppDuplication;
  return proto.clarifai.api.AppDuplication.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.AppDuplication} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.AppDuplication}
 */
proto.clarifai.api.AppDuplication.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewAppId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewAppName(value);
      break;
    case 4:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastModifiedAt(value);
      break;
    case 7:
      var value = new proto.clarifai.api.AppDuplicationFilters;
      reader.readMessage(value,proto.clarifai.api.AppDuplicationFilters.deserializeBinaryFromReader);
      msg.setFilter(value);
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
proto.clarifai.api.AppDuplication.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.AppDuplication.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.AppDuplication} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppDuplication.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNewAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNewAppName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLastModifiedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.clarifai.api.AppDuplicationFilters.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.AppDuplication.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string new_app_id = 2;
 * @return {string}
 */
proto.clarifai.api.AppDuplication.prototype.getNewAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.setNewAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string new_app_name = 3;
 * @return {string}
 */
proto.clarifai.api.AppDuplication.prototype.getNewAppName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.setNewAppName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional status.Status status = 4;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.AppDuplication.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 4));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
*/
proto.clarifai.api.AppDuplication.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AppDuplication.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.AppDuplication.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
*/
proto.clarifai.api.AppDuplication.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AppDuplication.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp last_modified_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.AppDuplication.prototype.getLastModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
*/
proto.clarifai.api.AppDuplication.prototype.setLastModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.clearLastModifiedAt = function() {
  return this.setLastModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AppDuplication.prototype.hasLastModifiedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AppDuplicationFilters filter = 7;
 * @return {?proto.clarifai.api.AppDuplicationFilters}
 */
proto.clarifai.api.AppDuplication.prototype.getFilter = function() {
  return /** @type{?proto.clarifai.api.AppDuplicationFilters} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.AppDuplicationFilters, 7));
};


/**
 * @param {?proto.clarifai.api.AppDuplicationFilters|undefined} value
 * @return {!proto.clarifai.api.AppDuplication} returns this
*/
proto.clarifai.api.AppDuplication.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.AppDuplication} returns this
 */
proto.clarifai.api.AppDuplication.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.AppDuplication.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.clarifai.api.AppDuplicationFilters.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.AppDuplicationFilters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.AppDuplicationFilters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppDuplicationFilters.toObject = function(includeInstance, msg) {
  var f, obj = {
    copyInputs: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    copyConcepts: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    copyAnnotations: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    copyModels: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    copyWorkflows: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.clarifai.api.AppDuplicationFilters}
 */
proto.clarifai.api.AppDuplicationFilters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.AppDuplicationFilters;
  return proto.clarifai.api.AppDuplicationFilters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.AppDuplicationFilters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.AppDuplicationFilters}
 */
proto.clarifai.api.AppDuplicationFilters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyInputs(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyConcepts(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyAnnotations(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyModels(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCopyWorkflows(value);
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
proto.clarifai.api.AppDuplicationFilters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.AppDuplicationFilters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.AppDuplicationFilters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AppDuplicationFilters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCopyInputs();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getCopyConcepts();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getCopyAnnotations();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCopyModels();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getCopyWorkflows();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional bool copy_inputs = 1;
 * @return {boolean}
 */
proto.clarifai.api.AppDuplicationFilters.prototype.getCopyInputs = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.AppDuplicationFilters} returns this
 */
proto.clarifai.api.AppDuplicationFilters.prototype.setCopyInputs = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool copy_concepts = 2;
 * @return {boolean}
 */
proto.clarifai.api.AppDuplicationFilters.prototype.getCopyConcepts = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.AppDuplicationFilters} returns this
 */
proto.clarifai.api.AppDuplicationFilters.prototype.setCopyConcepts = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool copy_annotations = 3;
 * @return {boolean}
 */
proto.clarifai.api.AppDuplicationFilters.prototype.getCopyAnnotations = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.AppDuplicationFilters} returns this
 */
proto.clarifai.api.AppDuplicationFilters.prototype.setCopyAnnotations = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool copy_models = 4;
 * @return {boolean}
 */
proto.clarifai.api.AppDuplicationFilters.prototype.getCopyModels = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.AppDuplicationFilters} returns this
 */
proto.clarifai.api.AppDuplicationFilters.prototype.setCopyModels = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool copy_workflows = 5;
 * @return {boolean}
 */
proto.clarifai.api.AppDuplicationFilters.prototype.getCopyWorkflows = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.clarifai.api.AppDuplicationFilters} returns this
 */
proto.clarifai.api.AppDuplicationFilters.prototype.setCopyWorkflows = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.Task.repeatedFields_ = [7];



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
proto.clarifai.api.Task.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Task.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Task} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Task.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    modifiedAt: (f = msg.getModifiedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 4, 0),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    worker: (f = msg.getWorker()) && proto.clarifai.api.TaskWorker.toObject(includeInstance, f),
    conceptIdsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    inputSource: (f = msg.getInputSource()) && proto.clarifai.api.TaskInputSource.toObject(includeInstance, f),
    sampleMs: jspb.Message.getFieldWithDefault(msg, 9, 0),
    aiAssistant: (f = msg.getAiAssistant()) && proto.clarifai.api.TaskAIAssistant.toObject(includeInstance, f),
    review: (f = msg.getReview()) && proto.clarifai.api.TaskReview.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 13, ""),
    aiAssistParams: (f = msg.getAiAssistParams()) && proto.clarifai.api.AiAssistParameters.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Task}
 */
proto.clarifai.api.Task.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Task;
  return proto.clarifai.api.Task.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Task} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Task}
 */
proto.clarifai.api.Task.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setModifiedAt(value);
      break;
    case 4:
      var value = /** @type {!proto.clarifai.api.Task.TaskType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = new proto.clarifai.api.TaskWorker;
      reader.readMessage(value,proto.clarifai.api.TaskWorker.deserializeBinaryFromReader);
      msg.setWorker(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addConceptIds(value);
      break;
    case 8:
      var value = new proto.clarifai.api.TaskInputSource;
      reader.readMessage(value,proto.clarifai.api.TaskInputSource.deserializeBinaryFromReader);
      msg.setInputSource(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSampleMs(value);
      break;
    case 10:
      var value = new proto.clarifai.api.TaskAIAssistant;
      reader.readMessage(value,proto.clarifai.api.TaskAIAssistant.deserializeBinaryFromReader);
      msg.setAiAssistant(value);
      break;
    case 11:
      var value = new proto.clarifai.api.TaskReview;
      reader.readMessage(value,proto.clarifai.api.TaskReview.deserializeBinaryFromReader);
      msg.setReview(value);
      break;
    case 12:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 14:
      var value = new proto.clarifai.api.AiAssistParameters;
      reader.readMessage(value,proto.clarifai.api.AiAssistParameters.deserializeBinaryFromReader);
      msg.setAiAssistParams(value);
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
proto.clarifai.api.Task.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Task.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Task} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Task.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getModifiedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getWorker();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.TaskWorker.serializeBinaryToWriter
    );
  }
  f = message.getConceptIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getInputSource();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.clarifai.api.TaskInputSource.serializeBinaryToWriter
    );
  }
  f = message.getSampleMs();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getAiAssistant();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.clarifai.api.TaskAIAssistant.serializeBinaryToWriter
    );
  }
  f = message.getReview();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.clarifai.api.TaskReview.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getAiAssistParams();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.clarifai.api.AiAssistParameters.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.Task.TaskType = {
  TYPE_NOT_SET: 0,
  CONCEPTS_CLASSIFICATION: 1,
  BOUNDING_BOX_DETECTION: 2,
  POLYGON_DETECTION: 3
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Task.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Task.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.Timestamp modified_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Task.prototype.getModifiedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setModifiedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearModifiedAt = function() {
  return this.setModifiedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasModifiedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskType type = 4;
 * @return {!proto.clarifai.api.Task.TaskType}
 */
proto.clarifai.api.Task.prototype.getType = function() {
  return /** @type {!proto.clarifai.api.Task.TaskType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.clarifai.api.Task.TaskType} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.clarifai.api.Task.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional TaskWorker worker = 6;
 * @return {?proto.clarifai.api.TaskWorker}
 */
proto.clarifai.api.Task.prototype.getWorker = function() {
  return /** @type{?proto.clarifai.api.TaskWorker} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskWorker, 6));
};


/**
 * @param {?proto.clarifai.api.TaskWorker|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setWorker = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearWorker = function() {
  return this.setWorker(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasWorker = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string concept_ids = 7;
 * @return {!Array<string>}
 */
proto.clarifai.api.Task.prototype.getConceptIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setConceptIdsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.addConceptIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearConceptIdsList = function() {
  return this.setConceptIdsList([]);
};


/**
 * optional TaskInputSource input_source = 8;
 * @return {?proto.clarifai.api.TaskInputSource}
 */
proto.clarifai.api.Task.prototype.getInputSource = function() {
  return /** @type{?proto.clarifai.api.TaskInputSource} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskInputSource, 8));
};


/**
 * @param {?proto.clarifai.api.TaskInputSource|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setInputSource = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearInputSource = function() {
  return this.setInputSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasInputSource = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional uint32 sample_ms = 9;
 * @return {number}
 */
proto.clarifai.api.Task.prototype.getSampleMs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setSampleMs = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional TaskAIAssistant ai_assistant = 10;
 * @return {?proto.clarifai.api.TaskAIAssistant}
 */
proto.clarifai.api.Task.prototype.getAiAssistant = function() {
  return /** @type{?proto.clarifai.api.TaskAIAssistant} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskAIAssistant, 10));
};


/**
 * @param {?proto.clarifai.api.TaskAIAssistant|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setAiAssistant = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearAiAssistant = function() {
  return this.setAiAssistant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasAiAssistant = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TaskReview review = 11;
 * @return {?proto.clarifai.api.TaskReview}
 */
proto.clarifai.api.Task.prototype.getReview = function() {
  return /** @type{?proto.clarifai.api.TaskReview} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskReview, 11));
};


/**
 * @param {?proto.clarifai.api.TaskReview|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setReview = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearReview = function() {
  return this.setReview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasReview = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional status.Status status = 12;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.Task.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 12));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string name = 13;
 * @return {string}
 */
proto.clarifai.api.Task.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional AiAssistParameters ai_assist_params = 14;
 * @return {?proto.clarifai.api.AiAssistParameters}
 */
proto.clarifai.api.Task.prototype.getAiAssistParams = function() {
  return /** @type{?proto.clarifai.api.AiAssistParameters} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.AiAssistParameters, 14));
};


/**
 * @param {?proto.clarifai.api.AiAssistParameters|undefined} value
 * @return {!proto.clarifai.api.Task} returns this
*/
proto.clarifai.api.Task.prototype.setAiAssistParams = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Task} returns this
 */
proto.clarifai.api.Task.prototype.clearAiAssistParams = function() {
  return this.setAiAssistParams(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Task.prototype.hasAiAssistParams = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.AiAssistParameters.repeatedFields_ = [3];



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
proto.clarifai.api.AiAssistParameters.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.AiAssistParameters.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.AiAssistParameters} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AiAssistParameters.toObject = function(includeInstance, msg) {
  var f, obj = {
    minThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    maxThreshold: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    conceptRelationIdsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.AiAssistParameters}
 */
proto.clarifai.api.AiAssistParameters.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.AiAssistParameters;
  return proto.clarifai.api.AiAssistParameters.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.AiAssistParameters} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.AiAssistParameters}
 */
proto.clarifai.api.AiAssistParameters.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMinThreshold(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMaxThreshold(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addConceptRelationIds(value);
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
proto.clarifai.api.AiAssistParameters.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.AiAssistParameters.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.AiAssistParameters} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.AiAssistParameters.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMinThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMaxThreshold();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getConceptRelationIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional float min_threshold = 1;
 * @return {number}
 */
proto.clarifai.api.AiAssistParameters.prototype.getMinThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.AiAssistParameters} returns this
 */
proto.clarifai.api.AiAssistParameters.prototype.setMinThreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float max_threshold = 2;
 * @return {number}
 */
proto.clarifai.api.AiAssistParameters.prototype.getMaxThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.AiAssistParameters} returns this
 */
proto.clarifai.api.AiAssistParameters.prototype.setMaxThreshold = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated string concept_relation_ids = 3;
 * @return {!Array<string>}
 */
proto.clarifai.api.AiAssistParameters.prototype.getConceptRelationIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.AiAssistParameters} returns this
 */
proto.clarifai.api.AiAssistParameters.prototype.setConceptRelationIdsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.AiAssistParameters} returns this
 */
proto.clarifai.api.AiAssistParameters.prototype.addConceptRelationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.AiAssistParameters} returns this
 */
proto.clarifai.api.AiAssistParameters.prototype.clearConceptRelationIdsList = function() {
  return this.setConceptRelationIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.TaskWorker.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.clarifai.api.TaskWorker.oneofGroups_ = [[3]];

/**
 * @enum {number}
 */
proto.clarifai.api.TaskWorker.StrategyInfoCase = {
  STRATEGY_INFO_NOT_SET: 0,
  PARTITIONED_STRATEGY_INFO: 3
};

/**
 * @return {proto.clarifai.api.TaskWorker.StrategyInfoCase}
 */
proto.clarifai.api.TaskWorker.prototype.getStrategyInfoCase = function() {
  return /** @type {proto.clarifai.api.TaskWorker.StrategyInfoCase} */(jspb.Message.computeOneofCase(this, proto.clarifai.api.TaskWorker.oneofGroups_[0]));
};



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
proto.clarifai.api.TaskWorker.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskWorker.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskWorker} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskWorker.toObject = function(includeInstance, msg) {
  var f, obj = {
    strategy: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    partitionedStrategyInfo: (f = msg.getPartitionedStrategyInfo()) && proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.TaskWorker}
 */
proto.clarifai.api.TaskWorker.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskWorker;
  return proto.clarifai.api.TaskWorker.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskWorker} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskWorker}
 */
proto.clarifai.api.TaskWorker.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clarifai.api.TaskWorker.TaskWorkerStrategy} */ (reader.readEnum());
      msg.setStrategy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = new proto.clarifai.api.TaskWorkerPartitionedStrategyInfo;
      reader.readMessage(value,proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.deserializeBinaryFromReader);
      msg.setPartitionedStrategyInfo(value);
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
proto.clarifai.api.TaskWorker.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskWorker.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskWorker} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskWorker.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getPartitionedStrategyInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.TaskWorker.TaskWorkerStrategy = {
  WORKER_STRATEGY_NOT_SET: 0,
  PARTITIONED: 2,
  FULL: 3
};

/**
 * optional TaskWorkerStrategy strategy = 1;
 * @return {!proto.clarifai.api.TaskWorker.TaskWorkerStrategy}
 */
proto.clarifai.api.TaskWorker.prototype.getStrategy = function() {
  return /** @type {!proto.clarifai.api.TaskWorker.TaskWorkerStrategy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clarifai.api.TaskWorker.TaskWorkerStrategy} value
 * @return {!proto.clarifai.api.TaskWorker} returns this
 */
proto.clarifai.api.TaskWorker.prototype.setStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.TaskWorker.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.TaskWorker} returns this
 */
proto.clarifai.api.TaskWorker.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.TaskWorker} returns this
 */
proto.clarifai.api.TaskWorker.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.TaskWorker} returns this
 */
proto.clarifai.api.TaskWorker.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * optional TaskWorkerPartitionedStrategyInfo partitioned_strategy_info = 3;
 * @return {?proto.clarifai.api.TaskWorkerPartitionedStrategyInfo}
 */
proto.clarifai.api.TaskWorker.prototype.getPartitionedStrategyInfo = function() {
  return /** @type{?proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskWorkerPartitionedStrategyInfo, 3));
};


/**
 * @param {?proto.clarifai.api.TaskWorkerPartitionedStrategyInfo|undefined} value
 * @return {!proto.clarifai.api.TaskWorker} returns this
*/
proto.clarifai.api.TaskWorker.prototype.setPartitionedStrategyInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.clarifai.api.TaskWorker.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.TaskWorker} returns this
 */
proto.clarifai.api.TaskWorker.prototype.clearPartitionedStrategyInfo = function() {
  return this.setPartitionedStrategyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.TaskWorker.prototype.hasPartitionedStrategyInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workersPerInput: jspb.Message.getFieldWithDefault(msg, 2, 0),
    weights: (f = msg.getWeights()) && google_protobuf_struct_pb.Struct.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskWorkerPartitionedStrategyInfo;
  return proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWorkersPerInput(value);
      break;
    case 3:
      var value = new google_protobuf_struct_pb.Struct;
      reader.readMessage(value,google_protobuf_struct_pb.Struct.deserializeBinaryFromReader);
      msg.setWeights(value);
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
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getWorkersPerInput();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getWeights();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_struct_pb.Struct.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy = {
  PARTITIONED_WORKER_STRATEGY_NOT_SET: 0,
  EVENLY: 1,
  WEIGHTED: 2
};

/**
 * optional TaskWorkerPartitionedStrategy type = 1;
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.getType = function() {
  return /** @type {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.TaskWorkerPartitionedStrategy} value
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} returns this
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional int32 workers_per_input = 2;
 * @return {number}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.getWorkersPerInput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} returns this
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.setWorkersPerInput = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional google.protobuf.Struct weights = 3;
 * @return {?proto.google.protobuf.Struct}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.getWeights = function() {
  return /** @type{?proto.google.protobuf.Struct} */ (
    jspb.Message.getWrapperField(this, google_protobuf_struct_pb.Struct, 3));
};


/**
 * @param {?proto.google.protobuf.Struct|undefined} value
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} returns this
*/
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.setWeights = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.TaskWorkerPartitionedStrategyInfo} returns this
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.clearWeights = function() {
  return this.setWeights(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.TaskWorkerPartitionedStrategyInfo.prototype.hasWeights = function() {
  return jspb.Message.getField(this, 3) != null;
};





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
proto.clarifai.api.TaskInputSource.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskInputSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskInputSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskInputSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    id: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.clarifai.api.TaskInputSource}
 */
proto.clarifai.api.TaskInputSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskInputSource;
  return proto.clarifai.api.TaskInputSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskInputSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskInputSource}
 */
proto.clarifai.api.TaskInputSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clarifai.api.TaskInputSource.TaskInputSourceType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.clarifai.api.TaskInputSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskInputSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskInputSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskInputSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.TaskInputSource.TaskInputSourceType = {
  INPUT_SOURCE_TYPE_NOT_SET: 0,
  ALL_INPUTS: 1,
  SAVED_SEARCH: 2
};

/**
 * optional TaskInputSourceType type = 1;
 * @return {!proto.clarifai.api.TaskInputSource.TaskInputSourceType}
 */
proto.clarifai.api.TaskInputSource.prototype.getType = function() {
  return /** @type {!proto.clarifai.api.TaskInputSource.TaskInputSourceType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clarifai.api.TaskInputSource.TaskInputSourceType} value
 * @return {!proto.clarifai.api.TaskInputSource} returns this
 */
proto.clarifai.api.TaskInputSource.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string id = 2;
 * @return {string}
 */
proto.clarifai.api.TaskInputSource.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.TaskInputSource} returns this
 */
proto.clarifai.api.TaskInputSource.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.TaskReview.repeatedFields_ = [2];

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.clarifai.api.TaskReview.oneofGroups_ = [[3,4]];

/**
 * @enum {number}
 */
proto.clarifai.api.TaskReview.StrategyInfoCase = {
  STRATEGY_INFO_NOT_SET: 0,
  MANUAL_STRATEGY_INFO: 3,
  CONSENSUS_STRATEGY_INFO: 4
};

/**
 * @return {proto.clarifai.api.TaskReview.StrategyInfoCase}
 */
proto.clarifai.api.TaskReview.prototype.getStrategyInfoCase = function() {
  return /** @type {proto.clarifai.api.TaskReview.StrategyInfoCase} */(jspb.Message.computeOneofCase(this, proto.clarifai.api.TaskReview.oneofGroups_[0]));
};



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
proto.clarifai.api.TaskReview.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskReview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskReview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReview.toObject = function(includeInstance, msg) {
  var f, obj = {
    strategy: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userIdsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    manualStrategyInfo: (f = msg.getManualStrategyInfo()) && proto.clarifai.api.TaskReviewManualStrategyInfo.toObject(includeInstance, f),
    consensusStrategyInfo: (f = msg.getConsensusStrategyInfo()) && proto.clarifai.api.TaskReviewConsensusStrategyInfo.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.TaskReview}
 */
proto.clarifai.api.TaskReview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskReview;
  return proto.clarifai.api.TaskReview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskReview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskReview}
 */
proto.clarifai.api.TaskReview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.clarifai.api.TaskReview.TaskReviewStrategy} */ (reader.readEnum());
      msg.setStrategy(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addUserIds(value);
      break;
    case 3:
      var value = new proto.clarifai.api.TaskReviewManualStrategyInfo;
      reader.readMessage(value,proto.clarifai.api.TaskReviewManualStrategyInfo.deserializeBinaryFromReader);
      msg.setManualStrategyInfo(value);
      break;
    case 4:
      var value = new proto.clarifai.api.TaskReviewConsensusStrategyInfo;
      reader.readMessage(value,proto.clarifai.api.TaskReviewConsensusStrategyInfo.deserializeBinaryFromReader);
      msg.setConsensusStrategyInfo(value);
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
proto.clarifai.api.TaskReview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskReview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskReview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStrategy();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUserIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getManualStrategyInfo();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.clarifai.api.TaskReviewManualStrategyInfo.serializeBinaryToWriter
    );
  }
  f = message.getConsensusStrategyInfo();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.clarifai.api.TaskReviewConsensusStrategyInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.clarifai.api.TaskReview.TaskReviewStrategy = {
  TASK_REVIEW_STRATEGY_NOT_SET: 0,
  NONE: 1,
  MANUAL: 2,
  CONSENSUS: 3
};

/**
 * optional TaskReviewStrategy strategy = 1;
 * @return {!proto.clarifai.api.TaskReview.TaskReviewStrategy}
 */
proto.clarifai.api.TaskReview.prototype.getStrategy = function() {
  return /** @type {!proto.clarifai.api.TaskReview.TaskReviewStrategy} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.clarifai.api.TaskReview.TaskReviewStrategy} value
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.setStrategy = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated string user_ids = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.TaskReview.prototype.getUserIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.setUserIdsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.addUserIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.clearUserIdsList = function() {
  return this.setUserIdsList([]);
};


/**
 * optional TaskReviewManualStrategyInfo manual_strategy_info = 3;
 * @return {?proto.clarifai.api.TaskReviewManualStrategyInfo}
 */
proto.clarifai.api.TaskReview.prototype.getManualStrategyInfo = function() {
  return /** @type{?proto.clarifai.api.TaskReviewManualStrategyInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskReviewManualStrategyInfo, 3));
};


/**
 * @param {?proto.clarifai.api.TaskReviewManualStrategyInfo|undefined} value
 * @return {!proto.clarifai.api.TaskReview} returns this
*/
proto.clarifai.api.TaskReview.prototype.setManualStrategyInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.clarifai.api.TaskReview.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.clearManualStrategyInfo = function() {
  return this.setManualStrategyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.TaskReview.prototype.hasManualStrategyInfo = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional TaskReviewConsensusStrategyInfo consensus_strategy_info = 4;
 * @return {?proto.clarifai.api.TaskReviewConsensusStrategyInfo}
 */
proto.clarifai.api.TaskReview.prototype.getConsensusStrategyInfo = function() {
  return /** @type{?proto.clarifai.api.TaskReviewConsensusStrategyInfo} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.TaskReviewConsensusStrategyInfo, 4));
};


/**
 * @param {?proto.clarifai.api.TaskReviewConsensusStrategyInfo|undefined} value
 * @return {!proto.clarifai.api.TaskReview} returns this
*/
proto.clarifai.api.TaskReview.prototype.setConsensusStrategyInfo = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.clarifai.api.TaskReview.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.TaskReview} returns this
 */
proto.clarifai.api.TaskReview.prototype.clearConsensusStrategyInfo = function() {
  return this.setConsensusStrategyInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.TaskReview.prototype.hasConsensusStrategyInfo = function() {
  return jspb.Message.getField(this, 4) != null;
};





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
proto.clarifai.api.TaskReviewManualStrategyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskReviewManualStrategyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskReviewManualStrategyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    samplePercentage: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0)
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
 * @return {!proto.clarifai.api.TaskReviewManualStrategyInfo}
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskReviewManualStrategyInfo;
  return proto.clarifai.api.TaskReviewManualStrategyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskReviewManualStrategyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskReviewManualStrategyInfo}
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSamplePercentage(value);
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
proto.clarifai.api.TaskReviewManualStrategyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskReviewManualStrategyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskReviewManualStrategyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSamplePercentage();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
};


/**
 * optional float sample_percentage = 1;
 * @return {number}
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.prototype.getSamplePercentage = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskReviewManualStrategyInfo} returns this
 */
proto.clarifai.api.TaskReviewManualStrategyInfo.prototype.setSamplePercentage = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};





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
proto.clarifai.api.TaskReviewConsensusStrategyInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskReviewConsensusStrategyInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskReviewConsensusStrategyInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    approvalThreshold: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.clarifai.api.TaskReviewConsensusStrategyInfo}
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskReviewConsensusStrategyInfo;
  return proto.clarifai.api.TaskReviewConsensusStrategyInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskReviewConsensusStrategyInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskReviewConsensusStrategyInfo}
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setApprovalThreshold(value);
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
proto.clarifai.api.TaskReviewConsensusStrategyInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskReviewConsensusStrategyInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskReviewConsensusStrategyInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApprovalThreshold();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
};


/**
 * optional uint32 approval_threshold = 2;
 * @return {number}
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.prototype.getApprovalThreshold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskReviewConsensusStrategyInfo} returns this
 */
proto.clarifai.api.TaskReviewConsensusStrategyInfo.prototype.setApprovalThreshold = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





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
proto.clarifai.api.TaskAIAssistant.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskAIAssistant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskAIAssistant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskAIAssistant.toObject = function(includeInstance, msg) {
  var f, obj = {
    workflowId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.clarifai.api.TaskAIAssistant}
 */
proto.clarifai.api.TaskAIAssistant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskAIAssistant;
  return proto.clarifai.api.TaskAIAssistant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskAIAssistant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskAIAssistant}
 */
proto.clarifai.api.TaskAIAssistant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowId(value);
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
proto.clarifai.api.TaskAIAssistant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskAIAssistant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskAIAssistant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskAIAssistant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string workflow_id = 1;
 * @return {string}
 */
proto.clarifai.api.TaskAIAssistant.prototype.getWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.TaskAIAssistant} returns this
 */
proto.clarifai.api.TaskAIAssistant.prototype.setWorkflowId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





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
proto.clarifai.api.TaskStatusCountPerUser.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.TaskStatusCountPerUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.TaskStatusCountPerUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskStatusCountPerUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    userId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    pending: jspb.Message.getFieldWithDefault(msg, 2, 0),
    awaitingReview: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getFieldWithDefault(msg, 4, 0),
    reviewDenied: jspb.Message.getFieldWithDefault(msg, 5, 0),
    awaitingConsensusReview: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.clarifai.api.TaskStatusCountPerUser}
 */
proto.clarifai.api.TaskStatusCountPerUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.TaskStatusCountPerUser;
  return proto.clarifai.api.TaskStatusCountPerUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.TaskStatusCountPerUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.TaskStatusCountPerUser}
 */
proto.clarifai.api.TaskStatusCountPerUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setPending(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwaitingReview(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setReviewDenied(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAwaitingConsensusReview(value);
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
proto.clarifai.api.TaskStatusCountPerUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.TaskStatusCountPerUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.TaskStatusCountPerUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.TaskStatusCountPerUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPending();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getAwaitingReview();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getSuccess();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getReviewDenied();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getAwaitingConsensusReview();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional string user_id = 1;
 * @return {string}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 pending = 2;
 * @return {number}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getPending = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setPending = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 awaiting_review = 3;
 * @return {number}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getAwaitingReview = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setAwaitingReview = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 success = 4;
 * @return {number}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getSuccess = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 review_denied = 5;
 * @return {number}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getReviewDenied = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setReviewDenied = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional uint32 awaiting_consensus_review = 6;
 * @return {number}
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.getAwaitingConsensusReview = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.TaskStatusCountPerUser} returns this
 */
proto.clarifai.api.TaskStatusCountPerUser.prototype.setAwaitingConsensusReview = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};





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
proto.clarifai.api.Collector.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.Collector.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.Collector} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collector.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    preQueueWorkflowId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    postQueueWorkflowId: jspb.Message.getFieldWithDefault(msg, 5, ""),
    collectorSource: (f = msg.getCollectorSource()) && proto.clarifai.api.CollectorSource.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto_clarifai_api_status_status_pb.Status.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.Collector}
 */
proto.clarifai.api.Collector.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.Collector;
  return proto.clarifai.api.Collector.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.Collector} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.Collector}
 */
proto.clarifai.api.Collector.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreQueueWorkflowId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostQueueWorkflowId(value);
      break;
    case 6:
      var value = new proto.clarifai.api.CollectorSource;
      reader.readMessage(value,proto.clarifai.api.CollectorSource.deserializeBinaryFromReader);
      msg.setCollectorSource(value);
      break;
    case 7:
      var value = new proto_clarifai_api_status_status_pb.Status;
      reader.readMessage(value,proto_clarifai_api_status_status_pb.Status.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.clarifai.api.Collector.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.Collector.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.Collector} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.Collector.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getPreQueueWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPostQueueWorkflowId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCollectorSource();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.clarifai.api.CollectorSource.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_clarifai_api_status_status_pb.Status.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.clarifai.api.Collector.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.clarifai.api.Collector.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 3;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.Collector.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 3));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.Collector} returns this
*/
proto.clarifai.api.Collector.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collector.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string pre_queue_workflow_id = 4;
 * @return {string}
 */
proto.clarifai.api.Collector.prototype.getPreQueueWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.setPreQueueWorkflowId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string post_queue_workflow_id = 5;
 * @return {string}
 */
proto.clarifai.api.Collector.prototype.getPostQueueWorkflowId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.setPostQueueWorkflowId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional CollectorSource collector_source = 6;
 * @return {?proto.clarifai.api.CollectorSource}
 */
proto.clarifai.api.Collector.prototype.getCollectorSource = function() {
  return /** @type{?proto.clarifai.api.CollectorSource} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.CollectorSource, 6));
};


/**
 * @param {?proto.clarifai.api.CollectorSource|undefined} value
 * @return {!proto.clarifai.api.Collector} returns this
*/
proto.clarifai.api.Collector.prototype.setCollectorSource = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.clearCollectorSource = function() {
  return this.setCollectorSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collector.prototype.hasCollectorSource = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional status.Status status = 7;
 * @return {?proto.clarifai.api.status.Status}
 */
proto.clarifai.api.Collector.prototype.getStatus = function() {
  return /** @type{?proto.clarifai.api.status.Status} */ (
    jspb.Message.getWrapperField(this, proto_clarifai_api_status_status_pb.Status, 7));
};


/**
 * @param {?proto.clarifai.api.status.Status|undefined} value
 * @return {!proto.clarifai.api.Collector} returns this
*/
proto.clarifai.api.Collector.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.Collector} returns this
 */
proto.clarifai.api.Collector.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.Collector.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};





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
proto.clarifai.api.CollectorSource.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.CollectorSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.CollectorSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CollectorSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    apiPostModelOutputsCollectorSource: (f = msg.getApiPostModelOutputsCollectorSource()) && proto.clarifai.api.APIPostModelOutputsCollectorSource.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.CollectorSource}
 */
proto.clarifai.api.CollectorSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.CollectorSource;
  return proto.clarifai.api.CollectorSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.CollectorSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.CollectorSource}
 */
proto.clarifai.api.CollectorSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.clarifai.api.APIPostModelOutputsCollectorSource;
      reader.readMessage(value,proto.clarifai.api.APIPostModelOutputsCollectorSource.deserializeBinaryFromReader);
      msg.setApiPostModelOutputsCollectorSource(value);
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
proto.clarifai.api.CollectorSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.CollectorSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.CollectorSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.CollectorSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getApiPostModelOutputsCollectorSource();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.APIPostModelOutputsCollectorSource.serializeBinaryToWriter
    );
  }
};


/**
 * optional APIPostModelOutputsCollectorSource api_post_model_outputs_collector_source = 2;
 * @return {?proto.clarifai.api.APIPostModelOutputsCollectorSource}
 */
proto.clarifai.api.CollectorSource.prototype.getApiPostModelOutputsCollectorSource = function() {
  return /** @type{?proto.clarifai.api.APIPostModelOutputsCollectorSource} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.APIPostModelOutputsCollectorSource, 2));
};


/**
 * @param {?proto.clarifai.api.APIPostModelOutputsCollectorSource|undefined} value
 * @return {!proto.clarifai.api.CollectorSource} returns this
*/
proto.clarifai.api.CollectorSource.prototype.setApiPostModelOutputsCollectorSource = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.CollectorSource} returns this
 */
proto.clarifai.api.CollectorSource.prototype.clearApiPostModelOutputsCollectorSource = function() {
  return this.setApiPostModelOutputsCollectorSource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.CollectorSource.prototype.hasApiPostModelOutputsCollectorSource = function() {
  return jspb.Message.getField(this, 2) != null;
};





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
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.APIPostModelOutputsCollectorSource.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.APIPostModelOutputsCollectorSource} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.toObject = function(includeInstance, msg) {
  var f, obj = {
    modelUserId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    modelAppId: jspb.Message.getFieldWithDefault(msg, 2, ""),
    modelId: jspb.Message.getFieldWithDefault(msg, 3, ""),
    modelVersionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    postInputsKeyId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.APIPostModelOutputsCollectorSource;
  return proto.clarifai.api.APIPostModelOutputsCollectorSource.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.APIPostModelOutputsCollectorSource} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelUserId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelAppId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setModelVersionId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPostInputsKeyId(value);
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
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.APIPostModelOutputsCollectorSource.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.APIPostModelOutputsCollectorSource} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModelUserId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getModelAppId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getModelId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getModelVersionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPostInputsKeyId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string model_user_id = 1;
 * @return {string}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.getModelUserId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource} returns this
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.setModelUserId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string model_app_id = 2;
 * @return {string}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.getModelAppId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource} returns this
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.setModelAppId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string model_id = 3;
 * @return {string}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.getModelId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource} returns this
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.setModelId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string model_version_id = 4;
 * @return {string}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.getModelVersionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource} returns this
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.setModelVersionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string post_inputs_key_id = 5;
 * @return {string}
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.getPostInputsKeyId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.clarifai.api.APIPostModelOutputsCollectorSource} returns this
 */
proto.clarifai.api.APIPostModelOutputsCollectorSource.prototype.setPostInputsKeyId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.StatValue.repeatedFields_ = [3];



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
proto.clarifai.api.StatValue.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.StatValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.StatValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    value: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.StatValue}
 */
proto.clarifai.api.StatValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.StatValue;
  return proto.clarifai.api.StatValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.StatValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.StatValue}
 */
proto.clarifai.api.StatValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.clarifai.api.StatValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.StatValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.StatValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.StatValue.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.StatValue} returns this
*/
proto.clarifai.api.StatValue.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.StatValue} returns this
 */
proto.clarifai.api.StatValue.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.StatValue.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float value = 2;
 * @return {number}
 */
proto.clarifai.api.StatValue.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.StatValue} returns this
 */
proto.clarifai.api.StatValue.prototype.setValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * repeated string tags = 3;
 * @return {!Array<string>}
 */
proto.clarifai.api.StatValue.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.StatValue} returns this
 */
proto.clarifai.api.StatValue.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.StatValue} returns this
 */
proto.clarifai.api.StatValue.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.StatValue} returns this
 */
proto.clarifai.api.StatValue.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.StatValueAggregateResult.repeatedFields_ = [1];



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
proto.clarifai.api.StatValueAggregateResult.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.StatValueAggregateResult.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.StatValueAggregateResult} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregateResult.toObject = function(includeInstance, msg) {
  var f, obj = {
    statValueAggregatesList: jspb.Message.toObjectList(msg.getStatValueAggregatesList(),
    proto.clarifai.api.StatValueAggregate.toObject, includeInstance),
    statValueAggregateQuery: (f = msg.getStatValueAggregateQuery()) && proto.clarifai.api.StatValueAggregateQuery.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.StatValueAggregateResult}
 */
proto.clarifai.api.StatValueAggregateResult.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.StatValueAggregateResult;
  return proto.clarifai.api.StatValueAggregateResult.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.StatValueAggregateResult} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.StatValueAggregateResult}
 */
proto.clarifai.api.StatValueAggregateResult.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.clarifai.api.StatValueAggregate;
      reader.readMessage(value,proto.clarifai.api.StatValueAggregate.deserializeBinaryFromReader);
      msg.addStatValueAggregates(value);
      break;
    case 2:
      var value = new proto.clarifai.api.StatValueAggregateQuery;
      reader.readMessage(value,proto.clarifai.api.StatValueAggregateQuery.deserializeBinaryFromReader);
      msg.setStatValueAggregateQuery(value);
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
proto.clarifai.api.StatValueAggregateResult.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.StatValueAggregateResult.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.StatValueAggregateResult} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregateResult.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatValueAggregatesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.clarifai.api.StatValueAggregate.serializeBinaryToWriter
    );
  }
  f = message.getStatValueAggregateQuery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.clarifai.api.StatValueAggregateQuery.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StatValueAggregate stat_value_aggregates = 1;
 * @return {!Array<!proto.clarifai.api.StatValueAggregate>}
 */
proto.clarifai.api.StatValueAggregateResult.prototype.getStatValueAggregatesList = function() {
  return /** @type{!Array<!proto.clarifai.api.StatValueAggregate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.clarifai.api.StatValueAggregate, 1));
};


/**
 * @param {!Array<!proto.clarifai.api.StatValueAggregate>} value
 * @return {!proto.clarifai.api.StatValueAggregateResult} returns this
*/
proto.clarifai.api.StatValueAggregateResult.prototype.setStatValueAggregatesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.clarifai.api.StatValueAggregate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.StatValueAggregate}
 */
proto.clarifai.api.StatValueAggregateResult.prototype.addStatValueAggregates = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.clarifai.api.StatValueAggregate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.StatValueAggregateResult} returns this
 */
proto.clarifai.api.StatValueAggregateResult.prototype.clearStatValueAggregatesList = function() {
  return this.setStatValueAggregatesList([]);
};


/**
 * optional StatValueAggregateQuery stat_value_aggregate_query = 2;
 * @return {?proto.clarifai.api.StatValueAggregateQuery}
 */
proto.clarifai.api.StatValueAggregateResult.prototype.getStatValueAggregateQuery = function() {
  return /** @type{?proto.clarifai.api.StatValueAggregateQuery} */ (
    jspb.Message.getWrapperField(this, proto.clarifai.api.StatValueAggregateQuery, 2));
};


/**
 * @param {?proto.clarifai.api.StatValueAggregateQuery|undefined} value
 * @return {!proto.clarifai.api.StatValueAggregateResult} returns this
*/
proto.clarifai.api.StatValueAggregateResult.prototype.setStatValueAggregateQuery = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.StatValueAggregateResult} returns this
 */
proto.clarifai.api.StatValueAggregateResult.prototype.clearStatValueAggregateQuery = function() {
  return this.setStatValueAggregateQuery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.StatValueAggregateResult.prototype.hasStatValueAggregateQuery = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.StatValueAggregate.repeatedFields_ = [4];



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
proto.clarifai.api.StatValueAggregate.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.StatValueAggregate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.StatValueAggregate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregate.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    aggregateValue: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    count: jspb.Message.getFieldWithDefault(msg, 3, 0),
    tagsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.clarifai.api.StatValueAggregate}
 */
proto.clarifai.api.StatValueAggregate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.StatValueAggregate;
  return proto.clarifai.api.StatValueAggregate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.StatValueAggregate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.StatValueAggregate}
 */
proto.clarifai.api.StatValueAggregate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setAggregateValue(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
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
proto.clarifai.api.StatValueAggregate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.StatValueAggregate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.StatValueAggregate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAggregateValue();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.StatValueAggregate.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
*/
proto.clarifai.api.StatValueAggregate.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.StatValueAggregate.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float aggregate_value = 2;
 * @return {number}
 */
proto.clarifai.api.StatValueAggregate.prototype.getAggregateValue = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.setAggregateValue = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional uint64 count = 3;
 * @return {number}
 */
proto.clarifai.api.StatValueAggregate.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated string tags = 4;
 * @return {!Array<string>}
 */
proto.clarifai.api.StatValueAggregate.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.StatValueAggregate} returns this
 */
proto.clarifai.api.StatValueAggregate.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.clarifai.api.StatValueAggregateQuery.repeatedFields_ = [1,2];



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
proto.clarifai.api.StatValueAggregateQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.clarifai.api.StatValueAggregateQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.clarifai.api.StatValueAggregateQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregateQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    tagGroupsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    statValueAggType: jspb.Message.getFieldWithDefault(msg, 3, 0),
    statTimeAggType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    startTime: (f = msg.getStartTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    endTime: (f = msg.getEndTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
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
 * @return {!proto.clarifai.api.StatValueAggregateQuery}
 */
proto.clarifai.api.StatValueAggregateQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.clarifai.api.StatValueAggregateQuery;
  return proto.clarifai.api.StatValueAggregateQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.clarifai.api.StatValueAggregateQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.clarifai.api.StatValueAggregateQuery}
 */
proto.clarifai.api.StatValueAggregateQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTagGroups(value);
      break;
    case 3:
      var value = /** @type {!proto.clarifai.api.StatValueAggType} */ (reader.readEnum());
      msg.setStatValueAggType(value);
      break;
    case 4:
      var value = /** @type {!proto.clarifai.api.StatTimeAggType} */ (reader.readEnum());
      msg.setStatTimeAggType(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setStartTime(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setEndTime(value);
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
proto.clarifai.api.StatValueAggregateQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.clarifai.api.StatValueAggregateQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.clarifai.api.StatValueAggregateQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.clarifai.api.StatValueAggregateQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getTagGroupsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getStatValueAggType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getStatTimeAggType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getStartTime();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getEndTime();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.setTagsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.addTags = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.clearTagsList = function() {
  return this.setTagsList([]);
};


/**
 * repeated string tag_groups = 2;
 * @return {!Array<string>}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getTagGroupsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.setTagGroupsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.addTagGroups = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.clearTagGroupsList = function() {
  return this.setTagGroupsList([]);
};


/**
 * optional StatValueAggType stat_value_agg_type = 3;
 * @return {!proto.clarifai.api.StatValueAggType}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getStatValueAggType = function() {
  return /** @type {!proto.clarifai.api.StatValueAggType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.clarifai.api.StatValueAggType} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.setStatValueAggType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional StatTimeAggType stat_time_agg_type = 4;
 * @return {!proto.clarifai.api.StatTimeAggType}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getStatTimeAggType = function() {
  return /** @type {!proto.clarifai.api.StatTimeAggType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.clarifai.api.StatTimeAggType} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.setStatTimeAggType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp start_time = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getStartTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
*/
proto.clarifai.api.StatValueAggregateQuery.prototype.setStartTime = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.clearStartTime = function() {
  return this.setStartTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.hasStartTime = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Timestamp end_time = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.getEndTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
*/
proto.clarifai.api.StatValueAggregateQuery.prototype.setEndTime = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.clarifai.api.StatValueAggregateQuery} returns this
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.clearEndTime = function() {
  return this.setEndTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.clarifai.api.StatValueAggregateQuery.prototype.hasEndTime = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * @enum {number}
 */
proto.clarifai.api.ExpirationAction = {
  EXPIRATION_ACTION_NOT_SET: 0,
  DELAY: 1,
  EXPIRY: 2
};

/**
 * @enum {number}
 */
proto.clarifai.api.LicenseScope = {
  LICENSE_SCOPE_NOT_SET: 0,
  PREDICT: 1,
  TRAIN: 2,
  SEARCH: 3
};

/**
 * @enum {number}
 */
proto.clarifai.api.ValueComparator = {
  CONCEPT_THRESHOLD_NOT_SET: 0,
  GREATER_THAN: 1,
  GREATER_THAN_OR_EQUAL: 2,
  LESS_THAN: 3,
  LESS_THAN_OR_EQUAL: 4,
  EQUAL: 5
};

/**
 * @enum {number}
 */
proto.clarifai.api.EvaluationType = {
  CLASSIFICATION: 0,
  DETECTION: 1
};

/**
 * @enum {number}
 */
proto.clarifai.api.APIEventType = {
  API_EVENT_TYPE_NOT_SET: 0,
  ON_PREM_PREDICT: 1,
  ON_PREM_TRAIN: 2,
  ON_PREM_SEARCH: 3
};

/**
 * @enum {number}
 */
proto.clarifai.api.UsageIntervalType = {
  UNDEF: 0,
  DAY: 1,
  MONTH: 2,
  YEAR: 3
};

/**
 * @enum {number}
 */
proto.clarifai.api.StatValueAggType = {
  SUM: 0,
  AVG: 1
};

/**
 * @enum {number}
 */
proto.clarifai.api.StatTimeAggType = {
  NO_TIME_AGG: 0,
  YEAR: 1,
  MONTH: 2,
  WEEK: 3,
  DAY: 4,
  HOUR: 5,
  MINUTE: 6
};

goog.object.extend(exports, proto.clarifai.api);
