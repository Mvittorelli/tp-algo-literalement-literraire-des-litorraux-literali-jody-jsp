function fusionnerPersonnes(personne1, personne2) {
    return { ...personne1, ...personne2 };
}

// Tests
const p1 = { nom: "Alice", age: 30, ville: "Paris" };
const p2 = { age: 35, adresse: "123 Rue de Lyon" };

console.log(fusionnerPersonnes(p1, p2));

const p3 = { nom: "Bob", age: 25 };
const p4 = { ville: "Lyon", hobby: "Football" };

console.log(fusionnerPersonnes(p3, p4));
console.log(fusionnerPersonnes({}, p4));    