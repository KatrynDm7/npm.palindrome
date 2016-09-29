# npm.palindrome
<ul type="square">
"is-this-palindrome" it is a small and simple library providing the opportunity to check input parameters like:
    <li>string</li>
    <li>word</li>
    <li>combination of numbers</li>
    is a palindrome or not
</ul>

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
