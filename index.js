//  Intake.js 0.7.6
//  http://intakejs.com
//  (c) 2013 Victor Quinn
//  Intake may be freely distributed or modified under the MIT license.

(function () {

    // Constructor
    function Intake () {
        return this;
    }

	// isEmptyOrUndefined
	//		args: obj
	//		summary: determines whether the object is undefined, null, or an empty string
	//					it assumes the consumer wants all cases of emptiness to be equal
	//		return: Boolean
   Intake.prototype.isEmptyOrUndefined = function(obj) {
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

	// toTitleCase
	//		args: str
	//		summary: converts all elements of a string to title case
	//		return: String
	Intake.prototype.toTitleCase = function(str, minorsToLowerCase) {
		if ((typeof str === 'string') && (!this.isEmptyOrUndefined(str))) {
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

   // CommonJS module
   if (typeof exports !== 'undefined') {
      if (typeof module !== 'undefined' && module.exports) {
         exports = module.exports = Intake;
      }
      exports.Intake = Intake;
   }

   // Register as an anonymous AMD module
   if (typeof define === 'function' && define.amd) {
      define([], function () {
         return Intake;
      });
   }

   // if there is a importsScrips object define intake for worker
   if (typeof importScripts !== 'undefined') {
      intake = new Intake();
   }

   // If there is a window object, that at least has a document property,
   // instantiate and define intake on the window
   if (typeof window === "object" && typeof window.document === "object") {
      window.Intake = Intake;
      window.intake = new Intake();
   }
})();
