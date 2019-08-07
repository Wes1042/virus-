function setup(){
    createCanvas (700, 700);
    background(255, 0, 0)
    }
    function draw(){
    fill(value);
    rect(25, 25, 50, 50);
    triangle (150, 200, 250, 0, 350, 200)
    }
    function random(){
    for (let i = 0; i < 100; i++){
        let r = random(50);
           stroke(r * 5)
        line(50, i, 50 + r, i );
    }

function mouseReleased(){
catImage (mouseX, mouseY, mouseY, mouseY);
value = value +5;
if (value > 255){
    value = 0;
}
}
    }

const button = document.querySelector("#submitButton").addEventListener("click", click)
function click (){
    alert("WARNING! You May Have A Virus!");
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  DRAG FUNCTION  //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Make the DIV element draggagle:
const myDiv = document.getElementById("mydiv");
dragElement(myDiv);
// dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////  API DATABASE  ///////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const url = " https://thecatapi.com/v1/images?api_key=59e187b2-6c05-4ea2-8bbb-ffb22cbc529f";

const catImage = "https://api.thecatapi.com/v1/images/search?api_key=59e187b2-6c05-4ea2-8bbb-ffb22cbc529f"


fetch(catImage)
 .then(function(response) {
   return response.json();
 })
 .then(function(myJson) {
   const randomcat = myJson[0];
   displayData(randomcat);
 });
function displayData(obj) {
 const randomcat = document.createElement("img");
 randomcat.alt = "random cat image ";
 randomcat.src = obj.url;
 document.querySelector("body").appendChild(randomcat);
}



