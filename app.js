var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function errorHandler(error) {
    console.log("Error Occurred", error)
    alert("Something went wrong, Please try again after some time")
}

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text


}


function clickHandler() {
    var inputText = txtInput.value; //accept input


    fetch(getTranslationURL(inputText)) //processing when communicating with server
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; // convert json response into output


        })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler);