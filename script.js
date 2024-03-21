var originalText = "";
var lastModifiedText = "";
var textHistory = [];

//update function to store the last change made
function updateOutput() {
    document.getElementById("output").innerText = lastModifiedText;
}

//function to trigger uppercase button
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

//function to trigger lowercase button
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

//function to trigger reverse button
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

//function to change letters or words
function changeLetter() {
    var inputText = document.getElementById("inputText").value;
    var textToReplace = document.getElementById("textToReplace").value;
    var replacementText = document.getElementById("replacementText").value;
    var pattern = textToReplace.length === 1?
    textToReplace : "\\b" + textToReplace + "\\b";
    var regex = new RegExp(pattern, 'gi');

    if (lastModifiedText !== "") {
        lastModifiedText = lastModifiedText.replace
    (regex, replacementText);
    } else {
        lastModifiedText = inputText.replace
    (regex, replacementText);

    textHistory.push(lastModifiedText);
    updateOutput();
}
}

//event listener to assign functon to keys
document.addEventListener("keydown", function(event){
    if(event.key ==="u"){
        convertToUppercase();
    }else if(event.ctrlKey && event.key ==="l"){
        convertToLowercase();
   }else if(event.key ==="p"){
        reverseText();
    }else if(event.ctrlKey && event.key ==="c"){
        changeLetter();
    } else if(event.ctrlKey && event.key ==="z"){
        undoChange();
    } 
  });
  
//function to trigger undo button
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
