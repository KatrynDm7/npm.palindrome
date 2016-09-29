# npm.palindrome
Is-this-palindrome it is a small and simple library providing the opportunity to check input parameters like:
    - string
    - word
    - combination of numbers
is a palindrome or not

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
