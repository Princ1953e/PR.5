let array = [1, 2, 3, 4, 5];
let i;
let sum = 0;
for (i = 0; i <= array.length - 1; i++) {
  sum = sum + array[i];
}

document.getElementById("loop").innerHTML = sum;

let sum1 = 0;

array.forEach((element) => {
  sum1 += element;
});

document.getElementById("each").innerHTML = sum1;
