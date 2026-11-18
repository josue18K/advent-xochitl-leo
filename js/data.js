/* Frases originales inspiradas en recuerdos y cariño. Las escenas son descripciones generales editables. */
const Adviento = {};
Adviento.datos = [
  {
    "dia": 1,
    "fecha": "2026-12-01",
    "titulo": "Un comienzo especial",
    "frase": "Me alegra mucho que nuestros caminos se hayan encontrado.",
    "pelicula": "Nahuala",
    "momento": "Primer encuentro entre Leo y Xóchitl",
    "color": "#FF7A00",
    "icono": "flower",
    "imagen": "./assets/img/escenas/dia-01.jpg",
    "tipo": "frase"
  },
  {
    "dia": 2,
    "fecha": "2026-12-02",
    "titulo": "Una flor para ti",
    "frase": "Hay personas que alegran los días con solo ser ellas mismas. Tú eres una de ellas.",
    "pelicula": "Nahuala",
    "momento": "Xóchitl ayudando a Leo durante la aventura",
    "color": "#E4007C",
    "icono": "flower",
    "imagen": "./assets/img/escenas/dia-02.jpg",
    "tipo": "frase"
  },
  {
    "dia": 3,
    "fecha": "2026-12-03",
    "titulo": "Tu valentía",
    "frase": "Admiro tu manera de seguir adelante, incluso en los días difíciles.",
    "pelicula": "Nahuala",
    "momento": "Leo descubre su valentía durante la aventura",
    "color": "#E25822",
    "icono": "shield",
    "imagen": "./assets/img/escenas/dia-03.jpg",
    "tipo": "frase"
  },
  {
    "dia": 4,
    "fecha": "2026-12-04",
    "titulo": "Una historia compartida",
    "frase": "Entre tantos mundos e historias, qué bonito haber encontrado una que nos gusta a los dos.",
    "pelicula": "Nahuala",
    "momento": "Descubrimiento del mundo espiritual",
    "color": "#3B1E54",
    "icono": "moon",
    "imagen": "./assets/img/escenas/dia-04.jpg",
    "tipo": "frase"
  },
  {
    "dia": 5,
    "fecha": "2026-12-05",
    "titulo": "Esos momentos pequeños",
    "frase": "A veces los momentos más sencillos son los que más bonito se quedan en la memoria.",
    "pelicula": "Nahuala",
    "momento": "Un momento especial entre Xóchitl y Leo",
    "color": "#FFD166",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-05.jpg",
    "tipo": "frase"
  },
  {
    "dia": 6,
    "fecha": "2026-12-06",
    "titulo": "Tu sonrisa",
    "frase": "Tu sonrisa tiene esa forma bonita de hacer más ligero un día.",
    "pelicula": "Momias de Guanajuato",
    "momento": "Reencuentro de Leo y Xóchitl",
    "color": "#E4007C",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-06.jpg",
    "tipo": "frase"
  },
  {
    "dia": 7,
    "fecha": "2026-12-07",
    "titulo": "Gracias por estar",
    "frase": "Gracias por escucharme y por los momentos en que nos hicimos compañía.",
    "pelicula": "Momias de Guanajuato",
    "momento": "Leo defendiendo a Xóchitl",
    "color": "#C1272D",
    "icono": "shield",
    "imagen": "./assets/img/escenas/dia-07.jpg",
    "tipo": "frase"
  },
  {
    "dia": 8,
    "fecha": "2026-12-08",
    "titulo": "Una historia que nos gusta",
    "frase": "Pensar en Xóchitl y Leo también me recuerda las cosas bonitas que compartimos.",
    "pelicula": "Momias de Guanajuato",
    "momento": "Momentos juntos en Guanajuato",
    "color": "#FF7A00",
    "icono": "flower",
    "imagen": "./assets/img/escenas/dia-08.jpg",
    "tipo": "frase"
  },
  {
    "dia": 9,
    "fecha": "2026-12-09",
    "titulo": "Una flor en el camino",
    "frase": "Como una flor de cempasúchil, hay recuerdos que iluminan con sus colores.",
    "pelicula": "Charro Negro",
    "momento": "Xóchitl dejando una flor y tocando una campana",
    "color": "#3B1E54",
    "icono": "moon",
    "imagen": "./assets/img/escenas/dia-09.jpg",
    "tipo": "frase"
  },
  {
    "dia": 10,
    "fecha": "2026-12-10",
    "titulo": "Un cariño especial",
    "frase": "Te tengo un cariño muy especial y quería que lo supieras.",
    "pelicula": "Charro Negro",
    "momento": "Un momento compartido entre los personajes",
    "color": "#E4007C",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-10.jpg",
    "tipo": "frase"
  },
  {
    "dia": 11,
    "fecha": "2026-12-11",
    "titulo": "Lo que admiro de ti",
    "frase": "Admiro tu forma de ser y la luz que llevas a los días de quienes te conocen.",
    "pelicula": "Charro Negro",
    "momento": "Leo enfrentando al Charro Negro",
    "color": "#C1272D",
    "icono": "shield",
    "imagen": "./assets/img/escenas/dia-11.jpg",
    "tipo": "frase"
  },
  {
    "dia": 12,
    "fecha": "2026-12-12",
    "titulo": "Una flor para recordar 🎊",
    "frase": "Te regalo esta flor imaginaria por todas las sonrisas que compartimos.",
    "pelicula": "Charro Negro",
    "momento": "La flor de cempasúchil como guía",
    "color": "#FF7A00",
    "icono": "flower",
    "imagen": "./assets/img/escenas/dia-12.jpg",
    "tipo": "especial"
  },
  {
    "dia": 13,
    "fecha": "2026-12-13",
    "titulo": "Un momento bonito",
    "frase": "Hay escenas que se quedan con nosotros por lo que nos hicieron sentir.",
    "pelicula": "Charro Negro",
    "momento": "Un momento especial de Xóchitl y Leo",
    "color": "#FFD166",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-13.jpg",
    "tipo": "frase"
  },
  {
    "dia": 14,
    "fecha": "2026-12-14",
    "titulo": "Lo que guardo con cariño",
    "frase": "Cada recuerdo bonito tiene un pequeño lugar en mi corazón.",
    "pelicula": "Charro Negro",
    "momento": "Los recuerdos de su aventura",
    "color": "#3B1E54",
    "icono": "moon",
    "imagen": "./assets/img/escenas/dia-14.jpg",
    "tipo": "frase"
  },
  {
    "dia": 15,
    "fecha": "2026-12-15",
    "titulo": "Pequeños detalles",
    "frase": "Me gusta recordar las conversaciones, las risas y los detalles que hicieron especiales nuestros días.",
    "pelicula": "Chaneques",
    "momento": "Leo recordando a Xóchitl",
    "color": "#3B1E54",
    "icono": "star",
    "imagen": "./assets/img/escenas/dia-15.jpg",
    "tipo": "frase"
  },
  {
    "dia": 16,
    "fecha": "2026-12-16",
    "titulo": "Alguien muy especial",
    "frase": "Eres una persona muy especial para mí, y agradezco haberte conocido.",
    "pelicula": "Chaneques",
    "momento": "Leo extrañando a Xóchitl",
    "color": "#E4007C",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-16.jpg",
    "tipo": "frase"
  },
  {
    "dia": 17,
    "fecha": "2026-12-17",
    "titulo": "Creo en ti",
    "frase": "Ojalá nunca olvides todo lo bueno que hay en ti.",
    "pelicula": "Chaneques",
    "momento": "Leo recuperando su valentía",
    "color": "#C1272D",
    "icono": "shield",
    "imagen": "./assets/img/escenas/dia-17.jpg",
    "tipo": "frase"
  },
  {
    "dia": 18,
    "fecha": "2026-12-18",
    "titulo": "Una alegría compartida 🎊",
    "frase": "Hay alegrías que se disfrutan más cuando podemos compartirlas.",
    "pelicula": "Chaneques",
    "momento": "Un momento compartido entre Xóchitl y Leo",
    "color": "#E4007C",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-18.jpg",
    "tipo": "especial"
  },
  {
    "dia": 19,
    "fecha": "2026-12-19",
    "titulo": "En los días difíciles",
    "frase": "Gracias por la confianza y por acompañarme también en los momentos complicados.",
    "pelicula": "Chaneques",
    "momento": "Xóchitl ayudando a Leo contra el Chaneque Gigante",
    "color": "#E25822",
    "icono": "shield",
    "imagen": "./assets/img/escenas/dia-19.jpg",
    "tipo": "frase"
  },
  {
    "dia": 20,
    "fecha": "2026-12-20",
    "titulo": "Un cariño que florece",
    "frase": "El cariño también vive en los pequeños gestos y en los buenos recuerdos.",
    "pelicula": "Chaneques",
    "momento": "Leo recuperando su conexión con el mundo espiritual",
    "color": "#FF7A00",
    "icono": "flower",
    "imagen": "./assets/img/escenas/dia-20.jpg",
    "tipo": "frase"
  },
  {
    "dia": 21,
    "fecha": "2026-12-21",
    "titulo": "Nuestras coincidencias",
    "frase": "Qué bonito coincidir en historias, risas y tantas pequeñas cosas.",
    "pelicula": "Chaneques",
    "momento": "La conexión entre los personajes",
    "color": "#E4007C",
    "icono": "heart",
    "imagen": "./assets/img/escenas/dia-21.jpg",
    "tipo": "frase"
  },
  {
    "dia": 22,
    "fecha": "2026-12-22",
    "titulo": "Un recuerdo más",
    "frase": "Cada recuerdo compartido es un pequeño regalo que guardo con cariño.",
    "pelicula": "Chaneques",
    "momento": "Una aventura que reúne sus caminos",
    "color": "#FFD166",
    "icono": "star",
    "imagen": "./assets/img/escenas/dia-22.jpg",
    "tipo": "frase"
  },
  {
    "dia": 23,
    "fecha": "2026-12-23",
    "titulo": "Un deseo para ti",
    "frase": "Deseo que esta Navidad te regale mucha paz, alegría y motivos para sonreír.",
    "pelicula": "Chaneques",
    "momento": "Recuerdos de sus aventuras",
    "color": "#1F7A4D",
    "icono": "gift",
    "imagen": "./assets/img/escenas/dia-23.jpg",
    "tipo": "frase"
  },
  {
    "dia": 24,
    "fecha": "2026-12-24",
    "titulo": "Un regalo hecho con cariño 🎊🎄",
    "frase": "Feliz Navidad. Preparé este pequeño regalo para recordarte lo especial que eres para mí.",
    "pelicula": "Todas las leyendas",
    "momento": "Las historias que recordamos con cariño",
    "color": "#FFD166",
    "icono": "gift",
    "imagen": "./assets/img/escenas/dia-24.jpg",
    "tipo": "especial"
  }
];
Adviento.versos = [
  [
    "Conocerte trajo conversaciones y momentos que hoy recuerdo con una sonrisa.",
    "Como la primera flor de diciembre, ese comienzo tiene un color especial para mí."
  ],
  [
    "Tu manera de ver las cosas hace que hasta una charla sencilla tenga algo especial.",
    "Si pudiera elegir una flor para este recuerdo, sería una de cempasúchil: cálida y llena de luz."
  ],
  [
    "He visto en ti una fuerza que merece ser reconocida, incluso cuando quizá no la notes.",
    "Hoy quería dedicarte una campanita por cada pequeño paso que has dado."
  ],
  [
    "Me gusta que podamos compartir el gusto por Las Leyendas y recordar a sus personajes.",
    "Entre papel picado y estrellas, esta casilla celebra esa coincidencia tan nuestra."
  ],
  [
    "Una conversación, una broma o una tarde cualquiera pueden volverse recuerdos enormes.",
    "Gracias por todos esos instantes que hicieron más bonitos mis días."
  ],
  [
    "Hay sonrisas que se recuerdan sin necesidad de una ocasión especial.",
    "La tuya es una de esas pequeñas luces que hacen más cálido el invierno."
  ],
  [
    "En los días fáciles y en los complicados, compartir lo que pensábamos significó mucho para mí.",
    "Quiero agradecerte cada conversación y cada gesto de confianza."
  ],
  [
    "Xóchitl, Leo y sus aventuras tienen un lugar en este calendario porque son parte de algo que disfrutamos.",
    "Me gusta pensar que una película puede guardar también el recuerdo de las personas con quienes la compartimos."
  ],
  [
    "Una flor naranja puede recordarnos que lo sencillo también tiene belleza.",
    "Hoy la dejo aquí como símbolo del cariño con el que recuerdo lo que vivimos."
  ],
  [
    "No necesito una fecha especial para apreciar a alguien, pero diciembre me dio una bonita excusa para decírtelo.",
    "Gracias por ser como eres y por las cosas que hemos compartido."
  ],
  [
    "Hay cualidades tuyas que admiro: tu manera de afrontar las cosas y de darles tu propio color.",
    "Que este farolito te recuerde lo valiosa que eres."
  ],
  [
    "Imaginé una flor de papel para guardar aquí una de nuestras sonrisas.",
    "Puedes abrir esta casilla y encontrar un pedacito de esa alegría siempre que quieras."
  ],
  [
    "Algunas escenas de Las Leyendas nos hacen sonreír, sorprendernos o quedarnos pensando.",
    "Me gusta que esta historia forme parte de nuestros recuerdos compartidos."
  ],
  [
    "Guardo con cariño las conversaciones sinceras y los momentos que me hicieron conocerte mejor.",
    "Son como lucecitas: pequeñas por separado, especiales cuando las recuerdo."
  ],
  [
    "Una risa inesperada o una palabra amable pueden cambiar el tono de un día.",
    "Gracias por todos esos detalles que hicieron bien sin hacer ruido."
  ],
  [
    "Me alegra haberte conocido y haber compartido contigo tantas cosas.",
    "Esta casilla es solo una pequeña manera de recordarte que eres importante para mí."
  ],
  [
    "A veces es difícil ver nuestras propias cualidades con claridad.",
    "Por si hoy lo necesitas: tienes mucho que ofrecer y mereces cosas bonitas."
  ],
  [
    "Las historias que nos gustan se disfrutan todavía más cuando podemos comentarlas.",
    "Esta lluvia de flores celebra las risas y las pequeñas alegrías compartidas."
  ],
  [
    "No todo lo que compartimos fue sencillo, y aun así hubo gestos que hicieron la diferencia.",
    "Gracias por la confianza, la paciencia y los momentos de apoyo."
  ],
  [
    "El cariño puede sentirse en una palabra amable o en recordar el detalle favorito de alguien.",
    "Este jardín navideño está hecho de esos pequeños gestos."
  ],
  [
    "Coincidimos en películas, conversaciones y maneras de reír que me gusta recordar.",
    "Cada coincidencia es una estrella más en este cielo de diciembre."
  ],
  [
    "No hace falta que un recuerdo sea extraordinario para que sea valioso.",
    "Los momentos sencillos que compartimos también merecen una flor."
  ],
  [
    "Entre luces y papel picado, deseo que encuentres tiempo para descansar y disfrutar.",
    "Que esta Navidad te rodee de personas y momentos que te hagan bien."
  ],
  [
    "Preparé este calendario pensando en las historias que nos gustan y en lo que hemos compartido.",
    "Espero que cada casilla te saque una sonrisa y te recuerde el cariño con el que hice este detalle."
  ]
];
