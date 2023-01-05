function DNAStrand(dna){
   const arrOfDna = Array.from(String(dna));
   let outputDNA = ""
   let i = 0;
   while(i != arrOfDna.length){
      if(arrOfDna[i] === "A"){
         outputDNA+="T"
      }else if(arrOfDna[i]=== "T"){
         outputDNA+="A"
      }else if(arrOfDna[i] === "C"){
         outputDNA+="G";
      }else if(arrOfDna[i]==="G"){
         outputDNA+="C"
      }
      i++;
   }   
   console.log(outputDNA);

}
DNAStrand("ATTGC")
