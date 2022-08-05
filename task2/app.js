let btn1=document.querySelector("#btn-1")
let btn2=document.querySelector("#btn-2")
let p=document.querySelector(".title")
btn1.addEventListener("click",function(){
    p.style.backgroundColor="red"
})

btn2.addEventListener("click",function(){
    p.classList.toggle("toggle")
})


