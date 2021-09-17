var buttonConvert = document.querySelector("#btnConvert");
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
        .then(response => response.json)
        .then(json => {
            outputValue.innnerText = json.contents.translated;
        })
        .catch(errorHandler)
})