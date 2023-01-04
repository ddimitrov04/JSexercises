function squareDigits(number){
   const arrOfDigits = Array.from(String(number), Number);
   let squaredDigits = ""; 
   console.log(arrOfDigits)
   for(let i = 0; i<arrOfDigits.length; i++){
      currentNum = arrOfDigits[i]*arrOfDigits[i]
      squaredDigits += currentNum;
   }
   return parseInt(squaredDigits)
}
squareDigits([9119])
