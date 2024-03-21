var originalText = "";
var lastModifiedText = "";
var textHistory = [];

function updateOutput() {
    document.getElementById("output").innerText = lastModifiedText;
}

function convertToUppercase() {
    if (lastModifiedText !== "") {
        lastModifiedText = lastModifiedText.toUpperCase();
    } else {
        originalText = document.getElementById("inputText").value;
        lastModifiedText = originalText.toUpperCase();
    }
    textHistory.push(lastModifiedText);
    updateOutput();
}

function convertToLowercase() {
    if (lastModifiedText !== "") {
        lastModifiedText = lastModifiedText.toLowerCase();
    } else {
        originalText = document.getElementById("inputText").value;
        lastModifiedText = originalText.toLowerCase();
    }
    textHistory.push(lastModifiedText);
    updateOutput();
}

function reverseText() {
    if (lastModifiedText !== "") {
        lastModifiedText = lastModifiedText.split('').reverse().join('');
    } else {
        originalText = document.getElementById("inputText").value;
        lastModifiedText = originalText.split('').reverse().join('');
    }
    textHistory.push(lastModifiedText);
    updateOutput();
}

function changeLetter() {
    var inputText = document.getElementById("inputText").value;
    var textToReplace = document.getElementById("textToReplace").value;
    var replacementText = document.getElementById("replacementText").value;
    var regex = new RegExp(textToReplace, 'gi');

    if (lastModifiedText !== "") {
        lastModifiedText = inputText.replace
    (regex, replacementText);
    } else {
        lastModifiedText = lastModifiedText.replace
    (regex, replacementText);
    }

    textHistory.push(lastModifiedText);
    updateOutput();
}

function undoChange() {
    if (textHistory.length > 1) {
        textHistory.pop(); // Remove the last change
        lastModifiedText = textHistory[textHistory.length - 1]; // Get the previous state
        updateOutput();
    } else if (textHistory.length === 1) {
        lastModifiedText = originalText;
        textHistory.pop();
        updateOutput();
    } else {
        alert("No changes to undo.");
    }
}
