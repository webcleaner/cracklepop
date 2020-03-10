 debugger;
        var text = "";
        for (var i = 1; i <= 100 ; i++) {                 //create a for loop that will iterate through 1 to 100
           
             
          if (i % 3 === 0 && i % 5 === 0) {    //if i is divisible by 3 and 5, alert CracklePop
    
           text+= i + " CracklePop" + "<br>" ;
           document.getElementById("demo").innerHTML = text;
         // console.log (i + " CracklePop");
         
        } else if (i%3===0) {         //If a #, when divided by 2, has a remainder of 0, number even. 
              //div 5 === 5, 15, 25, 35, 45, 55, 65, 75, 85, 95     
           var crackle =   i + " Crackle"; 
           text += i + " Crackle" + "<br>";
           document.getElementById("demo").innerHTML = text;
         // console.log ( i + " Crackle");
         
        } else if (i%5===0){    //numbers divisible by 5, contains last digits 0 or 5
           var pop = i + " Pop";
           text += i + " Pop" + "<br>";
           document.getElementById("demo").innerHTML = text;
            
         // console.log(i + " Pop");
         
          }else{         
              
           text += i +  "<br>";
           document.getElementById("demo").innerHTML = text;
         // console.log(i);
            }
        }
