// asi el sistema reconoce que es un comentario este archivo se relaciona con https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics
// ejemplo codigo terminado en GIT HUB  https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/favorite-1.jpg') {
      miImage.setAttribute('src','images/favorite-2.jpg');
    } else {
      miImage.setAttribute('src', 'images/favorite-1.jpg');
    }
}

// mensaje de bienvenida y caputra de usuario  y cambio de usuario

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

// La función estableceNombreUsuario() contiene una función prompt(), que crea un cuadro de diálogo como lo hace alert();
// la diferencia es que prompt() pide al usuario un dato, y almacena este dato en una variable cuando el botón Aceptar del cuadro de diálogo es presionado.
// En este caso, pedirás al usuario que ingrese su nombre. Luego, llamarás la API localStorage, que nos permite almacenar datos en el navegador y recuperarlos luego. Usarás la función setItem() de localStorage, que crea y almacena un dato en el elemento llamado 'nombre', y coloca este valor en la variable miNombre que contiene el nombre que el usuario ingresó. Finalmente, establecerás el textContent del título a una cadena, más el nombre de usuario recientemente almacenado.
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
	if(!miNombre) {
    estableceNombreUsuario();
	}
	else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'El reinio animal es genial,' + miNombre;
}
}

//La primera línea de este bloque usa el operador de negación (NO lógico representado por !) para comprobar si el elemento 'nombre' existe.
// Si no existe, la función estableceNombreUsuario() se iniciará para crearlo. Si ya existe (como por ejemplo cuando el usuario ya ingresó al sitio), 
//se recupera el dato del nombre usando getItem() y se fija mediante textContent del título a la cadena, más el nombre del usuario, como hiciste dentro de estableceNombreUsuario().
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'El reinio animal es genial,' + nombreAlmacenado;
}
//Finalmente, agrega abajo el evento onclick que manipulará el botón, de modo que cuando sea pulsado se inicie la función estableceNombreUsuario().
// Esto permitirá al usuario establecer un nuevo nombre cada vez que lo desee al pulsar el botón:

miBoton.onclick = function() {
    estableceNombreUsuario();
}