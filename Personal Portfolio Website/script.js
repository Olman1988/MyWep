$(document).ready(function(){
    $(window).scroll(function(){

        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
		
	   	
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

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

	


    // toggle menu/navbar script
var contador=1;
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("cerrar");
if(contador==0){ $(".img_menu").attr("src","images/menutrans.png");contador=1; }
else{
	$(".img_menu").attr("src","images/cerrar.png");
contador=0;

}
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Programador", "Desarrollador Web", "Diseñador", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Programador", "Desarrollador Web", "Diseñador", "Freelancer"],
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
var element = document.getElementById('bot');
var chat = document.getElementById('dialogo');
var temporizador=window.setInterval(posicionBot,100,element);

var pup=10;
var xp=false;
function posicionBot(elemento){
if(pup<18&&xp==false){
pup+=1;
 elemento.style.bottom=pup+"px";
}else {
xp=true;} 
if(pup>10&&xp==true)
{ 
pup-=1;
elemento.style.bottom=pup+"px";}else{xp=false;}
}
function bigImg(){
chat.style.display="inline";
}
function normalImg(){
chat.style.display="none";
}