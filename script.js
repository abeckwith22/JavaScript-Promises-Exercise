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
