const empties = document.querySelectorAll(".empty");
const fill = document.querySelector(".fill");

//Fill listener
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}
function dragEnd() {
  this.className += " fill";
}

//Loop throught empties
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter() {
  console.log("enter");
  this.className += " hovered";
}
function dragLeave() {
  this.className += "empty";
}
function dragDrop() {
  this.className += "empty";
  this.append(fill);
}
