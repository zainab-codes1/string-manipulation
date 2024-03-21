var originalText =  '';
var textHistory = [];
var lastModifiedText = '';

//update function to store the last change made
function updateOutput() {
    console.log(lastModifiedText)
    document.getElementById("output").innerText = lastModifiedText;
}


//function to trigger uppercase button
function convertToUppercase() {
    if(originalText === '' ){
        originalText = document.getElementById("inputText").value
        textHistory.push(originalText)
        console.log(textHistory)
        return
    // }else{
    // lastModifiedText = textHistory[textHistory - 1]
    // textHistory.push(lastModifiedText.toUpperCase());
    // console.log(textHistory)}
}



//function to  
// function changeLetter() {
//     var inputText = document.getElementById("inputText").value;
//     var textToReplace = document.getElementById("textToReplace").value;
//     var replacementText = document.getElementById("replacementText").value;

//     var pattern = textToReplace.length === 1?
//     textToReplace : "\\b" + textToReplace + "\\b";

//     var regex = new RegExp(pattern, 'gi');

//     if (lastModifiedText !== "") {
//         lastModifiedText = lastModifiedText.replace
//     (regex, replacementText);
//     } else {
//         lastModifiedText = inputText.replace
//     (regex, replacementText);
//         console.log(replacementText, lastModifiedText)
//     textHistory.push(lastModifiedText);
//     console.log(replacementText, lastModifiedText)
//     updateOutput();
// }
// }
// document.addEventListener("keydown", function(event){
//     if(event.key ==="u"){
//         convertToUppercase();
//     }else if(event.ctrlKey && event.key ==="l"){
//         convertToLowercase(currentText``);
//    }else if(event.key ==="p"){
//         reverseText(currentText);
//     }else if(event.ctrlKey && event.key ==="c"){
//         changeLetter(currentText);
//     } else if(event.ctrlKey && event.key ==="z"){
//         undoChange(currentText);
//     } 
//   });
  

// function undoChange() {
//     if (textHistory.length > 1) {
//         textHistory.pop(); // Remove the last change
//         updateOutput();
//     } else if (textHistory.length === 1) {
//         lastModifiedText = originalText;
//         textHistory.pop();
//         updateOutput();
//     } else {
//         alert("No changes to undo.");
//     }
// }