# Dexi Poke Lovers

## Índice

* [Introducción](#introducción)
* [Necesidades de nuestros usuarios](#resumen-del-proyecto)
* [Prototipos de la plataforma](#prototipo-de-la-plataforma)
* [Testeos y conclusiones en prototipos](#testeos-y-conclusiones-en-prototipo)
* [Consideraciones técnicas](#consideraciones-técnicas)
* [Primeros pasos y organización](#primeros-pasos-y-organización)
* [Contenido de referencia](#contenido-de-referencia)
* [Checklist](#checklist)

***

## Introducción

Para un jugador y fanático de Pokemon, es importante tener una base de datos que muestren los 151 Pokémon de la primera generación de la región Kanto.<br>
Según encuestas para un jugador promedio de Pokemon GO, es importante saber  ciertas características de cada Pokemon, y mantener un orden de filtrado que no sea tan complejo como la Pokedex, ya que el acceso a esta plataforma  demora en arrojar resultados imposibilitando la victoria en las batallas Pokémon.<br>
Por ello, teniendo en cuenta las necesidades de nuestros jugadores, queremos entregar una plataforma de fácil acceso y con información especifica de cada Pokemon antes de cada batalla. 
A continuación podrás ver el enlace la plataforma Pokedesx y la nueva propuesta para el juego.

En el siguiente enlace podrás ver la plataforma Pokedesk, una plataforma de multiple información del mundo Pokemon https://www.pokemon.com/es/pokedex/

<a href="">
  <img src="img/pokedesk.png" width=1000px>
</a>

<br>La interfaz construida en este proyecto es la siguiente: [link](https://josefin-ferrada.github.io/SCL008-data-lovers/src/index.html).

<a href="">
  <img src="img/appdexi.JPG" width=1000px>
</a>



<br>En las siguientes imagenes se puede visualizar la base de datos con los 151 Pokemon de la region Kanto, la cual es usada en multiples plataformas del mundo Pokemon.
<a href="">
  <img src="img/pakage1.png" width=800px>
  <img src="img/pakage1.png" width=800px>
</a>



## Necesidades de nuestros usuarios

En este proyecto **Nos basamos a las necesidades de nuestros usuarios** los cuales fueron encuestados, y nos indicaron sus necesidades como jugadores habituales de Pokémon Go. 

<h4> HISTORIA 1 : Yo como jugador habitual de Pokémon, quiero ver el tipo de Pokemon y sus debilidades para poder conocerlos y en caso de estar en una batalla poder tener ventaja. </h4>

<h5>Propuesta: Realizar una plataforma que contenga los detalles principales de cada Pokémon.</h5>

<h4>HISTORIA 2: Yo como jugador habitual de pokémon me gustaría una plataforma que filtrara características de cada Pokémon para que sea más accesible y rápido para mi.</h4>

<h5>Propuesta: La plataforma tiene que contener un sistema de filtrado de acuerdo a tipos de Pokémon </h5>

<h4>HISTORIA 3:  Yo como jugador principiante de pokémon quiero ver que cantidad de dulces debe tener cada Pokémon para evolucionar</h4>

<h5>Propuesta: En los detalles de cada Pokemon es necesario mostrar la cantidad de caramelos para evolucionar. </h5>

<h4>HISTORIA 4: Yo como jugador habitual de pokémon me gustaría conocer la probabilidad de aparición de cada pokémon para poder atraparlos con más eficiencia</h4>
<h5>Prouesta: En los detalles principales de características de cada Pokemon es necesario mostrar la hora de aparición para la captura de cada Pokémon</h5>


## Prototipos de la Plataforma

Prototipo de Baja Fidelidad: En el siguiente prototipo se puede observar el inicio de la propuesta de la Plataforma de filtrado de Pokemon, el cual contiene las características principales de esta.
<a href="">
  <img src="img/4.jpeg" width=900px>
  <img src="img/2.jpeg" width=900px>
  <img src="img/1.jpeg" width=900px>
  <img src="img/3.jpeg" width=900px>
  <img src="img/5.jpeg" width=900px>
</a>
<br>
<br>El prototipo en Alta fidelidad, contiene los colores e interacción en la plataforma.  
<a href="">
  <img src="img/appdexi.JPG" width="900px">
</a>

## Testeos y conclusiones en prototipos

En el siguiente punto veremos la interacción de un usuario con el prototipo de baja fidelidad. 

[![Watch the video](https://youtu.be/8uz1yxRw1iM)(https://youtu.be/8uz1yxRw1iM)]

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.useloom.com/share/cf9c814dc55f4468b19aef0567ceeb9c)

[![Watch the video](https://i.imgur.com/vKb2F1B.png)](https://www.useloom.com/share/8bfaf0abb1b4443da0f772bf45811433)


### Definición del producto
El producto se realizó viendo las necesidades de los usuarios por una plataforma de acceso directo a un sistema de filtrado y detalle precisos de cada Pokémon antes de cada batalla.


### Diseño de la Interfaz de Usuario
Este producto es una plataforma aliada al juego Pokemon Go, diseñada para jugadores de un rango en edad de 15 años en adelante, se busca mantener los detalles principales de Pokemon Go, ya que Dexi Poke es una herramienta perfecta para poder tener conocimiento de detalles de cada Pokémon de manera rápida y eficaz.

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado sketches (boceto) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que realices, y las subas a tu repositorio, y las menciones en tu
`README.md`.

#### Prototipo Responsivo



### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
Como mencionamos, **no** es necesario que construyas la interfaz tal como la
diseñaste. Tendrás un tiempo limitado para hackear, así es que deberás
priorizar.

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista, etc.
2. Permitir al usuario filtrar y ordenar la data.
3. Calcular estadísticas de la colección (o subcolección) como media aritmética,
   máximo y/o mínimo de algún atributo numérico, o contar cuántas veces aparece
   un determinado valor, por ejemplo.
4. Visualizarse sin problemas desde distintos tamaños de pantallas: móviles,
   tablets y desktops.

Es importante que tu interfaz, a pesar de ser una versión mínima de tu ideal,
siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias, pero esperamos
que escribas tu propias pruebas unitarias para las funciones encargadas de
_procesar_, _filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.
Para ello te recomendamos implementar las siguientes funciones en el archivo
`src/data.js`:

* `filterData(data, condition)`: esta función `filter` o filtrar recibiría la
  data, y nos retornaría aquellos datos que sí cumplan con la condición.

* `sortData(data, sortBy, sortOrder)`: esta función `sort` u ordenar
  recibe tres parámetros.
  El primer parámetro, `data`, nos entrega los datos.
  El segundo parámetro, `sortBy`, nos dice con respecto a cuál de los campos de
  la data se quiere ordenar.
  El tercer parámetro, `sortOrder`, indica si se quiere ordenar de manera
  ascendente o descendente.

* `computeStats(data)`: la función `compute` o calcular, nos permitirá hacer
  cálculos estadísticos básicos para ser mostrados de acuerdo a la data
  proporcionada.

Estas son ideas de funciones que podrías implementar, pero esto depende de tu
propia implementación.

El archivo `src/data.js` tiene que tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_).

Estas funciones deben ser [_puras_](https://medium.com/laboratoria-developers/introducci%C3%B3n-a-la-programaci%C3%B3n-funcional-en-javascript-parte-2-funciones-puras-b99e08c2895d)
e independientes del DOM. Estas funciones serán después usadas desde el archivo
`src/main.js`, al cargar la página, y cada vez que el usuario interactúe (click,
filtrado, ordenado, ...).

## Parte Opcional (Hacker edition)

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage

## Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript
(ES6), HTML y CSS. En este proyecto NO está permitido usar librerías o
frameworks, solo [vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e),
con la excepción de librerías para hacer gráficas (charts); ver
[_Parte opcional_](#parte-opcional-hacker-edition) más arriba.

No se debe utilizar la _pseudo-variable_ `this`.

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── package.json
├── README.md
├── src
│   ├── data
│   │   ├── injuries
│   │   │   ├── injuries.js
│   │   │   └── injuries.json
│   │   ├── lol
│   │   │   ├── lol.js
│   │   │   └── lol.json
│   │   ├── pokemon
│   │   │   ├── pokemon.js
│   │   │   └── pokemon.json
│   │   ├── steam
│   │   │   ├── steam.js
│   │   │   └── steam.json
│   │   └── worldbank
│   │       ├── worldbank.js
│   │       └── worldbank.json
│   ├── data.js
│   ├── index.html
│   ├── main.js
│   └── style.css
└── test
    └── data.spec.js

8 directories, 17 files
```

### `src/index.html`

Al igual que en el proyecto anterior, existe un archivo `index.html`. Como ya
sabrás, acá va la página que se mostrará al usuario. También nos sirve para
indicar qué scripts se usarán y unir todo lo que hemos hecho.

En este archivo encontrarás una serie de _etiquetas_ (_tags_) `<script>`
_comentadas_. Para _cargar_ las diferentes fuentes de datos tendrás que
_descomentar_ estas _etiquetas_. Cada uno estos scripts asignará una variable
global con la data correspondiente a esa fuente de datos.

Por ejemplo, si descomentamos la siguiente línea:

```html
<!-- <script src="./data/worldbank/worldbank.js"></script> -->
```

La línea quedaría así:

```html
<script src="./data/worldbank/worldbank.js"></script>
```

Y ahora tendríamos la variable global `WORLDBANK` disponible en nuestros otros
scripts (como `src/data.js` o `src/main.js`).

### `src/main.js`

Recomendamos usar `src/main.js` para todo tu código que tenga que ver con
mostrar los datos en la pantalla. Con esto nos referimos básicamente a la
interacción con el DOM. Operaciones como creación de nodos, registro de
manejadores de eventos (_event listeners_ o _event handlers_), ....

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/data.js`

El corazón de este proyecto es la manipulación de datos a través de arreglos y
objetos. La idea de este archivo es contener toda la funcionalidad
que corresponda a obtener, procesar y manipular datos.

En este archivo esperamos que implementes las funciones detalladas en la sección
de [_Pruebas Unitarias_](#pruebas-unitarias).

### `src/data`

En esta carpeta están los datos de las diferentes fuentes. Encontrarás una
carpeta por cada fuente, y dentro de cada carpeta dos archivos: uno con la
extensión `.js` y otro `.json`. Ambos archivos contienen la misma data; la
diferencia es que el `.js` lo usaremos a través de una etiqueta `<script>`,
mientras que el `.json` está ahí para opcionalmente cargar la data de forma
asíncrona con [`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API)
(ver sección de [_Parte Opcional_](#parte-opcional-hacker-edition)).

### `test/data.spec.js`

Tendrás también que completar las pruebas unitarias de las funciones
implementadas en el archivo `data.js`.

## Evaluación

Recuerda revisar la [rúbrica](https://docs.google.com/spreadsheets/u/1/d/e/2PACX-1vRktPN4ilZtkRN5tUb3DVhgeihwlzk63_-JI3moA-bXpKDbHDioAK2H3qbrwWNb0Ql4wX22Tgv7-PDv/pubhtml)
para ver la descripción detallada de cada habilidad y cada nivel. Esta es una
lista de todas las habilidades involucradas en este proyecto y que evaluaremos
cuando lo completes:

### General

| Característica/Habilidad |
|--------------------------|
| Completitud |

### Tech

| Habilidad |
|-----------|
| **JavaScript** |
| Estilo |
| Nomenclatura/semántica |
| Funciones/modularidad |
| Estructuras de datos |
| Tests |
| **HTML** |
| Validación |
| Estilo |
| Semántica |
| **CSS** |
| DRY |
| Responsive |
| **SCM** |
| Git |
| GitHub |
| **CS** |
| Lógica |
| Arquitectura |

### UX

| Habilidad |
|-----------|
| User Centricity |
| Visual Design |

### Habilidades Blandas

| Habilidad |
|-----------|
| Planificación y organización |
| Autoaprendizaje |
| Solución de problemas |
| Dar y recibir feedback |
| Adaptabilidad |
| Trabajo en equipo |
| Comunicación eficaz |
| Presentaciones |

***

## Pistas sobre cómo empezar a trabajar en el proyecto

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1)
   un `remote` hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. A codear se ha dicho! :rocket:

<!--
En este proyecto deberás trabajar colaborativamente. Para ello, una de las
integrantes del equipo deberá forkear el repositorio del cohort y la otra
integrante **deberá hacer un fork del repositorio de su compañera**. Luego de
esto, deberás
[configurar](https://help.github.com/articles/configuring-a-remote-for-a-fork/)
un `remote` hacia el repositorio del cual hiciste el fork.

Para mandar cambios desde un repositorio forkeado al original debes crear un
[pull request](https://goo.gl/4bYnuh)
y el propietario del repositorio original recibirá una notificación para
[revisar el pull request](https://goo.gl/XSFcT5)
y [aceptar los cambios](https://goo.gl/HLJtqN).

Aquí algunas recomendaciones para que organices mejor el trabajo con tu
compañera:

* En lugar de trabajar en una sola rama o _branch_, puedes organizar el flujo de
  trabajo con dos ramas principales:
  - `master`: rama que contiene las funcionalidades terminadas y sin errores.
  - `develop`: rama dónde integrarás las funcionalidades conforme las vayas
    desarrollando.

* Además de tener las dos ramas anteriores, puedes trabajar cada nueva
  funcionalidad en una rama individual (_feature branches_), estas ramas en
  lugar de crearse a partir de `master`, tienen a `develop` como su rama de
  origen. Cuando una funcionalidad es terminada se integra de nuevo a `develop`.
  Las _feature branches_ no se deben integrar directamente a `master`.

* Por último, te sugerimos codear usando la técnica de
  [pair programming](https://goo.gl/uAMBX2).

¿Quieres saber más forks y pull requests?

* Un [fork](https://help.github.com/articles/fork-a-repo/) es una copia de un
  repositorio en el que puedes experimentar sin afectar al repositorio original.
  Generalmente se usa para proponer cambios al proyecto de alguien más o para
  usar el proyecto de otra persona como punto de partida para una idea que
  quieras realizar.

* Un [pull request](https://help.github.com/articles/about-pull-requests/) (PR)
  te permite solicitar la inclusión de cambios al repositorio original (tu punto
  de partida) en GitHub. Cuando un PR es abierto, este permite solicitar,
  discutir y revisar los cambios realizados con todos los colaboradores y
  agregar otros commits antes de que los cambios sean incluidos al repositorio
  original.
-->

***

## Contenido de referencia

### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuario
* [Principios de diseño visual](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/diseno-visual)


### Desarrollo Front-end

* [Unidad de testing en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/javascript/11-testing/00-opening)
* [Unidad de arreglos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/javascript/04-arrays/01-arrays)
* [Unidad de objetos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/javascript/05-objects/01-objects)
* [Unidad de funciones en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/javascript/03-functions/00-opening)
* [Unidad de DOM en curso de Browser JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-01-bc-core-commoncore-scl008/courses/browser/02-dom/00-opening)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)

### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)

***

## Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.