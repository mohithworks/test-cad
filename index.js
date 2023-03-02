var x = parseInt(prompt("Enter 1st no"));
var y = parseInt(prompt("Enter 2nd no"));

var z = x + y;

document.getElementById('para').innerHTML = "The addition of two no's is " + `<b>${z}</b>`;