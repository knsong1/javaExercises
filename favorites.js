let newObject = {
    fullName: "Kristina Song",
    age: 27,
    favColor: "none",
    likesChocolate: true,
}

let favColor = newObject.favColor; 

//let facColor = newObject["facColor"]

// console.log(newObject.favColor);

newObject.fullName = "Song";

delete newObject.likesChocolate;

console.log(newObject);

newObject.likesCookies = true;
console.log(newObject);