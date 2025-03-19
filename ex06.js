function ajouterAdresse(personne, adresse) {
	personne.adresse = adresse;
    return personne
}

// Tests
const bob = { nom: "Bob", age: 25 };

ajouterAdresse(bob, "123 Rue Principale");

console.log(bob); // { nom: 'Bob', age: 25, adresse: '123 Rue Principale' }