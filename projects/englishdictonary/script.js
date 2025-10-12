const input=document.getElementById('input')
const info=document.getElementById('info-text')
const meaningcon=document.getElementById('meaning-container')
const title=document.getElementById('title')
const audio=document.getElementById('audio')
const meaning=document.getElementById('meaning')


async function fetchAPI(word){
    try{
        info.style.display="block"
        meaningcon.style.display="none"
        info.innerText=`Searching the meaning of "${word}"`;
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result= await fetch(url).then((res)=>res.json())
        if(result.title){
            meaningcon.style.display="block"
            info.style.display="none"
            title.innerText=word
            meaning.innerText="N/A"
            audio.style.display="none"
        }
        else{
            info.style.display="none"
            meaningcon.style.display="block"
            meaning.innerText= result[0].meanings[0].definitions[0].definition
            title.innerText= result[0].word;
            audio.src=result[0].phonetics[0].audio;

        }
    }catch(error){
         console.log(error);
         info.innerText=`an error happend,try again later`
    }
    
}
input.addEventListener('keyup',(e)=>{
    if(e.target.value && e.key=='Enter'){
        fetchAPI(e.target.value)
    }
})