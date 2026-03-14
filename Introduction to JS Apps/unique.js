var choice = prompt("welcome to area calculator./nPlease enterthe number corresponding to your choice:\n1. Area  of rectangle\n2. Area of a triangle\n3. Area of a circle\n4.Area of a parallelogram")

if(choice=="1"){
    var l =prompt("Enter the length ")
    var w = prompt("enter the width")
    var result = Number(l) * Number(w)
    alert("the area is " + result)
}
if (choice == "2") {
    var h = prompt("Enter the height ")
    var b = prompt("enter the base")
    var result = Number(h) * Number(b) / 2
    alert("the area is " + result)
}
if (choice == "3") {
    var r = prompt("Enter the radius")
    var result =3.14 * Number(r) * Number(r)
    alert("the area is " + result)
}
if (choice == "4") {
    var h = prompt("Enter the height ")
    var cb = prompt("enter the corresponding base")
    var result = Number(h) * Number(cb)
    alert("the area is " + result)
}