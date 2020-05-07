/* One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.*/

function rot13(str) {

    let dict = {
        'A': 'N',
        'B': 'O',
        'C': 'P',
        'D': 'Q',
        'E': 'R',
        'F': 'S',
        'G': 'T',
        'H': 'U',
        'I': 'V',
        'J': 'W',
        'K': 'X',
        'L': 'Y',
        'M': 'Z',
        'N': 'A',
        'O': 'B',
        'P': 'C',
        'Q': 'D',
        'R': 'E',
        'S': 'F',
        'T': 'G',
        'U': 'H',
        'V': 'I',
        'W': 'J',
        'X': 'K',
        'Y': 'L',
        'Z': 'M',
        ' ': ' '
    }
    let arr = []
    str = str.split('');

    for (let i = 0; i < str.length; i++) {
        for (let letter in dict) {
            if (str[i] === letter) {
                arr.push((dict[letter]))
            }
        }
    }
    return (arr.join(''))

}

rot13("SERR PBQR PNZC");
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");

// function rot13(str) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     return str
//       .split('')
//       .map(char => {  
//         const pos = alphabet.indexOf(char);      
//         return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
//       })
//       .join('');
// }

function rot13(str) {
    var newWord = [];
    for (i = 0; i < str.length; i++) {
        var newLet = str.charCodeAt(i);
        if (newLet >= 65 && newLet <= 90) {
            newLet -= 13;
            if (newLet < 65) {
                newLet += 26;
            }
        }
        newWord.push(String.fromCharCode(newLet));
    }
    return newWord.join('');
}