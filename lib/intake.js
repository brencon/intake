var exports = module.exports = {};

// checks if obj is undefined
exports.isEmptyOrUndefined = function(obj) {
	if ((obj === undefined) || (obj === null) || (typeof obj === undefined)) {
   	return true;
	}
	else if ((typeof obj === 'object') && (Object.keys(obj).length === 0)) {
		return true;
	}
   else if ((typeof obj === 'string') && (obj.toString().trim() === '')) {
   	return true;
   }
   else {
   	return false;
   }
};