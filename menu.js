var n=0;
var i=0;
var ni=0;
var g=0;
var c=0;
var sb=0;
function showNav(n)
{    document.getElementById("contactbar").style.display="none";
    
    if (n%2==0)
    {
        document.getElementById("navbar").style.display="none";
        i=0;ni=0;g=0;c=0;
    
    }
    else{
        document.getElementById("navbar").style.display="flex";
        document.getElementById("navbar").style.flexDirection="column";
        i=0;n=0;ni=0;g=0;c=0;
    
    }
}








function showContact(c)
{    document.getElementById("navbar").style.display="none";
    if (c%2==0)
    {
        document.getElementById("contactbar").style.display="none";
        i=0;n=0;ni=0;g=0;c=0;
    
    }
    else{
        document.getElementById("contactbar").style.display="flex";
        document.getElementById("contactbar").style.flexDirection="column";
        i=0;n=0;ni=0;g=0;c=0;
    
    }
}

function closeAll(){
   
        document.getElementById("navbar").style.display="none";
      
    document.getElementById("contactbar").style.display="none";
    
  
    i=0;n=0;ni=0;g=0;c=0;
    sb=0;

}






