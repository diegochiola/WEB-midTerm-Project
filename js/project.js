//console.log('conectando con el servidor');
//console.log('hola mundo');

/*
async function getJson() {
  try {
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw Error("Error while fetching data");
    }

    const projects = await response.json();
    const project = projects[3];
    //variables
    const nameElement = document.getElementById("name");
    const descriptionElement = document.getElementById("description");
    const dateElement = document.getElementById("date");
    const contentElement = document.getElementById("content");
    const imageElement = document.querySelector(".image");

    //inyectar variables en el DOM
    nameElement.textContent = project.name;
    descriptionElement.textContent = project.description;
    dateElement.textContent = project.completed_on;
    contentElement.textContent = project.content;
    imageElement.style.backgroundImage = `url(${project.image})`;
  } catch (error) {
    console.error("Error: ", error);
  }
}
*/
/*
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
            `;
    const simplifyDescription = document.createElement("div");
    simplifyDescription.classList.add("simplify-description");
    simplifyDescription.innerHTML = `
            <p id="description">${project.description}</p>
            `;
    const simplifyDate = document.createElement("div");
    simplifyDate.classList.add("date");
    simplifyDate.innerHTML = `
                <p id="date-1">Completed on</p>
                <p id="date">${project.completed_on}</p>   
        `;
    const imageParagraph = document.createElement("div");
    imageParagraph.classList.add("image-paragraph");
    simplifySection.insertAdjacentElement("beforeend", imageParagraph);

    const contentParagraph = document.createElement("p");
    contentParagraph.id = "content";
    contentParagraph.textContent = project.content;

    const imageElement = document.createElement("div");
    imageElement.classList.add("image");
    imageElement.style.backgroundImage = `url(${project.image})`;
    imageParagraph.appendChild(imageElement);

    simplifySection.appendChild(simplifyDescription);
    simplifySection.appendChild(simplifyDate);
    simplifySection.appendChild(imageParagraph);
    simplifySection.appendChild(contentParagraph);
  } catch (error) {
    console.error("Error: ", error);
  }
}

*/
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

