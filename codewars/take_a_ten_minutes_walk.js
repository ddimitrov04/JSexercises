function isValidWalk(walk) {
   let i = 0;
   let endPosition = 0;
   if(walk.length<10 || walk.length >10){
     return false;
   }else{
     while(i<=10){
      if(walk[i]== "n"){
         endPosition+=1;
      }else if(walk[i] == "s"){
         endPosition-=1;
      }else if(walk[i] == "e"){
         endPosition+=2;
      }else if(walk[i] == "w"){
         endPosition-=2;
      }
      i++;
     }
     if(endPosition === 0){
      return true;
     }else{
      return false;
     }
   }

   
 
}
