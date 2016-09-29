var should = require("chai").should();
var polindrome = require("../index");
var isPalindrome = polindrome.isPalindrome;

describe("#isPalindrome", function() {
  it("should return true", function() {
    isPalindrome("Madam, I'm Adam").should.equal(true);
  });

  it("should return true", function() {
    isPalindrome("а роза упала на лапу азора.").should.equal(true);
  });

  it("should return true", function() {
    isPalindrome("101").should.equal(true);
  });

  it("should return true", function() {
    isPalindrome("abba").should.equal(true);
  });

  it("should return false", function() {
    isPalindrome("not a Palindrom").should.equal(false);
  });
});
