//Riddles Javascript File

//JS is a scripting language that can CHANGE stuff on the HTML page; it it NOT a markup language so it will follow more fundemental logic related to other computer programming styles

//VARIABLES- variables store data (information) to be used in the script/program; they are friendly names to refer to as info as//think about variables as the contact names in your phone;you don't need to remember everyone's number, you just need to remember their name; the phone gets the number through the name

//each variable will store the answer to a riddle question
//JS requires vars to be declared as such
var store1=" the FUTURE!"        //answer to question 1
var store2=" the Post Office!"  //answer to question 2
var store3=" NOON"             //answer to question 3

//***VARIABLE NAMES MUST BE UNIQUE! They are alo cAsE sEnSiTiVe */
//   total != Total = TOTAL


//FUNCTIONS - perform tasks; they have a set or processes assigned to them, and when they are CALLED their tasks are performed

//function below will talk to the HTML DOM (Document Object Model) and get specific elements by their id, then push info to their innerHTML (inbetween the open and close of the tag)

function answer1() {

    document.getElementById("question1").innerHTML = store1;
}

function answer2() {

    document.getElementById("question2").innerHTML = store2;
}

function answer3() {

    document.getElementById("question3").innerHTML = store3;
}