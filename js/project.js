//console.log('conectando con el servidor');
//console.log('hola mundo');

document.addEventListener("DOMContentLoaded", function () {
  getJson();
});

async function getJson() {
  try {
    const response = await fetch("../data/data.json");
    if (!response.ok) {
      throw Error("Error while fetching data");
    }

    const projects = await response.json();
    console.log(projects);
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

/*
        projects.forEach(project => {
            const projectName = document.createElement("h1"); //creo el h1
            projectName.textContent = project.name; //asigno el nombre del proyecto

            const projectDescription = document.createElement("p"); //creo el p
            projectDescription.textContent = project.description; //asigno la descripción del proyecto

            const projectCompletedOn = document.createElement("p");
            projectCompletedOn.textContent = `${project.completed_on}`;
        */
