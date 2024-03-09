const greetings = await (await fetch("api/greetings.json")).json();

function renderCards() {
  let greetingHtml = "";
  for (const greeting of greetings) {
    greetingHtml += `
    <div class="card col-12 col-sm-6 col-md-4 col-lg-3">
          <img src="${greeting.image}" class="card-img-top" alt="${greeting.alt}">
          <div class="card-body">
            <h5 class="card-title">${greeting.title}</h5>
            <p class="card-text">${greeting.description}</p>
            <a href="#" class="btn btn-primary modal-button" data-bs-toggle="modal" data-bs-target="#greeting-info-modal" data-index="${greeting.index}">Показати побажання</a>
          </div>
        </div>`;
  }
  const greetingsContainer = document.querySelector(".cards");
  greetingsContainer.innerHTML = greetingHtml;
  console.log("cards");
}

renderCards();
