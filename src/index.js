module.exports =   function check(str1, bracketsConfig) {

    let arrStr = bracketsConfig.join("");
    arrStr = arrStr.replace(/,/g, '');

    if ( str1.includes('(') == false && str1.includes('|') == false){

      if (str1.length % 2 != 0) { return false}
      for (let i=0; i < str1.length; i++) {
        if (str1[i] != str1[str1.length-i]) {
          return false
        } else {return true}
      }}
        

function checkStr(str) {
  let firstBr = 0;
  let secondBr = 0;
  let thirdBr = 0;
  let fourthBr = 0;
  let lastBr = '';



      for (let i = 0; i< str.length; i++) {
          if (str.charAt(i) == '(') {
          firstBr++
          lastBr += '('
      }
      if (str.charAt(i) == ')')  {
          firstBr--;
          if (lastBr[lastBr.length-1] != '(') {return false}
          else {lastBr = lastBr.slice(0,lastBr.length-1)}
      }
      if (str.charAt(i) == '[') {
          secondBr++;
          lastBr += '['
      }
      if (str.charAt(i) == ']')  {
          secondBr--;
          if (lastBr[lastBr.length-1] != '[') {return false}
          else {lastBr = lastBr.slice(0,lastBr.length-1)}
      }
      if (str.charAt(i) == '{') {
          thirdBr++
          lastBr += '{'
      }
      if (str.charAt(i) == '}')  {
          thirdBr--;
          if (lastBr[lastBr.length-1] != '{') {return false}
          else {lastBr = lastBr.slice(0,lastBr.length-1)}
      }
      if (str.charAt(i) == '|'){
        if (fourthBr == 0) {
            fourthBr++
            lastBr += '|'
        } else {
            if (lastBr[lastBr.length-1] != '|') {return false}
            else {
                lastBr = lastBr.slice(0,lastBr.length-1);
                fourthBr--;
            }
        }

      }
      }
      if (firstBr == 0 && secondBr == 0 && thirdBr == 0 && fourthBr == 0) {
          return true
      } else {
          return false
      }
  
}

if (checkStr(str1) == true && checkStr(arrStr) == true) {
return true
} else {
return false
}}

