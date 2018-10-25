do {
    var numberFloors =prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if (numberFloors > 25) {
        alert("Le nombre d'étages doit être inférieur à 25 !");
    } else if (numberFloors == 0) {
        alert('Le nombre d\'étages ne peut pas être nul');
    } else if (isNaN(numberFloors)) {
        alert('La valeur d\'entrée doit être numérique');
    }
} while (numberFloors > 25 || numberFloors == 0 || isNaN(numberFloors))
numberFloors = Math.abs(numberFloors);
var y = numberFloors-1;
var pyramid ='';
	for(i=1;i<=(numberFloors*2)-1;i++){
		if (i%2==!0) {
			for(k=0;k<y;k++){
				pyramid = pyramid+' ';
			}
			for(j=1;j<=i;j++){
				pyramid = pyramid+"#";
			}
			pyramid = pyramid+"\n";
			y--;
		}
	}
	console.log(numberFloors);
	console.log('Voici la pyramide :')
	console.log(pyramid);

