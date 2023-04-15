// Load the text file
const request = new XMLHttpRequest();
request.open("GET", "file.txt");
request.send();
let lines = [];

// Parse the text file into an array of lines
request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        lines = this.responseText.split("\n");
    }
}

// Generate a random line of text and display it
function generate() {
	const randomIndex = Math.floor(Math.random() * lines.length);
	const randomLine = lines[randomIndex];
	document.getElementById("text").innerHTML = randomLine;
}
