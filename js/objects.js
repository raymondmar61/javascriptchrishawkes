var x = "I am a string";
//console.log(x);
//console.log(typeof(x));
document.write(x);
document.write("<p>");

var useCamelCasing,
 	lastName = "hawkes",
 	firstName = "chris",
 	testName = "your dog",
 	lookAtThis;

var name = "chris",
	anothername = "you"
if (name == "chrisy" || name == anothername) {
	document.write(name);
	document.write("<p>")
}
else {
	document.write("your mom is nice");
	document.write("<p>")
}

for (var x = 0; x < 10; x++) {
	document.write("I fired ", x);
	document.write("<br>")
}
document.write("<br>")

var x = 0;
while (x < 10) {
	document.write("your mom ", x);
	document.write("<br>");
	x++;
}