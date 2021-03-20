$(document).ready(function(){
    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbr').addClass("sticky");
        }else{
            $('.navbr').removeClass("sticky");
		
	   	
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbr .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

	


    // toggle menu/navbr script
var contador=1;
    $('.menu-btn').click(function(){
        $('.navbr .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("cerrar");
if(contador==0){ $(".img_menu").attr("src","images/menutrans.png");contador=1; }
else{
	$(".img_menu").attr("src","images/cerrar.png");
contador=0;

}
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Informático", "Profesional","Programador", "Desarrollador Web","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Informático", "Profesional","Programador", "Desarrollador Web","Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//Funciones chatBot
var element_bot = document.getElementById('bot');
var chat = document.getElementById('dialogo');
var temporizador=window.setInterval(posicionBot,100,element_bot);

var pup=10;

//Movimiento
var xp=false;
function posicionBot(elemento){
if(pup<18&&xp==false){
pup+=1;
 element_bot.style.bottom=pup+"px";
}else {
xp=true;} 
if(pup>10&&xp==true)
{ 
pup-=1;
element_bot.style.bottom=pup+"px";}else{xp=false;}
}

//Cuadro de dialogo
function bigImg(){
chat.style.display="inline";
}
function normalImg(){
chat.style.display="none";
}
var dialogo="<div class='nuevo_dialogo' id='nuevo_dialogo'><p id='parrafo_dialogo' class='' >¿Puede indicarme la siguiente información para poder ayudarle?</p>"+
"<label for='nombre_usuario'>Nombre:</label></br>"+
"<input type='text' value='nombre' id='nombre_usuario'></br>"+
"<label for='email' class='btn primary'>Correo:</label></br>"+
"<input type='email' value='Correo' id='email_usuario'></br>"+
"<button style='margin-top:10px'type='button' id='btn_enviar_dialogo' value='1' onclick='fn_enviar(this)' class='btn btn-success'>Enviar</button></div>";
var click_dialogo=false;
$("#img_dialogo").click(function() {
if(!click_dialogo){
$("#img_dialogo").attr("onmouseout","");
  $("#dialogo").append(dialogo);
$("#dialogo").css("height","300px");
clearInterval(temporizador);
click_dialogo=true;
}else{
$("#nuevo_dialogo").remove();
$("#img_dialogo").attr("onmouseout","normalImg()");
click_dialogo=false;
temporizador=window.setInterval(posicionBot,100,element_bot);
}
});

function fn_enviar(info){
var select=info.value;
if(select==1){
var nombre=$("#nombre_usuario").val();
var email=$("#email_usuario").val();
$("#nuevo_dialogo").replaceWith("<div class='nuevo_dialogo' id='nuevo_dialogo'><p id='parrafo_dialogo' class='' >¡Gracias por la información "+nombre+"!"+
"</br>Por favor realice la selección de lo que más se ajusta a sus requerimientos:</p><br>"+
"<input type='checkbox' id='empresa' name='empresa' value='Somos una empresa'><label> Somos una empresa</label></br>"+
"<input type='checkbox' id='persona' name='persona física' value='Soy una persona física'><label> Soy una persona física</label></br>"+
"<input type='checkbox' id='persona' name='estudiante' value='Soy estudiante'><label> Soy estudiante</label></br>"+
"<button style='margin-top:10px'type='button' id='btn_enviar_dialogo' value='2' onclick='fn_enviar(this)' class='btn btn-success'>Enviar</button>"+
"</div>");
}
if(select==2){
var nombre=$("input").val();
$("#nuevo_dialogo").replaceWith("<div class='nuevo_dialogo' id='nuevo_dialogo'><p id='parrafo_dialogo' class='' >¡Gracias por la información "+nombre+"!"+
"</br>¿Cuál es el motivo de su consulta?</p><br>"+
"<input type='checkbox' id='empresa' name='empresa' value='Cotizar'><label>Cotización</label></br>"+
"<input type='checkbox' id='persona' name='persona física' value='Soy una persona física'><label>Trabajo en curso</label></br>"+
"<input type='checkbox' id='persona' name='estudiante' value='Soy estudiante'><label>Solicitud para realizar proyecto</label></br>"+
"<button style='margin-top:10px'type='button' id='btn_enviar_dialogo' value='3' onclick='fn_enviar(this)' class='btn btn-success'>Enviar</button>"+
"</div>");
}
if(select==3){
$("#nuevo_dialogo").replaceWith("<div class='nuevo_dialogo' id='nuevo_dialogo'><p id='parrafo_dialogo' class='' >¡Gracias por la información en un momento le daremos respuesta!</p></div>");

}
}



