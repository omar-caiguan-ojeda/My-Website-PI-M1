class Activity {
    constructor (id, title,description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    };
};


class Repository {
    constructor() {
        this.activities = [];
        this.currentId = 1;
    }
    
    getAllActivities() {
        return this.activities;
    };
    
    createActivity(title, description, imgUrl) {
        const newActivity = new Activity(this.currentId, title, description, imgUrl);
        this.activities.push(newActivity);
        this.currentId++;
    };

    deleteActivity(id) {
        this.activities = this.activities.filter(activity => activity.id !== id);
    };
};


const myRepository = new Repository();


const agregarBtn = document.getElementById("agregarActividad");


agregarBtn.addEventListener("click", function() {
    const tituloInput = document.getElementById("titulo");
    const descripcionInput = document.getElementById("descripcion");
    const imgUrlInput = document.getElementById("imagen");

    const titulo = tituloInput.value.trim();
    const descripcion = descripcionInput.value.trim();
    const imgUrl = imgUrlInput.value.trim();
    
    if (!titulo || !descripcion || !imgUrl) {
        alert("Complete los campos requeridos.");
        return;
    }

    myRepository.createActivity(titulo, descripcion, imgUrl);

    tituloInput.value = "";
    descripcionInput.value = "";
    imgUrlInput.value = "";

    renderActivities();
});


function renderActivities() {
    
    const listaActividades = document.getElementById("listaActividades");
    
    listaActividades.innerHTML = "";

    const actividades = myRepository.getAllActivities();

    actividades.forEach(activity => {
        
        const { id, title, description, imgUrl } = activity;

        const card = document.createElement("div");
        card.classList.add("activity-card");

        const titleElement = document.createElement("h3");
        titleElement.classList.add("activity-card__title");
        titleElement.innerHTML = title;

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("activity-card__description");
        descriptionElement.innerHTML = description;

        const imageElement = document.createElement("img");
        imageElement.classList.add("activity-card__image");
        imageElement.src = imgUrl;
        imageElement.alt = title;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("activity-card__delete");
        deleteBtn.innerHTML = "Eliminar";
        deleteBtn.addEventListener("click", function() {
            myRepository.deleteActivity(id);
            renderActivities();
        });

        card.appendChild(titleElement);
        card.appendChild(descriptionElement);
        card.appendChild(imageElement);
        card.appendChild(deleteBtn);

        listaActividades.appendChild(card);
    });
};
