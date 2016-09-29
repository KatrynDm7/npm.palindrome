/**
 * Simple palindrome check
 *
 * @param  {String} string
 * @return {Boolean}
 */
module.exports = {
    isPalindrome: function(string) {
        var string = string.toString().toLowerCase();
        if (string.split(' ').length > 1) {
            var pattern = /[\s+/.,!?\'\;\-:]*/g;
            return string.replace(pattern, '') == string.replace(pattern, '').split('').reverse().join('').toLowerCase();

        }
        return string == string.split('').reverse().join('').toLowerCase();
    }
};
