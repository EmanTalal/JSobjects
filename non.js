let characters = [{
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
    },
    {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
    },
    {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
    },
    {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
    },
    {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
    },
];

//Get first name that has blue eyes.
let Fristname = characters.find(character => character.eye_color === "blue");
console.log(Fristname);

//Get first gender that is his mass is over 50
let maleChar = characters.filter(character => character.gender === "male");
console.log(maleChar);


//Get characters with height less than 200
let heights = characters.filter(character => character.height < 200);
console.log(heights)

//Get all male characters
let male = characters.filter(character => character.gender === "male");
console.log(male)

//Get array of all names only
let names = characters.map(character => character.name);
console.log(names)

//Get array of all heights only
let allheights = characters.map(characters => characters.height)
console.log(allheights)

//Sort by mass (low to high)
let sortMass = characters.slice().sort((m1, m2) => m1.mass - m2.mass);
console.log(sortMass);

//Sort Hight 
let sortHeight = characters.slice().sort((h1, h2) => h1.height - h2.height);
console.log(sortHeight);

//Does every character have mass more than 40?
let massthen40 = characters.every(character => character.mass > 40);
console.log(massthen40);

//Is every character shorter than 200?
let shorter = characters.every(character => character.height > 200);
console.log(shorter);

//Is there at least one character with blue eyes ?
let Someeyes = characters.some(character => character.eye_color === 'blue');
console.log(Someeyes);


//Is there at least one character taller than 210 ?
let Somehinght = characters.some(characters => characters.height > 210)
console.log(Somehinght)