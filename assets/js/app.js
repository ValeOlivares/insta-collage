function enter () {
	var user = document.getElementById('userLogin').value;
	var pass = document.getElementById('passLogin').value;

	if (user.length === 0 || pass.length < 6 || pass === '123456'){
		document.getElementById('userLogin').placeholder = 'Favor ingresa un nombre de usuario';
		document.getElementById('passLogin').value='';
		document.getElementById('passLogin').placeholder = 'debe tener 6 caracteres'
	} else {
		location.href= 'collage.html'
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


function guardarDatos(){
 localStorage.nombre = document.getElementById("user").value;
 localStorage.password = document.getElementById("pass").value;
}

