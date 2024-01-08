function mostrarModal(tipo) {
    var contenido = "";
    if (tipo === 'mensaje') {
        contenido = "¡Hola Pau! nsq poner aqui tbh bsjsak. ";
    } else if (tipo === 'categorias') {
        contenido = "<button onclick=\"mostrarDatoRandom('animales')\">Animales</button>" +
                    "<button onclick=\"mostrarDatoRandom('naturaleza')\">Naturaleza</button>" +
                    "<button onclick=\"mostrarDatoRandom('cuerpoHumano')\">Cuerpo Humano</button>" +
                    "<button onclick=\"mostrarDatoRandom('astrologia')\">Astrología</button>" +
                    "<button onclick=\"mostrarDatoRandom('historia')\">Historia</button>" +
                    "<button onclick=\"mostrarDatoRandom('geografia')\">Geografía</button>" +
                    "<button onclick=\"mostrarDatoRandom('psicologia')\">Psicología</button>";
    }
    
    document.getElementById('contenido-modal').innerHTML = contenido;
    document.getElementById('modal').style.display = 'block';
}

function cerrarModal() {
    document.getElementById('modal').style.display = 'none';
}

function mostrarDatoRandom(categoria) {
    var datosPorCategoria = {
        'animales': [
            '¡Pau, sabías que los pingüinos se comunican mediante sonidos y movimientos de cabeza!',
            '¡Increíble! Las abejas pueden reconocer rostros humanos.',
            '¡Pau, te sorprenderá saber que las jirafas tienen el mismo número de vértebras en el cuello que los humanos!'
        ],
        'naturaleza': [
            '¡Hola Pau! Los bosques producen el 30% del oxígeno que respiramos.',
            '¡Pau, es fascinante! El arco iris se forma por la refracción de la luz en las gotas de lluvia.',
            '¡Did you know? En un solo día, un solo árbol puede absorber la misma cantidad de dióxido de carbono que produce un auto en 26,000 millas.'
        ],
        'cuerpoHumano': [
            '¡Pau, te asombrará saber que el corazón humano puede generar suficiente presión para hacer que la sangre salga a una distancia de 10 metros!',
            '¡Hola Pau! Los huesos del cuerpo humano son más fuertes que el acero.',
            '¡Pau, interesante hecho! El estómago humano produce un nuevo revestimiento cada pocos días para evitar digerirse a sí mismo.'
        ],
        'astrologia': [
            '¡Pau, sabías que la Luna se aleja de la Tierra a unos 4 centímetros cada año!',
            '¡Wow! Mercurio y Venus son los únicos planetas en nuestro sistema solar que no tienen lunas.',
            '¡Pau, en Júpiter y Saturno, una hora dura menos de 10 horas terrestres!'
        ],
        'historia': [
            '¡Pau, did you know? Los primeros juegos olímpicos registrados se llevaron a cabo en el año 776 a.C.',
            '¡Hola Pau! La Ruta de la Seda se utilizó por primera vez en el siglo II a.C.',
            '¡Increíble! La Revolución Industrial comenzó en Gran Bretaña en el siglo XVIII.'
        ],
        'geografia': [
            '¡Pau, te sorprenderá saber que el punto más alto de la Tierra, el Monte Everest, está a más de 8,848 metros sobre el nivel del mar!',
            '¡Did you know? La Gran Barrera de Coral es el único organismo vivo visible desde el espacio.',
            '¡Hola Pau! El lago Baikal en Rusia es el lago más profundo del mundo.'
        ],
        'psicologia': [
            '¡Hola Pau! Las emociones humanas tienen una duración de unos 6 segundos.',
            '¡Pau, interesante hecho! Se necesitan aproximadamente 20 segundos para que el cerebro procese una nueva información.',
            '¡Sabías que el color azul se asocia con la productividad y la calma?'
        ]
    };

    var datosAleatorios = datosPorCategoria[categoria];
    var datoAleatorio = datosAleatorios[Math.floor(Math.random() * datosAleatorios.length)];

    alert(datoAleatorio);
    cerrarModal();
}
