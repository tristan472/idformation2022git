const nom = document.getElementById("Anom");
const prenom = document.getElementById("Aprenom");
const adresse = document.getElementById("Aadresse");
const submit = document.getElementById("soumettreFormulaire");
const nomRecuperer = document.getElementById("nomRecuperer");
const adresseRecuperer = document.getElementById("adresseRecuperer");
const prenomRecuperer = document.getElementById("prenomRecuperer");

console.log(nom);

submit.addEventListener("click", verif);
submit.addEventListener("click", Affichage);

function verif(){
    nomRecuperer.innerText = "";
    adresseRecuperer.innerText = "";
    prenomRecuperer.innerText = "";

    if (nom.value == ""){
        nomRecuperer.innerText += "fournissez votre nom";
    }
    if (adresse.value == ""){
        adresseRecuperer.innerText += "fournissez votre adresse";
    }
    if (prenom.value == ""){
        prenomRecuperer.innerText += "fournissez votre prenom";
    }

}

function Affichage(){
    
    if(nom.value != ""){
        nomRecuperer.innerText = nom.value;    
    }
    if(prenom.value != ""){
        prenomRecuperer.innerText = prenom.value;
    }
    if(adresse.value != ""){
        adresseRecuperer.innerText= adresse.value;
    }
}