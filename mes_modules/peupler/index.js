"use strict"

const tableau = require("./tableaux.js")

/*console.log(tableau.tabVille)
console.log(tableau.tabDomaine)*/

const maxVille = tableau.tabVille.length
/*const maxDomaine = tableau.tabDomaine.length*/

const maxNom = tableau.tabNom.length
const maxPrenom = tableau.tabPrenom.length
const maxTelephone = tableau.tabTelephone.length
const maxCourriel = tableau.tabCourriel.length
const maxInterets = tableau.tabInterets.length

const peupler = () => {
	/*let positionVille = Math.floor(Math.random() * maxVille)
	let ville = tableau.tabVille[positionVille]

	let positionDomaine = Math.floor(Math.random() * maxDomaine)
	let domaine = tableau.tabDomaine[positionDomaine]*/

	let oPeuple = []

	for(let i = 0; i < 10; i++) {

		let pNom = Math.floor(Math.random() * maxNom)
		let pPrenom = Math.floor(Math.random() * maxPrenom)
		let pTelephone = Math.floor(Math.random() * maxTelephone)
		let pCourriel = Math.floor(Math.random() * maxCourriel)
		let pVille = Math.floor(Math.random() * maxVille)
		let pInterets = Math.floor(Math.random() * maxInterets)

		let nom = tableau.tabNom[pNom]
		let prenom = tableau.tabPrenom[pPrenom]
		let telephone = tableau.tabTelephone[pTelephone]
		let courriel = tableau.tabPrenom[pPrenom] + tableau.tabNom[pNom] + tableau.tabCourriel[pCourriel]
		let ville = tableau.tabVille[pVille]
		let interets = tableau.tabInterets[pInterets]

		/*return {
			domaine : domaine,
			ville : ville
		}*/

		oPeuple[i] = {
			prenom: prenom, 
			nom: nom,
			telephone: telephone,
			courriel: courriel,
			ville: ville,
			interets: interets
		}
	}

	return oPeuple
}

module.exports = peupler