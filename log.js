var b=0;
var li=0;
var si=0;

function showBar(b){
    
    

    if(b%2==0)
    {
        document.getElementById("signinfo").style.display="none";
        document.getElementById("loginfo").style.display="none";
        document.getElementById("bar").style.display="none";
        document.getElementById("logpage").style.display="none";
        document.getElementById("continue").style.display="none";
    li=0; si=0;
}
    else{
        document.getElementById("cross").style.display="block";
        document.getElementById("continue").style.display="block";
        document.getElementById("logpage").style.display="flex";
        document.getElementById("logpage").style.backgroundColor="antiquewhite";
        document.getElementById("logpage").style.height="150px";
       
        li=0; si=0;
    }
}


function showLog(li){

    if(li==0)
    {
        document.getElementById("loginfo").style.display="none";
        si=0;
    }
    else{
        document.getElementById("loginfo").style.display="flex";
        document.getElementById("loginfo").style.flexDirection="row";
        document.getElementById("signinfo").style.display="none";
        document.getElementById("continue").style.display="none";
        document.getElementById("logpage").style.backgroundColor="white";
        document.getElementById("logpage").style.height="300px" ;
        si=0;
    }
}

function showSign(si){

    if(si==0)
    {
        document.getElementById("signinfo").style.display="none";
    }
    else{
        document.getElementById("signinfo").style.display="flex";
        document.getElementById("signinfo").style.flexDirection="row";
        document.getElementById("loginfo").style.display="none";
        document.getElementById("continue").style.display="none";
        document.getElementById("logpage").style.backgroundColor="white";
        document.getElementById("logpage").style.height="300px" ;
            li=0;
    }
    }

    function cross()
    {  showBar(0);
        b++;
       
    }

    function profile()
    {    document.getElementById("log").style.display="none";
        document.getElementById("profile").style.display="block";
        document.getElementById("mail").style.right="7%"
        showBar(0);
        b++;
        
    }



