//Assignemt 3

var person = prompt("Please enter your name", "ex: spongebob");
    if (person == "susan") {
      document.getElementById("intro").innerHTML =
      "<h1>Welcome, Professor Susan!</h1>";
    } else {document.getElementById("intro").innerHTML = "<h1>Hello " + person + "!</h1>"}

    function myFunction() {
        var x = document.getElementById("myText").value;
        var sum = x * 3.14;
        document.getElementById("demo").innerHTML = sum;

      }






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


