var p = {

	body: document.querySelector("#listado"),
/*	textos: null,
	accion: null,
	contenido: null,
	copyText: null,
	temp: null,
	copytextarea: null,
	areatexto: document.querySelector("#areatexto"),
	loremp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
*/
}

var m = {

	run: function() {

		for (var i = 0; i < 16; i++) {

			p.body.innerHTML += '<li><div className="Title">Texto 1</div><div className="copybutton"><span className="icon-copy"></span></div></li>';

		}

/*		p.textos = document.querySelectorAll("#listado li");

		m.inicio();
*/
	},

/*

	inicio: function() {

		for (var i = 0; i < p.textos.length; i++) {

			p.textos[i].addEventListener("click", m.oprimirAccion);

		}
	},

	oprimirAccion: function(texto) {

		p.accion = texto.target.getAttribute("class");
		p.contenido = texto.target.getAttribute("value");

		m.areaTexto(p.accion, p.contenido);

	},

	areaTexto: function(accion, contenido) {

		switch (accion) {

			case "pegar":

				p.areatexto.innerHTML += "<strong>" + p.contenido + ": </strong>" + p.loremp + "<br><br>";

				break;

			case "copiar":
				m.copy();
				break;
		}


	},

	copy: function() {

		p.copyText = p.contenido + p.loremp;
		p.temp = document.createElement("input");
		p.temp.setAttribute("value", p.copyText);
		document.body.appendChild(p.temp);
		p.temp.select();
		document.execCommand("copy");
		document.body.removeChild(p.temp);

	},

	cls: function() {
		p.areatexto.innerHTML = null;
	},

	copyarea: function() {

		p.temp = document.createElement("div");
		p.temp.setAttribute("contentEditable", true);
		p.temp.innerHTML = document.getElementById("areatexto").innerHTML;
		p.temp.setAttribute("onfocus", "document.execCommand('selectAll',false,null)");
		document.body.appendChild(p.temp);
		p.temp.focus();
		document.execCommand("copy");
		document.body.removeChild(p.temp);
	},

*/

}

export default m.run;
