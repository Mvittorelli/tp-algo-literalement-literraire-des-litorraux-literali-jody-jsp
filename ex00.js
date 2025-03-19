function creerPersonne(nom, age, ville) {
    const newPerson = { nom: nom, age: age, ville: ville }; 
    return newPerson; 
}

console.log(creerPersonne("Alice", 30, "Paris")); // { nom: 'Alice', age: 30, ville: 'Paris' }
console.log(creerPersonne("Bob", 25, "Lyon")); // { nom: 'Bob', age: 25, ville: 'Lyon' }
