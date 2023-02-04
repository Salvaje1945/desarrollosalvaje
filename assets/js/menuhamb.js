window.onload=inicio;
function inicio(){
    document.getElementById("enlace-hamb").onclick=cierre_menu;
    document.getElementById("alcielo").onclick=chau_boton;
}

function cierre_menu(){
    let cosito = document.getElementById("check");
    cosito.checked = false;
    document.getElementById("contenido__subir").style.right="10px";
}

function chau_boton(){
    document.getElementById("contenido__subir").style.right="-100%";
}
