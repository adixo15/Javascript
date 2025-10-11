const container=document.querySelector(".img-container")
const btn=document.getElementById("btn")
btn.addEventListener('click',()=>{
    imgnum=10
    addnewImages()
})
function addnewImages(){
    for (let i = 0; i <imgnum; i++) {
        const newimg=document.createElement('img')
        newimg.src=`https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
        container.appendChild(newimg)
        
    }
}