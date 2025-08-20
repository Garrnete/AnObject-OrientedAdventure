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
