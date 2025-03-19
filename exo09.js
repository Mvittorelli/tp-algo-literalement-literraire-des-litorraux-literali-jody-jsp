function afficherAdresse(personne) {
	const { rue, ville, codePostal } = personne.adresse;
    
	return `${rue}, ${ville} (${codePostal})`;
}

const dave = {
	nom: "Dave",
	adresse: { rue: "456 Rue Centrale", ville: "Lyon", codePostal: "69000" }
};

console.log(afficherAdresse(dave)); // '456 Rue Centrale, Lyon (69000)'