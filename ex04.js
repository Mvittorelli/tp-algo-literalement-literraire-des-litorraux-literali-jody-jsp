function trouverPersonne(personnes, nom) {
    for (let i = 0; i < personnes.length; i++) {
        if (personnes[i].nom == nom) {
            return personnes[i]
        }
    }
    return null
}

// Tests
const personnes = [
{ nom: "Alice", age: 30 },
{ nom: "Bob", age: 25 },
{ nom: "Charlie", age: 35 }
];

console.log(trouverPersonne(personnes, "Bob")); // { nom: 'Bob', age: 25 }