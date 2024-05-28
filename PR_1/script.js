const myColor = ["Red", "Green", "White", "Black"];

let jo = myColor.join(" , ");
document.getElementById("coma").innerHTML = ("Array Is ", jo);

let plus = myColor.join(" + ");
document.getElementById("plus").innerHTML = ("Array Is ", plus);

let p = myColor.pop();
document.getElementById("pop").innerHTML = ("Array is ", myColor);

const myColor1 = ["Red", "Green", "White", "Black"];

let s = myColor1.shift();
document.getElementById("shift").innerHTML = ("Array Is ", s);

let slic = myColor1.splice(0, 2);
document.getElementById("slice").innerHTML = ("Array Is ", slic);

const myColor2 = ["Red", "Green", "White", "Black"];

let pus = myColor2.push(" Orange ");
document.getElementById("push").innerHTML = ("Array is ", myColor2);
