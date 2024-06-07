import { error, success } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";


const currentSymbol = document.querySelector("#key")
const currentKey = document.querySelector("#currentSymbol")
let currentKeyIndex = 0
const keys = ["a", "z", ";", "b", "w", "p", "m", "v", "u", "x"]
const newGameButton = document.querySelector("#newGame")

currentKey.textContent = keys[currentKeyIndex]


document.addEventListener("keydown", (e) => {
  // console.log(e.key)
  currentSymbol.textContent = e.key
  console.log(keys[currentKeyIndex], e.key)
  if (keys[currentKeyIndex] === e.key) {
    currentKeyIndex += 1
    currentKey.textContent = keys[currentKeyIndex]
  } else {
    error({
      text: 'Incorrect symbol.'
    });
  }
})
newGameButton.addEventListener("click", (e) => {
  currentKeyIndex = 0
  currentKey.textContent = keys[currentKeyIndex]
  success({
    text: "New game"
  })
})