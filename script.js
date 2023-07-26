const form = document.getElementById("form");
const resultDiv = document.getElementById("resultDiv");
const wordResult = document.getElementById("wordResult");
const meaningResult = document.getElementById("meaningResult");
const inputWord = document.getElementById("inputWord");
const audio = document.getElementById("audio");
const error = document.getElementById("error");

async function api ()  {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord.value}`;
    const response = await fetch(url);
    if(!response.ok){
        resultDiv.classList.add("hidden");
        error.classList.remove("hidden");
        error.textContent= "Not found error";
    }else{
        resultDiv.classList.remove("hidden");
        error.classList.add("hidden");
        const data = await response.json();
        wordResult.innerText= data[0].word;
        meaningResult.innerText = data[0].meanings[0].definitions[0].definition;
        audio.src = data[0].phonetics[0].audio;
    } 
};

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    api();

})
