function estMajeur(personne) {
	if (personne.age >= 18) {
		return true
	}else {
		return false
	}
}

console.log(estMajeur({ nom: "Alice", age: 30 })); // true
console.log(estMajeur({ nom: "Bob", age: 15 })); // false