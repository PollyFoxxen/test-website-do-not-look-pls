var buttonVar = "intro"




function showIntro() {
    hideAll();
    buttonVar = "intro"
    document.getElementById("intro").classList = "paragraf";
}

function showAbout() {
    hideAll();
    buttonVar = "about"
    document.getElementById("about").classList = "paragraf";
}

function showResume() {
    hideAll();
    buttonVar = "resume"
    document.getElementById("resume").classList = "paragraf";
}


function hideAll() {
    document.getElementById("intro").classList = "hide";
    document.getElementById("about").classList = "hide";
    document.getElementById("resume").classList = "hide";
}

function alert1() {
   if (buttonVar == "intro")
   {
        window.alert("Hej")
   }
   else if (buttonVar == "about")
   {
       window.alert("hola")
   }
   else
   {
       window.alert("gutentag")
   }
}