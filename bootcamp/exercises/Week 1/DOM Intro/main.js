const down = document.getElementById("down")
console.log(down)

console.log(down.innerHTML)
down.innerHTML = "Down"

const playingField=document.getElementById("playing-field");
playingField.style.backgroundColor
playingField.style.backgroundColor="blue"

const block=document.getElementById("block");
block.style.backgroundColor="yellow"

const moveRight = function(){
    document.getElementById("block").style.left += "80px"
  }
  moveRight()

  const header = document.createElement("h1")
  header.innerHTML = "The Best Game Ever"
  header.style.color = "#c0392b"
  header.style.fontFamily = "Helvetica"
  document.body.appendChild(header)
  header.setAttribute("class", "my-header")

  const subHeader= document.createElement("h2")
  subHeader.innerHTML="Game By :~The creator~";
  subHeader.style.color = "green"
  document.body.appendChild(subHeader)
  header.setAttribute("class", "my-subHeader")



const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}
const boxOnClick = document.getElementById("boxOnClick")
const onClickColor=function () {
    boxOnClick.style.background="red"
}