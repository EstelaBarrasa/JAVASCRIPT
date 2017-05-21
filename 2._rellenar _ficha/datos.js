
 function myFunction(){
		nombre = prompt("¿como te llamas?"); 
      
        edad = prompt("¿cuantos años tienes?");
        if (isNaN(edad)){
            edad = prompt("Lo que has introducido no es un numero, vuelve a intentarlo");
        }
        
        hobby = prompt("¿Cual es tu hobby?");
     

     	document.write("Nombre: "+nombre);
		document.write("\nEdad: "+edad);
		document.write("\nHobby: "+hobby);
		
 }

