window.onload = inicio;
function inicio() {
    document.getElementById("hamb-sobremi").onclick = cierre_menu
    document.getElementById("hamb-servicios").onclick = cierre_menu
    document.getElementById("hamb-oservicios").onclick = cierre_menu
    document.getElementById("hamb-portfolio").onclick = cierre_menu
    document.getElementById("hamb-proyectos").onclick = cierre_menu
    document.getElementById("hamb-presupuesto").onclick = cierre_menu
    document.getElementById("alcielo").onclick = chau_boton
    document.getElementById("dkp-sobremi").onclick = hola_boton
    document.getElementById("dkp-servicios").onclick = hola_boton
    document.getElementById("dkp-portfolio").onclick = hola_boton
    document.getElementById("dkp-proyectos").onclick = hola_boton
    document.getElementById("dkp-presupuesto").onclick = hola_boton
    document.getElementById("vermas-portfolio").onclick = mas_portfolio
    document.getElementById("vermenos-portfolio").onclick = menos_portfolio
}

function cierre_menu(){
    let cosito = document.getElementById("check")
    cosito.checked = false
    document.getElementById("contenido__subir").style.right="10px"
}

function hola_boton(){
    document.getElementById("contenido__subir").style.right="10px"
}

function chau_boton(){
    document.getElementById("contenido__subir").style.right="-100%"
}

function mas_portfolio(){
    document.getElementById("vermas-portfolio_cont").style.display="none"
    document.getElementById("vermenos-portfolio_cont").style.display="block"
    let hacerlosVisibles = document.querySelectorAll('.contenido__portfolio--articulo')
    for(i = 7; i < hacerlosVisibles.length; i += 1){
        hacerlosVisibles[i].style.display = 'block'
    }
}

function menos_portfolio(){
    document.getElementById("vermas-portfolio_cont").style.display="block"
    document.getElementById("vermenos-portfolio_cont").style.display="none"
    let hacerlosInvisibles = document.querySelectorAll('.contenido__portfolio--articulo')
    for(i = 7; i < hacerlosInvisibles.length; i += 1){
        hacerlosInvisibles[i].style.display = 'none'
    }
}