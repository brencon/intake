'use strict';

var expect = require('chai').expect;
var intake = require('../index');

describe('#toTitleCase - String Formatted to Title Case', function() {
	it('String contents unchanged ignoring minor words', function() {
		var str = 'This Is A Title Case Sentence';
		var result = intake.toTitleCase(str);
		expect(result).to.equal(str);
	});
	it('String contents unchanged', function() {
		var str = 'This is a Sentence Case Sentence';
		var result = intake.toTitleCase(str, true);
		expect(result).to.equal(str);
	});
	it('First character changed to upper case', function() {
		var str = 'test';
		var result = intake.toTitleCase(str)[0];
		expect(result).to.equal('T');
	});
	it('First character of each word changed to upper case', function() {
		var str = 'this is a test';
		var strArray = str.split(' ');
		var strTitleCase = intake.toTitleCase(str);
		var strTitleCaseArray = strTitleCase.split(' ');
		for (var i = 0; i < strArray.length; i++) {
			var result = strTitleCaseArray[i][0];
			expect(result).to.equal(strArray[i][0].toUpperCase());
		}
	});	
});

describe('#toTitleCase - Does Not Break for Non-Strings', function() {
	it('Number is ignored', function() {
		var num = 0;
		var result = intake.toTitleCase(num);
		expect(result).to.equal(num);
	});
	it('Object is ignored', function() {
		var obj = {
			'name': 'test'
		};
		var result = intake.toTitleCase(obj);
		expect(result).to.equal(obj);
	});
	it('Null is ignored', function() {
		var obj = null;
		var result = intake.toTitleCase(obj);
		expect(result).to.equal(obj);
	});
	it('Undefined is ignored', function() {
		var obj = undefined;
		var result = intake.toTitleCase(obj);
		expect(result).to.equal(obj);
	});

});
