var buttontrans = document.querySelector("#btntranslate");
var txtinputarea = document.querySelector("#txtarea");
var outputtextarea = document.querySelector("#outputtext");
var errortext = document.querySelector(".displayerror");

var serverURL = "https://api.funtranslations.com/translate/numbers.json";

function findurl(inputtext) {
    var url = serverURL + "?" + "text=" + inputtext;
    return url;
}

function errorHandling(error) {
    //console.log("Some ERROR Occured!")
    errortext.innerText = "You can use this for only 5 times per hour, please try after 1 hour";
    outputtextarea.innerText = "";
}

buttontrans.addEventListener("click", function clickEvent() {
    text = txtinputarea.value;
    fetch(findurl(text))
        .then(response => response.json())
        .then(json => {
            outputtextarea.innerText = json.contents.translated;
        })
        .catch(errorHandling)
})