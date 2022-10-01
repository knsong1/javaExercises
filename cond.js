let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let numberOfChores = toDoList.length;

console.log(numberOfChores);

numberOfChores.pop("Mop Bathroom");
numberOfChores.pop("Do Dishes");

if (numberOfChores < 3) {
    console.log("You can go play some video games!")
}else {
    console.log("No games! Do some chores!")
}

// // can also do else if (numberOfChores >/ 3) to get the else

let roommateToDoList = [
    "Eat sandwich"
]

function canPlayVideoGames(arrayChores) {
    let numberOfChores = arrayChores.length;

    if (numberOfChores < 3) {
    console.log("You can go play some video games!")
    } else {
    console.log("No games! Do some chores!")
    
    }
}

canPlayVideoGames(roommateToDoList)


/////// Write a for loop that removes 
////elements from the array until there are none left. Console log the array to confirm.////


const toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

const numberOfChores = toDoList.length;

for (var i=0; i < numberOfChores; i++) {
    toDoList.pop();
}
console.log(toDoList);


Change the for loop to remove 
elements from the array until there are two left. Console log the array to confirm.


for (var i=toDoList.length; i > 2; i--) {
    toDoList.pop();
}

console.log(i, toDoList.pop());

//                      WHITE LOOPS                     ////
// Create a while loop that removes  
//elements from the array until there are two left. Console log the array to confirm.


const toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let numberOfChores = toDoList.length;

while (numberOfChores > 2) {
    toDoList.pop();
    numberOfChores = toDoList.length; //this helps to redefine the number of chores every time the loop is ran//
}

console.log(toDoList);




