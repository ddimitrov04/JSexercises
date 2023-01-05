function isTriangle(a,b,c){
   if(a>0 && b>0 && c>0){
      if(a ==b && b ==c ){
         return true;
      }else{
         if(a>b){
            if(a>c){
               if(c+b>a){
                  return true;
               }
            }else{
               if(a+b>c){
                  return true;
               }
            }

         }else{
            if(b>c){
               if(a+c>b){
                  return true;
               }
            }else{
               if(a+b>c){
                  return true;
               }
            }
         
      } 
    
      }
   }
   return false;
}
