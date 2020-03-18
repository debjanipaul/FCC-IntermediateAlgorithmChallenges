/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the
end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

If a word does not contain a vowel, just add "ay" to the end.

Input strings are guaranteed to be English words in all lowercase.*/



function translatePigLatin(str) {
  let newStr = str.split('');
  let vowel = ['a','e','i','o','u'];
  let newStr1 = ''
  let strIndex=0

  if (vowel.includes(str[0])){
    newStr1 = str + 'way';
  }else{
    for(let i=0;i<newStr.length;i++){
      if(vowel.includes(newStr[i])) {
         strIndex = newStr.indexOf((newStr[i]));
         console.log("index",strIndex)
         break;
      }
    }
    newStr1 = str.slice(strIndex)+ str.slice(0,strIndex)+ 'ay';
  }


  console.log(newStr1)
}

translatePigLatin("onsonant");
translatePigLatin("rythm");
translatePigLatin("glove");
translatePigLatin("paragraphs");
