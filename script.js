const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the 'players' array
const team = players;

// Create a copy of the 'players' array
const team1 = players.slice();

// Create a copy of the 'person' object
const cap1 = Object.assign({}, person);

// Modifying the original 'players' array won't affect 'team1'
players.push("Sarah");

// Modifying the original 'person' object won't affect 'cap1'
person.name = "Jane";

console.log("Original Players:", players);
console.log("Team:", team);
console.log("Team 1:", team1);
console.log("Original Person:", person);
console.log("Captain 1:", cap1);