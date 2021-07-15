//- Create an array with the following names: Mason, Marcora, Rico, Neves, Ivanov
const namesList = ["Mason","Marcora","Rico", "Neves", "Ivanov"];

//- Have a prompt that adds your last name to the array
let surname = prompt("Please enter your surname");
console.log(surname);

namesList.push(surname);
console.log(namesList);


//- Have an output that sorts the names alphabetically
const alphabeticalNames = namesList.sort()
console.log("sortedLastNames: " , alphabeticalNames);

let positionOfMySurname = null;

//- Have an output that tells you what is the position of your name in the sorted array

for (let i = 0; i < alphabeticalNames.length; i++) {
        const surnameToCheck = alphabeticalNames[i];

        if (surnameToCheck === "Armelin"){
                positionOfMySurname = i;
        }
}
console.log("The position of my surname is: ", positionOfMySurname);


//- Have an output that Uppercase's all names

const upperCaseLastNames = [];

for (let i = 0; i < alphabeticalNames.length; i++) {
        const surname = alphabeticalNames[i];
        const surnameInUpperCase = surname.toUpperCase();

        upperCaseLastNames.push(surnameInUpperCase);
}
console.log("Surnames in uppercase:  ", upperCaseLastNames);

