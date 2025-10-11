const count=document.getElementById('count')
const increase=document.getElementById('inc')
const decrease=document.getElementById('dec')
let counter=0
increase.addEventListener("click",()=>{
    counter+=1
    count.textContent=counter
})
decrease.addEventListener("click",()=>{
    counter-=1
    count.textContent=counter
})