const person={
    name:'Max',
    age:29,
    greet(){
        console.log('Hi, I am '+ this.name);
    }
};


const printName=(personData)=>{
    console.log(personData.name);
}

// printName(person)



//destructuring 
const printNameUsingDestructuring=({name})=>{
    console.log(name);
}
printNameUsingDestructuring(person);

const {name,age}=person;  //this is also destructuring 
console.log(name,age);


const hobbies=['Sports','Cooking'];

const [hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);  //there is no square bracket because we are accessing the indivible element 



//question 1..............
// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

//question 2...........
const arr1 = ['value1', 'value2']

const [ val1, val2 ] = arr1



console.log(val1)

console.log(val2)




//question 3............
const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

let { key1, key3} = obj1



key1 = 20;

key3 = 123

console.log(obj1.key1, obj1.key3)

