/// <reference path="../typings/jquery/jquery.d.ts"/>
/***Creado por camilo andres babosa */
/**Logica de la interfaz: */
var x=0;
var j=0;
var m=0;
var reto=0;

$(document).ready(function()
{
	$(".ah_game").hide();
	$("h1, nav").css(
		{		
			"text-align":"center"
		}
	);
	$("nav").addClass("first_menu");	
	$("nav").append("<button class="+"btn"+" onclick="+"inter_1()"+" ><a>Partida Arcade</a></button><br/>");
	$("nav").append("<button class="+"btn"+" onclick="+"inter_3_1()"+" ><a>Retar a un amigo</a></button><br/>");
	$("nav").append("<button class="+"btn"+" onclick="+"cred()"+" ><a>Créditos</a></button>");	
	$("#games").append("<button id="+"clp3"+" onclick="+"salir_reto()"+" ><a>Salir</a></button>");
	$("nav button").css(
		{
			"margin-bottom":"5%"
		});
	
});
function salir_reto()
{
	$(".ah_game, .first_menu").slideToggle();
	g.pal.borrar_p();
	$("article").empty();
    $("#word_ret").empty();
	 if(g.pal.p.length>3)
		{
			$("#start_ret").attr("disabled",false);
		}else
		{
			$("#start_ret").attr({"disabled":"disabled"});
		}
	if(jk===1)jk=0;
        reto=0;
		
}



function cred()
{
	$(".first_menu").slideUp();
	$("#credits").slideDown();
	if(j===0)
	{
		$("header").append("<div id="+"credits"+"><h2>Créditos:</h2><div id="+"cont"+"><ul id="+"mayor"+" ></ul><div></div>");
		$("#credits").append("<strong>Programador:</strong><br/>");
		$("#credits").append("Camilo Barbosa<br/><br/>");
		$("#credits").append("<strong>Frameworks:</strong><br/>");
		$("#credits").append("Boostrap<br/>");
		$("#credits").append("JQuery<br/>");
		$("#credits").append("HTML5<br/>");
		$("#credits").addClass("jumbotron").css(
			{
					
				"text-align":"center"
			});
		
		
		j++;
	}
	$("#credits").click(function()
	{
		$(".first_menu").slideDown();
		$(this).slideUp();
	});
}



function firts()
{
	$("#categorias").slideToggle();
	$(".first_menu").slideToggle();
	
}


function inter_1()
{
	$("nav").slideUp();
	if(x==0)
	{
				
		$("header").append("<nav id="+"categorias"+" style="+"display:none;"+"><h2>Modo Arcade: </h2>Escoja la categoria: <br/> </nav>");
		$("#categorias").append("<button class="+"cate"+" onclick="+"g.gamebegin("+1+")"+">Ciudades</button>")
		.append("<button class="+"cate"+" onclick="+"g.gamebegin("+2+")"+">Objetos</button>")
		.append("<button class="+"cate"+" onclick="+"g.gamebegin("+3+")"+">Animales</button>")
		.append("<br/><br/><button onclick="+"firts()"+">Salir</button>");
		$("#categorias").addClass("jumbotron").css(
			{
				"text-align":"center"
			});
		
		
		x=1;
	}
	$("#categorias").slideDown();
	$(".cate").click(function()
	{
		$("#categorias").hide();
        $(".ah_game").slideDown();
	});
	
		
}

function inter_2()
{
	$(".ah_game").hide();
	$("#categorias").slideToggle();
	g.categ=0;
	
}

function inter_3_1()
{
	g.categ=-2;	
	actpal = -2;
        reto=1;
	teclado_fadeIn();	

	$(".first_menu").slideToggle();
	if(m===0){$("#contss").append("<div id="+"ret_cont"+"></div>");
	$("#ret_cont").append("<h2>Pasos para jugar a retar a un amigo: </h2>");
	$("#ret_cont").append("<h3>Paso 1: </h3>");
	$("#ret_cont").append("<p>Debes escribir con el teclado del juego la palabara para que tu amigo la adivine (mayor a 4 digitos)!</p>");
	$("#ret_cont").append("<h3>Paso 2: </h3>");
	$("#ret_cont").append("<p>Una vez que termines tu palabra, pulsa en retar y le pasas el dispositivo a tu amigo!</p>").css(
		{
			"text-align":"center"
		});
	$("#ret_cont").append("<button onclick="+"inter_3()"+" >Listo!</button>");
	$("#ret_cont").show();
	m++;}
	if(m===2)
	{
		$("#ret_cont").slideToggle();
		$("#teclado").slideToggle();
		
		
		
	}

}
function inter_3()
{
	
	
	
	 	
	if(m===1){$("#ret_cont").empty();$("#ret_cont").append("<button id="+"start_ret"+" onclick="+"g.gamebegin("+0+")"+" >Retar!!</button> <div id="+"word_ret"+" ></div>");m++;
	$("#ret_cont button").addClass("myBu").attr({"disabled":"disabled"});
	$("#ret_cont").append("<button id="+"sali_re"+">Salir</button>");
	$("#teclado").slideToggle();}
	$("#sali_re").click(function()
	{
		$("#ret_cont").slideToggle();
		$(".first_menu").slideToggle();
		$("#teclado").slideToggle();
		$("#word_ret").empty();	
		g.pal.borrar_p();
		
	});
	
}

