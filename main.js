var boxes=document.querySelectorAll(".box")

var highlights=["pink", "purple", "red"]

function toggleBackground(e){
  console.log(e.type);
  if (e.type === 'mouseenter') {
    for (var i=0; i<boxes.length; i++) {
      boxes[i].classList.add(highlights[i])
    }
  }
  else {
    for (var i=0; i<boxes.length; i++) {
      boxes[i].classList.remove(highlights[i])
    }
  }
}

for (var i=0; i<boxes.length; i++) {
  boxes[i].addEventListener('mouseenter', toggleBackground)
  boxes[i].addEventListener('mouseleave', toggleBackground)
}
