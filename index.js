// // Q1:

// function personInfo(first_name, Last_name, age) {
//     this.first_name = first_name;
//     this.Last_name = Last_name;
//     this.age = age;
// }


// let person1 = new personInfo("john", "Ethan", 23);
// let person2 = new personInfo("alex", "Sophia", 23);
// let person3 = new personInfo("alice", "Liam", 23);
// let person4 = new personInfo("thor", "Isabella", 23);
// let person5 = new personInfo("soso", "Oliver", 23);

// let persons = [person1, person2, person3, person4, person5];

// function firstName(persons) {
//     let names = [];
//     for (let i = 0; i < persons.length; i++) {
//         let person = persons[i];         
//         let first_name = Object.values(person)[0]; 
//         names.push(first_name);        
//     }
//     return names;
// }


// let result = firstName(persons);
// console.log(result); 

// Q2:

// function personInfo(first_name, last_name, age) {
//     this.first_name = first_name;
//     this.last_name = last_name;
//     this.age = age;
// }

// let person1 = new personInfo("john", "Ethan", 23);
// let person2 = new personInfo("alex", "Sophia", 23);
// let person3 = new personInfo("alice", "Liam", 23);
// let person4 = new personInfo("thor", "Isabella", 23);
// let person5 = new personInfo("soso", "Oliver", 23);

// let persons = [person1, person2, person3, person4, person5];

// function objectsToArrays(persons) {
//     let allResults = []; 

//     for (let i = 0; i < persons.length; i++) {
//         let result = []; 
//         let key = Object.keys(persons[i]); 
//         let value = Object.values(persons[i]); 
        
//         for (let j = 0; j < value.length; j++) {
//             result.push(key[j]);
//             result.push(value[j]); 
//         }

//         allResults.push(result);
//     }

//     return allResults; 
// }

// console.log(objectsToArrays(persons));

// Q3
// function car(brand, model , year) {
//         this.brand = brand;
//         this.model = model;
//         this.year = year;
//     }
    
    
//     let car1 = new car("toyota", "corolla", 2020);
//     let car2 = new car("Tesla", "Modle3", 2019);
//     let car3 = new car("Ford", "musting", 2019);

//     let cars=[ car1 ,car2,car3 ];
//     for(let i=0 ; i< cars.length ; i++){
//        currentcar=cars[i]
//         console.log(currentcar);
//     }


