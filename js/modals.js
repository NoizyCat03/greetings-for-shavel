const greetings = await (await fetch("api/greetings.json")).json();

function addButtonClickEvent() {
    const buttons = document.querySelectorAll('.modal-button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.modal-title').innerText = greetings[button.dataset.index].title;
            document.querySelector('.modal-body').innerText = 
            `${greetings[button.dataset.index].greeting}
            
            П'ять речей, які тобі побажав ${greetings[button.dataset.index].name}:
            1. ${greetings[button.dataset.index].wishes[0]}
            2. ${greetings[button.dataset.index].wishes[1]}
            3. ${greetings[button.dataset.index].wishes[2]}
            4. ${greetings[button.dataset.index].wishes[3]}
            5. ${greetings[button.dataset.index].wishes[4]}`
        })
    })
    console.log("modals");
}

setTimeout(addButtonClickEvent, 200)