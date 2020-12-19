var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
function errorHandler(error){
    console.log("Error Occurred", error)
    alert("Something went wrong, Please try again after some time")
}

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text


}


function clickHandler() {
    var inputText = txtInput.value;
    // outputDiv.innerText = "sadhasidhia  " + txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

            })
        
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);