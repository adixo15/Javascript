const searchbar=document.querySelector(".search-container")
const search=document.querySelector(".search")
search.addEventListener('click',()=>{
    searchbar.classList.toggle('active')
})