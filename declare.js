var num1 = "23 ";
var num2 = "27 ";
var num3 = "29 ";

var string1 ="Hi, how are you? "; 
var string2 ="My name is Diana.";
var string3 ="What is your name?";

var xisABoolean = "True";
var yisNotABoolean = "False";
    
function myFunction(x) 
{
    var x;
    
    if (x === undefined) {
        txt = "x is undefined";
    } else {
        txt = "x is defined";
    }
    document.getElementById("unDefined").innerHTML = txt;
    console.log ("Lets check if x is defined / undefined : ", txt);
}


function printNumbers(num1, num2, num3)
{   
    // console.log("num1: ", num1, "num2: ", num2, "num3: ", num3);
     var txtNumber2 =  num1+", "+num2+", "+num3;
    console.log("num1:", num1);
    console.log("num1:", num2);
    console.log("num1:", num3);
    document.getElementById("numberPrint").innerHTML = txtNumber2;
}


function printStrings(string1,string2,string3)
{
    console.log("String1:", string1);
    console.log("String1:", string2);
    console.log("String1:", string3);
    var stringOutput = string1+string2+string3;
    document.getElementById("stringPrint").innerHTML = stringOutput ;
}



function printBoolean( x, y)
{
    var booleanOutput = "x boolean has value:"+xisABoolean+"; y boolean has value:"+yisNotABoolean; 
    console.log("isABoolean",x);
    console.log("isNotABoolean",y);
    document.getElementById("booleanPrint").innerHTML = booleanOutput;
    
}

printNumbers(num1, num2, num3);
printStrings(string1,string2,string3)
printBoolean(xisABoolean, yisNotABoolean)















