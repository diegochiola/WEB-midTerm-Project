
async function getJsonToHtml() {
    try {
      const response = await fetch("../data/data.json");
      if (!response.ok) {
        throw Error("Error while fetching data");
      }
  
      const projects = await response.json();
      const project = projects[3];
  
      const simplifySection = document.querySelector(".simplify");
      simplifySection.innerHTML = `
        <h1 id="name">${project.name}</h1>
        <div class="simplify-description">
          <p id="description">${project.description}</p>
          <div class="date">
            <p id="date-1">Completed on</p>
            <p id="date">${project.completed_on}</p>
          </div>
        </div>
        <div class="image-paragraph">
          <div class="image" style="background-image: url(${project.image})"></div>
        </div>
        <p id="content">${project.content}</p>
      `;
    } catch (error) {
      console.error("Error: ", error);
    }
  }

async function getJsonToCards() {
  try {
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw Error("Error while fetching data");
    }

    const projects = await response.json();
    const cardContainer = document.querySelector(".card-project");
    for (let i = 0; i < 3; i++) {
      const project = projects[i];
      const card = document.createElement("div");
      card.classList.add("card-1");
      card.innerHTML = `
          <img src="${project.image}" alt="image of ${project.name}" >
          <p id="card-name">${project.name}</p>
          <p id="card-text">${project.description}</p>
          <a href="#">Learn more</a>
        `;
      cardContainer.appendChild(card);
    }
  } catch (error) {
    console.error("Error: ", error);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  getJsonToHtml();
  getJsonToCards();
});

const nav = document.querySelector(".nav-bar");
const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
console.log(openMenu);
openMenu.addEventListener("click", () => {
    nav.classList.add("show");
});

closeMenu.addEventListener("click", () => {
    nav.classList.toggle("show");
    console.log("hola");
});