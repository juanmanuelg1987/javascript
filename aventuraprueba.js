let nombre = "";
let vida = 100;
let energia = 100;
let inventario = "";

function jugar() {
  // Función para mostrar el estado actual del jugador...Dentro de una template string, los símbolos ${ ... } te permiten insertar variables o expresiones directamente dentro del texto.
  function mostrarEstado() {
    return `\n--- ESTADO ACTUAL ---\nVida: ${vida} | Energía: ${energia} | Inventario: ${
      inventario || "Nada"
    }\n----------------------\n`;
  }

  //COMIENZO

  function menuPrincipal() {
    let opcion = prompt(
      "=== EN BUSQUEDA DEL TESORO ===\n" +
        "1. Comenzar nueva partida\n" +
        "2. Cargar partida desde texto\n" +
        "3. Salir\n\n" +
        "Elige opción:"
    );

    if (opcion === "1") {
      escenaInicio();
    } else if (opcion === "2") {
      let texto = prompt("Pega el texto de tu partida guardada (JSON):");

      if (texto) {
        try {
          let datos = JSON.parse(texto); // Convierte texto plano a objeto, si coincide te manda a escena pie de montaña
          nombre = datos.nombre;
          vida = datos.vida;
          energia = datos.energia;
          inventario = datos.inventario;

          alert(`🔄 Partida cargada. Bienvenido de nuevo, ${nombre}.`);
          escenaPieMontania();
        } catch (error) {
          alert(" Error: el texto no es válido. Verifica que esté completo.");
          menuPrincipal();
        }
      } else {
        alert("No pegaste ningún texto.");
        menuPrincipal();
      }
    } else if (opcion === "3" || opcion === null) {
      alert("¡Gracias por jugar! Hasta pronto.");
    } else {
      alert("Opción inválida");
      menuPrincipal();
    }
  }

  //EL PROMPT cuadro de diálogo que pregunta el nombre

  function escenaInicio() {
    nombre = prompt(
      "Está por comenzar el juego.\n¿Cómo te llamas, aventurero?"
    );

    if (nombre === null) {
      menuPrincipal();
    } else if (nombre === "") {
      // Si el usuario no escribió nada y presionó Aceptar
      alert("Debes ingresar un nombre.");
      escenaInicio();
    }
    //Nombre valido - Continuar con el juego
    else {
      alert(
        `¡Perfecto, ${nombre}! Comienzas con ${vida} de vida y ${energia} de energía.`
      );
      escenaPieMontania();
    }
  }

  //ESCENA PIE DE MONTAÑA

  function escenaPieMontania() {
    let decision = prompt(
      mostrarEstado() +
        `${nombre}, te encuentras al pie de una montaña:\n` +
        "1. Subir la montaña\n" +
        "2. Ingresar a la cueva\n\n" +
        "Elige opción:"
    );

    if (decision === "1") {
      energia -= 50;
      if (energia <= 0) {
        alert("Te has quedado sin energia. sientate a leer");
        LeerLibroJavascript();
        energia += 100;
      } else {
        alert("costo mucho subir! pierdes la mitad de tu energia");
      }
      
      

      escenaMontania();
    } else if (decision === "2") {
      escenaCueva();
    } else {
      alert("elegi 1 o 2 chabon/a");
      escenaPieMontania()
    }
    
  }

  //ESCENA MONTAÑA

  function escenaMontania() {
    let opcion = prompt(
      mostrarEstado() +
        "Has subido al medio de la montaña. Ves una cabaña:\n" +
        "1. Seguir subiendo\n" +
        "2. Ingresar a la cabaña\n" +
        "3. Regresar\n\n" +
        "Elige opción:"
    );

    if (opcion === "1") {
      escenaAcantilado();
    } else if (opcion === "2") {
      escenaCabania();
    } else if (opcion === "3") {
      escenaPieMontania();
    } else {
      alert("Vuelves al menu principal");
      menuPrincipal()
    }
  }

  //CUEVA

  function escenaCueva() {
    let mensaje =
      mostrarEstado() +
      "Estás en una cueva oscura:\n" +
      "1. Encender antorcha" +
      (inventario === "antorcha" ? " (Disponible)" : " (No disponible)") +
      "\n" +
      "2. Ingresar a ciegas\n" +
      "3. Salir\n\n" +
      "Elige opción:";

      // " ?  = entonces   ---- "" : = si no  "
    let opcion = prompt(mensaje);

    switch (opcion) {
      case "1":
        if (inventario === "antorcha") {
          alert(
            "¡Enciendes la antorcha! La cueva se ilumina y revela un tesoro brillante."
          );
          alert("¡FELICIDADES, elegiste el mejor camino!");
          mostrarLeccionesJavaScript();
          finalizarJuego();
        } else {
          alert(
            "No tienes una antorcha en tu inventario. Busca una en la cabaña."
          );
          // En lugar de no hacer nada, volvemos a mostrar la escena de la cueva para que el jugador elija otra opción.
          escenaCueva();
        }
        break;

      case "2":
        vida -= 30;
        energia -= 15;
        alert(
          mostrarEstado() +
            "Avanzas a ciegas y tropiezas con una roca.\n¡Pierdes 30 de vida y 15 de energía!"
        );

        if (vida <= 0) {
          alert("Te has quedado sin vida. ¡HAS PERDIDO!");
          finalizarJuego();
        } else {
          let direccion = prompt(
            mostrarEstado() +
              "Escuchas dos pasajes:\n" +
              "1. Ir hacia sonidos de agua (izquierda)\n" +
              "2. Ir hacia una brisa fresca (derecha)\n\n" +
              "¿Hacia dónde vas?"
          );

          if (direccion === "1") {
            alert(
              "El suelo cede bajo tus pies... ¡Caíste en un pozo profundo! ¡PERDISTE! tu muerte fue la mas rapida, empieza de nuevo y elige otros caminos"
            );
            finalizarJuego();
          } else if (direccion === "2") {
            alert(
              "La brisa te guía hacia la salida. ¡Logras escapar de la cueva!"
            );
            escenaPieMontania();
          } 
          // else, si no elige nada, seria elegir cancelar, lo lleva a menuprincipal
          else {
            alert(
              "No tomas ninguna decisión clara y te pierdes en la oscuridad."
            );
            menuPrincipal();
          }
        }
        break;

      case "3":
        alert("Decides que es mejor retirarte y vuelves al pie de la montaña.");
        escenaPieMontania();
        break;

      default:
        alert("Opción no válida. Elige 1, 2 o 3.");
        escenaCueva();
        break;
    }
  }

  //CABAÑA

  function escenaCabania() {
    alert(
      "Entras a la cabaña y la puerta se cierra detrás de ti. Estás atrapado."
    );
    let respuesta = prompt(
      mostrarEstado() +
        "Para salir debes resolver esta adivinanza:\n\n" +
        "'Cuando quieras mostrar un mensaje en tu página,\n" +
        "yo soy la función que te da el mensaje.\n" +
        "No soy console.log, que en la consola se queda,\n" +
        "yo aparezco en una ventanita para que se vea.'\n\n" +
        "1. Prompt\n" +
        "2. Alert\n\n" +
        "Elige tu respuesta:"
    );

    if (respuesta === "2") {
      alert("¡Correcto! Obtienes una antorcha y la llave para salir.");
      inventario = "antorcha";

      // === GUARDAR PARTIDA EN TEXTO PLANO ===
      // Creamos un objeto con el progreso actual
      // === GUARDAR PARTIDA EN TEXTO PLANO ===
      let progreso = {
        nombre: nombre,
        vida: vida,
        energia: energia,
        inventario: inventario,
      };
      //aca viene lo importante texto plano igual a json.stringify
      let textoPartida = JSON.stringify(progreso);

      // Mostrar en un prompt para que sea seleccionable
      alert(
        "✅ ¡Partida guardada!\n\nEn la siguiente ventana verás el texto de tu partida.\nSelecciónalo TODO y cópialo (Ctrl+C o Cmd+C)."
      );

      prompt("Copia este texto (Ctrl+C o Cmd+C) y guárdalo:", textoPartida);

      // Mostrar estado actualizado
      alert(mostrarEstado() + "¡Ahora tienes una antorcha en tu inventario!");
      escenaPieMontania();
    } else if (respuesta === "1") {
      alert(
        "Respuesta incorrecta. Te quedas atrapado en la cabaña. ¡PERDISTE! tu muerte fue pura agonia, empieza de nuevo y elige otros caminos, La función prompt() en JavaScript muestra una ventana emergente que pide al usuario que ingrese un texto y devuelve lo que escribió como una cadena de texto."
      );
      finalizarJuego();
    } else {
      alert("no busques bugs! ingresa 1 o 2");
      escenaPieMontania()
    }
  }

  //ACANTILADO
  function escenaAcantilado() {
    alert(
      "Llegaste a un acantilado. Para cruzarlo debes resolver un acertijo:"
    );
    let acertijo = prompt(
      mostrarEstado() +
        "'Antes de mí, solo var existía,\n" +
        "pero yo llegué para mejorar tu día.\n" +
        "Soy la mejor manera de declarar,\n" +
        "y en el bloque me debo quedar.'\n\n" +
        "1. let\n" +
        "2. const\n\n" +
        "Elige tu respuesta:"
    );

    if (acertijo === "1") {
      alert(
        "¡Correcto! Cruzas el acantilado del SABER y adquieres el TESORO Del Aprendiz."
      );

      // Bucle infinito que solo se rompe con respuestas válidas
      while (true) {
        let buscarCueva = prompt(
          "¡FELICIDADES, HAS GANADO!\n\n" +
            "Pero espera... Has escuchado rumores sobre un tesoro legendario\n" +
            "escondido en la Cueva de la Sabiduría.\n\n" +
            "¿Te gustaría buscar el tesoro dentro de la Cueva?\n\n" +
            "1. Sí, buscar el tesoro legendario\n" +
            "2. No, terminar el juego\n\n" +
            "Elige opción:"
        );

        if (buscarCueva === "1") {
          alert("Decides aventurarte en busca del tesoro legendario...");
          escenaPieMontania();
          break; // ← Rompe el bucle
        } else if (buscarCueva === "2" || buscarCueva === null) {
          alert("Has decidido terminar tu aventura. ¡Bien jugado!");
          finalizarJuego();
          break; // ← Rompe el bucle
        } else {
          alert("Opción inválida. Por favor elige 1 o 2.");
          // No hay break, así que el bucle continúa
        }
      }
    } else if (acertijo === "2") {
      alert(
        "LET declara una variable limitada al bloque, función o expresión donde se usa. "
      );
      escenaMontania();
    } else {
      alert("Opción inválida. Por favor elige 1 o 2.");
      escenaMontania();
    }
  } // <-- Añadir esta llave para cerrar escenaAcantilado()
  //FINALIZA

  function finalizarJuego() {
    if (confirm("¿Quieres jugar otra vez?")) {
      // Resetear variables para nueva partida
      nombre = "";
      vida = 100;
      energia = 100;
      inventario = "";
      menuPrincipal();
    } else {
      alert("¡Gracias por jugar! Hasta pronto.");
    }
  }

  // Iniciar el juego
  menuPrincipal();
}

// Comenzar el juego
;

//esta funcion es el mensaje final, que va a ser llamado al completar el juego con la antorcha
//SE LLAMA  FACIL... mostrarLeccionesJavaScript()

//alert() = ejemplo..."¡MIRA esto!" 👀

//prompt() = ejemplo...  "¿Qué piensas?" 💭

function mostrarLeccionesJavaScript() {
  alert(
    " LECCIONES DE JAVASCRIPT \n\n" +
      " BREAK:\n" +
      "   - Se usa en bucles (for, while) y switch.\n" +
      "   - Termina la ejecución del bucle o switch.\n\n" +
      " FUNCTION:\n" +
      "   - Bloque de código que realiza una tarea.\n" +
      "   - Se define con 'function nombre() {}'.\n" +
      "   - Puede recibir parámetros y retornar valores.\n\n" +
      " LET:\n" +
      "   - Declara variables con alcance de bloque.\n" +
      "   - A diferencia de 'var', no sale del bloque.\n" +
      "   - Ideal para bucles y bloques if.\n\n" +
      "¡A seguir practicando JavaScript!"
  );
}

function LeerLibroJavascript() {
  alert(
    "En JavaScript, los paréntesis () en las funciones tienen dos propósitos principales:\n" +
      "Al definir una función: se usan para declarar los parámetros (los datos que la función puede recibir).\n" +
      "Al llamar a una función: se usan para pasar argumentos (los valores concretos que se envían a la función).\n" +
      "Pero hay una tercera situación: cuando una función no tiene parámetros, igualmente se usan los paréntesis (vacíos) tanto en la definición como en la llamada.\n\n"
  );
}

window.onload = function() {
  const audio = document.querySelector('audio');
  const btn = document.getElementById('silenciarBtn');
  btn.onclick = function() {
    audio.muted = !audio.muted;
    if (!audio.muted) {
      audio.currentTime = 0;
      audio.play();
    }
    btn.textContent = audio.muted ? 'Activar sonido' : 'Silenciar';
  };
};