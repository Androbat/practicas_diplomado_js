/* 

Crea un script que pida al usuario el diámetro de una rueda y su grosor (en metros) 
y a través de condicionales if realice las siguientes operaciones:


a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje “La rueda es para un vehículo grande”. 
Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse el mensaje “La rueda es para un vehículo mediano”. 
Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla el mensaje 
“La rueda es para un vehículo pequeño”.


b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, 
ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, con un grosor inferior a 0.25, 
deberá mostrarse el mensaje “El grosor para esta rueda es inferior al recomendado”
*/

let diametro = parseFloat(window.prompt("Cual es el diametro"));

if (diametro > 1.4){
    console.log("La rueda es para un vehiculo grande.");
} else if (diametro <= 1.4 && diametro > 0.8){
    console.log("La rueda es para un vehiculo mediano.");
} else{
    console.log("La rueda es para un vehiculo pequeño");
}

let grosor = parseInt(window.prompt("Ingrese el grosor"));

//if ((diametro > 1.4 && grosor < 0.4) || (diametro <= 1.4 && diametro > 0.8 && grosor < 0.25)){
//    console.log("El grosor para esta rueda es inferior al recomendado")}

if (diametro > 1.4 && grosor < 0.4){
    console.log("El grosor para esta rueda es inferior al recomendado.");
    
}

