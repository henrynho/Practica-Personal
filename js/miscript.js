$(document).ready(inicializar);

function inicializar(){
	$("ul.slides").rhinoslider({
					effect: 'explode',
					showTime:3000,
					controlsPrevNext:true
				});	
	$('a.lighbox').colorbox,
	({rel:"lightbox"});
	$("li.btn.desplegable").hover(mostrarsub,ocultarsub);

}


 function mostrarsub(){
 	$("ul.sub-menu").slideDown("slow");
 	console.log("hola...");
 }
 function ocultarsub(){
 	$("ul.sub-menu").slideUp("slow");
 	console.log("hola");
 }