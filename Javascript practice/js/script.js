
// document.addEventListener("DOMContentLoaded", 
// 	function (event) {
//     function sayHello (event) {
//      this.textContent = "Said it!";
//         var name = document.getElementById("name").value;
// 	var message = "<h2>Hello " + name + "!</h2>";
// 	document.getElementById("content").innerHTML = message;

// if (name === "boss") {
// var title = document.querySelector("h1").textContent;
// 	var title = title + " IS AWESOME";
// 	document.querySelector("h1").textContent = title;
// }
// }
//  // Unobstrusive event binding
//  document.querySelector("button").addEventListener("click", sayHello);
//  // document.querySelector("button").onclick = sayHello;
//      document.addEventListener("mousemove", function (event) {
//      	console.log("x: " + event.clientX);
//      	console.log("y: " + event.clientY);
//      }
//      	);
// 	}); 

// document.addEventListener("DOMContentLoaded", function (event) {
// 	document.querySelector("button").addEventListener("click", function () {
//      $ajaxUtils.sendGetRequest("name.txt", function (request) {
//      	var name = request.responseText;
//      	document.querySelector("#content").innerHTML = "Hello " + name + "!";
//      });

// 	});
//   }
// );

 var name = prompt("What is your name");
 if (name === "Godwin") {
 	alert("welcome");
 }
 else {
 	alert("Intruder Alert. Get out");
 }
// document.write("Hello " + name);
// alert("Welcome");
document.querySelector("#container").style.display = "none";
function clickMe() {
	document.querySelector("#container").style.display = "block";
	document.querySelector("#button").style.display = "none";
}
function openMe(element) {
document.querySelector(".text").innerHTML = element.alt;
document.querySelector(".one").style.backgroundImage = "url("+element.src+")";
}
function closeMe() {
  document.querySelector(".text").innerHTML = "Hover over an Image";
  document.querySelector(".one").style.backgroundImage = "none";
}