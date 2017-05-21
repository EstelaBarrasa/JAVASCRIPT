	//Inicializamos todas las variables globaloes//	
	var arrayContactos = new Array();
	var contador = 0;


		//function menuAgenda(){

			//do{
				//var opcion= prompt("Introduzca el numero de la opcion a realizar:");
				//switch(opcion){
				//case `1`:añadirContacto();
				//break;

				//case `2`:eliminarContacto();
				//break;

				//case `3`:mostrarContacto();
				//break;

				//case `4`:buscarContacto();
				//break;

				//case `s`:salirAgenda();
				//break;

				//default: alert("¡¡Error, no has introducido ninguna opcion valida!!")
				//}
			//}while (opcion != `s`)	

		//}//cierre funcion menuAgenda


		function añadirContacto(){
			
			if(contador < 4){
				arrayContactos[contador] = prompt("Introduzca nombre;");
				contador++;
			}	
			else{
				alert("La agenda esta a punto de petar...¡¡borra!!")
			}
		}//cierre añadirContacto


		function eliminarContacto(){
			
			var posicion = prompt ("Introduzca la posicion a borrar; ");
			var pos_real = posicion - 1; //para tener la posicion real en el array
			//(siempre va un numero por debajo de lo que marcamos)
			if ((arrayContactos == null) || (arrayContactos==undefined) || 
				(arrayContactos==" ")){
				alert("¡¡Cuidado, la agenda esta empty!!");
			}
			else if ((pos_real<0) || (pos_real >= arrayContactos.length)){
				alert("¡¡La posicion que has introducido esta fuera de rango!!")
			}
			else{
				arrayContactos.splice(pos_real,1);//nombre_array.splice(posicion_comienzo,numero_elementos_a_borrar)
				//para borrar los elementos que yo quiera desde una posicion determinada.
				//Un array que contiene los elementos eliminados. Si solo se ha eliminado
				//un elemento, devuelve un array con un solo elemento. Si no se ha eliminado
				//ningun elemento, devuelve un array vacio.
				contador--;
			}

		}//cierre eliminarContactos


		function mostrarContacto(){
			document.write("1. "+ arrayContactos[0] + "<br>" );
			document.write("2. "+ arrayContactos[1] + "<br>" );	
			document.write("3. "+ arrayContactos[2] + "<br>" );
			document.write("4. "+ arrayContactos[3] + "<br>" );	
		}//cierre mostrarContacto
			

		function buscarContacto(){
			var contacto = prompt("¿En que posicion desea buscar?");
			var pos_real = contacto - 1;
			for(i=0; i<=arrayContactos.length;i++){
				if(pos_real==arrayContactos[i]){
					alert("Encontrado el contacto: " +arrayContactos[i]);
				}
			}
		}