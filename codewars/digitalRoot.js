function digitalRoot(n) {
  let finalNum = n;
  while (finalNum>=10) {
   let arrOfDigits = Array.from(String(finalNum), Number);
      finalNum = 0;
      for (let i = 0; i < arrOfDigits.length; i++) {
         finalNum += arrOfDigits[i];
      }
   }
   console.log(finalNum);
}
digitalRoot(2345235)
