let name1 =
  "I often take a walk with my dog in the evening. His dog follows him everywhere. I don't feed my dog in the morning";

document.getElementById("name1").innerHTML = name1;
document.getElementById("name").innerHTML = name1.replaceAll("dog", "cat");
