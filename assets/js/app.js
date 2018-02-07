function enter () {
	var user = document.getElementById('userLogin').value;
	var pass = document.getElementById('passLogin').value;

	if (user.length === 0) {
		document.getElementById('userLogin').placeholder='Favor ingresar nombre de usuario';
	} else if (pass.length < 6) {
		document.getElementById('passLogin').value='';
		document.getElementById('passLogin').placeholder='La contraseña debe tener al menos 6 caracteres';
	} else if (pass === '123456') {
		document.getElementById('passLogin').value='';
	 	document.getElementById('passLogin').placeholder= 'Favor ingresar una contraseña más segura';
	 } else {
	 	location.href ="collage.html";
	 }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}