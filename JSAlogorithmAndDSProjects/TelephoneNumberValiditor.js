/* 
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
*/

function telephoneCheck(str) {
    let regEx = /^\d{3}-\d{3}-\d{4}$/;
    let regEx1 = /^(1) \d{3}-\d{3}-\d{4}$/;
    let regEx2 = /^\d{10}$/;
    let regEx3 = /^\(\d{3}\)\d{3}-\d{4}$/;
    let regEx4 = /^(1)\(\d{3}\)\d{3}-\d{4}$/;
    let regEx5 = /^(1) \d{3} \d{3} \d{4}$/;
    let regEx6 = /^(1) \(\d{3}\) \d{3}-\d{4}$/;

    if (str.match(regEx)) {
        return true;

    } else if (str.match(regEx1)) {
        return true;

    } else if (str.match(regEx2)) {
        return true;

    } else if (str.match(regEx3)) {
        return true;

    } else if (str.match(regEx4)) {
        return true;

    } else if (str.match(regEx5)) {
        return true;

    } else if (str.match(regEx6)) {
        return true;

    } else {
        return false
    }
}
/*Code Explanation
^ denotes the beginning of the string.
(1\s?)? allows for “1” or "1 " if there is one.
\d{n} checks for exactly n number of digits so \d{3} checks for three digits.
x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
[\s\-]? checks for spaces or dashes between the groups of digits.
$ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false. */

// function telephoneCheck(str) {
//     var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
//     return regex.test(str);
//   }


// telephoneCheck("555-555-5555");