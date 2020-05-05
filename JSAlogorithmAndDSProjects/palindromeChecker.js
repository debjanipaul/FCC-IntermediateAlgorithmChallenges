/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.*/

function palindrome(str) {
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let newStr = str.split('').reverse().join('')

    if (str === newStr) {
        return true;
    } else {
        return false;
    }
}
palindrome("eye");
palindrome("My age is 0, 0 si ega ym.")
palindrome("A man, a plan, a canal. Panama")