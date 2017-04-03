function calculatrice() {
 //lire le calcul a éffectuer
 var calcul=eval(document.calculette.calcul.value);
 //affichage du résultat
 document.calculette.resultat.value=calcul;
}