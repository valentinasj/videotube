// AGREGAR LOS VIDEOS DE LOS MISFITS Y EN LA CATEGORIA DEBE IR misfits
// AGREGAR LOS VIDEOS DE LOS KREATOR Y EN LA CATEGORIA DEBE IR kreator
// ARREGLAR LAS RUTAS DE LAS IMAGENES


const videos = [
    {
      id: 1,
      name: "Con Ánimo de Ofender : Cap #126 - Que Lo Prestenson",
      video: "https://www.youtube.com/embed/l3TdNIpqW24",
      ytId: "l3TdNIpqW24",
      autorName: "Con Ánimo de ofender",
      views: "2.4M views ",
      upload:" • 1 years ago",
      image: "./img/animo1.png",
      perfilImg: "./img/animoperfil.png",
      categoria: "animo"
    }, 
    {
        id: 2,
        name: "Con Ánimo de Ofender : Cap #125 - A Detectar Minas",
        video: "https://www.youtube.com/embed/0eqi-ZS5jXg",
        ytId: "0eqi-ZS5jXg",
        autorName: "Con Ánimo de ofender",
        views: "1.5M views ",
        upload:" • 1 years ago",
        image: "./img/animo2.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    {
        id: 3,
        name: "Con Ánimo de Ofender : Cap #123 - Los Gorgonitas",
        video: "https://www.youtube.com/embed/gjtBb8o-l-c",
        ytId: "gjtBb8o-l-c",
        autorName: "Con Ánimo de ofender",
        views: "1.4M views ",
        upload:" • 1 years ago",
        image: "./img/animo3.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    {
        id: 4,
        name: "Con Ánimo de Ofender : Cap #122 - Estamos En La Carcel",
        video: "https://www.youtube.com/embed/p98QMjFmVGE",
        ytId: "p98QMjFmVGE",
        autorName: "Con Ánimo de ofender",
        views: "1.7M views ",
        upload:" • 1 years ago",
        image: "./img/animo4.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    {
        id: 5,
        name: "Con Ánimo de Ofender : Cap #120 - Sabe leer",
        video: "https://www.youtube.com/embed/BJIKOnmIKaI",
        ytId: "BJIKOnmIKaI",
        autorName: "Con Ánimo de ofender",
        views: "1.7M views ",
        upload:" • 1 years ago",
        image: "./img/animo5.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    {
        id: 6,
        name: "Con Ánimo de Ofender : Cap #119 - Yo Estoy Pagando",
        video: "https://www.youtube.com/embed/hmYN8Km0ztw",
        ytId: "hmYN8Km0ztw",
        autorName: "Con Ánimo de ofender",
        views: "1.9M views ",
        upload:" • 1 years ago",
        image: "./img/animo6.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
        
    },
    {
        id: 7,
        name: "Con Ánimo de Ofender : Cap #118 - jajaja, si",
        video: "https://www.youtube.com/embed/fto6tuQyz3s",
        ytId: "fto6tuQyz3s",
        autorName: "Con Ánimo de ofender",
        views: "1.1M views ",
        upload:" • 1 years ago",
        image: "./img/animo7.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    {
        id: 8,
        name: "Con Ánimo de Ofender : Cap #117 - Sin Trabajo Y Sin Mujer",
        video: "https://www.youtube.com/embed/US_aS8BnEA0",
        ytId: "US_aS8BnEA0",
        autorName: "Con Ánimo de ofender",
        views: "1.4M views ",
        upload:" • 1 years ago",
        image: "./img/animo8.png",
        perfilImg: "./img/animoperfil.png",
        categoria: "animo"
    },
    // FIN DE ANIMO DE OFENDER
    {
        id: 9,
        name: "COMO EN LOS VIEJOS TIEMPOS 🍻",
        video: "https://www.youtube.com/embed/I2zCRKIqsM8",
        ytId: "I2zCRKIqsM8",
        autorName: "JuanSGuarnizo",
        views: "1.4M views ",
        upload:" • 1 years ago",
        image: "./img/juan1.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 10,
        name: "JUGANDO CON BENDICIÓN 🙏",
        video: "https://www.youtube.com/embed/-hV8k2-WUfs",
        ytId: "-hV8k2-WUfs",
        autorName: "JuanSGuarnizo",
        views: "700k views ",
        upload:" • 1 years ago",
        image: "./img/juan2.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 11,
        name: "TIKTOKS LAMENTABLES 🤮",
        video: "https://www.youtube.com/embed/ZIz1hLx3RDM",
        ytId: "ZIz1hLx3RDM",
        autorName: "JuanSGuarnizo",
        views: "9.4M views ",
        upload:" • 1 years ago",
        image: "./img/juan3.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 12,
        name: "El MISTERIOSO caso de MADELEINE MCCANN 😰",
        video: "https://www.youtube.com/embed/f7C86AYAYko",
        ytId: "f7C86AYAYko",
        autorName: "JuanSGuarnizo",
        views: "1.4M views ",
        upload:" • 1 years ago",
        image: "./img/juan4.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 13,
        name: "SI ME RÍO TE DOY $100 DÓLARES 🤑",
        video: "https://www.youtube.com/embed/W1Zi3SqPtmc",
        ytId: "W1Zi3SqPtmc",
        autorName: "JuanSGuarnizo",
        views: "3.1M views ",
        upload:" • 1 years ago",
        image: "./img/juan5.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 14,
        name: "MEMES de STREAMERS 😂",
        video: "https://www.youtube.com/embed/lYjty--9U0E",
        ytId: "lYjty--9U0E",
        autorName: "JuanSGuarnizo",
        views: "1.4M views ",
        upload:" • 1 years ago",
        image: "./img/juan6.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 15,
        name: "COCINANDO otra vez con MI MAMÁ 👨‍🍳",
        video: "https://www.youtube.com/embed/avkco0NRovo",
        ytId: "avkco0NRovo",
        autorName: "JuanSGuarnizo",
        views: "1M views ",
        upload:" • 1 years ago",
        image: "./img/juan7.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    },
    {
        id: 16,
        name: "¿A CUÁL FAMOSO TE PARECES? 🤔",
        video: "https://www.youtube.com/embed/q6I-863lnGE",
        ytId: "q6I-863lnGE",
        autorName: "JuanSGuarnizo",
        views: "1.1M views ",
        upload:" • 1 years ago",
        image: "./img/juan8.png",
        perfilImg: "./img/juanperfil.png",
        categoria: "juan"
    }, 
    // FIN DE JUANSGUARNIZO
    {
        id: 17,
        name: "¿Puedes Ver EL FANTASMA??",
        video: "https://www.youtube.com/embed/vDaJaP0kqoI",
        ytId: "vDaJaP0kqoI",
        autorName: "JuegaGerman",
        views: "900k views ",
        upload:" • 1 years ago",
        image: "./img/german1.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 18,
        name: "MI EX-NOVIA ESTA DENTRO DE MI CASA...",
        video: "https://www.youtube.com/embed/SclYbq9d-18",
        ytId: "SclYbq9d-18",
        autorName: "JuegaGerman",
        views: "1.6M views ",
        upload:" • 1 years ago",
        image: "./img/german2.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 19,
        name: "ESTE ES UN SIMPLE PROGRAMA INFANTIL...",
        video: "https://www.youtube.com/embed/BkZnfponXd8",
        ytId: "BkZnfponXd8",
        autorName: "JuegaGerman",
        views: "1.8M views ",
        upload:" • 1 years ago",
        image: "./img/german3.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 20,
        name: "Cuando La Gente BURRA Va a La TELEVISIÓN !!",
        video: "https://www.youtube.com/embed/MAK1WPo-rdM",
        ytId: "MAK1WPo-rdM",
        autorName: "JuegaGerman",
        views: "34M views ",
        upload:" • 1 years ago",
        image: "./img/german4.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 21,
        name: "1000 MANERAS DE MORIR! - JuegaGerman",
        video: "https://www.youtube.com/embed/WZkiuSUuUt4",
        ytId: "WZkiuSUuUt4",
        autorName: "JuegaGerman",
        views: "13M views ",
        upload:" • 1 years ago",
        image: "./img/german5.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 22,
        name: "EL KARMA SIEMPRE GANA !!",
        video: "https://www.youtube.com/embed/MiimPpJs9aE",
        ytId: "MiimPpJs9aE",
        autorName: "JuegaGerman",
        views: "13M views ",
        upload:" • 1 years ago",
        image: "./img/german6.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 23,
        name: "Si Me Rio ME RETIRO DE YOUTUBE !!",
        video: "https://www.youtube.com/embed/B_8yvVcvKSU",
        ytId: "B_8yvVcvKSU",
        autorName: "JuegaGerman",
        views: "2.3M views ",
        upload:" • 1 years ago",
        image: "./img/german7.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    {
        id: 24,
        name: "El Lado Oscuro De CALAMARDO",
        video: "https://www.youtube.com/embed/wbn-HjfxbEs",
        ytId: "wbn-HjfxbEs",
        autorName: "JuegaGerman",
        views: "2.4M views ",
        upload:" • 1 years ago",
        image: "./img/german8.png",
        perfilImg: "./img/germanperfil.png",
        categoria: "german"
    },
    //FINAL JUEGA GERMAN
    {
        id: 25,
        name: "Educando un CACHORRO DESDE CERO",
        video: "https://www.youtube.com/embed/xluNhJ09YFA",
        ytId: "xluNhJ09YFA",
        autorName: "José Luis MartGon",
        views: "7.7M views ",
        upload:" • 1 years ago",
        image: "./img/jose1.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
    {
        id: 26,
        name: "ADIÓS mordidas, destrozos y MALAS conductas de mi perro - MartGon",
        video: "https://www.youtube.com/embed/TjaAu5tkjIU",
        ytId: "TjaAu5tkjIU",
        autorName: "José Luis MartGon",
        views: "5.7M views ",
        upload:" • 1 years ago",
        image: "./img/jose2.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
    {
        id: 27,
        name: "como entrenar UN PERRO a IR AL BAÑO donde quieras - MartGon",
        video: "https://www.youtube.com/embed/887-K9S6KIM",
        ytId: "887-K9S6KIM",
        autorName: "José Luis MartGon",
        views: "3.7M views ",
        upload:" • 1 years ago",
        image: "./img/jose3.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
    {
        id: 28,
        name: "La PRIMERA ORDEN que DEBES ENSEÑAR a un PERRO - MartGon",
        video: "https://www.youtube.com/embed/z1cz4c36w_o",
        ytId: "z1cz4c36w_o",
        autorName: "José Luis MartGon",
        views: "6M views ",
        upload:" • 1 years ago",
        image: "./img/jose4.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
    {
        id: 29,
        name: "Adiestramiento Canino EN UN SOLO VIDEO",
        video: "https://www.youtube.com/embed/rfNL132a7Go",
        ytId: "rfNL132a7Go",
        autorName: "José Luis MartGon",
        views: "900K views ",
        upload:" • 1 years ago",
        image: "./img/jose5.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
    {
        id: 30,
        name: "Cómo PASEAR a un PERRO - Método MartGon",
        video: "https://www.youtube.com/embed/6SRVnG2QJ10",
        ytId: "6SRVnG2QJ10",
        autorName: "José Luis MartGon",
        views: "200K views ",
        upload:" • 1 years ago",
        image: "./img/jose6.png",
        perfilImg: "./img/joseperfil.png",
        categoria: "jose"
    },
      
];
export { videos };