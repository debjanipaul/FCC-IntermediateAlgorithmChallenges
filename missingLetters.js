/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined*/

function fearNotLetter(str) {
  let letters = 'abcdefghijklmnopqrstuvwxyz'
  let a = str.length;
  let newStr=''

  let startIndex = letters.indexOf(str.charAt(0))
  let endIndex = a + startIndex + 1;
  let partOfString = letters.slice(startIndex, endIndex)

  for(let i=0; i<partOfString.length; i++) {
      if(partOfString[i] != str[i]){
        newStr = partOfString[i];
        break
    }
  }
    if(newStr===''){
      return(undefined)
    }else{
       return(newStr);
    }
}

fearNotLetter("bcef");//d
fearNotLetter("abcdefghjklmno");
fearNotLetter("abcdefghijklmnopqrstuvwxyz");
fearNotLetter("bcdf");
