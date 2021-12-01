var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delBtns = document.getElementsByClassName("delete");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.appendChild(document.createTextNode("Delete"));
  button.setAttribute('class', 'delete');
  button.onclick = delElement;
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function addLineThrough(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("done");
  }
}

for(var i=0; i<delBtns.length; i++){
  delBtns[i].addEventListener("click", delElement, false);
}

function delElement(evt){
  evt.target.removeEventListener("click", delElement, false);
  evt.target.parentNode.remove();
}


ul.addEventListener("click", addLineThrough);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPress);
