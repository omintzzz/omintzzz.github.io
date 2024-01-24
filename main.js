const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "om-headshot.png") {
    myImage.setAttribute("src", "dance-action-shot.png");
  } else {
    myImage.setAttribute("src", "om-headshot.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h4");
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `I hope that you are having a wonderful day, ${myName} :)`;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `I hope that you are having a wonderful day, ${storedName} :)`;
};
myButton.onclick = () => {
  setUserName();
};

function show() {
 let myImage2 = document.getElementById("image");
  myImage2.setAttribute ("src", "little-liv.jpg");
  document.getElementById("btnID")
      .style.display = "none";
}














  