/// <reference path="../typings/jquery/jquery.d.ts"/>
/**Creado por Camilo Barbosa */

function objeto(punto_org, destino_x, destino_y, width, height, id, bg_color )
{
	this.pt=punto_org;
	this.de_x=destino_x;
	this.de_y=destino_y;
	this.wi=width;
	this.he=height;
	this.code=id;
	this.colorbg=bg_color;
	this.toch=0;	
	
	this.create = function (into)
	{
		$(into).append("<div id="+this.code+"></div>");
		$(into).css("background-color","black").css("color","white");		
		$("#"+this.code).css("width", (this.wi + "px")).css("height",(this.he+"px")).css({"top":this.pt+"px"}).css("background-color",this.colorbg).css({ "position":'absolute'}).hide();
		;
		this.tosh=0;
		
	};
	
	this.tochme =function ()
	{
		
		$("#"+this.code).click(function()
		{
			
				
					$(this).css({ "position":'absolute'})
							.animate({"top":"590px","left":"0px","width":"50%","height":"200px"})
							;
					this.toch=1;
												
				
				
			
		});
			
	};
	
	this.hoverme= function()
	{
		$("#"+this.code).hover(function()
		{
				$(this).css("background-color","gray");
		});
		$("#"+this.code).mouseleave(function()
		{
				$(this).css("background-color","black");
		});
		
	};
	
	this.restar_pos=function(lie)
	{
		if(this.tosh===1&&this.code!==lie)
		{
			$("#"+this.code).animate({"top":(this.de_y+"px")})
							.animate({"height":(this.he+"px")})
							.animate({"width":(this.wi+"px")})
							.animate({"left":(this.de_x+"px")});
			this.toch=0;
		}
	};
	
	
	
	this.animate = function()
	{
		$("#"+this.code)
		.fadeIn()		
		.animate({"left":this.de_x+"px"})
		.animate({"top":this.de_y+"px"});
		;
			
	};
	
	
}




function line_ver(punto_org, destino_x, destino_y, width, height, id)
{
	this.objs=[];
	this.pt=punto_org;
	this.de_x=destino_x;
	this.de_y=destino_y;
	this.wi=width;
	this.he=height;
	this.code=id;
	this.casillas;
	this.lastpre="0";
	this.create=function(into, casillas)
	{
		this.casillas=casillas;
		for(var i=0;i<casillas;i++)
		{
			if(i===0)
			{
				var x=new objeto(this.pt,this.de_x,this.de_y,this.wi,this.he,this.code+"_"+i,"black");
				this.objs.push(x);
			}
			else
			{
				
				var x=new objeto(this.pt,this.objs[i-1].de_x + this.wi + 10,this.de_y,this.wi,this.he,this.code+"_"+i,"black");
				this.objs.push(x);
			}
			this.objs[i].create(into);
		}	
	};
	this.animate=function(into)
	{
		for(var i=0;i<this.casillas;i++)
		{
			
			this.objs[i].animate();
		}
	};
	this.hover=function()
	{
		for(var i=0;i<this.casillas;i++)this.objs[i].hoverme();
		
		
	}
	this.toch=function()
	{
		
		for(var i=0;i<this.casillas;i++)
		{
			this.objs[i].tochme();
		    if(this.objs[i].toch===1)
			{
				this.lastpre=this.objs[i].code;
			}
			
			
		}
		
		
	};
	
	
}






 var x = new line_ver(300,25,310,60,60,"num1");

 var m=0;
 $(document).ready(function() 
 {
	 $("#sel1").click(function()
	 {
		 $("#teclado").hide();
		 $("#mom").slideToggle();
		 $(this).attr("disabled","disabled");
			$("#sel2").removeAttr("disabled");
	 });
	  $("#sel2").click(function()
	 {
		 $("#mom").hide();
		 $("#teclado").slideToggle();
		 $(this).attr("disabled","disabled");
		  	$("#sel1").removeAttr("disabled");
	 });
	 
	 $("#start").click(function()
	 {		 
			
	 		if(m===0)x.animate();			
			m++;		
	 });
	 
			x.create("#mom", 12);
			x.hover();		
	 		x.toch();
	
	
 });
 