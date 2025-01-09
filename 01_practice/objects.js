const regularUser={
    name:"John",
    age:30, 
    occupation:"Software Engineer",
    hobbies:["reading","swimming","coding"],
}

// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));


// console.log(regularUser.hasOwnProperty("age"));


// Destructuring  Objects
const course={
    coursename:"js in hindi",
    price:"1900",
    courseInstructor:"hitesh"
}
const { coursename,price,courseInstructor}=course;
console.log(price);


