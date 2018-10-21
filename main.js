var x =prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
var y = x-1;
var pyramid ='';
if(parseInt(x)<=25){
	for(i=1;i<=(x*2)-1;i++){
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
	console.log(x);
	console.log('Voici la pyramide :')
	console.log(pyramid);
} else {
	console.log('Erreur');
}


