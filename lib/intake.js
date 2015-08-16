var exports = module.exports = {};

var isEmptyOrUndefined = require('../lib/is-empty-or-undefined/index');
var toTitleCase = require('../lib/to-title-case/index');

exports.isEmptyOrUndefined = function(obj) {
	return isEmptyOrUndefined(obj);
};

exports.toTitleCase = function(str, minorsToLowerCase) {
	return toTitleCase(str, minorsToLowerCase);
};