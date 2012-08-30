

// if you implement onInit, you must call cb() when done, so the framework knows when to continue start-up
exports.onInit = function(feather, cb) {

  var api = require('./lib/api');
  feather.ns('training');
  training.api = api;

  if (typeof cb === "function") cb();
};


/*
exports.onReady = function(feather) {

};
*/