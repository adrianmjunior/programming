// Rubric 2 Assignment
function reload() {
  location.reload();
}

   var text;
  switch (new Date().getDay()) {
    case 6:
      text = "Today is Saturday!";
      break;

    case 5:
      text = "TGIF!";
      break;

    case 0:
      text = "Happy Sunday";
      break;

    case 1:
      text = "Yay Monday... I guess"
      break;

    case 2:
      text = "Tuesday"
      break;

    case 3:
      text = "Wednesday"
      break;

    case 4:
      text = "thursday"
      break; 
      
    default:
      text = "I wish it was the weekend again";
  }
  

function verify() {
  document.getElementById("demo").innerHTML = text;
}

function more() {
  document.getElementById("yes").innerHTML = "<button onclick='combo2()'> Click Here!</button>";
}

function last(){
  document.getElementById("more").innerHTML = "Come back if you can't remember the day later on."
}

function extra() {
  document.getElementById("two").innerHTML = "<button onclick='reload()'> Click here to re-load the page. </button>"
}


function combo() {
  verify();
  more(); 
}


function combo2() {
  last();
  extra();
}





//Assignemt 3

// var person = prompt("Please enter your name", "ex: spongebob");
//     if (person == "susan") {
//       document.getElementById("intro").innerHTML =
//       "<h1>Welcome, Professor Susan!</h1>";
//     } else {document.getElementById("intro").innerHTML = "<h1>Hello " + person + "!</h1>"}

    // function myFunction() {
    //     var x = document.getElementById("myText").value;
    //     var sum = x * 3.14;
    //     document.getElementById("demo").innerHTML = sum;

    //   }






// Assignment 2 --------------------------------------------------------------------------------------

// var intro = "strings are typically words.";
//     document.getElementById("date").innerHTML = "<h1> Did you know " + intro + "</h1>";

// var a = 2;
// var b = 25;
// var sum = a + b;

// document.getElementById("vari").innerHTML = "<h2> The value of variable \"a\" is " + a + ". The value of variable \"b\" is " + b + ". Their \"sum\" is " + sum + ".</h2>";

// var random;
// random = ["dog", "cat", "pig", "cat", "rat"];


// random[1] == random [3] ? console.log("Cats will be cats :)") : console.log();



// a == b ? alert("YAY! \"a\" and \"b\" are equal!") : alert("BOO! \"a\" and \"b\" are not the same");


// Longhand for statement above
// if (a == b) {
//     console.log("YAY! \"a\" and \"b\" are equal!"");
// } else {
//     console.log("BOO! \"a\" and \"b\" are not the same"");
// }


