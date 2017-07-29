'use strict';

function guessNumber(num1, num2){
  // write your code here...
  const NUMBERLENGTH = 4;
  let a = 0;
  let b = 0;

  for (let i = 0; i < NUMBERLENGTH; i++) {
    if(num2.toString().indexOf(num1.toString()[i]) === i){
      a++;
    }else if(num2.toString().indexOf(num1.toString()[i]) !== -1) {
      b++;
    }
  }

  return `${a}A${b}B`;
}