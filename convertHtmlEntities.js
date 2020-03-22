/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their
corresponding HTML entities.*/


function convertHTML(str) {
  let newStr = str.split('');

  for(let i=0; i<newStr.length; i++) {
    if(newStr[i]=='&') {
      newStr[i]='&amp;';
    }else if(newStr[i]=='<') {
      newStr[i]='&lt;';
    }else if(newStr[i]=='>') {
      newStr[i]='&gt;';
    }else if(newStr[i]=='"') {
      newStr[i]='&quot;';
    }else if(newStr[i]=="'") {
      newStr[i]='&apos;';
    }
  }
  return(newStr.join(''))
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML("<>");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("abc")
