let timer
let sec = 1
function counter(){
    timer = setInterval(function(){
        document.getElementById('counter').innerHTML= sec;
        sec += 1;
        if (sec > 9999) {
            clearInterval(timer);
        }
    }, 1000);
}
counter();

document.getElementById('plus').addEventListener("click", () => {
  let counter = document.getElementById('counter').innerHTML;
  document.getElementById('counter').innerHTML = parseInt(counter) + 1;
})

document.getElementById('minus').addEventListener("click", () => {
    let counter = document.getElementById('counter').innerHTML;
    document.getElementById('counter').innerHTML = parseInt(counter) - 1;
  })

function clearChildren(element) {
    while (element.lastElementChild) {
        element.removeChild(element.lastElementChild)
    }
}
document.getElementById('heart').addEventListener("click", () => {
    const num = parseInt(document.getElementById('counter').innerHTML);
    const string_num = `${num}`
    const ul = document.getElementsByClassName('likes')
    let li
    if (document.getElementById(string_num)) {
        let li = document.getElementById(string_num)
        li.dataset.num = parseInt(li.dataset.num) + 1
        li.innerHTML = `${num} has been liked ${li.dataset.num} times`
        ul[0].appendChild(li)
    }
    else {
        let li = document.createElement("li")
        li.id = string_num
        li.dataset.num = 1
        li.innerHTML = `${num} has been liked 1 time`
        ul[0].appendChild(li)
    }
})

let pause = false
document.getElementById('pause').addEventListener("click", () => {
   pause = !pause 
   if (pause) {
    document.getElementById("pause").innerHTML = "resume"
    document.getElementById("plus").disabled = true
    document.getElementById("minus").disabled = true
    document.getElementById("heart").disabled = true
    clearInterval(timer)
   } else {
    document.getElementById("pause").innerHTML = "pause"
    document.getElementById("plus").disabled = false
    document.getElementById("minus").disabled = false
    document.getElementById("heart").disabled = false
    counter()
   }
})

document.addEventListener("DOMContentLoaded", () => {
}); 

const newTaskDescription = document.getElementById("comment-form")
newTaskDescription.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = document.getElementById("list")
  const newTask = document.createElement("li")
newTask.innerText = event.target[0].value;
  task.appendChild(newTask)
});