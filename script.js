function showIntro() {
    hideAll();
    document.getElementById("intro").classList = "paragraf";
}

function showAbout() {
    hideAll();
    document.getElementById("about").classList = "paragraf";
}

function showResume() {
    hideAll();
    document.getElementById("resume").classList = "paragraf";
}


function hideAll() {
    document.getElementById("intro").classList = "hide";
    document.getElementById("about").classList = "hide";
    document.getElementById("resume").classList = "hide";
}

function alert1() {
   window.alert("Hello!");
}