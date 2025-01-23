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
    var type = $("#types").val();
    var animal;
    // switch(type) {
    //     case 1:
    //         animal = new Tiger(name);
    //         break;
    //     case 2:
    //         animal = new Bear(name);
    //         break;
    //     case 3:
    //         animal = new Unicorn(name);
    //         break;
    //     case 4:
    //         animal = new Giraffe(name);
    //         break;
    //     case 5:
    //         animal = new Bee(name);
    //         break;
    // }
    animal = new type(name);
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
    var food = $("#meals").val();
    for (var i = 0; i < allAnimals.length; i++){
        allAnimals[i].eat(food);
        $("#feed").append("<br>");
    }
}

function addFood() {
    var newFood = $("#menuAdd").val();
    var option = document.createElement("option");
    var selector = document.getElementById("meals");
    option.text = newFood;
    option.value = newFood.toLowerCase();
    selector.add(option);
    var li = document.createElement("li");
    var ul = document.getElementById("menuList");
    li.textContent = newFood;
    ul.appendChild(li);
    document.getElementById("feed").innerHTML = "";
    $("#feed").append(newFood+" was added to the menu!")
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
    var oldType = $("#oldType").val();
    for (var i = 0; i < allAnimals.length; i++){
        if (oldName == allAnimals[i].firstName && oldType == allAnimals[i].constructor.name) {
            allAnimals[i].firstName = newName;
            document.getElementById("feed").innerHTML = "";
            $("#feed").append(oldName+" was renamed to "+newName+"!");
            break;
        } else {
            document.getElementById("feed").innerHTML = "";
            $("#feed").append("No animals were found with that name and type, please try again");
        }
    }
    listAnimals();
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
        food === this.favoriteFood ? $("#feed").append("YUM!! " + this.firstName + " wants more " + food) : this.sleep(this.firstName);
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
        if (food == this.favoriteFood) {
            $("#feed").append(this.firstName + " eats " + food + "<br>");
            $("#feed").append("YUM!!! " + this.firstName + " wants more "+ food+ "<br>");
            this.sleep();
        } else {
            $("#feed").append("YUCK!!! " + this.firstName + " will not eat " + food+ "<br>")
        }
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