// === JUEGO INTERACTIVO - SIN BUCLES WHILE ===

let nombre = "";
let vida = 100;
let energia = 100;
let inventario = "";

function jugar() {
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

  function escenaInicio() {
    nombre = prompt(
      "Está por comenzar el juego.\n¿Cómo te llamas, aventurero?"
    );

    if (nombre === null) {
      menuPrincipal();
    } else if (nombre === "") {
      alert("Debes ingresar un nombre.");
      escenaInicio();
    } else {
      alert(
        `¡Perfecto, ${nombre}! Comienzas con ${vida} de vida y ${energia} de energía.`
      );
      escenaPieMontania();
    }
  }

  function escenaPieMontania() {
    let decision = prompt(
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

  function escenaMontania() {
    let opcion = prompt(
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

  function escenaCueva() {
    let mensaje =
      "Estás en una cueva oscura:\n" +
      "1. Encender antorcha" +
      (inventario === "antorcha" ? " (Disponible)" : " (No disponible)") +
      "\n" +
      "2. Ingresar a ciegas\n" +
      "3. Salir\n\n" +
      `Vida actual: ${vida} | Energía: ${energia}\n` +
      "Elige opción:";

    let opcion = prompt(mensaje);

    switch (opcion) {
      case "1":
        if (inventario === "antorcha") {
          alert(
            "¡Enciendes la antorcha! La cueva se ilumina y revela un tesoro brillante."
          );
          alert("¡FELICIDADES, HAS GANADO EL JUEGO!");
          finalizarJuego();
        } else {
          alert(
            "No tienes una antorcha en tu inventario. Busca una en la cabaña."
          );
          escenaCueva();
        }
        break;

      case "2":
        vida -= 30;
        energia -= 15;
        alert(
          "Avanzas a ciegas y tropiezas con una roca.\n¡Pierdes 30 de vida y 15 de energía!"
        );

        if (vida <= 0) {
          alert("Te has quedado sin vida. ¡HAS PERDIDO!");
          finalizarJuego();
        } else {
          let direccion = prompt(
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

  function escenaCabania() {
    alert(
      "Entras a la cabaña y la puerta se cierra detrás de ti. Estás atrapado."
    );
    let respuesta = prompt(
      "Para salir debes resolver esta adivinanza:\n\n" +
        "'Cuando quieras mostrar un mensaje en tu página,yo soy la función que te da el mensaje.No soy console.log, que en la consola se queda,yo aparezco en una ventanita que se vea'\n\n" +
        "1. Prompt \n" +
        "2. Alert\n\n" +
        "Elige tu respuesta:"
    );

    if (respuesta === "2") {
      alert("¡Correcto! Obtienes una antorcha y la llave para salir.");
      inventario = "antorcha";
      escenaMontania();
    } else {
      alert(
        "Respuesta incorrecta. Te quedas atrapado en la cabaña. ¡PERDISTE!"
      );
      finalizarJuego();
    }
  }

  // ...existing code...
  function escenaAcantilado() {
    alert(
      "Llegaste a un acantilado. Para cruzarlo debes resolver un acertijo:"
    );
    let acertijo = prompt(
      "'Antes de mí, solo var existía, pero yo llegué para mejorar tu día, Soy la mejor manera de declarar, y en el bloque me debo quedar.'\n\n" +
        "1. let\n" +
        "2. const\n\n" +
        "Elige tu respuesta:"
    );

    if (acertijo === "1") {
      alert(
        "¡Correcto! Cruzas el acantilado del saber y adquieres el TESORO Del Aprendiz."
      );
      alert("¡FELICIDADES, HAS GANADO!");
      finalizarJuego();
    } else {
      alert(
        "Respuesta incorrecta. No logras cruzar el acantilado del saber y debes regresar."
      );
      escenaPieMontania();
    }
  }
  // ...existing code...

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
