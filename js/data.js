// ==========================================================================
// HORIZONTE A MEDIDA VIAJES - BASE DE DATOS Y CONOCIMIENTO JAPÓN
// Enfoque: Minimalista, Cultural (Wabi-Sabi & Omotenashi) y Cute / Kawaii
// ==========================================================================

const AGENCY_DATA = {
  name: "Horizonte a Medida Viajes",
  japaneseName: "ホライズン・オーダーメイド旅",
  kanjiSymbol: "旅", // Tabi: Viaje
  hankoSeal: "済", // Aprobado / Verificado
  tagline: "El arte de viajar a Japón a tu propio ritmo",
  philosophy: "Inspirados en el principio japonés 'Ichigo Ichie' (一期一会): cada instante y cada viaje son únicos en la vida. Diseñamos tu experiencia con la delicadeza y el cuidado de la auténtica hospitalidad 'Omotenashi' (おもてなし).",
  contact: {
    phone: "+34 910 234 567",
    whatsapp: "+34 622 987 654",
    email: "hola@horizontemedida.com",
    hours: "Lunes a viernes 09:00 - 19:00 | Sábados 10:00 - 14:00",
    emergency: "Asistencia telefónica 24 horas durante el viaje para incidencias urgentes",
    office: "Calle Velázquez 46, 2º Izq., 28001 Madrid (Atención con cita previa y videollamada)"
  },
  metrics: [
    { value: "100%", label: "A Tu Medida", desc: "Sin grupos masivos. Tu propio ritmo y estilo." },
    { value: "24/7", label: "Omotenashi", desc: "Asistencia directa en español ante imprevistos." },
    { value: "+1.400", label: "Viajeros Felices", desc: "99,4% satisfacción en rutas por Japón." },
    { value: "30%", label: "Depósito Flexible", desc: "Reserva tranquila y resto 45 días antes." }
  ]
};

const ITINERARY_10_DAYS = [
  {
    day: 1,
    base: "Tokio (東京)",
    emoji: "🌆",
    title: "Bienvenida a Tokio y primer ramen humeante",
    summary: "Aterrizaje en Haneda o Narita. Te entregamos tu conexión ilimitada y billete exprés para llegar a tu hotel sin estrés. Primer paseo suave entre farolillos y neones para aclimatarte al huso horario.",
    activities: [
      "Recepción en aeropuerto, activación de eSIM con datos y entrega de tu tarjeta de transporte",
      "Traslado directo en tren exprés (Narita Express o Tokyo Monorail) hasta tu hotel",
      "Check-in sin prisas y ducha reconfortante",
      "Paseo nocturno relajado por Shinjuku o Ginza y cena de ramen en una taberna tradicional"
    ],
    transport: "Tren exprés directo + Tarjeta IC para el metro de Tokio",
    concept: "Ma (間) — El valor de la pausa: el primer día es para descansar y absorber el cambio.",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    tips: "No planifiques visitas complejas hoy; deja que el encanto de las pequeñas calles te envuelva con calma."
  },
  {
    day: 2,
    base: "Tokio (東京)",
    emoji: "⛩️",
    title: "Asakusa milenario y destellos pop en Akihabara",
    summary: "El despertar ante la gran lámpara de papel de Kaminarimon en el templo Sensō-ji, el aroma a incienso purificador, seguido del contraste futurista de las tiendas retro y el anime de Akihabara.",
    activities: [
      "Paseo matutino por Nakamise-dōri antes de las aglomeraciones y visita al templo Sensō-ji",
      "Probar los tradicionales dulces ningyo-yaki recién hechos frente a la pagoda",
      "Caminata tranquila por el estanque Shinobazu del Parque de Ueno",
      "Inmersión en Akihabara: tiendas retro arcade, figuras de colección y gadgets insólitos"
    ],
    transport: "Metro de Tokio con Tarjeta IC",
    concept: "Wa (和) — La armonía de los contrastes: tradición milenaria y cultura pop conviviendo en paz.",
    image: "https://images.unsplash.com/photo-1536098565842-c4b11ac5d194?auto=format&fit=crop&w=1200&q=80",
    tips: "Prueba el pan de melón artesanal en los callejones traseros del templo de Asakusa."
  },
  {
    day: 3,
    base: "Tokio (東京)",
    emoji: "🎋",
    title: "Bosque sagrado de Meiji, Harajuku y Shibuya Sky",
    summary: "El silencio reverencial bajo los cedros centenarios del Santuario Meiji Jingu, la explosión creativa de Takeshita Street y el hipnótico cruce de Shibuya culminando en un mirador al atardecer.",
    activities: [
      "Escribir un deseo en una tablilla de madera 'Ema' en el Santuario Meiji Jingu",
      "Descubrir cafeterías de diseño y crepes artesanales en las callejuelas de Harajuku",
      "Cruzar el famoso paso de peatones de Shibuya junto a la estatua del fiel perro Hachiko",
      "Subida reservada a Shibuya Sky para ver caer el sol sobre el Monte Fuji en el horizonte"
    ],
    transport: "Línea circular JR Yamanote + Metro",
    concept: "Komorebi (木漏れ日) — La luz filtrándose entre las ramas del bosque del santuario.",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    tips: "Reservamos tu franja horaria en Shibuya Sky para que coincida exactamente con la puesta de sol dorada."
  },
  {
    day: 4,
    base: "Tokio / Alrededores",
    emoji: "🌊",
    title: "Gran Buda de Kamakura o los bosques dorados de Nikko",
    summary: "Día a medida según tu sensibilidad: una escapada costera a Kamakura para contemplar el colosal Daibutsu de bronce al aire libre, o un viaje místico entre cascadas y templos barrocos en Nikko.",
    activities: [
      "Opción Kamakura: Gran Buda exterior, templo de hortensias Hasedera y paseo junto al mar",
      "Opción Nikko: Santuario Tōshō-gū con los famosos tres monos sabios rodeados de pinos sagrados",
      "Opción Tokio Digital: teamLab Planets (caminar descalzo sobre el agua entre proyecciones) y Odaiba"
    ],
    transport: "Tren regional con billete reservado o tren Enoden junto a la costa",
    concept: "Shinrin-yoku (森林浴) — Baño de bosque y conexión profunda con la naturaleza japonesa.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    tips: "Te incluimos la hoja de ruta con horarios exactos para que la excursión sea tan fácil como un paseo."
  },
  {
    day: 5,
    base: "Hakone (箱根)",
    emoji: "♨️",
    title: "Vistas al Monte Fuji, onsen y la magia del Ryokan",
    summary: "El equipaje pesado viaja solo directo a Kioto mediante el servicio Takkyubin. Tú tomas el tren panorámico Romancecar hacia el Parque Nacional de Hakone: teleféricos, barco en el lago y retiro en aguas termales.",
    activities: [
      "Envío matutino de maletas desde recepción (viajas con una pequeña mochila ligera)",
      "Tren panorámico Romancecar hacia los valles de Hakone",
      "Paseo en teleférico sobre el valle de Owakudani y crucero con vistas al Torii flotante en el lago Ashi",
      "Llegada al Ryokan: vestirse con yukata de algodón, baño termal mineral en el onsen y cena Kaiseki de autor"
    ],
    transport: "Tren Romancecar + Hakone Free Pass (teleférico, funicular y barco)",
    concept: "Omotenashi (おもてなし) — La más pura hospitalidad en un ryokan con suelos de tatami y descanso en futón.",
    image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1200&q=80",
    tips: "Dormir sobre tatami y cenar descalzo con el murmullo del jardín japonés es una experiencia inolvidable."
  },
  {
    day: 6,
    base: "Kioto (京都)",
    emoji: "🚅",
    title: "Tren bala Shinkansen y el embrujo de Gion",
    summary: "Embarque en el Shinkansen a toda velocidad hacia la capital imperial. Tus maletas ya te aguardan en tu hotel. Al caer la tarde, paseo silencioso entre las casas de madera machiya de Ninenzaka y el barrio de geishas.",
    activities: [
      "Viaje en tren bala Shinkansen con reserva de asiento en ventana para despedir al Fuji",
      "Check-in en Kioto y reencuentro con tu equipaje sin haber cargado peso",
      "Paseo vespertino por las empinadas cuestas de piedra de Ninenzaka y Sannenzaka",
      "Santuario Yasaka iluminado con cientos de farolillos conmemorativos y paseo respetuoso por Gion"
    ],
    transport: "Tren de alta velocidad Shinkansen + Bus/Metro Kioto",
    concept: "Mono no aware (物の哀れ) — La sutil emoción ante la belleza efímera de la tarde en Kioto.",
    image: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1200&q=80",
    tips: "Recuerda caminar con respeto por Gion: las callejuelas privadas están protegidas para salvaguardar a las maiko."
  },
  {
    day: 7,
    base: "Kioto (京都)",
    emoji: "🦊",
    title: "Toriis al amanecer en Fushimi Inari y Kiyomizu-dera",
    summary: "Madrugar para recorrer en soledad el sendero de los diez mil toriis bermellón custodiados por zorros sagrados kitsune. Almuerzo degustando bocados en el mercado Nishiki y visita al balcón de Kiyomizu.",
    activities: [
      "Visita a Fushimi Inari Taisha a primera hora para caminar en silencio bajo los arcos naranjas",
      "Degustar brochetas de dango, matcha latte y dulces de sésamo en el mercado culinario de Nishiki",
      "Visita al templo de madera suspendido Kiyomizu-dera con vistas a la ciudad",
      "Beber de las aguas de pureza de la cascada Otowa para la salud y la fortuna"
    ],
    transport: "Líneas de tren local JR Keihan + Tarjeta IC",
    concept: "Ichigo Ichie (一期一会) — Estar presente en el instante único de contemplar el amanecer en el santuario.",
    image: "https://images.unsplash.com/photo-1478436127897-769e00d7c5d5?auto=format&fit=crop&w=1200&q=80",
    tips: "Llegar a Fushimi Inari a las 07:30 h te regala fotografías sin personas y una atmósfera mística."
  },
  {
    day: 8,
    base: "Kioto (京都)",
    emoji: "🎍",
    title: "El susurro del bambú en Arashiyama y el Pabellón Dorado",
    summary: "Paseo entre los altísimos tallos verdes de Arashiyama, jardines de piedras zen en Tenryū-ji y el asombro ante el Kinkaku-ji resplandeciendo sobre el estanque espejo.",
    activities: [
      "Paseo matinal escuchando el crujido del viento en el Bosque de Bambú de Arashiyama",
      "Contemplación del jardín zen de musgo y rocas del templo Tenryū-ji",
      "Visita al Pabellón Dorado Kinkaku-ji, recubierto de auténtico pan de oro",
      "Tarde libre: posibilidad de participar en una íntima ceremonia del té con un maestro local"
    ],
    transport: "Tranvía nostálgico Randen + Autobús",
    concept: "Wabi-Sabi (侘寂) — Encontrar la perfección en la sencillez natural y los jardines de rocas.",
    image: "https://images.unsplash.com/photo-1509024644558-2f56ce76c490?auto=format&fit=crop&w=1200&q=80",
    tips: "En la ceremonia del té aprenderás el significado de girar el cuenco antes de beber el matcha espumoso."
  },
  {
    day: 9,
    base: "Osaka & Nara (奈良・大阪)",
    emoji: "🦌",
    title: "Ciervos reverentes en Nara y festín de neón en Osaka",
    summary: "Excursión a Nara para conocer a los ciervos sagrados que saludan con una reverencia y contemplar al Gran Buda de Tōdai-ji. Por la tarde, zambullida en el alegre frenesí gastronómico de Osaka.",
    activities: [
      "Alimentar con galletas shika-senbei a los ciervos de Nara que hacen reverencias educadas",
      "Quedarse sin palabras ante el Gran Buda de bronce en la colosal nave de madera de Tōdai-ji",
      "Tren rápido a Osaka y paseo bajo el cartel del Glico Man en el canal de Dōtonbori",
      "Cena de street food callejero: takoyaki dorados, okonomiyaki y brochetas kushikatsu"
    ],
    transport: "Trenes regionales JR / Kintetsu",
    concept: "Kuidaore (食い倒れ) — El lema de Osaka: 'comer con pasión y disfrutar de la vida sin límites'.",
    image: "https://images.unsplash.com/photo-1528164344705-475426879c0d?auto=format&fit=crop&w=1200&q=80",
    tips: "Los ciervos de Nara son sagrados en la tradición sintoísta; salúdalos inclinando suavemente la cabeza."
  },
  {
    day: 10,
    base: "Despedida (さようなら)",
    emoji: "✈️",
    title: "Últimos amuletos, té matcha y vuelo a casa",
    summary: "Mañana tranquila para compras de recuerdos de cerámica, té y artesanía. Traslado cómodo en tren exprés directo al Aeropuerto Internacional de Kansai (KIX) o conexión a Tokio para tu vuelo a España.",
    activities: [
      "Tiempo para compras de regalos de alta pastelería japonesa y té de Uji",
      "Tren exprés directo al aeropuerto con tus asientos asignados",
      "Control de seguridad y aduanas ágil mediante los códigos de Visit Japan Web",
      "Vuelo de regreso con la maleta llena de momentos mágicos que recordarás siempre"
    ],
    transport: "Tren exprés directo a la terminal aérea",
    concept: "Musubi (結び) — El lazo invisible que une tu historia para siempre con la tierra del Sol Naciente.",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=1200&q=80",
    tips: "Te recordamos llegar con 3 horas de antelación al aeropuerto y tener a mano tu pasaporte."
  }
];

const ITINERARY_VARIANTS = {
  clasico: {
    id: "clasico",
    name: "Ruta Equilibrada (10 Días)",
    badge: "🌸 Más Solicitada",
    subtitle: "El balance idóneo entre templos, megalópolis, onsen tradicional y gastronomía.",
    description: "Diseñada para una primera toma de contacto inolvidable: Tokio (4 noches), Hakone en Ryokan (1 noche), Kioto (3 noches) y Osaka con Nara (1 noche).",
    pros: ["Ritmo sereno", "Noche de ensueño en Ryokan", "Tren bala Shinkansen incluido", "Asistencia 24h en español"]
  },
  cultura: {
    id: "cultura",
    name: "Variante Más Cultura & Patrimonio",
    badge: "⛩️ Inmersión Histórica",
    subtitle: "Sustituye la noche de Hakone por más noches en Kioto y añade joyas de la UNESCO.",
    description: "Añade una noche extra en Kioto y excursiones a la cuna del té verde en Uji (Templo Byodoin del billete de 10 yenes) o la majestuosidad del Castillo de la Garza Blanca en Himeji.",
    pros: ["Más tiempo en templos y jardines", "Menos cambios de hotel", "Excursión a Himeji o Uji", "Talleres de caligrafía y té"]
  },
  familias: {
    id: "familias",
    name: "Variante Familias con Niños",
    badge: "🧸 Ritmo Pausado & Ocio",
    subtitle: "Hoteles comunicados o apartahoteles de diseño con bases fijas y atracciones mágicas.",
    description: "Reducimos al mínimo los cambios de alojamiento (solo 2 bases: Tokio y Kioto/Osaka). Incluye entradas garantizadas a Super Nintendo World en Universal Studios Japan y Museo Ghibli o Harry Potter Tour.",
    pros: ["Bases fijas sin traslados pesados", "Apartahoteles con cocina y lavandería", "Actividades que fascinan a todas las edades", "Flexibilidad horaria"]
  },
  gastronomia: {
    id: "gastronomia",
    name: "Variante Foodie & Gastronómica",
    badge: "🍱 Paladares Exquisitos",
    subtitle: "Recorridos culinarios, izakayas secretas, mercado de Tsukiji y bodegas de sake.",
    description: "Incluye tour privado por el mercado exterior de Tsukiji, degustación de sakes artesanales en las destilerías de Fushimi (Kioto), cena Kaiseki de autor galardonada y ruta nocturna de tapas en Dōtonbori.",
    pros: ["Reservas selectas garantizadas", "Guía hispanohablante especialista en gastronomía", "Menús adaptados a tus intolerancias", "Degustación de sake y wagyu"]
  },
  anime: {
    id: "anime",
    name: "Variante Anime, Manga & Gaming",
    badge: "🎮 Cultura Pop & Futuro",
    subtitle: "Más días en Tokio para explorar Akihabara, Nakano, Odaiba y cafés temáticos.",
    description: "Ampliamos la estancia en Tokio dedicando tiempo a cazar figuras en Akihabara, tiendas vintage de Nakano Broadway, Gundam a escala real en Odaiba y salas arcade de Shinjuku.",
    pros: ["Entradas anticipadas a atracciones clave", "Ruta de tiendas de coleccionismo y videojuegos", "Centros temáticos Pokémon y Nintendo", "teamLab Borderless garantizado"]
  },
  relajado: {
    id: "relajado",
    name: "Variante Slow Travel & Relajado",
    badge: "🍃 Filosofía Zen",
    subtitle: "Elimina Osaka o excursiones periféricas para disfrutar de tardes libres y cafés tranquilos.",
    description: "Prioriza el descanso, mañanas sin alarma, paseos por barrios residenciales con encanto como Yanaka o Nakameguro, y largas sesiones de baños termales sin correr entre monumentos.",
    pros: ["Cero prisas y máxima tranquilidad", "Bloques de medio día libres para improvisar", "Ideal para desconectar de verdad", "Menor fatiga física"]
  }
};

const ACCOMMODATIONS = [
  {
    category: "Esencial",
    japaneseTag: "シンプル (Sencillo)",
    stars: "Hostales y Hoteles 2-3*",
    profile: "Hoteles limpios, prácticos y con la insuperable higiene japonesa.",
    criteria: "Ubicación estratégica junto a estaciones clave, baño privado, wifi de alta velocidad y recepción funcional.",
    badge: "Económico & Práctico",
    priceRange: "70€ - 100€ / noche",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
    features: [
      "Habitaciones compactas y funcionales (12-15 m²)",
      "Limpieza japonesa rigurosa",
      "A pocos minutos a pie del metro",
      "Ideal para optimizar presupuesto"
    ]
  },
  {
    category: "Confort",
    japaneseTag: "快適 (Confortable)",
    stars: "Hoteles 3-4 Estrellas",
    profile: "El estándar preferido: hoteles modernos, espaciosos y con servicios completos.",
    criteria: "Habitaciones funcionales y confortables, recepción multilingüe, desayuno variado y cercanía a estaciones principales.",
    badge: "🌸 Recomendado",
    priceRange: "120€ - 180€ / noche",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    features: [
      "Habitaciones de 18-24 m² con espacio para maletas",
      "Desayuno con opciones occidentales y japonesas",
      "Recepción 24 horas y consigna de equipaje",
      "Ubicaciones privilegiadas en Shinjuku, Ginza o Kioto"
    ]
  },
  {
    category: "Premium",
    japaneseTag: "上質 (Elegante)",
    stars: "Hoteles 4-5 Estrellas",
    profile: "Alojamientos de alta gama con diseño contemporáneo y vistas panorámicas.",
    criteria: "Servicio de conserjería bilingüe, gimnasio, spa, alta gastronomía y habitaciones amplias con vistas panorámicas.",
    badge: "✨ Alta Gama",
    priceRange: "220€ - 380€ / noche",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
    features: [
      "Espaciosas habitaciones de 30-45 m² con camas king size",
      "Pisos altos con vistas al skyline o jardines",
      "Servicio de conserje para reservas exclusivas",
      "Desayunos gourmet y coctelería selecta"
    ]
  },
  {
    category: "Tradicional (Ryokan)",
    japaneseTag: "旅館 (Ryokan con Onsen)",
    stars: "Ryokan con Onsen & Kaiseki",
    profile: "La vivencia japonesa por excelencia: tatami, hospitalidad Omotenashi y aguas termales.",
    criteria: "Suelo de tatami, descanso en futón de algodón puro, baño en aguas termales volcánicas y cena gastronómica Kaiseki servida con esmero.",
    badge: "♨️ Experiencia Única",
    priceRange: "300€ - 550€ / noche (Media Pensión)",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    features: [
      "Habitaciones con suelo de tatami, yukata y zapatillas",
      "Baños termales Onsen volcánicos bajo el cielo abierto",
      "Cena Kaiseki de alta cocina de temporada de 9 pases",
      "Hospitalidad Omotenashi cuidada al milímetro"
    ]
  },
  {
    category: "Familias",
    japaneseTag: "家族 (Familia)",
    stars: "Apartahoteles & Conectadas",
    profile: "Diseñados específicamente para familias y grupos de 3 a 6 personas.",
    criteria: "Espacio real, camas individuales para cada miembro, cocina americana, lavadora y salón.",
    badge: "🧸 Ideal Familias",
    priceRange: "180€ - 280€ / noche (Total)",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80",
    features: [
      "Capacidad para 4-6 personas en un solo apartamento",
      "Cocina y lavadora integrada (ahorro sustancial)",
      "Ambiente acogedor y política flexible de menores",
      "Cerca de parques y tiendas de conveniencia (Konbini)"
    ]
  }
];

const FAQS_KNOWLEDGE = [
  {
    q: "¿Necesito visado para viajar a Japón desde España?",
    a: "Para estancias cortas de turismo con pasaporte español suele existir un **régimen general de exención de visado de hasta 90 días**, pero de acuerdo con nuestra normativa RAG **no debe afirmarse como vigente sin comprobación oficial** en las fuentes del MAEC y el consulado/embajada de Japón antes de viajar y entre 7 y 10 días antes de salir. Comprueba que tu pasaporte esté vigente durante toda la estancia, revisa requisitos de posibles escalas y completa el registro digital en *Visit Japan Web* para agilizar aduana e inmigración. La decisión de admisión siempre corresponde a las autoridades fronterizas.",
    tag: "Documentación & Visados",
    icon: "🛂"
  },
  {
    q: "¿Qué vacunas o requisitos sanitarios son obligatorios?",
    a: "Actualmente no se exigen vacunas obligatorias para viajar a Japón desde España. Como la sanidad privada japonesa tiene costes muy elevados, es imprescindible contratar un seguro médico internacional con alta cobertura médica, hospitalización y repatriación. Para medicación personal, recomendamos llevar la cantidad necesaria en su envase original con receta médica traducida y verificar previamente en fuentes oficiales la prohibición de sustancias controladas en Japón.",
    tag: "Salud & Cuidado",
    icon: "💊"
  },
  {
    q: "¿Cómo funcionan los pagos y el depósito de reserva?",
    a: "El proceso es transparente: diseñamos tu propuesta preliminar y, para confirmar los servicios, se solicita un **depósito orientativo del 30%** al aceptar, abonándose el **pago restante (70%) aproximadamente 45 días antes** de la salida. No obstante, prevalecen siempre las condiciones específicas fijadas por los proveedores (algunos vuelos o alojamientos exigen pago inmediato al 100% y no admiten cambios ni reembolso). La reserva se formaliza por escrito con presupuesto desglosado.",
    tag: "Pagos & Reservas",
    icon: "🌸"
  },
  {
    q: "¿Cuáles son las condiciones y gastos de cancelación?",
    a: "Las cancelaciones deben solicitarse siempre por escrito y su fecha efectiva es la de recepción en horario laboral. Prevalecen las condiciones del contrato de viaje combinado y de cada proveedor. Si el proveedor no fija otra escala, rige con carácter orientativo: más de 60 días antes: 10% más gastos incurridos; entre 31 y 60 días: 25%; entre 15 y 30 días: 50%; y 14 días o menos o no presentación: hasta el 100%. Los billetes promocionales, entradas y gastos de diseño prestados pueden no ser reembolsables.",
    tag: "Cancelaciones & Modificaciones",
    icon: "📄"
  },
  {
    q: "¿Vale la pena el JR Pass nacional tras las subidas de precio?",
    a: "Para la ruta clásica de 10 días (Tokio - Hakone - Kioto - Nara - Osaka), el Japan Rail Pass nacional ya **no suele ser la opción más económica**. En la mayoría de los casos resulta más conveniente emitir billetes individuales para el tren bala Shinkansen con reserva de asiento garantizada (necesaria para equipaje voluminoso) y utilizar una tarjeta IC recargable para los metros urbanos.",
    tag: "Tren & Movilidad",
    icon: "🚅"
  },
  {
    q: "¿Cómo funciona el envío de maletas Takkyubin?",
    a: "Para no cargar maletas voluminosas en los trenes bala ni durante la noche de montaña en Hakone, coordinamos el servicio de mensajería **Takkyubin**. Dejas tu maleta en la recepción del hotel en Tokio por la mañana y viaja directamente a tu hotel en Kioto, permitiéndote disfrutar de la ruta con una mochila ligera. Siempre verificamos medidas y exclusiones antes del envío.",
    tag: "Equipaje Ligero",
    icon: "📦"
  },
  {
    q: "¿Qué sucede si tengo alergias alimentarias o soy vegetariano?",
    a: "En Japón la cocina utiliza ampliamente caldo de pescado (*dashi*) y soja. Proporcionamos a nuestros viajeros **tarjetas explicativas en japonés** con sus alergias o restricciones (gluten, celiaquía, marisco, lactosa, vegetarianismo). Sin embargo, conforme a nuestra política de seguridad, no se puede garantizar la ausencia total de contaminación cruzada en restaurantes locales; comunicamos la necesidad y solicitamos confirmación escrita en hoteles y ryokans.",
    tag: "Alimentación",
    icon: "🍙"
  },
  {
    q: "¿El viaje es accesible para personas con movilidad reducida o niños?",
    a: "No aplicamos etiquetas genéricas de accesibilidad: cada tramo, estación, ascensor, anchura de puerta, baño y transfer se verifica individualmente con cada proveedor. Para familias con niños pequeños adaptamos el itinerario reduciendo cambios de hotel (bases fijas en Tokio y Kioto) y reservando apartahoteles con cocina, lavandería y habitaciones conectadas.",
    tag: "Accesibilidad & Familias",
    icon: "🧸"
  },
  {
    q: "¿Cómo es la asistencia durante el viaje ante urgencias o siniestros?",
    a: "Dispones de un canal de **asistencia telefónica 24 horas durante el viaje** atendido en español por Horizonte a Medida para incidencias urgentes. En caso de emergencia médica o de seguridad, la prioridad absoluta es acudir a los servicios locales de emergencia y avisar a la aseguradora antes de incurrir en gastos extraordinarios, conservando todos los informes médicos, facturas y denuncias para la póliza.",
    tag: "Asistencia 24h & Seguro",
    icon: "🍵"
  },
  {
    q: "¿Cuánto margen de gastos diarios recomiendan llevar?",
    a: "Recomendamos prever un **margen preventivo orientativo del 10% al 15% del presupuesto terrestre** para comidas no incluidas, pequeños traslados espontáneos y compras cotidianas. En tabernas locales o ramen se puede comer con excelente calidad desde 10-15 € por persona.",
    tag: "Presupuesto & Extras",
    icon: "💴"
  }
];

const BOT_KNOWLEDGE_BASE = {
  welcome: "¡Konnichiwa! (こんにちは) Soy **Aiko-chan** (あいこ), tu asesora virtual de **Horizonte a Medida Viajes**. 🌸 Puedo orientarte sobre itinerarios en Japón, rangos de presupuesto, equipaje, temporadas o documentación según nuestra ficha oficial RAG. ¿Qué te gustaría consultar?",
  suggestions: [
    "Presupuesto estimado de 10 días 💴",
    "¿Qué documentación necesito? 🛂",
    "¿Cómo funcionan las maletas con Takkyubin? 📦",
    "¿Qué incluye la noche en Ryokan con Onsen? ♨️",
    "Condiciones de pago y cancelación 📄"
  ],
  rules: {
    visas: "Para ciudadanos con pasaporte español que viajan por turismo de corta duración suele aplicarse exención de visado de hasta 90 días. No obstante, conforme a nuestra política de seguridad, **debe comprobarse formalmente en las fuentes oficiales del MAEC y el consulado de Japón** antes de la contratación y entre 7-10 días antes del viaje. El pasaporte debe estar en vigor, es necesario justificar billete de salida y registrarse en *Visit Japan Web* para la entrada digital. 🛂",
    health: "Actualmente no existen vacunas obligatorias para viajar desde España a Japón. Como la sanidad privada japonesa tiene costes muy elevados, es imprescindible contar con un seguro médico internacional de alta cobertura y repatriación. Recomendamos llevar medicación personal en su envase original con receta médica e informe. 💊",
    booking: "El proceso es transparente: preparamos una propuesta preliminar; para confirmar se requiere un **depósito orientativo del 30%** y el pago final se realiza **45 días antes de la salida**, salvo que los proveedores de vuelos o ryokans exijan pago inmediato según su tarifa. 🌸",
    cancellation: "Las solicitudes de cancelación se realizan siempre por escrito. Cuando el proveedor no fije otra escala, se aplica de forma orientativa: más de 60 días antes: 10% + gastos incurridos; entre 31 y 60 días: 25%; entre 15 y 30 días: 50%; y 14 días o menos: hasta el 100%. Los gastos de diseño prestados y billetes no reembolsables quedan excluidos de devolución. 📄",
    bags: "En los trenes bala Shinkansen existen restricciones y reservas obligatorias para maletas grandes. Con el servicio oficial japonés **Takkyubin**, tus maletas viajan directamente de hotel a hotel y tú realizas las excursiones con una mochila ligera. 📦",
    accessibility: "No utilizamos etiquetas genéricas de accesibilidad. Para personas con movilidad reducida o necesidades funcionales verificamos de forma individualizada escalones, ascensores, anchuras de puertas, baños adaptados y transfers con cada hotel y operador. 🤝",
    seasons: {
      sakura: "🌸 La primavera (finales de marzo a principios de abril) es la época de floración de los cerezos (Sakura), caracterizada por altísima demanda en vuelos y ryokans; recomendamos reservar con al menos 6 meses de antelación.",
      momiji: "🍁 El otoño (noviembre) ofrece el enrojecimiento de las hojas de arce (Momiji), temperaturas suaves y jardines espectaculares en Kioto.",
      verano: "🏮 El verano (julio-agosto) destaca por festivales tradicionales (Matsuri) y fuegos artificiales, con clima cálido y húmedo.",
      invierno: "❄️ El invierno (diciembre-febrero) brinda vistas nítidas del Monte Fuji, baños onsen en la nieve y menor afluencia turística."
    }
  }
};
