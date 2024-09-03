
let fPerson = Symbol('Peter')
let sPerson = Symbol('Peter')
let people = {
    [fPerson] : 'Pan',
    [sPerson] : 'Patter'
}

console.log(people)
console.log(people.fPerson)
console.log(people[fPerson])

// So symbol can be used to semi-privatize the info. Requiring one to know the variable for the person. 