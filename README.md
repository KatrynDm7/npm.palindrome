# npm.palindrome
Small library provides the opportunity to check whether a word, a combination of numbers, a palindrome is a string or not.

# Installation

```shell
  npm install is-this-palindrome --save
```

# Usage

```js
  var palindrome = require('is-this-palindrome');
  var isPalindrome = palindrome.isPalindrome;
  console.log(isPalindrome("A man, a plan, a canal: Panama."));
  console.log(isPalindrome("not a Palindrom"));
```

# Tests

```shell
   npm test
```
