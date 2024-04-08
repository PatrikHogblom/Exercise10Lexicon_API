document.getElementById("drawCard-btn").addEventListener('click', getApi);

function getApi()
{

    let newShuffledDeck = "https://deckofcardsapi.com/api/deck/new/draw/?count=1";
    //get a deck to use
    fetch(newShuffledDeck)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let cardImgSrc = data.cards[0].image;
        showCardImgDiv(cardImgSrc);
    })
    .catch(err => console.error(err))
}

function showCardImgDiv(imageURL){
    let newCardImageDiv = document.createElement("img");
    newCardImageDiv.setAttribute("src",imageURL);
    newCardImageDiv.setAttribute("class","img-fluid");
    document.getElementById("cardImage").innerHTML = "";//nollställer diven
    document.getElementById("cardImage").appendChild(newCardImageDiv);
}