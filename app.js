/*var buttonConvert = document.querySelector("#btnConvert");
var inputValue = document.querySelector("#inputArea");
var outputValue = document.querySelector("#outputArea");
var errorMsg = document.querySelector("#errorMessage");

function constructUrl(text) {
    var serverUrl = "https://api.funtranslations.com/translate/numbers.json";
    var url = serverUrl + "?" + "text=" + text;
    return url;
}

function errorHandler(event) {
    errorMsg.innerText = "Sorry! You can convert only 5 times in 1 hour, Please try after sometime";
    outputValue.innerText = "";
}

buttonConvert.addEventListener("click", function numberConvertion() {
    fetch(constructUrl(inputValue.value))
        .then(response => response.json())
        .then(json => {
            outputValue.innerText = json.contents.translated;
        })
        .catch(errorHandler)
})*/

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