<img width="1060" height="534" alt="Screenshot_2" src="https://github.com/user-attachments/assets/e7f243ea-65d8-4a71-a217-ed32133dfc53" />


#  En Búsqueda del Tesoro - Juego Interactivo con JavaScript

## Descripción

Juego interactivo de aventuras desarrollado con **JavaScript, HTML y CSS** como proyecto educativo. El jugador debe tomar decisiones estratégicas, resolver acertijos sobre programación y gestionar recursos (vida y energía) para encontrar el tesoro legendario.

Este proyecto demuestra el uso práctico de conceptos fundamentales de JavaScript a través de una experiencia de juego inmersiva.

---

##  Objetivos del Proyecto

-  Implementar variables para gestionar el estado del juego
-  Utilizar estructuras condicionales (if/else, switch/case)
-  Aplicar bucles (while) para validaciones
-  Trabajar con objetos JSON para guardar/cargar partidas
-  Usar prompt() y alert() para la interacción con el usuario
-  Crear funciones reutilizables y organizadas

---

##  Cómo Jugar

1. Abre el archivo `index.html` en tu navegador
2. Haz clic en el botón "Comenzar Juego"
3. Ingresa tu nombre cuando se te solicite
4. Toma decisiones usando los números (1, 2, 3...)
5. Resuelve acertijos sobre JavaScript
6. ¡Encuentra el tesoro legendario!

###  Sistema de Guardado
- En la cabaña, al resolver el acertijo, obtendrás un texto JSON
- Copia ese texto y guárdalo en un archivo .txt
- Usa la opción "Cargar partida" en el menú para continuar desde ese punto

---

## 🗺️ Mapa del Juego

```
MENÚ PRINCIPAL
    │
    ├── Comenzar nueva partida
    │
    └── Cargar partida
            │
            ▼
    PIE DE LA MONTAÑA
        │
        ├── Subir la montaña ──► MONTAÑA ──► CABAÑA (Acertijo + Antorcha)
        │                           │
        │                           └──► ACANTILADO (Final: Tesoro del Aprendiz)
        │
        └── Entrar a la cueva ──► CUEVA OSCURA
                                      │
                                      ├── Con antorcha ──► ¡TESORO LEGENDARIO! ✨
                                      │
                                      └── Sin antorcha ──► Bifurcación (Agua/Brisa)
```

---

##  Conceptos de JavaScript Implementados

### 1 **Variables con `let`**

```javascript
let nombre = "";
let vida = 100;
let energia = 100;
let inventario = "";
```

**¿Por qué `let`?**
- Alcance de bloque (solo existe dentro de `{ }`)
- No se puede redeclarar en el mismo ámbito
- Es la forma moderna y recomendada de declarar variables

---

### 2 **Funciones**

```javascript
function mostrarEstado() {
  return `\n--- ESTADO ACTUAL ---\nVida: ${vida} | Energía: ${energia}\n`;
}
```

**Propósito:**
- Organizar código en bloques reutilizables
- Evitar repetición de código
- Hacer el programa más legible y mantenible

**Funciones principales del juego:**
- `menuPrincipal()` - Pantalla inicial
- `escenaInicio()` - Solicita el nombre
- `escenaPieMontania()` - Hub central
- `escenaCueva()` - Zona peligrosa
- `escenaCabania()` - Acertijo para obtener antorcha
- `escenaAcantilado()` - Final alternativo
- `finalizarJuego()` - Reiniciar o salir

---

### 3 **Template Strings**

```javascript
`${nombre}, te encuentras al pie de una montaña`
```

**Ventajas:**
- Insertar variables directamente en el texto con `${variable}`
- Crear textos multilínea sin `\n`
- Más legible que la concatenación con `+`

---

### 4 **IF / ELSE**

```javascript
if (energia <= 0) {
  alert("Te has quedado sin energía");
  LeerLibroJavascript();
  energia += 100;
} else {
  alert("¡Costo mucho subir!");
}
```

**Uso en el juego:**
- Verificar el estado del jugador (vida, energía)
- Validar inventario antes de usar objetos
- Controlar el flujo de las escenas

**Cuándo usar:** Condiciones complejas o rangos de valores.

---

### 5 **SWITCH / CASE**

```javascript
switch (opcion) {
  case "1":
    if (inventario === "antorcha") {
      alert("¡Enciendes la antorcha!");
    }
    break;
  
  case "2":
    vida -= 30;
    break;
  
  case "3":
    escenaPieMontania();
    break;
  
  default:
    alert("Opción no válida");
    break;
}
```

**Componentes clave:**
- `switch(variable)` - Evalúa la variable una vez
- `case "valor":` - Compara con valores específicos
- `break;` - Sale del switch (¡importante!)
- `default:` - Se ejecuta si ningún caso coincide

**Cuándo usar:** Cuando tienes muchas opciones exactas para comparar.

---

### 6 **WHILE**

```javascript
while (true) {
  let buscarCueva = prompt("¿Buscar el tesoro?\n1. Sí\n2. No");
  
  if (buscarCueva === "1") {
    escenaPieMontania();
    break; // Sale del bucle
  } else if (buscarCueva === "2") {
    finalizarJuego();
    break;
  } else {
    alert("Opción inválida");
    // Continúa el bucle
  }
}
```

**Propósito:**
- Repetir código hasta que se cumpla una condición
- Validar respuestas del usuario
- Asegurar que el jugador elija opciones válidas

**⚠️ Importante:** Siempre incluir una forma de salir del bucle (`break`) para evitar bucles infinitos.

---

### 7 **JSON (Guardar/Cargar Partida)**

```javascript
// Crear objeto con datos
let progreso = {
  nombre: nombre,
  vida: vida,
  energia: energia,
  inventario: inventario
};

// Convertir objeto a texto
let textoPartida = JSON.stringify(progreso);

// Convertir texto a objeto
let datos = JSON.parse(texto);
```

**JSON.stringify():** Convierte un objeto JavaScript en texto plano (string)
**JSON.parse():** Convierte texto plano en un objeto JavaScript

**Uso en el juego:** Sistema de guardado y carga de partidas.

---

### 8 **PROMPT y ALERT**

```javascript
// PROMPT: Pide información al usuario
let nombre = prompt("¿Cómo te llamas?");

// ALERT: Muestra un mensaje
alert("¡Bienvenido " + nombre + "!");
```

**Diferencias:**
- `prompt()` - Muestra una ventana y **devuelve** lo que el usuario escribió
- `alert()` - Solo muestra un mensaje, **no devuelve nada**

---

##  Comparación de Estructuras de Control

![Comparación IF/ELSE, SWITCH/CASE y WHILE]<img width="591" height="225" alt="Screenshot_3" src="https://github.com/user-attachments/assets/fc684841-2167-4528-ae28-d290740d7f0e" />

| Aspecto | IF/ELSE | SWITCH/CASE | WHILE |
|---------|---------|-------------|-------|
| **Propósito** | Decisiones basadas en condiciones | Comparar un valor con múltiples opciones | Repetir código mientras se cumpla una condición |
| **Evaluación** | Cada condición por separado | Una sola expresión, múltiples valores | Condición antes de cada repetición |
| **Uso ideal** | Condiciones complejas o rangos | Múltiples valores exactos de una variable | Repetir hasta que algo cambie |
| **Legibilidad** | Mejor para pocas opciones | Más limpio con muchas opciones | Ideal para validaciones repetitivas |

---

##  Lecciones de JavaScript en el Juego

Al completar el juego con la antorcha, recibirás información sobre:

- **BREAK:** Cómo salir de bucles y switch
- **FUNCTION:** Cómo organizar código en bloques reutilizables
- **LET:** Cómo declarar variables con alcance de bloque

---

##  Tecnologías Utilizadas

- **JavaScript** (ES6+)
- **HTML5**
- **CSS3**

---

##  Estructura del Proyecto

```
proyecto/
│
├── index.html          # Página principal
├── styles.css          # Estilos del juego
├── script.js           # Lógica del juego
├── README.md           # Este archivo

```

---

##  Desafíos y Aprendizajes

### Desafíos encontrados:
1. **Validación de respuestas:** Implementar bucles while para asegurar opciones válidas
2. **Sistema de guardado:** Convertir el estado del juego a JSON y viceversa
3. **Gestión del flujo:** Evitar bucles infinitos y asegurar que cada camino tenga salida

### Conceptos aprendidos:
- Uso práctico de estructuras de control
- Manejo de estado en aplicaciones
- Interacción con el usuario mediante prompt/alert
- Serialización de datos con JSON
- Organización de código con funciones

---

##  Posibles Mejoras Futuras

- [ ] Reemplazar `prompt()` y `alert()` por un interfaz HTML más moderna
- [ ] Agregar más escenarios y caminos
- [ ] Implementar sistema de puntuación
- [ ] Añadir efectos de sonido
- [ ] Guardar partidas en localStorage en lugar de copiar texto
- [ ] Crear un mapa visual interactivo
- [ ] Agregar más acertijos sobre JavaScript

---

** Si te gustó este proyecto, no olvides darle una estrella en GitHub!**





Estructuras de Control en JavaScript: Guía Rápida
Si estás aprendiendo programación, estas tres estructuras son fundamentales:
🔹 IF/ELSE: Para tomar decisiones basadas en condiciones. Ideal cuando necesitas evaluar expresiones diferentes o trabajar con rangos de valores.
🔹 SWITCH/CASE: Para comparar una variable con múltiples valores exactos. Hace tu código más limpio y legible cuando tienes muchas opciones.
🔹 WHILE: Para repetir código mientras se cumpla una condición. Perfecto para validaciones y bucles donde no sabes cuántas iteraciones necesitarás.
La clave está en saber cuándo usar cada una:

IF/ELSE → condiciones complejas
SWITCH/CASE → muchas opciones de un mismo valor
WHILE → repetir hasta lograr un objetivo

