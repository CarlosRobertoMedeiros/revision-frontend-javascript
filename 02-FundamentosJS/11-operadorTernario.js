var temFoto = true;
	//se tem foto perfil.jpg
	// se não mock-perfil.jpg

var pathFoto ='';

/*
if (temFoto){
	pathFoto ='maria-perfil.jpg'
}else{
	pathFoto ='mock-perfil.jpg'
}
*/

var pathFoto = temFoto? 'maria-perfil.jpg' : 'mock-perfil.jpg';
console.log(pathFoto);