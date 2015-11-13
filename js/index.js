function stranded() {

    var number = prompt("you just washed up on a desert island, what do you do now. (1)Take shelter or (2)find food.");
    switch (number) {

      case "1":
        
		  var number2 = prompt("you come across a (1)tree and a (2)cave whitch one do you choose");
       if (number2==="1") {
            var number3 = prompt("The tree you climbed up is filled with snakes, do you (1)jump off the tree or (2)try fight the snakes for a meal.");
            if (number3==="1"){
                alert("You Fell and broke your skull and your brain was exposed to any bugs and parisites. Welcome to zombie island.");
            }  
            else{
              alert("can't eat snakes, not enough food");
            } 
      }
  else {
    var number6 = prompt("The cave was filled with bats and they just turned into vampires do you (1)Fight the vampiers (2) run away. Try Again");
         if (number6==="1") {
         
         alert("you own dis man cave, grab a mountain dew and some doritos. MLG!!!!!!!");
           alert("You win!!!!!!");
         }
         else
          {
           alert("you slipped on a rock and died.Try Agian");
        }
  }
              
					break;
				
      
      case "2":
        var number8 =
          prompt("You come across a bush of berries, do you (1)eat these berrie's or (2)find a more trustworthy source of food")
       if(number8==="1"){
            alert("You just died form posionos berries.")
            
            }
		  else{
        alert("You can't find any food so you die of starvation");
      }
           
			
     }

      
        }