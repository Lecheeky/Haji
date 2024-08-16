const buttonYes = document.querySelector("#button-true")
const buttonNo = document.querySelector("#button-false")

buttonNoWidth = 150
buttonNoHeight = 50

const maxWidth = window.innerWidth - buttonNoWidth
const maxHeight = window.innerHeight - buttonNoHeight

buttonNo.addEventListener("click", function(){
    buttonNo.classList.add("button-false-move")
    buttonNo.style.left = (Math.floor(Math.random() * (maxWidth + 1)) + "px");
    buttonNo.style.top = (Math.floor(Math.random() * (maxHeight + 1)) + "px");
    console.log("you touched me")
})