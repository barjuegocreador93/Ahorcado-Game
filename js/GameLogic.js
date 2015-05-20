/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//HECHO POR CAMILO BARBOSA t00036196

var actpal = -1;
var vida=0;
var los=0;

function Palabra()
{
    this.p = [];
    this.pclass = [];
    this.borrar_p=function()
    {
            while(this.p.length > 0) 
            {
                this.p.pop();
            }
             while(this.pclass.length > 0) 
            {
                this.pclass.pop();
            }
    };
    this.todo1= function()
    {
        
        for( var i = 0; i < this.p.length; i++)
           {
               if(!this.pclass[i])return 0;
           }
        if(this.p.length!==0)return 1;
        return 0;    
    };
    this.entrarLetra = function (let)
    {
        this.p.push(let);        
        this.pclass.push(0);
        if(g.categ===-2)g.pal.pintar("#word_ret");
        
        
    };
    this.estaLaletra = function (let)
    {
        var bool=0;
        for (i = 0; i < this.p.length; i++)
            {
                if (let === this.p[i])
                {
                this.pclass[i]=1;
                
                bool=1;
                }          
            
            }
            
            
        
        if(!bool&&vida<98)
        {
           
            vida += 10; 
           $(".lives").css({"width":vida+"%"});
           
         
        }else this.pintar("#word");
       
        
        if(vida>=98||this.p.length===0)
        {
               
               g.gamebegin(g.categ);
               los=1;
                
              $("article").append("<h2>Haz perdido</h2>");
                
        }       
        if(this.todo1())
        {
             
           g.gamebegin(g.categ);
           los=1;
           $("article").append("<h2>Haz ganado</h2>");
             
        }
        
      
       
        
            
      return bool;
       
    };
    this.pintar = function (lug)
    {
            $(lug).empty();
            for(i=0;i<this.p.length;i++)
            {
                if(g.categ===-2||g.categ===0)
                {
                    if(!g.pal.pclass[i]){
                        if(g.pal.p[i]!=="_")$(lug).append("<button>_</button>");
                        else 
                        {
                            $(lug).append("<span> </span>");
                            g.pal.pclass[i]=1;
                        }
                    
                    }
                    else if(g.pal.p[i]!=="_") $(lug).append("<button>"+g.pal.p[i]+"</button>");
                    else  $(lug).append("<span> </span>");       
                }else
                if(g.categ===1)
                {
                    if(!g.cites[actpal].pclass[i])$(lug).append("<button>_</button>");
                    else $(lug).append("<button>"+g.cites[actpal].p[i]+"</button>");
                }else if(g.categ===2)
                {
                    if(!g.objs[actpal].pclass[i])$(lug).append("<button>_</button>");
                    else $(lug).append("<button>"+g.objs[actpal].p[i]+"</button>");
                }else if(g.categ===3)
                {
                    if(!g.animals[actpal].pclass[i])$(lug).append("<button>_</button>");
                    else $(lug).append("<button>"+g.animals[actpal].p[i]+"</button>");
                }
                
            }
          return 0;  
    };
    this.reiniciar =function()
    {
        vida=1;
        for(i=0;i<this.p.length;i++)
        { this.pclass[i]=0;}
        $(".lives").css("width",vida+"%");
        $("article").empty();
        return 0;
    };
}



var jk=0;
$(document).ready(function(){
g.leng_of(1,17);
ciudades();
g.leng_of(2,22);
objs();
g.leng_of(3,12);
animals();

$.getJSON("name.json", function(data) {
        
       
    });


});


function game()
{
    this.pal=new Palabra();
    this.cites=[];
    this.objs=[];
    this.animals=[];
    this.categ=2;   
    this.leng_of=function(clase, num)
    {
        switch(clase)
        {
            case 1:
                for(i=0;i<num;i++)
                {
                    var x_1=new Palabra();
                    this.cites.push(x_1);
                    
                }
                
                break;
            case 2:
                for(i=0;i<num;i++)
                {
                    var x_2=new Palabra();
                    this.objs.push(x_2);
                }
                
               
                break;
           case 3:
                for(i=0;i<num;i++)
                {
                    var x_3=new Palabra();
                    this.animals.push(x_3);
                }
                
                
                break;
        }
    };
        
    this.gamebegin=function (cate) 
    {
        
        
        this.categ=cate;
        $("#clp1").fadeIn();
        $("#clp2").fadeIn();
        
        if (actpal !== -1)
        {
            $("#word").empty();
        }
        if(this.categ===0)
        {
          if(jk===0)
          {
              reto=0;
             actpal=0;
             jk=1;              
          }else
          {
             actpal=-2;
              reto=1;
             this.categ=-2;
             jk=0;
             g.pal.borrar_p();
             $("#word_ret").empty();	 
          } 
          
           $("section").slideToggle();
           $("#ret_cont").slideToggle();                     
           $("#clp1").hide();
           
          
            
             this.pal.reiniciar();
             this.pal.pintar("#word");
           
        }else
            
        if(cate===1)
        {
            reto=0;
            actpal = Math.floor(Math.random() * this.cites.length);
            this.cites[actpal].reiniciar();
            this.cites[actpal].pintar("#word");
        }else if(cate===2)
        {
             reto=0;
            actpal = Math.floor(Math.random() * this.objs.length);
            this.objs[actpal].reiniciar();
            this.objs[actpal].pintar("#word");
        }else if(cate===3)
        {
             reto=0;
            actpal = Math.floor(Math.random() * this.animals.length);
            this.animals[actpal].reiniciar();
            this.animals[actpal].pintar("#word");
        }
        teclado_fadeIn();
        

    };
    this.preLetra=function(let)
    {
          if(this.categ===0)
          {
               g.pal.estaLaletra(let);  
          }
          else
          if(this.categ===1)
          {
               g.cites[actpal].estaLaletra(let);  
          }
          else if(this.categ===2)
          {
              g.objs[actpal].estaLaletra(let);  
          }
          if(this.categ===3)
          {
              g.animals[actpal].estaLaletra(let);  
          }
    };
}




//PALABRAS
var g=new game();
//CIUDADES
function ciudades()
{
    g.cites[0].entrarLetra("V");
g.cites[0].entrarLetra("E");
g.cites[0].entrarLetra("N");
g.cites[0].entrarLetra("C");
g.cites[0].entrarLetra("I");
g.cites[0].entrarLetra("A");



g.cites[1].entrarLetra("M");
g.cites[1].entrarLetra("I");
g.cites[1].entrarLetra("L");
g.cites[1].entrarLetra("A");
g.cites[1].entrarLetra("N");



g.cites[2].entrarLetra("G");
g.cites[2].entrarLetra("E");
g.cites[2].entrarLetra("N");
g.cites[2].entrarLetra("O");
g.cites[2].entrarLetra("V");
g.cites[2].entrarLetra("A");


g.cites[3].entrarLetra("R");
g.cites[3].entrarLetra("O");
g.cites[3].entrarLetra("M");
g.cites[3].entrarLetra("A");

g.cites[4].entrarLetra("F");
g.cites[4].entrarLetra("L");
g.cites[4].entrarLetra("O");
g.cites[4].entrarLetra("R");
g.cites[4].entrarLetra("E");
g.cites[4].entrarLetra("N");
g.cites[4].entrarLetra("C");
g.cites[4].entrarLetra("I");
g.cites[4].entrarLetra("A");

g.cites[5].entrarLetra("S");
g.cites[5].entrarLetra("I");
g.cites[5].entrarLetra("E");
g.cites[5].entrarLetra("N");
g.cites[5].entrarLetra("A");



g.cites[5].entrarLetra("N");
g.cites[5].entrarLetra("A");
g.cites[5].entrarLetra("P");
g.cites[5].entrarLetra("O");
g.cites[5].entrarLetra("L");
g.cites[5].entrarLetra("E");
g.cites[5].entrarLetra("S");



g.cites[6].entrarLetra("N");
g.cites[6].entrarLetra("O");
g.cites[6].entrarLetra("V");
g.cites[6].entrarLetra("O");
g.cites[6].entrarLetra("S");
g.cites[6].entrarLetra("I");
g.cites[6].entrarLetra("B");
g.cites[6].entrarLetra("I");
g.cites[6].entrarLetra("R");
g.cites[6].entrarLetra("S");
g.cites[6].entrarLetra("K");

g.cites[7].entrarLetra("S");
g.cites[7].entrarLetra("A");
g.cites[7].entrarLetra("M");
g.cites[7].entrarLetra("A");
g.cites[7].entrarLetra("R");
g.cites[7].entrarLetra("A");


g.cites[8].entrarLetra("O");
g.cites[8].entrarLetra("M");
g.cites[8].entrarLetra("S");
g.cites[8].entrarLetra("K");

g.cites[9].entrarLetra("R");
g.cites[9].entrarLetra("O");
g.cites[9].entrarLetra("S");
g.cites[9].entrarLetra("T");
g.cites[9].entrarLetra("O");
g.cites[9].entrarLetra("V");

g.cites[10].entrarLetra("O");
g.cites[10].entrarLetra("M");
g.cites[10].entrarLetra("S");
g.cites[10].entrarLetra("K");

g.cites[11].entrarLetra('V');
g.cites[11].entrarLetra('O');
g.cites[11].entrarLetra('L');
g.cites[11].entrarLetra('G');
g.cites[11].entrarLetra('O');
g.cites[11].entrarLetra('G');
g.cites[11].entrarLetra('R');
g.cites[11].entrarLetra('A');
g.cites[11].entrarLetra('D');

g.cites[12].entrarLetra('N');
g.cites[12].entrarLetra('U');
g.cites[12].entrarLetra('M');
g.cites[12].entrarLetra('B');
g.cites[12].entrarLetra('E');
g.cites[12].entrarLetra('R');
g.cites[12].entrarLetra('G');

g.cites[13].entrarLetra('B');
g.cites[13].entrarLetra('E');
g.cites[13].entrarLetra('R');
g.cites[13].entrarLetra('L');
g.cites[13].entrarLetra('I');
g.cites[13].entrarLetra('N');


g.cites[14].entrarLetra('M');
g.cites[14].entrarLetra('U');
g.cites[14].entrarLetra('N');
g.cites[14].entrarLetra('I');
g.cites[14].entrarLetra('C');
g.cites[14].entrarLetra('H');


g.cites[15].entrarLetra('F');
g.cites[15].entrarLetra('R');
g.cites[15].entrarLetra('A');
g.cites[15].entrarLetra('N');
g.cites[15].entrarLetra('K');
g.cites[15].entrarLetra('F');
g.cites[15].entrarLetra('U');
g.cites[15].entrarLetra('R');
g.cites[15].entrarLetra('T');


g.cites[16].entrarLetra('H');
g.cites[16].entrarLetra('A');
g.cites[16].entrarLetra('M');
g.cites[16].entrarLetra('B');
g.cites[16].entrarLetra('U');
g.cites[16].entrarLetra('R');
g.cites[16].entrarLetra('G');





}



//OBJETOS
function objs()
{
    g.objs[0].entrarLetra('S');
g.objs[0].entrarLetra('I');
g.objs[0].entrarLetra('L');
g.objs[0].entrarLetra('L');
g.objs[0].entrarLetra('A');


g.objs[1].entrarLetra('C');
g.objs[1].entrarLetra('A');
g.objs[1].entrarLetra('M');
g.objs[1].entrarLetra('A');


g.objs[2].entrarLetra('T');
g.objs[2].entrarLetra('E');
g.objs[2].entrarLetra('C');
g.objs[2].entrarLetra('L');
g.objs[2].entrarLetra('A');
g.objs[2].entrarLetra('D');
g.objs[2].entrarLetra('O');


g.objs[3].entrarLetra('P');
g.objs[3].entrarLetra('A');
g.objs[3].entrarLetra('N');
g.objs[3].entrarLetra('T');
g.objs[3].entrarLetra('A');
g.objs[3].entrarLetra('L');
g.objs[3].entrarLetra('L');
g.objs[3].entrarLetra('A');


g.objs[4].entrarLetra('C');
g.objs[4].entrarLetra('U');
g.objs[4].entrarLetra('C');
g.objs[4].entrarLetra('H');
g.objs[4].entrarLetra('A');
g.objs[4].entrarLetra('R');
g.objs[4].entrarLetra('A');

g.objs[5].entrarLetra('T');
g.objs[5].entrarLetra('E');
g.objs[5].entrarLetra('L');
g.objs[5].entrarLetra('E');
g.objs[5].entrarLetra('F');
g.objs[5].entrarLetra('O');
g.objs[5].entrarLetra('N');
g.objs[5].entrarLetra('O');


g.objs[6].entrarLetra('C');
g.objs[6].entrarLetra('A');
g.objs[6].entrarLetra('M');
g.objs[6].entrarLetra('A');
g.objs[6].entrarLetra('R');
g.objs[6].entrarLetra('A');


g.objs[7].entrarLetra('C');
g.objs[7].entrarLetra('O');
g.objs[7].entrarLetra('L');
g.objs[7].entrarLetra('C');
g.objs[7].entrarLetra('H');
g.objs[7].entrarLetra('O');
g.objs[7].entrarLetra('N');


g.objs[8].entrarLetra('A');
g.objs[8].entrarLetra('L');
g.objs[8].entrarLetra('G');
g.objs[8].entrarLetra('O');
g.objs[8].entrarLetra('D');
g.objs[8].entrarLetra('O');
g.objs[8].entrarLetra('N');


g.objs[9].entrarLetra('M');
g.objs[9].entrarLetra('I');
g.objs[9].entrarLetra('T');
g.objs[9].entrarLetra('O');
g.objs[9].entrarLetra('C');
g.objs[9].entrarLetra('O');
g.objs[9].entrarLetra('N');
g.objs[9].entrarLetra('D');
g.objs[9].entrarLetra('R');
g.objs[9].entrarLetra('I');
g.objs[9].entrarLetra('A');


g.objs[10].entrarLetra('F');
g.objs[10].entrarLetra('L');
g.objs[10].entrarLetra('O');
g.objs[10].entrarLetra('R');


g.objs[11].entrarLetra('T');
g.objs[11].entrarLetra('E');
g.objs[11].entrarLetra('C');
g.objs[11].entrarLetra('H');
g.objs[11].entrarLetra('O');


g.objs[12].entrarLetra('M');
g.objs[12].entrarLetra('U');
g.objs[12].entrarLetra('S');
g.objs[12].entrarLetra('I');
g.objs[12].entrarLetra('C');
g.objs[12].entrarLetra('A');


g.objs[13].entrarLetra('C');
g.objs[13].entrarLetra('O');
g.objs[13].entrarLetra('D');
g.objs[13].entrarLetra('I');
g.objs[13].entrarLetra('G');
g.objs[13].entrarLetra('O');


g.objs[14].entrarLetra('M');
g.objs[14].entrarLetra('A');
g.objs[14].entrarLetra('R');
g.objs[14].entrarLetra('T');
g.objs[14].entrarLetra('E');


g.objs[15].entrarLetra('T');
g.objs[15].entrarLetra('I');
g.objs[15].entrarLetra('E');
g.objs[15].entrarLetra('R');
g.objs[15].entrarLetra('R');
g.objs[15].entrarLetra('A');


g.objs[16].entrarLetra('J');
g.objs[16].entrarLetra('U');
g.objs[16].entrarLetra('P');
g.objs[16].entrarLetra('I');
g.objs[16].entrarLetra('T');
g.objs[16].entrarLetra('E');
g.objs[16].entrarLetra('R');


g.objs[17].entrarLetra('A');
g.objs[17].entrarLetra('N');
g.objs[17].entrarLetra('D');
g.objs[17].entrarLetra('R');
g.objs[17].entrarLetra('O');
g.objs[17].entrarLetra('M');
g.objs[17].entrarLetra('E');
g.objs[17].entrarLetra('D');
g.objs[17].entrarLetra('A');


g.objs[18].entrarLetra('C');
g.objs[18].entrarLetra('A');
g.objs[18].entrarLetra('R');
g.objs[18].entrarLetra('R');
g.objs[18].entrarLetra('O');


g.objs[19].entrarLetra('E');
g.objs[19].entrarLetra('S');
g.objs[19].entrarLetra('T');
g.objs[19].entrarLetra('U');
g.objs[19].entrarLetra('F');
g.objs[19].entrarLetra('A');


g.objs[20].entrarLetra('B');
g.objs[20].entrarLetra('O');
g.objs[20].entrarLetra('L');
g.objs[20].entrarLetra('S');
g.objs[20].entrarLetra('A');


g.objs[21].entrarLetra('S');
g.objs[21].entrarLetra('A');
g.objs[21].entrarLetra('C');
g.objs[21].entrarLetra('O');


}
function animals()
{
  g.animals[0].entrarLetra('E');
g.animals[0].entrarLetra('L');
g.animals[0].entrarLetra('E');
g.animals[0].entrarLetra('F');
g.animals[0].entrarLetra('A');
g.animals[0].entrarLetra('N');
g.animals[0].entrarLetra('T');
g.animals[0].entrarLetra('E');


g.animals[1].entrarLetra('G');
g.animals[1].entrarLetra('I');
g.animals[1].entrarLetra('R');
g.animals[1].entrarLetra('A');
g.animals[1].entrarLetra('F');
g.animals[1].entrarLetra('A');


g.animals[2].entrarLetra('R');
g.animals[2].entrarLetra('I');
g.animals[2].entrarLetra('N');
g.animals[2].entrarLetra('O');
g.animals[2].entrarLetra('C');
g.animals[2].entrarLetra('E');
g.animals[2].entrarLetra('R');
g.animals[2].entrarLetra('O');
g.animals[2].entrarLetra('N');
g.animals[2].entrarLetra('T');
g.animals[2].entrarLetra('E');


g.animals[3].entrarLetra('L');
g.animals[3].entrarLetra('E');
g.animals[3].entrarLetra('O');
g.animals[3].entrarLetra('N');


g.animals[4].entrarLetra('A');
g.animals[4].entrarLetra('S');
g.animals[4].entrarLetra('N');
g.animals[4].entrarLetra('O');


g.animals[5].entrarLetra('M');
g.animals[5].entrarLetra('A');
g.animals[5].entrarLetra('R');
g.animals[5].entrarLetra('I');
g.animals[5].entrarLetra('P');
g.animals[5].entrarLetra('O');
g.animals[5].entrarLetra('S');
g.animals[5].entrarLetra('A');


g.animals[6].entrarLetra('C');
g.animals[6].entrarLetra('O');
g.animals[6].entrarLetra('L');
g.animals[6].entrarLetra('I');
g.animals[6].entrarLetra('B');
g.animals[6].entrarLetra('R');
g.animals[6].entrarLetra('I');


g.animals[7].entrarLetra('A');
g.animals[7].entrarLetra('R');
g.animals[7].entrarLetra('A');
g.animals[7].entrarLetra('Ñ');
g.animals[7].entrarLetra('A');


g.animals[8].entrarLetra('M');
g.animals[8].entrarLetra('O');
g.animals[8].entrarLetra('S');
g.animals[8].entrarLetra('C');
g.animals[8].entrarLetra('A');


g.animals[9].entrarLetra('A');
g.animals[9].entrarLetra('V');
g.animals[9].entrarLetra('E');
g.animals[9].entrarLetra('S');
g.animals[9].entrarLetra('T');
g.animals[9].entrarLetra('R');
g.animals[9].entrarLetra('U');
g.animals[9].entrarLetra('S');


g.animals[10].entrarLetra('C');
g.animals[10].entrarLetra('I');
g.animals[10].entrarLetra('E');
g.animals[10].entrarLetra('R');
g.animals[10].entrarLetra('B');
g.animals[10].entrarLetra('O');


g.animals[11].entrarLetra('C');
g.animals[11].entrarLetra('I');
g.animals[11].entrarLetra('E');
g.animals[11].entrarLetra('N');
g.animals[11].entrarLetra('P');
g.animals[11].entrarLetra('I');
g.animals[11].entrarLetra('E');
g.animals[11].entrarLetra('S');
  
}





//FIN PALABRAS


function estar(letA)
{ 
    
 if (actpal > -1)
 {
     g.preLetra(letA);        
           
     $("#"+letA+"").hide();
 }else if(actpal===-2)
 {
    g.pal.entrarLetra(letA);
    if(g.pal.p.length>3)
		{
			$("#start_ret").attr("disabled",false);
		}else
		{
			$("#start_ret").attr({"disabled":"disabled"});
		}
            
 }  
    
    if (!(actpal !== -1))alert("Para jugar de click en Nueva Palabra!!");
    if(los===1)
    {
        teclado_fadeIn();
        los=0;
    }
        
}


var num=0;
function teclado_fadeIn()
{
     $("#A").fadeIn();
        $("#B").fadeIn();
        $("#C").fadeIn();
        $("#D").fadeIn();
        $("#E").fadeIn();
        $("#F").fadeIn();
        $("#G").fadeIn();
        $("#H").fadeIn();
        $("#I").fadeIn();
        $("#J").fadeIn();
        $("#K").fadeIn();
        $("#L").fadeIn();
        $("#M").fadeIn();
        $("#N").fadeIn();
        $("#Ñ").fadeIn();
        $("#O").fadeIn();
        $("#P").fadeIn();
        $("#Q").fadeIn();
        $("#R").fadeIn();
        $("#S").fadeIn();
        $("#T").fadeIn();
        $("#U").fadeIn();
        $("#V").fadeIn();
        $("#W").fadeIn();
        $("#X").fadeIn();
        $("#Y").fadeIn();
        $("#Z").fadeIn();
        if(reto===1&&num===0)
        {
            $("#teclado").append("<button id="+"esp"+" onclick="+"estar('_') class="+"btn-default"+" btn"+">_</button> ");
            num=1;
        }
        if(reto===0)
        {
            $("#esp").hide();
        }else
        {
             $("#esp").fadeIn();
        }
}