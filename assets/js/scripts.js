window.onload=inicio;
function inicio(){
    document.getElementById("hamb-sobremi").onclick=cierre_menu;
    document.getElementById("hamb-servicios").onclick=cierre_menu;
    document.getElementById("alcielo").onclick=chau_boton;
    document.getElementById("dkp-sobremi").onclick=hola_boton;
    document.getElementById("dkp-servicios").onclick=hola_boton;
}

function cierre_menu(){
    let cosito = document.getElementById("check");
    cosito.checked = false;
    document.getElementById("contenido__subir").style.right="10px";
}

function hola_boton(){
    document.getElementById("contenido__subir").style.right="10px";
}

function chau_boton(){
    document.getElementById("contenido__subir").style.right="-100%";
}
