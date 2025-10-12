const quotes=document.getElementById('quotes')
const button=document.getElementById('btn')
button.addEventListener('click',()=>{
    genratequote()
})
const proxyUrl = "https://api.allorigins.win/get?url=";
const apiUrl = "https://zenquotes.io/api/random";
async function genratequote() {
  try {
    const response = await fetch(proxyUrl + encodeURIComponent(apiUrl));
    const dataWrapped = await response.json();
    const data = JSON.parse(dataWrapped.contents); // ZenQuotes response is inside `contents`
    quotes.innerText = `"${data[0].q}" — ${data[0].a}`;
  } catch (error) {
    quotes.innerText = "Failed to fetch quote 😢";
  }
}  