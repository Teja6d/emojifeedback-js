let emoji1 = document.getElementById("emoji1");
let emoji2 = document.getElementById("emoji2");
//let emoji3 = document.getElementById("emoji3");
let emoji4 = document.getElementById("emoji4");
let emoji5 = document.getElementById("emoji5");
let emojiMain = document.getElementById("emojiMain");
let emojibox = document.getElementById("emoji-box");

let emojiId;
let secondEmoji = emoji2.getBoundingClientRect().x;
let fourthEmoji = emoji4.getBoundingClientRect().x;
let topValue = emoji5.getBoundingClientRect().x;
let bottomValue = emoji1.getBoundingClientRect().x;
let emojiArray = [bottomValue,secondEmoji,fourthEmoji,topValue];
//console.log("x"+postionY)
//console.log("y"+postionX)
emojibox.addEventListener("mouseover"||"touches", (e) => emojiClicked(e));
emojibox.addEventListener("mouseout", (e) => emojiFinal(e));
emoji1.addEventListener("mousemove", (e) => emojiClicked(e));
emoji2.addEventListener("mousemove", (e) => emojiClicked(e));
//emoji3.addEventListener("mouseover",(e)=>emojiClicked(e));
emoji4.addEventListener("mousemove", (e) => emojiClicked(e));
emoji5.addEventListener("mousemove", (e) => emojiClicked(e));

function emojiClicked(event) {
  let emoji = event.pageX;

  if (emoji > bottomValue && emoji < secondEmoji) {
    emojiMain.style.left = event.pageX + "px";
    emojiMain.innerHTML = "🙁";
  } else if (emoji > secondEmoji && emoji < fourthEmoji) {
    emojiMain.style.left = event.pageX + "px";
    emojiMain.innerHTML = "🙂";
  } else if (emoji > fourthEmoji && emoji < topValue) {
    emojiMain.style.left = event.pageX + "px";
    emojiMain.innerHTML = "😊";
  } else if (emoji > topValue) {
    emojiMain.style.left = `${topValue}px`;
    emojiMain.innerHTML = "😊";
  } else if (emoji < bottomValue) {
    emojiMain.style.left = `${bottomValue}px`;
    emojiMain.innerHTML = "😡";
  }
}
function emojiFinal(event) {
 
  
    let emojiFnalposition = Math.abs(event.pageX);
    emojiArray.sort((a,b)=>
    {
        return  Math.abs(emojiFnalposition-a)-Math.abs(emojiFnalposition-b);
       
    })
    
    emojiMain.style.left = emojiArray[0]+"px";
}

emojiMain.style.left = secondEmoji + "px";
