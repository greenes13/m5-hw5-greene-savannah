//1

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

//2

var yellowBox=document.querySelector(".yellow")

function clickHint(e) {
  var yellowHint =document.querySelector(".yellow p")
  yellowHint.classList.toggle('hidden')
}

  yellowBox.addEventListener('click', clickHint);

//3

var blueBox=document.querySelector(".blue")

function clickWinner(e) {
  var blueWinner =document.querySelector(".blue p")
  blueWinner.classList.toggle('hidden')
}

blueBox.addEventListener('click', clickWinner);

//4

var greenBox=document.querySelector(".green")

function clickLoser(e) {
  var greenLoser =document.querySelector(".green p")
  greenLoser.classList.toggle('hidden')
}

greenBox.addEventListener('click', clickLoser);
