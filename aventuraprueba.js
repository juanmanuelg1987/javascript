let nombre = "";
let vida = 100;
let energia = 100;
let inventario = "";

//esta funcion es el mensaje final, que va a ser llamado al completar el juego con la antorcha
//SE LLAMA  FACIL... mostrarLeccionesJavaScript()

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

function jugar() {
  // Función para mostrar el estado actual del jugador
  function mostrarEstado() {
    return `\n--- ESTADO ACTUAL ---\nVida: ${vida} | Energía: ${energia} | Inventario: ${
      inventario || "Nada"
    }\n----------------------\n`;
  }

  //COMIENZO

  function menuPrincipal() {
    let opcion = prompt(
      "=== MENÚ PRINCIPAL ===\n" +
        "1. Comenzar\n" +
        "2. Salir\n\n" +
        "Elige opción:"
    );

    if (opcion === "1") {
      escenaInicio();
    } else if (opcion === "2" || opcion === null) {
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
      escenaMontania();
    } else if (decision === "2") {
      escenaCueva();
    } else {
      alert("Opción inválida");
      escenaPieMontania();
    }
  }

  //ESCENA MONTAÑA

  function escenaMontania() {
    let opcion = prompt(
      mostrarEstado() +
        "Has subido la montaña. Ves una cabaña:\n" +
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
      alert("Opción inválida");
      escenaMontania();
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
              "El suelo cede bajo tus pies... ¡Caíste en un pozo profundo! ¡PERDISTE!"
            );
            finalizarJuego();
          } else if (direccion === "2") {
            alert(
              "La brisa te guía hacia la salida. ¡Logras escapar de la cueva!"
            );
            escenaPieMontania();
          } else {
            alert(
              "No tomas ninguna decisión clara y te pierdes en la oscuridad."
            );
            escenaCueva();
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
        "yo aparezco en una ventanita que se vea.'\n\n" +
        "1. Prompt\n" +
        "2. Alert\n\n" +
        "Elige tu respuesta:"
    );

    if (respuesta === "2") {
      alert("¡Correcto! Obtienes una antorcha y la llave para salir.");
      inventario = "antorcha";
      // Mostrar estado actualizado
      alert(mostrarEstado() + "¡Ahora tienes una antorcha en tu inventario!");
      escenaPieMontania();
    } else {
      alert(
        "Respuesta incorrecta. Te quedas atrapado en la cabaña. ¡PERDISTE!"
      );
      finalizarJuego();
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
      alert("¡FELICIDADES, HAS GANADO!");
      finalizarJuego();
    } else {
      alert(
        "Respuesta incorrecta. No logras cruzar el acantilado del SABER y debes regresar."
      );
      escenaPieMontania();
    }
  }

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
jugar();
