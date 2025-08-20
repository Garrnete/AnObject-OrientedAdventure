// Part 1: Humble Beginnings

// Step 1: Create a basic adventurer object
const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
      belongings: ["small hat", "sunglasses"]
    }
  },

  // Method: roll a dice
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
};

// Step 2: Loop through Robin's inventory
console.log(`${adventurer.name}'s Inventory:`);
for (let item of adventurer.inventory) {
  console.log(`- ${item}`);
}

// Step 3: Test the roll method
adventurer.roll();
adventurer.roll(2);

// ----------------------------
// Level Up with Classes
// ----------------------------

class Character {
  constructor(name, health = 10, inventory = []) {
    this.name = name;
    this.health = health;
    this.inventory = inventory;
  }

  // Method for dice rolls
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;
  }
}

// Example: Create a new adventurer using the Character class
const robin = new Character("Robin", 10, ["sword", "potion", "artifact"]);
robin.roll();
console.log(robin.inventory);

// ----------------------------
// Inheritance Example
// ----------------------------

// A subclass of Character
class Adventurer extends Character {
  constructor(name, role) {
    super(name, 10, ["bedroll", "50 gold coins"]);
    this.role = role;
  }

  // Special method for adventurers
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    this.roll();
  }
}

// Create an instance of Adventurer
const leo = new Adventurer("Leo", "Cat");
leo.scout();
console.log(leo.inventory);

// ----------------------------
// Static Factory Example
// ----------------------------

class AdventurerFactory {
  static roles = ["Fighter", "Healer", "Wizard"];

  static create(name, role) {
    if (!this.roles.includes(role)) {
      console.log(`Invalid role. Choose from: ${this.roles.join(", ")}`);
      return null;
    }
    return new Adventurer(name, role);
  }
}

// Using the factory
const frank = AdventurerFactory.create("Frank", "Fighter");
if (frank) {
  frank.scout();
}