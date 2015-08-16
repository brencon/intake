'use strict';

// isEmptyOrUndefined
//		args: obj
//		summary: determines whether the object is undefined, null, or an empty string
//					it assumes the consumer wants all cases of emptiness to be equal
//		return: Boolean
module.exports = function(obj) {
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