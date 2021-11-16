
/*const box = document.getElementById("box")
box.onclick = function () {
    box.innerHTML = "clicked"
}

box.onmouseenter=function(){
    box.innerHTML ="hhhh";
}*/
const box = document.createElement("div") // dynamically creating an element

box.setAttribute("class", "box")

box.onclick = function(){       // adding an event to the new element
    box.innerHTML = "I'm alive!"
    document.body.appendChild(box)
}

document.getElementById("some-id").appendChild(box);