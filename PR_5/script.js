// "Hire the top 1% freelance developers";

let str = "-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20";

let part = str.split(" ");

let last = part.slice(3);
document.getElementById("name").innerHTML = last;
document.getElementById("name1").innerHTML = str;
