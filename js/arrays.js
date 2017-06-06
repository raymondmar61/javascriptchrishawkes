var myArray = ["chris","john","billy"];
document.write(myArray); //writes chris,john,billy
document.write(myArray[0]); //writes chris
document.write("<br>");

for (var x = 0; x < myArray.length; x++) {
	document.write(myArray[x]);
	document.write("<br>");
}
document.write(myArray.length); //writes 3.  Length array is true count.  Index array count starts at zero.
document.write("<p>");

for (var x = 0; x < myArray.length; x++) {
	document.write(myArray[x]);
	document.write("<br>");
	if (myArray[x] == "john") {
		document.write("holy poo it equals john, exiting now...");
		break;
	}
}
document.write("<p>");

var myArray = ["chris","john","billy","What comes after"];
for (var x = 0; x < myArray.length; x++) {
	switch (myArray[x]) {
		case "What comes after":
			alert("holy pee batman");
			break;
		default:
			document.write(myArray[x]);
			document.write("<br>")
			break;
	}

}