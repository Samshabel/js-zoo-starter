var animalPopulation = 0;
var allAnimals = [];

$(document).ready(function(){
    var tigger = new Tiger("Tigger");
    var pooh = new Bear("Pooh");
    var rarity = new Unicorn("Rarity");
    var gemma = new Giraffe("Gemma");
    var stinger = new Bee("Stinger");
    listAnimals();
});

function createAnimal(){
    var name = $("#name").val();
    var type = Number($("#types").val());
    var animal;
    switch(type) {
        case 1:
            animal = new Tiger(name);
            break;
        case 2:
            animal = new Bear(name);
            break;
        case 3:
            animal = new Unicorn(name);
            break;
        case 4:
            animal = new Giraffe(name);
            break;
        case 5:
            animal = new Bee(name);
            break;
    }
    listAnimals();
}

function listAnimals(){
    var list = "";
    for (var i = 0; i < allAnimals.length; i++){
        list += (allAnimals[i].firstName + ", a " + allAnimals[i].constructor.name + " whose favorite food is " + allAnimals[i].favoriteFood + "<br>");
    }
    document.getElementById("list").innerHTML = list;
}

function feedAnimals(){
    document.getElementById("feed").innerHTML = "";
    var food = Number($("#meals").val());
    switch(food) {
        case 1:
            food = "meat";
            break;
        case 2:
            food = "marshmellows";
            break;
        case 3:
            food = "leaves";
            break;
        case 4:
            food = "fish";
            break;
        case 5:
            food = "pollen";
            break;
        case 6:
            food = "chocolate";
            break;
    }
    for (var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
        $("#feed").append("<br>");
    }
}

function addFood() {
    var newFood = $("menuAdd").val();
    $("menu").append(newFood);
}

function deleteAnimal(){
    var name = $("#idDelete").val();
    for (var i = 0; i < allAnimals.length; i++){
        if (name == allAnimals[i].firstName){
            allAnimals.splice(i, 1);
        }
    }
    listAnimals();
    document.getElementById("feed").innerHTML = "";
    $("#feed").append(name+" was deleted!")
    $("#idDelete").val("");
}

function rename(){
    var oldName = $("#oldName").val();
    var newName = $("#newName").val();
    for (var i = 0; i < allAnimals.length; i++){
        if (oldName == allAnimals[i].firstName) {
            allAnimals[i].firstName = newName;
        }
    }
    listAnimals();
    document.getElementById("feed").innerHTML = "";
    $("#feed").append(oldName+" was renamed to "+newName+"!");
}

class Animal {

    constructor(name, favoriteFood) {
        this.firstName = name;
        this.favoriteFood = favoriteFood;
        animalPopulation++;
        allAnimals.push(this);
    }

    sleep() {
        $("#feed").append(this.firstName + " sleeps for 8 hours");

    }

    eat(food) {
        $("#feed").append(this.firstName + " eats " + food + "<br>");
        food === this.favoriteFood ? $("#feed").append("YUM!! " + this.firstName + " wants more " + food + "<br>") : this.sleep(this.firstName);
    }

    static getPopulation() {
        return animalPopulation;
    }

}

class Tiger extends Animal {

    constructor(name) {
        super(name, "meat");
    }

}

class Bear extends Animal {

    constructor(name) {
        super(name, "fish");
    }

    sleep() {
        $("#feed").append(this.firstName + " hibernates for 4 months");
    }

}

class Unicorn extends Animal {

    constructor(name) {
        super(name, "marshmallows");
    }

    sleep() {
        $("#feed").append(this.firstName + " sleeps in a cloud");
    }
}

class Giraffe extends Animal {

    constructor(name){
        super(name, "leaves");
    }

    eat(food) {
        food == "leaves" ? (super.eat(food),  this.sleep(this.firstName)) : $("#feed").append("YUCK!! " + this.firstName + " will not eat " + food);
    }
}

class Bee extends Animal {

    constructor(name) {
        super(name, "pollen");
    }

    sleep() {
        $("#feed").append(this.firstName + " never sleeps");
    }

    eat(food) {
        if (food == this.favoriteFood) {
            $("#feed").append(this.firstName + " eats " + food + "<br>");
            $("#feed").append("YUM!!! " + this.firstName + " wants more "+ food+ "<br>");
            this.sleep();
        } else {
            $("#feed").append("YUCK!!! " + this.firstName + " will not eat " + food+ "<br>")
        }
    }
}