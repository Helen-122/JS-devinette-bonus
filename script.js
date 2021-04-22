alert("bienvenue dans ce jeu de devinettes");

var solution = Math.floor(Math.random() * 100) + 1; //je genere un nombre aleatoire entre 1 et 100
// console.log("(la soluton est " + solution + ")");
for (var i = 0; i <= 5; i++) {// je lance la boucle où i <= au nombre d'essai voulu
  var essais = Number(prompt("Entrez un nombre entre 1 et 100 pour deviner le nombre aléatoire."));
  if (essais === solution) {
    alert("vous avez trouvé! Bravo!");
    alert("vous avez trouvé en " + i + " essai(s)")
    break; // si la reponse est trouvée, la boucle s'arrête et la console l'affiche, en presisant le nombre d'essais
  } else if (essais < solution) { // comparant la valeur essai a la valeur solution
    alert(essais + " est trop petit");
  } else {
    alert(essais + " est trop grand");
  } if (i === 5) {
    alert("vous avez perdu! Le nombre était: " + solution); // si la solution n'st pas trouvée,
    //la console l'affiche en donnant la solution
  }
}




