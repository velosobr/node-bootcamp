const person = {
     name: 'Lino',
     age: 26,
     hasHobbies: false
}
const sumarizeUser =  (userName, userAge, userHasHobbies) =>{

    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' + userHasHobbies

    )
    
}


console.log(sumarizeUser(person.name, person.age, person.hasHobbies));

const hobbies = ['surfing', 'music']

console.log(hobbies.map(hobby => 'hooby: '+ hobby));

hobbies.push('swimming')

console.log(hobbies.map(hobby => 'hooby: '+ hobby));

//rest and spread
const copiedArray = [...hobbies];

console.log(copiedArray);

const copiedPerson = {...person}
console.log(copiedPerson);

const toArray = (... args) =>{
    return args
}

console.log(toArray(1, 2, 3, 4, 5));


//destructuring

const printName = ({ name, age }) =>{
    return name;
}

console.log(printName(person));

let [hobby1, hobby2] = hobbies;

console.log(hobby1);


 