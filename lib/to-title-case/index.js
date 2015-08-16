'use strict';

var isEmptyOrUndefined = require('../is-empty-or-undefined/index');

// toTitleCase
//		args: str
//		summary: converts all elements of a string to title case
//		return: String		
module.exports = function(str, minorsToLowerCase) {
	var self = this;
	if ((typeof str === 'string') && (!isEmptyOrUndefined(str))) {
		// trim whitespace
		str = str.trim();
		// ignore words
		var ignoreWords = ['II', 'III', 'IV'];
		for (var i = 0; i < ignoreWords.length; i++) {
			if (str === ignoreWords[i]) {
				return str;
			}
		}
		// change to to title case
		var newStr = str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
		// if true: replaces string(s) with minor word set to lower case
		if (minorsToLowerCase === true) {
			var minorWords = ['A', 'An', 'And', 'As', 'At', 'But', 'By', 'For', 'From', 'In', 'Into', 'Is', 'Near', 'Nor', 'Of', 'On', 'Onto', 'Or', 'The', 'To', 'With'];
				for (var j = 0; j < minorWords.length; j++) {
 				newStr = newStr.replace(new RegExp('\\s' + minorWords[j] + '\\s', 'g'), function(txt) {
  					return txt.toLowerCase();
				});
			}
		}
		return newStr;
	}
	else {
		return str;
	}
};