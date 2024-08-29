var n=0
var f=0;
function showLetter() {
  
   x= document.getElementsByClassName("top");
   x[0].style.display="none";
   y= document.getElementsByClassName("letter unfold");
   y[0].style.display="block";
  
}

function closeLetter(){

  
 
    document.getElementById("textletter").style.display="none";
    document.getElementById("mlb").style.display="none";
    f=0;
    n=0;
    
}

function showLetterBox(n){
  

   if (n%2==0)
   {
    document.getElementById("textletter").style.display="none";
   }
   else{
    document.getElementById("textletter").style.display="block";
    y= document.getElementsByClassName("letter unfold");
    x= document.getElementsByClassName("top");
    x[0].style.display="block";
    y[0].style.display="none";
   }
}



function showback(f) {
  if (f%2==0) {document.getElementById("mlb").style.display="none";}

  else {
   document.getElementById("mlb").style.display="block";
  }
}



