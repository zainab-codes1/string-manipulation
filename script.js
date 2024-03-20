        var originalText = "";
        var lastModifiedText = "";
        var history = [];

        function updateOutput() {
            document.getElementById("output").innerText = "Modified Text: " + lastModifiedText;
        }

        function upperCase() {
            originalText = document.getElementById("inputText").value;
            lastModifiedText = originalText.toUpperCase();
            history.push(originalText);
            updateOutput();
        }

        function lowerCase() {
            originalText = document.getElementById("inputText").value;
            lastModifiedText = originalText.toLowerCase();
            history.push(originalText);
            updateOutput();
        }

        function reverse() {
            originalText = document.getElementById("inputText").value;
            lastModifiedText = originalText.split('').reverse().join('');
            history.push(originalText);
            updateOutput();
        }

        function change() {
            var index = parseInt(prompt("Enter the index of the letter to change:"));
            var newLetter = prompt("Enter the new letter:");
            originalText = document.getElementById("inputText").value;
            if (index >= 0 && index < originalText.length) {
                lastModifiedText = originalText.substring(0, index) + newLetter + originalText.substring(index + 1);
                history.push(originalText);
                updateOutput();
            } else {
                alert("Invalid index.");
            }
        }

        function undo() {
            if (history.length > 0) {
                lastModifiedText = history.pop();
                updateOutput();
            } else {
                alert("No changes to undo.");
            }
        }