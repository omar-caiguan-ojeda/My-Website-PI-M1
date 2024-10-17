// Clase Activity para representar las actividades:
class Activity {
    constructor (id, title,description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    };
};




// Clase Repository para el almacenamiento y manipulacion de las actividades:
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

};

const myRepository = new Repository();



