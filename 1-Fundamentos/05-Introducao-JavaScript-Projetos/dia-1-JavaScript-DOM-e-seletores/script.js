function converteTemperatura (temperatura,escalaOrigem,escalaDesejada){

    var temperatura;

if (escalaOrigem == 'celsius' || escalaOrigem == 'fahrenheit' || escalaOrigem == 'kelvin'){


    if (escalaDesejada == 'celsius' || escalaDesejada == 'fahrenheit' || escalaDesejada== 'kelvin'){

         
   if (escalaOrigem != escalaDesejada) {

    //celsius
       if (escalaOrigem == 'celsius' && escalaDesejada == 'kelvin'){

        return   temperatura = temperatura + 273.15;

       } else if (escalaOrigem == 'celsius' && escalaDesejada == 'fahrenheit') {

        return   temperatura = ( temperatura * 1.8 ) + 32; 
       }
   // fahrenheit

      if (escalaOrigem == 'fahrenheit' && escalaDesejada == 'celsius'){

        return temperatura = (temperatura  - 32 ) / 1.8;
      } else if (escalaOrigem == 'fahrenheit' && escalaDesejada == 'kelvin'){
  
        return temperatura = ( (( temperatura - 32) * 5 ) / 9)  + 273.15; 
      }
  
       // kelvin
  
      if (escalaOrigem == 'kelvin' && escalaDesejada == 'celsius'){
  
        return  temperatura = temperatura - 273.15;
  
      } else if (escalaOrigem == 'kelvin' && escalaDesejada == 'fahrenheit'){
      
         return temperatura = ((( temperatura - 273.15 ) * 9) / 5 ) + 32; 
      }

  } 

    }
}
}