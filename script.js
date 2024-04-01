/* // -- RANDOM FACTS API --
let card_button = document.querySelector('.card-button');
const card_area = document.querySelector('.cards-area');

function create_append_element(text){
    const new_div = document.createElement('div');
    const new_p = document.createElement('p');

    // set classes
    new_div.classList.toggle('card')

    new_p.innerText = text;
    new_div.append(new_p);
    card_area.append(new_div);
}

card_button.addEventListener("click", async (event) => {
    event.preventDefault();
    card_area.innerHTML = "";
    let text_field = document.querySelector('.card-text');
    let text_value = text_field.value;
    for (let i = 0; i < 4; i++){
        let URL = `http://numbersapi.com/${text_value}?json`;
        let response = await axios.get(URL);
        let text = response.data.text;
        create_append_element(text);
    }
    return response;
});

*/

// -- Deck of Cards Exercise -- Part 2

const card_form = document.querySelector('.card-form');
const card_area = document.querySelector('.card-area');

let get_deck_url = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"

const new_deck_button = document.querySelector('.new-deck');
new_deck_button.addEventListener("click", async (event) => {
    var card_id = 0;
    event.preventDefault();
    const card_area = document.querySelector('.card-area');
    card_area.innerHTML = "";
    const response = await axios.get(get_deck_url);
    const data = response.data;

    sessionStorage.setItem('deck_id', data.deck_id) // set deck_id to be remembered
    console.log(data);

});

const new_card_button = document.querySelector('.new-card');
new_card_button.addEventListener("click", async (event) => {
    event.preventDefault();
    let get_card_from_deck_url = `https://deckofcardsapi.com/api/deck/${sessionStorage.getItem('deck_id')}/draw/`
    const response = await axios.get(get_card_from_deck_url);
    const data = response.data;
    console.log(data);
    const cards = [...data.cards];
    for(let i = 0; i < cards.length; i++){
        create_card(cards[i]);
    }
});

function create_card(obj){
    const card_area = document.querySelector('.card-area');
    const new_card = document.createElement('div');
    const img = document.createElement('img');
    new_card.classList.toggle('card');
    new_card.id = 

    img.src = obj.image;
    new_card.append(img);
    rotateCard(new_card);
    card_area.append(new_card);
}

let rotation =  0;

function rotateCard(card) {
    rotation += 5;
    card.style.transform = `rotate(${rotation}deg)`;
}