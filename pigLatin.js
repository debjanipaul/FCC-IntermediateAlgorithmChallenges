/* Perform a search and replace on the sentence using the arguments provided and return the new
sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it.
For example if you mean to replace the word "Book" with the word "dog", 
it should be replaced as "Dog"*/



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
