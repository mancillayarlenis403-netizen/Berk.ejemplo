// =============================================
// BERK - SISTEMA INTERACTIVO
// =============================================

// 1. MENÚ PARA CELULARES

const botonMenu = document.getElementById("boton-menu");
const navegacion = document.getElementById("navegacion");

if (botonMenu && navegacion) {
    botonMenu.addEventListener("click", () => {
        const menuAbierto = navegacion.classList.toggle("abierta");

        botonMenu.setAttribute("aria-expanded", menuAbierto);
        botonMenu.setAttribute(
            "aria-label",
            menuAbierto ? "Cerrar menú" : "Abrir menú"
        );

        botonMenu.textContent = menuAbierto ? "✕" : "☰";
    });

    document.querySelectorAll(".navegacion a").forEach((enlace) => {
        enlace.addEventListener("click", () => {
            navegacion.classList.remove("abierta");
            botonMenu.setAttribute("aria-expanded", "false");
            botonMenu.setAttribute("aria-label", "Abrir menú");
            botonMenu.textContent = "☰";
        });
    });
}

// 2. BOTÓN PARA EXPLORAR BERK

const botonExplorar = document.getElementById("boton-explorar");
const mensajeExploracion = document.getElementById("mensaje-exploracion");

if (botonExplorar && mensajeExploracion) {
    botonExplorar.addEventListener("click", () => {
        mensajeExploracion.textContent =
            "¡Prepárate para explorar Berk! El mapa interactivo llegará en una próxima etapa.";
    });
}

// 3. CATÁLOGO DE DRAGONES

const dragones = [
    {
        id: "chimuelo",
        nombre: "Chimuelo",
        categoria: "peliculas",
        tipo: "Furia Nocturna",
        simbolo: "🐉",
        imagen: "Imagenes/1.1.jpg",
        color: "rgba(74, 112, 255, 0.4)",
        descripcion: "Ágil, inteligente y compañero inseparable de Hipo.",
        habilidades: "Vuelo veloz, camuflaje nocturno y disparos de plasma.",
        aparicion: "Cómo entrenar a tu dragón (2010)."
    },
    {
        id: "furia-luminosa",
        nombre: "Furia Luminosa",
        categoria: "peliculas",
        tipo: "Furia Luminosa",
        simbolo: "🐲",
        imagen: "Imagenes/2.2.jpg",
        color: "rgba(190, 224, 255, 0.4)",
        descripcion: "Una dragona misteriosa, veloz y difícil de detectar.",
        habilidades: "Camuflaje óptico y disparos de plasma.",
        aparicion: "Cómo entrenar a tu dragón 3 (2019)."
    },
    {
        id: "tormenta",
        nombre: "Tormenta",
        categoria: "peliculas",
        tipo: "Nadder mortal",
        simbolo: "🐉",
        imagen: "Imagenes/3.3.jpg",
        color: "rgba(80, 210, 180, 0.35)",
        descripcion: "La dragona de Astrid, valiente y muy precisa.",
        habilidades: "Vuelo ágil y lanzamiento de espinas.",
        aparicion: "Trilogía animada."
    },
    {
        id: "carnicera",
        nombre: "Carnicera",
        categoria: "peliculas",
        tipo: "Gronckle",
        simbolo: "🐉",
        imagen: "Imagenes/5.5.jpg",
        color: "rgba(255, 184, 77, 0.35)",
        descripcion: "La dragona robusta y simpática de Patapez.",
        habilidades: "Gran resistencia y disparos de lava.",
        aparicion: "Trilogía animada."
    },
    {
        id: "colmillo",
        nombre: "Colmillo",
        categoria: "peliculas",
        tipo: "Gronckle",
        simbolo: "🐲",
        imagen: "Imagenes/4.4.jpg",
        color: "rgba(255, 184, 77, 0.35)",
        descripcion: "Un dragón compacto, fuerte y resistente.",
        habilidades: "Vuelo y disparos de roca fundida.",
        aparicion: "Películas y contenidos de la franquicia."
    },
    {
        id: "garfios",
        nombre: "Garfios",
        categoria: "series",
        tipo: "Raptor de la Muerte",
        simbolo: "🐉",
        imagen: "Imagenes/garfius.jpg",
        color: "rgba(173, 125, 255, 0.35)",
        descripcion: "Un dragón de aspecto singular y carácter feroz.",
        habilidades: "Defensa y ataques con sus garras.",
        aparicion: "Contenido de la franquicia."
    },
    {
        id: "cortatormentas",
        nombre: "Cortatormentas",
        categoria: "series",
        tipo: "Dragón veloz",
        simbolo: "🐲",
        imagen: "Imagenes/7.7.jpg",
        color: "rgba(255, 211, 102, 0.35)",
        descripcion: "Una criatura que destaca por su rapidez.",
        habilidades: "Vuelo ágil y movimientos veloces.",
        aparicion: "Contenido de la franquicia."
    },
    {
        id: "gronckle",
        nombre: "Gronckle",
        categoria: "series",
        tipo: "Dragón robusto",
        simbolo: "🐲",
        imagen: "Imagenes/8.8.jpg",
        color: "rgba(255, 211, 102, 0.35)",
        descripcion: "Un dragón fuerte y resistente, conocido por su cuerpo robusto.",
        habilidades: "Puede lanzar bolas de fuego y soportar grandes impactos.",
        aparicion: "Cómo entrenar a tu dragón."
    },
    {
        id: "susurro",
        nombre: "Susurro de la Muerte",
        categoria: "series",
        tipo: "Dragón subterráneo",
        simbolo: "",
        imagen: "Imagenes/9.9.jpg",
        color: "rgba(255, 211, 102, 0.35)",
        descripcion: "Un dragón que puede desplazarse bajo tierra y sorprender a sus enemigos.",
        habilidades: "Excavar túneles y lanzar púas defensivas.",
        aparicion: "Cómo entrenar a tu dragón."
    },
    {
        id: "bestibestia",
        nombre: "Bestibestia",
        categoria: "series",
        tipo: "Dragón gigante",
        simbolo: "🐲",
        imagen: "Imagenes/10.10.jpg",
        color: "rgba(255, 211, 102, 0.35)",
        descripcion: "Un dragón enorme y poderoso que destaca por su fuerza.",
        habilidades: "Gran resistencia, fuerza y capacidad para lanzar fuego.",
        aparicion: "Cómo entrenar a tu dragón."
    },
    {
        id: "muerte-roja",
        nombre: "Muerte Roja",
        categoria: "series",
        tipo: "Dragón gigante",
        simbolo: "🐲",
        imagen: "Imagenes/11.11.jpg",
        color: "rgba(255, 211, 102, 0.35)",
        descripcion: "Un dragón gigantesco y temible que domina a otros dragones.",
        habilidades: "Puede lanzar potentes llamaradas y tiene una gran resistencia.",
        aparicion: "Cómo entrenar a tu dragón."
    },

    {
        id: "cremallerus",
        nombre: "Cremallerus",
        categoria: "peliculas",
        tipo: "Zippleback",
        simbolo: "🐲",
        imagen: "Imagenes/cremallerus.jpg",
        color: "rgba(110, 190, 120, 0.35)",
        descripcion: "Un dragón de dos cabezas con habilidades muy particulares.",
        habilidades: "Una cabeza produce gas y la otra puede encenderlo.",
        aparicion: "Cómo entrenar a tu dragón."
    },

    {
        id: "rumblehorn",
        nombre: "Rumblehorn",
        categoria: "peliculas",
        tipo: "Rumblehorn",
        simbolo: "🐉",
        imagen: "Imagenes/12.12.jpg",
        color: "rgba(160, 130, 110, 0.35)",
        descripcion: "Un dragón robusto con un gran sentido del olfato.",
        habilidades: "Gran fuerza, resistencia y capacidad para rastrear.",
        aparicion: "Cómo entrenar a tu dragón 2."
    },

    {
        id: "death-song",
        nombre: "Death Song",
        categoria: "series",
        tipo: "Death Song",
        simbolo: "🐲",
        imagen: "Imagenes/6.6.jpg",
        color: "rgba(255, 190, 60, 0.35)",
        descripcion: "Un dragón conocido por su canto y su resina pegajosa.",
        habilidades: "Canto, vuelo y lanzamiento de resina.",
        aparicion: "Dragones: Carrera al borde."
    },

    {
        id: "skrill",
        nombre: "Skrill",
        categoria: "series",
        tipo: "Skrill",
        simbolo: "🐉",
        imagen: "Imagenes/13.13.jpg",
        color: "rgba(110, 120, 255, 0.35)",
        descripcion: "Un dragón peligroso que se relaciona con las tormentas.",
        habilidades: "Manipulación de electricidad y vuelo veloz.",
        aparicion: "Cómo entrenar a tu dragón."
    },

    {
        id: "flightmare",
        nombre: "Flightmare",
        categoria: "series",
        tipo: "Flightmare",
        simbolo: "🐲",
        imagen: "Imagenes/14.14.jpg",
        color: "rgba(120, 210, 255, 0.35)",
        descripcion: "Una criatura misteriosa que brilla en la oscuridad.",
        habilidades: "Vuelo y emisión de una luz azulada.",
        aparicion: "Dragones: Carrera al borde."
    },

    {
        id: "timberjack",
        nombre: "Timberjack",
        categoria: "series",
        tipo: "Timberjack",
        simbolo: "🐉",
        imagen: "Imagenes/15.15.jpg",
        color: "rgba(100, 180, 130, 0.35)",
        descripcion: "Un dragón de grandes alas con bordes afilados.",
        habilidades: "Vuelo y defensa mediante sus alas.",
        aparicion: "Cómo entrenar a tu dragón."
    },

    {
        id: "scauldron",
        nombre: "Scauldron",
        categoria: "series",
        tipo: "Scauldron",
        simbolo: "🐲",
        imagen: "Imagenes/16.16.jpg",
        color: "rgba(60, 180, 190, 0.35)",
        descripcion: "Un dragón acuático que vive cerca del agua.",
        habilidades: "Natación y lanzamiento de agua caliente.",
        aparicion: "Cómo entrenar a tu dragón."
    },

    {
        id: "dramillion",
        nombre: "Dramillion",
        categoria: "series",
        tipo: "Dramillion",
        simbolo: "🐉",
        imagen: "Imagenes/17.17.jpg",
        color: "rgba(180, 120, 220, 0.35)",
        descripcion: "Un dragón capaz de imitar los ataques de otras especies.",
        habilidades: "Imitación de diferentes tipos de fuego.",
        aparicion: "Dragones: Carrera al borde."
    },

    {
        id: "triple-stryke",
        nombre: "Triple Stryke",
        categoria: "series",
        tipo: "Triple Stryke",
        simbolo: "🐲",
        imagen: "Imagenes/18.18.jpg",
        color: "rgba(220, 100, 120, 0.35)",
        descripcion: "Un dragón con tres colas que utiliza en combate.",
        habilidades: "Defensa y ataques con sus colas.",
        aparicion: "Dragones: Carrera al borde."
    },

    {
        id: "bewilderbeast",
        nombre: "Bewilderbeast",
        categoria: "peliculas",
        tipo: "Titán de hielo",
        simbolo: "🐉",
        imagen: "Imagenes/19.19.jpg",
        color: "rgba(150, 220, 255, 0.35)",
        descripcion: "Un dragón gigantesco relacionado con el hielo.",
        habilidades: "Gran tamaño, fuerza y capacidad para lanzar hielo.",
        aparicion: "Cómo entrenar a tu dragón 2."
    },

    {
        id: "terrible-terror",
        nombre: "Terror Terrible",
        categoria: "series",
        tipo: "Terror Terrible",
        simbolo: "🐉",
        imagen: "Imagenes/20.20.jpg",
        color: "rgba(255, 180, 100, 0.35)",
        descripcion: "Un dragón pequeño que suele aparecer en grupos.",
        habilidades: "Vuelo ágil y pequeños ataques de fuego.",
        aparicion: "Cómo entrenar a tu dragón."
    },

{
    id: "muerte-gritona",
    nombre: "Muerte Gritona",
    tipo: "Screaming Death",
    categoria: "series",
    simbolo: "💀",
    imagen: "Imagenes/21.21.jpg",
    color: "#dedbd3",
    descripcion: "Un dragón enorme relacionado con el Susurro de la Muerte, conocido por su fuerza y sus ataques destructivos.",
    habilidades: ["Gran fuerza", "Ataques subterráneos", "Poder destructivo"],
    aparicion: "Dragones de Berk"
},

{
    id: "espectro-nieve",
    nombre: "Espectro de Nieve",
    tipo: "Snow Wraith",
    categoria: "series",
    simbolo: "❄️",
    imagen: "Imagenes/22.22.jpg",
    color: "#c4e6ef",
    descripcion: "Un dragón adaptado a los ambientes helados, capaz de moverse con rapidez entre la nieve.",
    habilidades: ["Adaptación al frío", "Vuelo", "Ataques de hielo"],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "tronatron",
    nombre: "Tronatron",
    tipo: "Thunderdrum",
    categoria: "series",
    simbolo: "🔊",
    imagen: "Imagenes/23.23.jpg",
    color: "#688d9b",
    descripcion: "Un dragón que puede generar potentes ondas sonoras capaces de alejar a sus enemigos.",
    habilidades: ["Ondas sonoras", "Defensa", "Vida acuática"],
    aparicion: "Dragones de Berk"
},
{
    id: "typhoomerang",
    nombre: "Typhoomerang",
    tipo: "Typhoomerang",
    categoria: "series",
    simbolo: "🔥",
    imagen: "Imagenes/24.24.jpg",
    color: "#d87545",
    descripcion: "Un dragón que combina una gran velocidad con ataques de fuego y movimientos amplios.",
    habilidades: ["Fuego", "Vuelo rápido", "Ataques amplios"],
    aparicion: "Dragones de Berk"
},
{
    id: "speed-stinger",
    nombre: "Aguijón Veloz",
    tipo: "Speed Stinger",
    categoria: "series",
    simbolo: "💨",
    imagen: "Imagenes/25.25.jpg",
    color: "#8c9b67",
    descripcion: "Un dragón terrestre que se desplaza a gran velocidad y utiliza su aguijón para defenderse.",
    habilidades: ["Carrera veloz", "Aguijón", "Trabajo en grupo"],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "boneknapper",
    nombre: "Boneknapper",
    tipo: "Boneknapper",
    categoria: "series",
    simbolo: "🦴",
    imagen: "Imagenes/26.26.jpg",
    color: "#b5aa96",
    descripcion: "Un dragón que se cubre con huesos y tiene una apariencia intimidante.",
    habilidades: ["Armadura de huesos", "Defensa", "Fuerza"],
    aparicion: "Dragones de Berk"
},
{
    id: "snaptrapper",
    nombre: "Snaptrapper",
    tipo: "Snaptrapper",
    categoria: "series",
    simbolo: "🌿",
    imagen: "Imagenes/27.27.jpg",
    color: "#71946b",
    descripcion: "Un dragón de cuatro cabezas que utiliza sus características físicas para capturar a sus presas.",
    habilidades: ["Cuatro cabezas", "Captura", "Defensa"],
    aparicion: "Dragones de Berk"
},
{
    id: "night-terror",
    nombre: "Terror Nocturno",
    tipo: "Night Terror",
    categoria: "series",
    simbolo: "🌙",
    imagen: "Imagenes/28.28.jpg",
    color: "#525b73",
    descripcion: "Un dragón pequeño que suele agruparse con otros de su especie para parecer mucho más grande.",
    habilidades: ["Trabajo en grupo", "Vuelo", "Defensa colectiva"],
    aparicion: "Dragones: Carrera al borde"
},

{
    id: "windgnasher",
    nombre: "Windgnasher",
    tipo: "Windgnasher",
    categoria: "series",
    simbolo: "🌬️",
    imagen: "Imagenes/29.29.jpg",
    color: "#8da8b5",
    descripcion: "Un dragón que destaca por sus características especiales y sus capacidades de combate.",
    habilidades: [
        "Ataques especiales",
        "Agilidad",
        "Defensa"
    ],
    aparicion: "Universo de Cómo entrenar a tu dragón"
},
{
    id: "armorwing",
    nombre: "Armorwing",
    tipo: "Armorwing",
    categoria: "series",
    simbolo: "🛡️",
    imagen: "Imagenes/31.31.jpg",
    color: "#777e85",
    descripcion: "Un dragón con una apariencia acorazada, conocido por su protección y resistencia.",
    habilidades: [
        "Armadura resistente",
        "Defensa",
        "Protección corporal"
    ],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "crimson-goregutter",
    nombre: "Crimson Goregutter",
    tipo: "Goregutter",
    categoria: "peliculas",
    simbolo: "🔥",
    imagen: "Imagenes/32.32.jpg",
    color: "#b75d4b",
    descripcion: "Un dragón de gran tamaño con cuernos imponentes y una apariencia poderosa.",
    habilidades: [
        "Gran fuerza",
        "Embestidas",
        "Ataques de fuego"
    ],
    aparicion: "Cómo entrenar a tu dragón 3"
},
{
    id: "shellfire",
    nombre: "Shellfire",
    tipo: "Shellfire",
    categoria: "series",
    simbolo: "🌊",
    imagen: "Imagenes/33.33.jpg",
    color: "#548c9c",
    descripcion: "Un enorme dragón marino adaptado a la vida en el agua, con una apariencia similar a la de una criatura acorazada.",
    habilidades: [
        "Vida acuática",
        "Gran tamaño",
        "Defensa resistente"
    ],
    aparicion: "Dragones: Carrera al borde"
},

{
    id: "temblor-catastrofico",
    nombre: "Temblor Catastrófico",
    tipo: "Catastrophic Quaken",
    categoria: "series",
    simbolo: "🪨",
    imagen: "Imagenes/34.34.jpg",
    color: "#8c857b",
    descripcion: "Un dragón fuerte y robusto que puede enrollarse formando una bola y rodar con gran potencia.",
    habilidades: [
        "Gran fuerza",
        "Rodar a gran velocidad",
        "Resistencia"
    ],
    aparicion: "Dragones de Berk"
},
{
    id: "latigo-afilado",
    nombre: "Látigo Afilado",
    tipo: "Razorwhip",
    categoria: "series",
    simbolo: "⚙️",
    imagen: "Imagenes/35.35.jpg",
    color: "#9ba6b2",
    descripcion: "Un dragón con una cola cubierta de bordes afilados que utiliza para defenderse y enfrentarse a sus enemigos.",
    habilidades: [
        "Cola afilada",
        "Agilidad",
        "Defensa"
    ],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "bufalord",
    nombre: "Bufalord",
    tipo: "Buffalord",
    categoria: "series",
    simbolo: "🐃",
    imagen: "Imagenes/36.36.jpg",
    color: "#9a886e",
    descripcion: "Un dragón de cuerpo robusto que puede inflarse y posee un fuego especialmente potente.",
    habilidades: [
        "Cuerpo resistente",
        "Inflarse para defenderse",
        "Fuego potente"
    ],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "cavern-crasher",
    nombre: "Cavern Crasher",
    tipo: "Cavern Crasher",
    categoria: "series",
    simbolo: "⛰️",
    imagen: "Imagenes/37.37.jpg",
    color: "#777b70",
    descripcion: "Un dragón asociado con las cavernas, ideal para ampliar la colección de especies que habitan lugares rocosos.",
    habilidades: [
        "Adaptación a cavernas",
        "Resistencia",
        "Desplazamiento por terrenos difíciles"
    ],
    aparicion: "Universo de Cómo entrenar a tu dragón"
},
{
    id: "submaripper",
    nombre: "Submaripper",
    tipo: "Submaripper",
    categoria: "series",
    simbolo: "🌊",
    imagen: "Imagenes/38.38.jpg",
    color: "#426f83",
    descripcion: "Un dragón acuático de dimensiones impresionantes, relacionado con las profundidades del océano.",
    habilidades: [
        "Desplazamiento acuático",
        "Gran tamaño",
        "Adaptación al océano"
    ],
    aparicion: "Dragones: Carrera al borde"
},
{
    id: "scuttleclaw",
    nombre: "Scuttleclaw",
    tipo: "Scuttleclaw",
    categoria: "peliculas",
    simbolo: "🦎",
    imagen: "Imagenes/39.39.jpg",
    color: "#a77d53",
    descripcion: "Un dragón ágil que destaca por su capacidad para desplazarse y trepar por diferentes superficies.",
    habilidades: [
        "Agilidad",
        "Trepar",
        "Movimientos rápidos"
    ],
    aparicion: "Cómo entrenar a tu dragón 2"
},
{
    id: "snafflefang",
    nombre: "Snafflefang",
    tipo: "Snafflefang",
    categoria: "series",
    simbolo: "🪨",
    imagen: "Imagenes/40.40.jpg",
    color: "#817b72",
    descripcion: "Un dragón de aspecto rocoso que utiliza su poderosa mandíbula para romper materiales resistentes.",
    habilidades: [
        "Mandíbula potente",
        "Gran resistencia",
        "Fuerza física"
    ],
    aparicion: "Dragones de Berk"

},
{
    id: "deathly-galeslash",
    nombre: "Galeslash",
    tipo: "Deathly Galeslash",
    categoria: "series",
    simbolo: "🌪️",
    imagen: "Imagenes/41.41.jpg",
    color: "#8ca8b0",
    descripcion: "Un dragón de aspecto singular que puedes añadir a tu colección para explorar más especies del universo de Berk.",
    habilidades: [
        "Vuelo",
        "Agilidad",
        "Defensa"
    ],
    aparicion: "Universo de Cómo entrenar a tu dragón"
},

{
    id: "fathomfin",
    nombre: "Fathomfin",
    tipo: "Fathomfin",
    categoria: "series",
    simbolo: "🌊",
    imagen: "Imagenes/42.42.jpg",
    color: "#4b8799",
    descripcion: "Un dragón relacionado con el entorno acuático, ideal para ampliar la sección de criaturas marinas.",
    habilidades: [
        "Desplazamiento acuático",
        "Agilidad",
        "Adaptación al agua"
    ],
    aparicion: "Universo de Cómo entrenar a tu dragón"
},

];

// 4. ELEMENTOS DEL CATÁLOGO

const catalogo = document.getElementById("catalogo-destacado");
const buscador = document.getElementById("buscar-dragon");
const botonesFiltro = document.querySelectorAll(".filtro-dragon");
const contadorDragones = document.getElementById("contador-dragones");
const mensajeSinResultados = document.getElementById("sin-resultados");
const catalogoFavoritos = document.getElementById("catalogo-favoritos");

let filtroActual = "todos";

// 5. CARGAR FAVORITOS GUARDADOS

function obtenerFavoritos() {
    try {
        const guardados = JSON.parse(
            localStorage.getItem("berk-favoritos") || "[]"
        );

        if (!Array.isArray(guardados)) {
            return [];
        }

        return guardados.filter((id) =>
            dragones.some((dragon) => dragon.id === id)
        );
    } catch (error) {
        console.error("No se pudieron cargar los favoritos:", error);
        return [];
    }
}

let favoritos = obtenerFavoritos();

// 6. GUARDAR FAVORITOS

function guardarFavoritos() {
    try {
        localStorage.setItem(
            "berk-favoritos",
            JSON.stringify(favoritos)
        );
    } catch (error) {
        console.error("No se pudieron guardar los favoritos:", error);
        alert("No fue posible guardar tus favoritos en este navegador.");
    }
}

// =============================================
// 7. CREAR LAS TARJETAS DE LOS DRAGONES
// =============================================

function crearTarjetaDragon(dragon) {
    const esFavorito = favoritos.includes(dragon.id);

    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta-dragon";
    tarjeta.dataset.id = dragon.id;

    tarjeta.innerHTML = `
        <div class="imagen-dragon" style="background: ${dragon.color}">
            <img
                src="${dragon.imagen}"
                alt="${dragon.nombre}"
                loading="lazy"
            >
            <span class="simbolo-dragon">${dragon.simbolo}</span>
        </div>

        <div class="contenido-dragon">
            <span class="tipo-dragon">${dragon.tipo}</span>
            <h3>${dragon.nombre}</h3>
            <p>${dragon.descripcion}</p>

            <div class="acciones-dragon">
                <button
                    type="button"
                    class="ver-detalles"
                    data-dragon="${dragon.id}"
                >
                    Ver detalles
                </button>

                <button
                    type="button"
                    class="boton-favorito ${esFavorito ? "es-favorito" : ""}"
                    data-favorito="${dragon.id}"
                    aria-label="${esFavorito ? "Quitar de favoritos" : "Añadir a favoritos"}"
                    aria-pressed="${esFavorito}"
                >
                    ${esFavorito ? "♥" : "♡"}
                </button>
            </div>
        </div>
    `;

    const imagen = tarjeta.querySelector("img");
    const simbolo = tarjeta.querySelector(".simbolo-dragon");

    imagen.addEventListener("load", () => {
        simbolo.style.display = "none";
    });

    imagen.addEventListener("error", () => {
        imagen.style.display = "none";
        simbolo.style.display = "flex";
    });

    return tarjeta;
}

// =============================================
// 8. MOSTRAR EL CATÁLOGO
// =============================================

function mostrarDragones(lista, contenedor) {
    if (!contenedor) {
        return;
    }

    contenedor.innerHTML = "";

    lista.forEach((dragon) => {
        contenedor.appendChild(crearTarjetaDragon(dragon));
    });
}

// =============================================
// 9. BUSCAR Y FILTRAR DRAGONES
// =============================================

function filtrarDragones() {
    const texto = buscador
        ? buscador.value.trim().toLowerCase()
        : "";

    const resultados = dragones.filter((dragon) => {
        const coincideTexto =
            dragon.nombre.toLowerCase().includes(texto) ||
            dragon.tipo.toLowerCase().includes(texto) ||
            dragon.descripcion.toLowerCase().includes(texto);

        const coincideCategoria =
            filtroActual === "todos" ||
            dragon.categoria === filtroActual ||
            (filtroActual === "legendarios" &&
                ["muerte-roja", "susurro"].includes(dragon.id));

        return coincideTexto && coincideCategoria;
    });

    mostrarDragones(resultados, catalogo);

    if (contadorDragones) {
        contadorDragones.textContent =
            `${resultados.length} dragón${resultados.length === 1 ? "" : "es"}`;
    }

    if (mensajeSinResultados) {
        mensajeSinResultados.hidden = resultados.length > 0;
    }
}

if (buscador) {
    buscador.addEventListener("input", filtrarDragones);
}

botonesFiltro.forEach((boton) => {
    boton.addEventListener("click", () => {
        botonesFiltro.forEach((otroBoton) => {
            otroBoton.classList.remove("activo");
            otroBoton.setAttribute("aria-pressed", "false");
        });

        boton.classList.add("activo");
        boton.setAttribute("aria-pressed", "true");

        filtroActual = boton.dataset.filtro || "todos";
        filtrarDragones();
    });
});

// =============================================
// 10. AÑADIR O QUITAR FAVORITOS
// =============================================

function cambiarFavorito(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter((favorito) => favorito !== id);
    } else {
        favoritos.push(id);
    }

    guardarFavoritos();
    actualizarFavoritos();
    filtrarDragones();
}

function actualizarFavoritos() {
    const listaFavoritos = dragones.filter((dragon) =>
        favoritos.includes(dragon.id)
    );

    mostrarDragones(listaFavoritos, catalogoFavoritos);

    const contadorFavoritos = document.getElementById("contador-favoritos");

    if (contadorFavoritos) {
        contadorFavoritos.textContent = listaFavoritos.length;
    }

    const mensajeFavoritos = document.getElementById("sin-favoritos");

    if (mensajeFavoritos) {
        mensajeFavoritos.hidden = listaFavoritos.length > 0;
    }
}

// =============================================
// 11. VENTANA CON LOS DETALLES DEL DRAGÓN
// =============================================

const modal = document.getElementById("modal-dragon");
const modalImagen = document.getElementById("modal-imagen");
const modalSimbolo = document.getElementById("modal-simbolo");

// IMPORTANTE: el HTML utiliza "modal-nombre".
const modalTitulo = document.getElementById("modal-nombre");

const modalTipo = document.getElementById("modal-tipo");
const modalDescripcion = document.getElementById("modal-descripcion");
const modalHabilidades = document.getElementById("modal-habilidades");
const modalAparicion = document.getElementById("modal-aparicion");
const botonCerrarModal = document.getElementById("cerrar-modal");
const botonFavoritoModal = document.getElementById("modal-favorito");

let dragonActual = null;

function abrirDetalles(id) {
    const dragon = dragones.find((elemento) => elemento.id === id);

    if (!dragon || !modal) {
        return;
    }

    dragonActual = dragon;

    if (modalTitulo) {
        modalTitulo.textContent = dragon.nombre;
    }

    if (modalTipo) {
        modalTipo.textContent = dragon.tipo;
    }

    if (modalDescripcion) {
        modalDescripcion.textContent = dragon.descripcion;
    }

    if (modalHabilidades) {
        modalHabilidades.textContent = dragon.habilidades;
    }

    if (modalAparicion) {
        modalAparicion.textContent = dragon.aparicion;
    }

    if (modalImagen) {
        modalImagen.hidden = false;
        modalImagen.style.display = "block";
        modalImagen.style.visibility = "visible";
        modalImagen.alt = dragon.nombre;
        modalImagen.src = dragon.imagen;

        modalImagen.onload = () => {
            modalImagen.hidden = false;
            modalImagen.style.display = "block";

            if (modalSimbolo) {
                modalSimbolo.style.display = "none";
            }
        };

        modalImagen.onerror = () => {
            modalImagen.hidden = true;
            modalImagen.style.display = "none";

            if (modalSimbolo) {
                modalSimbolo.textContent = dragon.simbolo;
                modalSimbolo.style.display = "flex";
            }
        };
    }

    if (modalSimbolo) {
        modalSimbolo.textContent = dragon.simbolo;
        modalSimbolo.style.display = "flex";
    }

    actualizarBotonFavoritoModal();

    modal.classList.add("abierto");
    modal.removeAttribute("hidden");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function cerrarModal() {
    if (!modal) {
        return;
    }

    modal.classList.remove("abierto");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

if (botonCerrarModal) {
    botonCerrarModal.addEventListener("click", cerrarModal);
}

if (modal) {
    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            cerrarModal();
        }
    });
}

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarModal();
    }
});

// =============================================
// 12. BOTÓN DE FAVORITOS DENTRO DEL MODAL
// =============================================

function actualizarBotonFavoritoModal() {
    if (!botonFavoritoModal || !dragonActual) {
        return;
    }

    const esFavorito = favoritos.includes(dragonActual.id);

    botonFavoritoModal.textContent = esFavorito
        ? "♥ Quitar de favoritos"
        : "♡ Añadir a favoritos";

    botonFavoritoModal.setAttribute(
        "aria-pressed",
        String(esFavorito)
    );
}

if (botonFavoritoModal) {
    botonFavoritoModal.addEventListener("click", () => {
        if (!dragonActual) {
            return;
        }

        cambiarFavorito(dragonActual.id);
        actualizarBotonFavoritoModal();
    });
}

// =============================================
// 13. DETECTAR CLICS EN LAS TARJETAS
// =============================================

document.addEventListener("click", (evento) => {
    // Abrir los detalles del dragón
    const botonDetalles = evento.target.closest(".ver-detalles");

    if (botonDetalles) {
        const id = botonDetalles.dataset.dragon;

        if (id) {
            abrirDetalles(id);
        }

        return;
    }

    // Añadir o quitar un dragón de favoritos
    const botonFavorito = evento.target.closest("[data-favorito]");

    if (botonFavorito) {
        const id = botonFavorito.dataset.favorito;

        if (id) {
            cambiarFavorito(id);
        }
    }
});

// =============================================
// 14. BOTÓN PARA VOLVER ARRIBA
// =============================================

const botonArriba = document.getElementById("volver-arriba");

if (botonArriba) {
    botonArriba.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        botonArriba.hidden = window.scrollY < 300;
    });
}

// =============================================
// 15. AÑO AUTOMÁTICO DEL PIE DE PÁGINA
// =============================================

const elementoAnio = document.getElementById("anio-actual");

if (elementoAnio) {
    elementoAnio.textContent = new Date().getFullYear();
}

// =============================================
// 16. INICIALIZAR BERK
// =============================================

function iniciarBerk() {
    filtrarDragones();
    actualizarFavoritos();

    console.log("BERK se ha iniciado correctamente.");
    console.log("Dragones disponibles:", dragones.length);
    console.log("Favoritos guardados:", favoritos.length);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciarBerk);
} else {
    iniciarBerk();
}

/* ========================================
   EXPLORAR BERK - INTERACTIVIDAD
======================================== */

(() => {
    const modal = document.getElementById("modal-lugar");

    if (!modal || modal.dataset.inicializado === "true") {
        return;
    }

    modal.dataset.inicializado = "true";

    const titulo = document.getElementById("modal-lugar-titulo");
    const descripcion = document.getElementById("modal-lugar-descripcion");
    const icono = document.getElementById("modal-lugar-icono");

    const botonCerrar = document.getElementById("cerrar-modal-lugar");
    const botonVolver = document.getElementById("btn-cerrar-lugar");

    const lugares = {
        berk: {
            nombre: "Isla de Berk",
            icono: "🏡",
            descripcion:
                "Berk es el hogar de Hipo y de los vikingos. " +
                "Es una isla donde la relación entre humanos y dragones " +
                "se transforma y se convierte en una parte fundamental de su vida."
        },

        arena: {
            nombre: "Arena de Entrenamiento",
            icono: "⚔️",
            descripcion:
                "En la arena, los vikingos aprenden a comprender el " +
                "comportamiento de los dragones. Es un lugar ideal para " +
                "conocer los desafíos de convertirse en un jinete."
        },

        nido: {
            nombre: "Nido de los Dragones",
            icono: "🐉",
            descripcion:
                "Este territorio misterioso está relacionado con la vida " +
                "de numerosos dragones. Explora sus secretos y descubre " +
                "por qué estos lugares son importantes para su mundo."
        },

        oculto: {
            nombre: "Mundo Oculto",
            icono: "🌌",
            descripcion:
                "El Mundo Oculto es un lugar secreto lleno de dragones, " +
                "formaciones rocosas y paisajes extraordinarios. " +
                "Es uno de los territorios más especiales de la franquicia."
        },

        defensores: {
            nombre: "Isla de los Defensores del Ala",
            icono: "🪽",
            descripcion:
                "Esta isla está vinculada con los Defensores del Ala, " +
                "un grupo que protege a los dragones. Es un lugar " +
                "interesante para descubrir más sobre sus habitantes."
        },

        borde: {
            nombre: "Borde del Dragón",
            icono: "🏔️",
            descripcion:
                "El Borde del Dragón funciona como una base de operaciones " +
                "para los jinetes. Desde allí exploran nuevas islas, " +
                "encuentran especies y viven diferentes aventuras."
        }
    };

    let ultimoElemento = null;

    function abrirLugar(clave, elemento) {
        const lugar = lugares[clave];

        if (!lugar) {
            return;
        }

        ultimoElemento = elemento;

        titulo.textContent = lugar.nombre;
        icono.textContent = lugar.icono;
        descripcion.textContent = lugar.descripcion;

        modal.classList.add("activo");
        modal.setAttribute("aria-hidden", "false");

        document.body.style.overflow = "hidden";
        botonCerrar.focus();
    }

    function cerrarLugar() {
        modal.classList.remove("activo");
        modal.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (ultimoElemento) {
            ultimoElemento.focus();
        }
    }

    document.querySelectorAll(".btn-explorar[data-lugar]").forEach((boton) => {
        boton.addEventListener("click", () => {
            abrirLugar(boton.dataset.lugar, boton);
        });
    });

    botonCerrar.addEventListener("click", cerrarLugar);
    botonVolver.addEventListener("click", cerrarLugar);

    modal.addEventListener("click", (evento) => {
        if (evento.target === modal) {
            cerrarLugar();
        }
    });

    document.addEventListener("keydown", (evento) => {
        if (evento.key === "Escape" && modal.classList.contains("activo")) {
            cerrarLugar();
        }
    });
})();

// =============================================
// 17. ENTRENAMIENTO INTERACTIVO DE BERK
// =============================================

(() => {
    const selector = document.getElementById("seleccionar-dragon");
    const panelDragon = document.getElementById("entrenamiento-dragon");
    const botonComenzar = document.getElementById("comenzar-entrenamiento");
    const contenidoPregunta = document.getElementById("contenido-pregunta");
    const resultado = document.getElementById("resultado-entrenamiento");
    const botonSiguiente = document.getElementById("siguiente-pregunta");
    const botonReiniciar = document.getElementById("reiniciar-entrenamiento");
    const numeroPregunta = document.getElementById("numero-pregunta");
    const puntosTexto = document.getElementById("puntos-entrenamiento");
    const barraProgreso = document.getElementById("barra-progreso");

    // Si la sección no existe, no hacemos nada.
    if (
        !selector ||
        !panelDragon ||
        !botonComenzar ||
        !contenidoPregunta ||
        !resultado ||
        !botonSiguiente ||
        !botonReiniciar
    ) {
        return;
    }

    let dragonSeleccionado = null;
    let preguntas = [];
    let indicePregunta = 0;
    let puntos = 0;
    let respondida = false;

    // Convertir las habilidades en texto, aunque estén guardadas
    // como una frase o como una lista.
    function obtenerHabilidades(dragon) {
        if (Array.isArray(dragon.habilidades)) {
            return dragon.habilidades.join(", ");
        }

        return dragon.habilidades || "Información no disponible";
    }

    // Cargar los dragones que ya existen en el catálogo.
    dragones.forEach((dragon) => {
        const opcion = document.createElement("option");

        opcion.value = dragon.id;
        opcion.textContent = dragon.nombre;

        selector.appendChild(opcion);
    });

    // Elegir varias respuestas diferentes.
    function mezclar(lista) {
        const copia = [...lista];

        for (let i = copia.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [copia[i], copia[j]] = [copia[j], copia[i]];
        }

        return copia;
    }

    // Preparar opciones de respuesta.
    function crearOpciones(respuestaCorrecta, campo) {
        const distractores = dragones
            .filter((dragon) => dragon.id !== dragonSeleccionado.id)
            .map((dragon) => {
                if (campo === "tipo") {
                    return dragon.tipo;
                }

                if (campo === "aparicion") {
                    return dragon.aparicion;
                }

                return dragon.nombre;
            })
            .filter((respuesta) => respuesta !== respuestaCorrecta);

        return mezclar([
            respuestaCorrecta,
            ...mezclar([...new Set(distractores)]).slice(0, 3)
        ]);
    }

    // Crear las cinco preguntas para el dragón elegido.
    function prepararPreguntas() {
        const dragon = dragonSeleccionado;

        preguntas = [
            {
                texto: `¿Cómo se llama el dragón que estás entrenando?`,
                correcta: dragon.nombre,
                opciones: crearOpciones(dragon.nombre, "nombre")
            },
            {
                texto: `¿Qué tipo de dragón es ${dragon.nombre}?`,
                correcta: dragon.tipo,
                opciones: crearOpciones(dragon.tipo, "tipo")
            },
            {
                texto: `¿Cuál de estas opciones describe sus habilidades?`,
                correcta: obtenerHabilidades(dragon),
                opciones: mezclar([
                    obtenerHabilidades(dragon),
                    ...dragones
                        .filter((otro) => otro.id !== dragon.id)
                        .map((otro) => obtenerHabilidades(otro))
                        .filter((texto) => texto !== obtenerHabilidades(dragon))
                ]).slice(0, 4)
            },
            {
                texto: `¿En qué película o serie aparece ${dragon.nombre}, según nuestro catálogo?`,
                correcta: dragon.aparicion,
                opciones: crearOpciones(dragon.aparicion, "aparicion")
            },
            {
                texto: `¿A qué categoría pertenece ${dragon.nombre}?`,
                correcta: dragon.categoria === "peliculas"
                    ? "Películas"
                    : "Series",
                opciones: mezclar([
                    dragon.categoria === "peliculas" ? "Películas" : "Series",
                    dragon.categoria === "peliculas" ? "Series" : "Películas"
                ])
            }
        ];

        preguntas = mezclar(preguntas);
    }

    // Mostrar los datos del dragón seleccionado.
    function mostrarDragon() {
        const id = selector.value;

        dragonSeleccionado = dragones.find((dragon) => dragon.id === id);

        if (!dragonSeleccionado) {
            panelDragon.innerHTML = `
                <p>
                    Selecciona un dragón para conocer sus características
                    y comenzar tu entrenamiento.
                </p>
            `;

            botonComenzar.disabled = true;
            return;
        }

        const dragon = dragonSeleccionado;

        panelDragon.replaceChildren();

        const imagen = document.createElement("img");
        imagen.src = dragon.imagen;
        imagen.alt = dragon.nombre;
        imagen.className = "entrenamiento-imagen";

        imagen.addEventListener("error", () => {
            imagen.hidden = true;
        });

        const nombre = document.createElement("h3");
        nombre.textContent = `${dragon.simbolo} ${dragon.nombre}`;

        const tipo = document.createElement("p");
        tipo.textContent = `Tipo: ${dragon.tipo}`;

        const descripcion = document.createElement("p");
        descripcion.textContent = dragon.descripcion;

        const habilidades = document.createElement("p");
        habilidades.textContent =
            `Habilidades: ${obtenerHabilidades(dragon)}`;

        panelDragon.append(imagen, nombre, tipo, descripcion, habilidades);

        botonComenzar.disabled = false;

        contenidoPregunta.innerHTML = `
            <h3>¡Tu aventura está por comenzar!</h3>
            <p>
                Has elegido a ${dragon.nombre}.
                Prepárate para responder cinco preguntas.
            </p>
        `;

        resultado.textContent = "";
        botonSiguiente.hidden = true;
        botonReiniciar.hidden = true;
    }

    // Actualizar la puntuación y el progreso.
    function actualizarEstadisticas() {
        numeroPregunta.textContent =
            `${Math.min(indicePregunta + 1, 5)}/5`;

        puntosTexto.textContent = puntos;

        if (barraProgreso) {
            const porcentaje = (indicePregunta / 5) * 100;
            barraProgreso.style.width = `${porcentaje}%`;
        }
    }

    // Mostrar una pregunta y sus posibles respuestas.
    function mostrarPregunta() {
        if (indicePregunta >= preguntas.length) {
            terminarEntrenamiento();
            return;
        }

        respondida = false;

        const pregunta = preguntas[indicePregunta];

        contenidoPregunta.replaceChildren();

        const titulo = document.createElement("h3");
        titulo.textContent = pregunta.texto;

        contenidoPregunta.appendChild(titulo);

        const opciones = document.createElement("div");
        opciones.className = "opciones-entrenamiento";

        pregunta.opciones.forEach((opcion) => {
            const boton = document.createElement("button");

            boton.type = "button";
            boton.className = "opcion-entrenamiento";
            boton.textContent = opcion;

            boton.addEventListener("click", () => {
                responderPregunta(boton, opcion, pregunta);
            });

            opciones.appendChild(boton);
        });

        contenidoPregunta.appendChild(opciones);

        resultado.textContent = "";
        botonSiguiente.hidden = true;

        actualizarEstadisticas();
    }

    // Comprobar una respuesta.
    function responderPregunta(botonElegido, respuesta, pregunta) {
        if (respondida) {
            return;
        }

        respondida = true;

        const botones = contenidoPregunta.querySelectorAll(
            ".opcion-entrenamiento"
        );

        botones.forEach((boton) => {
            boton.disabled = true;

            if (boton.textContent === pregunta.correcta) {
                boton.classList.add("respuesta-correcta");
            }
        });

        if (respuesta === pregunta.correcta) {
            puntos += 10;

            resultado.textContent =
                "¡Excelente! Respuesta correcta. Ganaste 10 puntos.";

            resultado.className =
                "resultado-entrenamiento correcto";
        } else {
            botonElegido.classList.add("respuesta-incorrecta");

            resultado.textContent =
                `Esta vez no. La respuesta correcta es: ${pregunta.correcta}`;

            resultado.className =
                "resultado-entrenamiento incorrecto";
        }

        puntosTexto.textContent = puntos;

        botonSiguiente.textContent =
            indicePregunta === preguntas.length - 1
                ? "Ver resultado"
                : "Siguiente pregunta";

        botonSiguiente.hidden = false;
    }

    // Terminar la prueba y mostrar el resultado.
    function terminarEntrenamiento() {
        numeroPregunta.textContent = "5/5";
        puntosTexto.textContent = puntos;

        if (barraProgreso) {
            barraProgreso.style.width = "100%";
        }

        contenidoPregunta.innerHTML = `
            <h3>🏆 ¡Entrenamiento completado!</h3>
            <p>
                Has terminado la prueba con ${dragonSeleccionado.nombre}.
            </p>
            <p>
                Tu puntuación final es de ${puntos} sobre 50 puntos.
            </p>
        `;

        resultado.textContent =
            puntos >= 40
                ? "¡Excelente trabajo, jinete! Conoces muy bien a tu dragón."
                : puntos >= 20
                    ? "¡Buen trabajo! Sigue aprendiendo sobre los dragones."
                    : "¡No te rindas! Explora el catálogo y vuelve a intentarlo.";

        resultado.className = "resultado-entrenamiento";

        botonSiguiente.hidden = true;
        botonReiniciar.hidden = false;

        if (barraProgreso) {
            barraProgreso.style.width = "100%";
        }
    }

    // Seleccionar un dragón.
    selector.addEventListener("change", mostrarDragon);

    // Comenzar una prueba nueva.
    botonComenzar.addEventListener("click", () => {
        if (!dragonSeleccionado) {
            return;
        }

        puntos = 0;
        indicePregunta = 0;

        prepararPreguntas();

        botonComenzar.disabled = true;
        selector.disabled = true;
        botonReiniciar.hidden = true;

        mostrarPregunta();
    });

    // Avanzar a la siguiente pregunta.
    botonSiguiente.addEventListener("click", () => {
        indicePregunta++;

        if (indicePregunta >= preguntas.length) {
            terminarEntrenamiento();
        } else {
            mostrarPregunta();
        }
    });

    // Reiniciar el entrenamiento.
    botonReiniciar.addEventListener("click", () => {
        puntos = 0;
        indicePregunta = 0;
        preguntas = [];

        selector.disabled = false;
        botonComenzar.disabled = !dragonSeleccionado;

        if (dragonSeleccionado) {
            prepararPreguntas();

            botonComenzar.disabled = false;

            contenidoPregunta.innerHTML = `
                <h3>¿Listo para otro desafío?</h3>
                <p>
                    Entrena nuevamente con ${dragonSeleccionado.nombre}.
                </p>
            `;
        }

        numeroPregunta.textContent = "0/5";
        puntosTexto.textContent = "0";

        if (barraProgreso) {
            barraProgreso.style.width = "0%";
        }

        resultado.textContent = "";
        botonSiguiente.hidden = true;
        botonReiniciar.hidden = true;
    });

})();

// =============================================
// DRAGÓN DEL DÍA - BERK
// =============================================

(() => {
    const imagen = document.getElementById("imagen-dragon-dia");
    const nombre = document.getElementById("nombre-dragon-dia");
    const categoria = document.getElementById("categoria-dragon-dia");
    const descripcion = document.getElementById("descripcion-dragon-dia");
    const tipo = document.getElementById("tipo-dragon-dia");
    const habilidades = document.getElementById("habilidades-dragon-dia");
    const curiosidad = document.getElementById("curiosidad-dragon-dia");
    const botonFavorito = document.getElementById("favorito-dragon-dia");
    const botonOtro = document.getElementById("otro-dragon-dia");

    if (
        !imagen ||
        !nombre ||
        !categoria ||
        !descripcion ||
        !tipo ||
        !habilidades ||
        !curiosidad ||
        !botonFavorito ||
        !botonOtro ||
        typeof dragones === "undefined" ||
        !dragones.length
    ) {
        return;
    }

    const CLAVE_DIA = "berk_dragon_del_dia";
    const CLAVE_FECHA = "berk_fecha_dragon_del_dia";

    let dragonActual = null;
    let dragonDiario = null;

    function obtenerFechaLocal() {
        const fecha = new Date();

        const anio = fecha.getFullYear();
        const mes = String(fecha.getMonth() + 1).padStart(2, "0");
        const dia = String(fecha.getDate()).padStart(2, "0");

        return `${anio}-${mes}-${dia}`;
    }

    function elegirDragonAleatorio(excluirId = null) {
        let disponibles = dragones.filter(
            dragon => dragon.id !== excluirId
        );

        if (!disponibles.length) {
            disponibles = dragones;
        }

        return disponibles[
            Math.floor(Math.random() * disponibles.length)
        ];
    }

    function obtenerHabilidades(dragon) {
        if (Array.isArray(dragon.habilidades)) {
            return dragon.habilidades.join(", ");
        }

        return dragon.habilidades || "Información no disponible";
    }

    function obtenerCuriosidad(dragon) {
        const curiosidades = [
            `${dragon.nombre} forma parte del fascinante universo de Berk.`,
            `Cada dragón tiene características que lo hacen especial.`,
            `¡Explora el catálogo para descubrir más sobre ${dragon.nombre}!`,
            `Conocer sus habilidades te ayudará a aprender más sobre los dragones.`
        ];

        // Selección estable para cada dragón.
        let suma = 0;

        for (const caracter of dragon.nombre) {
            suma += caracter.charCodeAt(0);
        }

        return curiosidades[suma % curiosidades.length];
    }

    function guardarDragonDiario(dragon) {
        try {
            localStorage.setItem(CLAVE_DIA, String(dragon.id));
            localStorage.setItem(CLAVE_FECHA, obtenerFechaLocal());
        } catch (error) {
            console.warn("No se pudo guardar el dragón diario.", error);
        }
    }

    function cargarDragonDiario() {
        try {
            const fechaGuardada = localStorage.getItem(CLAVE_FECHA);
            const idGuardado = localStorage.getItem(CLAVE_DIA);

            if (fechaGuardada === obtenerFechaLocal()) {
                const encontrado = dragones.find(
                    dragon => String(dragon.id) === idGuardado
                );

                if (encontrado) {
                    return encontrado;
                }
            }
        } catch (error) {
            console.warn("No se pudo leer el dragón diario.", error);
        }

        const nuevoDragon = elegirDragonAleatorio();

        guardarDragonDiario(nuevoDragon);

        return nuevoDragon;
    }

    function mostrarDragon(dragon) {
        if (!dragon) {
            return;
        }

        dragonActual = dragon;

        imagen.hidden = false;
        imagen.src = dragon.imagen;
        imagen.alt = dragon.nombre;

        imagen.onerror = () => {
            imagen.hidden = true;
        };

        nombre.textContent = `${dragon.simbolo || "🐉"} ${dragon.nombre}`;

        categoria.textContent =
            dragon.categoria === "peliculas"
                ? "DRAGÓN DE LAS PELÍCULAS"
                : "DRAGÓN DE LAS SERIES";

        descripcion.textContent =
            dragon.descripcion || "Descubre las características de este dragón.";

        tipo.textContent = dragon.tipo || "No especificado";

        habilidades.textContent = obtenerHabilidades(dragon);

        curiosidad.textContent = `💡 Dato curioso: ${obtenerCuriosidad(dragon)}`;

        actualizarBotonFavorito();
    }

    function obtenerFavoritos() {
        // Adaptamos la lectura a la lista existente si está disponible.
        if (typeof favoritos !== "undefined" && Array.isArray(favoritos)) {
            return favoritos;
        }

        try {
            const guardados = JSON.parse(
                localStorage.getItem("berk_favoritos") || "[]"
            );

            return Array.isArray(guardados) ? guardados : [];
        } catch {
            return [];
        }
    }

    function actualizarBotonFavorito() {
        const lista = obtenerFavoritos();

        const guardado = lista.some(item => {
            const id = typeof item === "object" ? item.id : item;

            return String(id) === String(dragonActual.id);
        });

        botonFavorito.textContent = guardado
            ? "❤️ Dragón favorito"
            : "🤍 Agregar a favoritos";

        botonFavorito.setAttribute(
            "aria-pressed",
            String(guardado)
        );
    }

    function agregarFavorito() {
        if (!dragonActual) {
            return;
        }

        // Usa la función existente cuando está disponible.
        if (typeof alternarFavorito === "function") {
            alternarFavorito(dragonActual.id);
            actualizarBotonFavorito();
            return;
        }

        if (typeof toggleFavorito === "function") {
            toggleFavorito(dragonActual.id);
            actualizarBotonFavorito();
            return;
        }

        alert(
            "El botón de favoritos necesita conectarse con la función " +
            "de favoritos que ya utiliza tu proyecto."
        );
    }

    dragonDiario = cargarDragonDiario();

    mostrarDragon(dragonDiario);

    botonOtro.addEventListener("click", () => {
        const nuevoDragon = elegirDragonAleatorio(dragonActual?.id);

        mostrarDragon(nuevoDragon);
    });

    botonFavorito.addEventListener("click", agregarFavorito);

})();