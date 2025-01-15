var animalPopulation = 0;

function run() {
  var tigger = new Tiger("Tigger");
  // tigger.eat("meat");
  var pooh = new Bear("Pooh");
  // pooh.eat("fish");
  // pooh.eat("meat");
  var rarity = new Unicorn("Rarity");
  // rarity.eat("marshmellows");
  // rarity.sleep();
  var gemma = new Giraffe("Gemma");
  // gemma.eat("meat");
  // gemma.eat("leaves");
  var stinger = new Bee("Stinger");
  // stinger.eat("ice cream");
  // stinger.eat("pollen");
  var zoebot = new Zookeeper("Zoebot");
  zoebot.feedAnimals([tigger, pooh, rarity, gemma], "fish");
}

class Zookeeper {
  constructor(name) {
    this.name = name;
  }
  feedAnimals(animals, food) {
    console.log(this.name+" is feeding "+food+" to "+animals.length+" of "+Animal.getPopulation()+ " total animals");
    for (let i = 0; i < animals.length; i++) {
      animals[i].eat(food);
    }
  }
}

class Animal {
  constructor(name, favoriteFood) {
    this.name = name;
    this.favoriteFood = favoriteFood;
    animalPopulation++;
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours")
  }
  eat(food) {
    console.log(this.name + " eats " + food);
    if (food == this.favoriteFood) {
      console.log("YUM!!! " + this.name + " wants more "+ food);
    } else {
      this.sleep(this.name);
    }
  }
  static getPopulation() {
    return animalPopulation;
  }
}

class Tiger extends Animal{
  constructor(name) {
    super(name, "meat");
  }
}

class Bear extends Animal{
  constructor(name) {
    super(name, "fish");
  }
  sleep() {
    console.log(this.name + " hibernates for 4 months")
  }
}

class Unicorn extends Animal{
  constructor(name) {
    super(name, "marshmellows");
  }
  sleep() {
    console.log(this.name + " sleeps in a cloud")
  }
}

class Giraffe extends Animal{
  constructor(name) {
    super(name, "leaves");
  }
  sleep() {
    console.log(this.name + " sleeps for 8 hours")
  }
  eat(food) {
    if (food == this.favoriteFood) {
      console.log(this.name + " eats " + food);
      console.log("YUM!!! " + this.name + " wants more "+ food);
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food)
    }
  }
}

class Bee extends Animal{
  constructor(name) {
    super(name, "pollen");
  }
  sleep() {
    console.log(this.name + " never sleeps")
  }
  eat(food) {
    if (food == this.favoriteFood) {
    console.log(this.name + " eats " + food);
      console.log("YUM!!! " + this.name + " wants more "+ food);
      this.sleep();
    } else {
      console.log("YUCK!!! " + this.name + " will not eat " + food)
    }
  }
}

run();