function buttonClick() {
    alert("Button clicked!");
    var disappearing = document.getElementById("important");
    
    if (disappearing.style.visibility === "visible") {
        disappearing.style.visibility = "hidden";
    } else {
        disappearing.style.visibility = "visible";
    }
}