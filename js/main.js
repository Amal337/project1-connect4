
//Connect4: Player 1: Red | Player 2: Yellow//


$(document).ready(function(){
//function to pick the right circle//
var turn=0
var counterP1 = 0; //to count score//
var counterP2 = 0; //to count score//
var playersTurn=$("<h3 id='yourTurn'></h3>");
$("h1").after(playersTurn);


  $(".box").click(function(){ 
    var temp= $(this).attr('id'); 
    temp= temp.substring(4) 
    var cols = [[0,4,8,12], [1,5,9,13], [2,6,10,14], [3,7,11,15]];
    var empty=[];
    for(i=0; i<cols.length; i++){ //to go through the array
        for(j=0; j<cols[i].length; j++){ // to go through the array inside the array
            if(cols[i][j]==temp){
                console.log(cols[i][j]);
                empty=cols[i];
                break; 
            
            }

        }
        
    }
    console.log(empty);
    var circle="";
    for (i=0; i<empty.length; i++){
        var tempName="#box-"+empty[i];
        if($(tempName).hasClass("red") || $(tempName).hasClass("yellow")){
            console.log(i)
    } else {
        console.log("last= "+empty[i])
        circle=tempName;

    }
}
    
     if(turn==0) {//red//
    $(circle).addClass("red");
    turn=1
    $("#yourTurn").text("Player 2: Your Turn").html()//your turn message//
    $("#yourTurn").css({'color':'blue'})
    } else if(turn==1) { // yellow//
    $(circle).addClass("yellow");
    $("#yourTurn").css({'color':'blue'})
    //$(circle).off("click") //to stop//
    turn =0

    $("#yourTurn").text("Player 1: Your Turn").html()//your turn message//


    } 
    wincheck()
    });
    
    

    //getting the winner//

    function wincheck(){
   //check rows, columns, diagnaly for red match// 
        if ($("#box-0").hasClass("red") && $("#box-4").hasClass("red") 
        && $("#box-8").hasClass("red") && $("#box-12").hasClass("red")
        || $("#box-1").hasClass("red") && $("#box-5").hasClass("red") 
        && $("#box-9").hasClass("red") && $("#box-13").hasClass("red")
        || $("#box-2").hasClass("red") && $("#box-6").hasClass("red") 
        && $("#box-10").hasClass("red") && $("#box-14").hasClass("red")
        || $("#box-3").hasClass("red") && $("#box-7").hasClass("red")
        && $("#box-11").hasClass("red") && $("#box-15").hasClass("red")
        || $("#box-3").hasClass("red") && $("#box-6").hasClass("red") 
        && $("#box-9").hasClass("red") && $("#box-12").hasClass("red")
        || $("#box-0").hasClass("red") && $("#box-5").hasClass("red") 
        && $("#box-10").hasClass("red") && $("#box-15").hasClass("red")
        || $("#box-0").hasClass("red") && $("#box-1").hasClass("red") 
        && $("#box-2").hasClass("red") && $("#box-3").hasClass("red")
        || $("#box-4").hasClass("red") && $("#box-5").hasClass("red") 
        && $("#box-6").hasClass("red") && $("#box-7").hasClass("red")
        || $("#box-8").hasClass("red") && $("#box-9").hasClass("red") 
        && $("#box-10").hasClass("red") && $("#box-11").hasClass("red")
        || $("#box-12").hasClass("red") && $("#box-13").hasClass("red") 
        && $("#box-14").hasClass("red") && $("#box-15").hasClass("red")){
            $("#yourTurn").text("Player 1: Congrats! You Won..").html()//winner message//
            $("#yourTurn").css({'color':'red'})
             counterP1++ //count red score//
             $(".p1").text("Player1: "+ counterP1).html()     

            
            
            turn=0;///red always starts the game.//

            restart();//restart the game //
        //    $(".box").off("click")

        }
    //check rows, columns, diagnaly for yellow match// 
         else if ($("#box-0").hasClass("yellow") && $("#box-4").hasClass("yellow") 
        && $("#box-8").hasClass("yellow") && $("#box-12").hasClass("yellow")
        || $("#box-1").hasClass("yellow") && $("#box-5").hasClass("yellow") 
        && $("#box-9").hasClass("yellow") && $("#box-13").hasClass("yellow")
        || $("#box-2").hasClass("yellow") && $("#box-6").hasClass("yellow") 
        && $("#box-10").hasClass("yellow") && $("#box-14").hasClass("yellow")
        || $("#box-3").hasClass("yellow") && $("#box-7").hasClass("yellow")
        && $("#box-11").hasClass("yellow") && $("#box-15").hasClass("yellow") 
        || $("#box-3").hasClass("yellow") && $("#box-6").hasClass("yellow") 
        && $("#box-9").hasClass("yellow") && $("#box-12").hasClass("yellow")
        || $("#box-0").hasClass("yellow") && $("#box-5").hasClass("yellow") 
        && $("#box-10").hasClass("yellow") && $("#box-15").hasClass("yellow")
        || $("#box-0").hasClass("yellow") && $("#box-1").hasClass("yellow") 
        && $("#box-2").hasClass("yellow") && $("#box-3").hasClass("yellow")
        || $("#box-4").hasClass("yellow") && $("#box-5").hasClass("yellow") 
        && $("#box-6").hasClass("yellow") && $("#box-7").hasClass("yellow")
        || $("#box-8").hasClass("yellow") && $("#box-9").hasClass("yellow") 
        && $("#box-10").hasClass("yellow") && $("#box-11").hasClass("yellow")
        || $("#box-12").hasClass("yellow") && $("#box-13").hasClass("yellow") 
        && $("#box-14").hasClass("yellow") && $("#box-15").hasClass("yellow")){
            $("#yourTurn").text("Player 2: Congrats! You Won..").html()//winner message//
            $("#yourTurn").css({'color':'yellow'})
            counterP2++ //count yellow score//
             $(".p2").text("Player2: "+ counterP2).html()  
          
           
            restart();//restart the game //
        //    $(".box").off("click")
        }//check for tie//
        else if ($(".box").not(".red").length==8 && $(".box").not(".yellow").length==8){
            $("#yourTurn").text("It is a tie! Try again.").html()//tie message//
            $("#yourTurn").css({'color':'green'})
          
           
           
            restart();//restart the game //
        //    $(".box").off("click")
        }
        //restart the game on button click//
        $("#button").click(function(){ 
            restart();
        
        
          });
      };

//*--end document.ready---*//
  });

 //restart the game function //
let restart = function()
{
    $(".box").removeClass("red"); 
     $(".box").removeClass("yellow"); 
    $("#yourTurn").fadeOut(3000)
    var playersTurn=$("<h3 id='yourTurn'></h3>");
     $("h1").after(playersTurn);
   
     
}

