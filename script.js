const TRANSLATIONS = {
  en: {
    meta: {
      title: "Florida Home Remodeling",
      description:
        "Design + Build home remodeling landing page for Palm Coast, Daytona Beach, and Orlando.",
    },
    topbar: {
      brandAria: "Florida Home Remodeling",
      brandPrimary: "Florida Home Remodeling",
      brandSecondary: "Design + Build",
      navAria: "Primary",
      nav: ["Services", "Projects", "Reviews", "Locations"],
      callAria: "Call Florida Home Remodeling",
      languageSwitcherAria: "Language switcher",
    },
    cities: {
      palmCoast: "Palm Coast",
      daytonaBeach: "Daytona Beach",
      orlando: "Orlando",
      winterPark: "Winter Park",
      flaglerBeach: "Flagler Beach",
    },
    hero: {
      eyebrow: "Palm Coast / Daytona / Orlando",
      title: "YOUR FLORIDA HOME. REIMAGINED.",
      subtitle: "Design + Build in Palm Coast, Daytona & Orlando.",
      body:
        "High-clarity remodeling with design, pricing, and build management under one contractor. No guesswork. No scattered trades.",
    },
    heroForm: {
      kicker: "Free Consultation",
      title: "Get Free Estimate",
      button: "Get Free Estimate",
      note: "We call back within one business day.",
    },
    sharedForm: {
      nameLabel: "Name",
      namePlaceholder: "Your name",
      phoneLabel: "Phone",
      phonePlaceholder: "(386) 555-0149",
      status: "Thanks. We'll reach out shortly to schedule your estimate.",
    },
    weather: {
      label: "Field Conditions",
      loading: "Loading live Florida temperature...",
      reading: ({ city, temp, latitude, longitude }) =>
        `${city}, FL · ${temp}°F · ${latitude} / ${longitude}`,
      fallback: ({ city, latitude, longitude }) =>
        `${city}, FL · ${latitude} / ${longitude}`,
    },
    services: {
      eyebrow: "Core Services",
      title: "BUILT FOR DECISIONS, NOT DELAYS.",
      cards: [
        {
          title: "Remodeling",
          body:
            "Full-room renovations with clean sequencing, permit awareness, and one accountable build team.",
        },
        {
          title: "Interior Design",
          body:
            "Materials, layouts, lighting, and finish logic resolved before crews start cutting into walls.",
        },
        {
          title: "Custom Kitchens",
          body:
            "Cabinet sourcing, appliance planning, and durable layouts built around real traffic and storage needs.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Homeowners Call Us First",
      title: "DESIGN. BUILD. DONE.",
      points: [
        {
          title: "One contractor from sketch to final walk-through",
          body:
            "Design intent, pricing, schedules, and construction all stay in the same lane from day one.",
        },
        {
          title: "Fixed pricing without surprise add-ons",
          body:
            "Budget decisions get made early, which keeps scope clean and avoids last-minute swings.",
        },
        {
          title: "Top-tier suppliers with finish durability in mind",
          body:
            "We source cabinetry, surfaces, and fixtures that hold up in humid Florida conditions.",
        },
      ],
    },
    process: {
      eyebrow: "Process",
      title: "CLARITY IN THREE MOVES.",
      steps: [
        {
          eyebrow: "Free Consultation",
          body:
            "We review goals, measure constraints, and define the real scope before talking finishes.",
        },
        {
          eyebrow: "Design & Budget",
          body:
            "Layouts, materials, and pricing get aligned together so nothing important is left vague.",
        },
        {
          eyebrow: "Build & Handover",
          body:
            "We sequence the build, finish the punch list, and hand over a room that matches the approved plan.",
        },
      ],
    },
    designBlock: {
      quote: "\"Good design doesn't cost more. It saves you from paying twice.\"",
      paragraphs: [
        "Design decisions made before demo reduce rework, protect 15-30% of the budget, and give you a pricing map from the first day on site.",
        "That means fewer substitutions, fewer stop-start decisions, and a cleaner handoff between concept, sourcing, and construction.",
      ],
      link: "See how it works →",
    },
    kitchens: {
      eyebrow: "Signature Kitchens",
      title: "KITCHENS THAT OUTLAST TRENDS.",
      items: [
        { title: "Warm Shaker", meta: "KraftMaid · $38k-$54k" },
        { title: "Modern Coastal", meta: "Fabuwood · $42k-$60k" },
        { title: "White Oak", meta: "Wellborn · $48k-$68k" },
        { title: "Monochrome Luxe", meta: "Bellmont · $55k-$78k" },
      ],
    },
    portfolio: {
      eyebrow: "Real Transformations",
      title: "BEFORE & AFTER",
      before: "Before",
      after: "After",
      handleLabel: "Drag comparison",
      items: [
        { title: "Kitchen Transformation", duration: "Completed in 7 weeks" },
        { title: "House Exterior Refresh", duration: "Completed in 6 weeks" },
        { title: "Bedroom Makeover", duration: "Completed in 5 weeks" },
        { title: "Living Room Update", duration: "Completed in 4 weeks" },
      ],
    },
    offer: {
      eyebrow: "Limited Planning Offer",
      title: "FREE DESIGN + FREE ESTIMATE",
      subtitle: "No commitment. No pressure. Just clarity.",
    },
    offerForm: {
      kicker: "Start With A Call",
      title: "Book Your Free Session",
      button: "Get Free Estimate",
      note: "Mon-Sat, 8am-6pm",
    },
    reviews: {
      eyebrow: "Client Feedback",
      title: "WHAT THE FINISHED ROOM FEELS LIKE.",
      starsAria: "5 out of 5 stars",
      items: [
        {
          quote:
            "\"The design work saved us from two expensive layout mistakes before construction even started. That alone paid for itself.\"",
          name: "Marcus & Elena R.",
          location: "Palm Coast",
        },
        {
          quote:
            "\"Fixed pricing mattered to us. The final numbers tracked exactly how the proposal was explained.\"",
          name: "Tanya M.",
          location: "Daytona Beach",
        },
        {
          quote:
            "\"The team showed us design logic, not just mood boards. That made decision-making much faster.\"",
          name: "James P.",
          location: "Orlando",
        },
        {
          quote:
            "\"Schedules were tight but realistic. We always knew what was next and when materials had to be signed off.\"",
          name: "Drew & Anika S.",
          location: "Winter Park",
        },
        {
          quote:
            "\"The supplier recommendations were sharp. Nothing felt trendy for the sake of being trendy.\"",
          name: "Helena G.",
          location: "Flagler Beach",
        },
        {
          quote:
            "\"They handled the project like a system, not a collection of disconnected trades. That made a big difference.\"",
          name: "Victor N.",
          location: "Daytona Beach",
        },
      ],
    },
    locations: {
      mapAria: "Service area map",
      eyebrow: "Service Area",
      title: "WHERE WE BUILD.",
      servingArea: "Serving this area",
      footnote:
        "Florida-licensed contractor · Serving Volusia, Flagler & Orange County",
    },
    finalCta: {
      eyebrow: "Ready When You Are",
      title: "READY TO START?",
      subtitle: "Most projects book 3-4 weeks out. Don't wait.",
      button: "Get Your Free Design",
      hours: "Available Mon-Sat, 8am-6pm",
    },
  },
  ru: {
    meta: {
      title: "Дизайн и ремонт домов во Флориде",
      description:
        "Лендинг по дизайну и ремонту под ключ для Палм-Кост, Дейтона-Бич и Орландо.",
    },
    topbar: {
      brandAria: "Florida Home Remodeling",
      brandPrimary: "Florida Home Remodeling",
      brandSecondary: "Дизайн + ремонт",
      navAria: "Основная навигация",
      nav: ["Услуги", "Проекты", "Отзывы", "Локации"],
      callAria: "Позвонить в Florida Home Remodeling",
      languageSwitcherAria: "Переключатель языка",
    },
    cities: {
      palmCoast: "Палм-Кост",
      daytonaBeach: "Дейтона-Бич",
      orlando: "Орландо",
      winterPark: "Уинтер-Парк",
      flaglerBeach: "Флаглер-Бич",
    },
    hero: {
      eyebrow: "Палм-Кост / Дейтона / Орландо",
      title: "ВАШ ДОМ ВО ФЛОРИДЕ. НОВОЕ ПРОЧТЕНИЕ.",
      subtitle: "Дизайн + ремонт в Палм-Кост, Дейтона-Бич и Орландо.",
      body:
        "Понятный ремонт с дизайном, сметой и управлением стройкой в одном контракте. Без догадок. Без разрозненных подрядчиков.",
    },
    heroForm: {
      kicker: "Бесплатная консультация",
      title: "Получить бесплатную смету",
      button: "Получить бесплатную смету",
      note: "Перезваниваем в течение одного рабочего дня.",
    },
    sharedForm: {
      nameLabel: "Имя",
      namePlaceholder: "Ваше имя",
      phoneLabel: "Телефон",
      phonePlaceholder: "(386) 555-0149",
      status: "Спасибо. Скоро свяжемся с вами, чтобы назначить замер.",
    },
    weather: {
      label: "Условия на объекте",
      loading: "Загружаем текущую температуру во Флориде...",
      reading: ({ city, temp, latitude, longitude }) =>
        `${city}, Флорида · ${temp}°F · ${latitude} / ${longitude}`,
      fallback: ({ city, latitude, longitude }) =>
        `${city}, Флорида · ${latitude} / ${longitude}`,
    },
    services: {
      eyebrow: "Основные услуги",
      title: "ВСЕ ДЛЯ РЕШЕНИЙ, А НЕ ДЛЯ ЗАДЕРЖЕК.",
      cards: [
        {
          title: "Ремонт",
          body:
            "Комплексные ремонты помещений с понятной последовательностью, учетом разрешений и одной ответственной строительной командой.",
        },
        {
          title: "Дизайн интерьера",
          body:
            "Материалы, планировки, свет и логика отделки определяются до того, как рабочие начнут вскрывать стены.",
        },
        {
          title: "Кухни на заказ",
          body:
            "Подбор кухонь, техники и надежных планировок под реальные маршруты движения и хранение.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Почему нам звонят в первую очередь",
      title: "ДИЗАЙН. СТРОЙКА. ГОТОВО.",
      points: [
        {
          title: "Один подрядчик от эскиза до финальной приемки",
          body:
            "Замысел, смета, график и строительство остаются в одном контуре с первого дня.",
        },
        {
          title: "Фиксированная цена без неожиданных доплат",
          body:
            "Ключевые бюджетные решения принимаются заранее, поэтому объем работ остается чистым без резких изменений в конце.",
        },
        {
          title: "Поставщики высокого уровня с фокусом на долговечность",
          body:
            "Мы подбираем кухни, поверхности и сантехнику, которые выдерживают влажный климат Флориды.",
        },
      ],
    },
    process: {
      eyebrow: "Процесс",
      title: "ЯСНОСТЬ В ТРЕХ ШАГАХ.",
      steps: [
        {
          eyebrow: "Бесплатная консультация",
          body:
            "Определяем цели, замеры и реальные ограничения проекта до обсуждения отделки.",
        },
        {
          eyebrow: "Дизайн и бюджет",
          body:
            "Планировки, материалы и смета собираются вместе, чтобы ничего важного не оставалось размытым.",
        },
        {
          eyebrow: "Стройка и сдача",
          body:
            "Мы выстраиваем этапы работ, закрываем список замечаний и сдаем пространство в соответствии с утвержденным планом.",
        },
      ],
    },
    designBlock: {
      quote: "\"Хороший дизайн не делает проект дороже. Он не дает платить дважды.\"",
      paragraphs: [
        "Решения по дизайну до демонтажа уменьшают переделки, защищают 15-30% бюджета и сразу дают понятную карту стоимости на объекте.",
        "Это означает меньше замен, меньше остановок в принятии решений и более чистую передачу между концепцией, закупкой и строительством.",
      ],
      link: "Посмотреть, как это работает →",
    },
    kitchens: {
      eyebrow: "Фирменные кухни",
      title: "КУХНИ ВНЕ КАПРИЗОВ МОДЫ.",
      items: [
        { title: "Теплый шейкер", meta: "KraftMaid · $38k-$54k" },
        { title: "Современная прибрежная", meta: "Fabuwood · $42k-$60k" },
        { title: "Белый дуб", meta: "Wellborn · $48k-$68k" },
        { title: "Монохромный люкс", meta: "Bellmont · $55k-$78k" },
      ],
    },
    portfolio: {
      eyebrow: "Реальные трансформации",
      title: "ДО И ПОСЛЕ",
      before: "До",
      after: "После",
      handleLabel: "Сдвинуть сравнение",
      items: [
        { title: "Преображение кухни", duration: "Готово за 7 недель" },
        { title: "Обновление фасада дома", duration: "Готово за 6 недель" },
        { title: "Преображение спальни", duration: "Готово за 5 недель" },
        { title: "Обновление гостиной", duration: "Готово за 4 недели" },
      ],
    },
    offer: {
      eyebrow: "Спецпредложение на планирование",
      title: "БЕСПЛАТНЫЙ ДИЗАЙН + БЕСПЛАТНАЯ СМЕТА",
      subtitle: "Без обязательств. Без давления. Только ясность.",
    },
    offerForm: {
      kicker: "Начните со звонка",
      title: "Запишитесь на бесплатную встречу",
      button: "Получить бесплатную смету",
      note: "Пн-Сб, 8:00-18:00",
    },
    reviews: {
      eyebrow: "Отзывы клиентов",
      title: "КАК ОЩУЩАЕТСЯ ГОТОВОЕ ПРОСТРАНСТВО.",
      starsAria: "5 из 5 звезд",
      items: [
        {
          quote:
            "\"Работа по дизайну уберегла нас от двух дорогих ошибок в планировке еще до начала стройки. Уже это окупило себя.\"",
          name: "Marcus & Elena R.",
          location: "Палм-Кост",
        },
        {
          quote:
            "\"Для нас была важна фиксированная цена. Итоговые цифры точно совпали с тем, как нам объяснили предложение.\"",
          name: "Tanya M.",
          location: "Дейтона-Бич",
        },
        {
          quote:
            "\"Команда показала нам не просто мудборды, а саму логику дизайна. Поэтому решения принимались намного быстрее.\"",
          name: "James P.",
          location: "Орландо",
        },
        {
          quote:
            "\"График был плотным, но реалистичным. Мы всегда понимали, что будет дальше и когда нужно утверждать материалы.\"",
          name: "Drew & Anika S.",
          location: "Уинтер-Парк",
        },
        {
          quote:
            "\"Рекомендации по поставщикам были очень точными. Ничего не выглядело модным просто ради моды.\"",
          name: "Helena G.",
          location: "Флаглер-Бич",
        },
        {
          quote:
            "\"Они вели проект как систему, а не как набор несвязанных подрядчиков. Это сильно изменило итог.\"",
          name: "Victor N.",
          location: "Дейтона-Бич",
        },
      ],
    },
    locations: {
      mapAria: "Карта зоны обслуживания",
      eyebrow: "География работ",
      title: "ГДЕ МЫ СТРОИМ.",
      servingArea: "Работаем в этом районе",
      footnote:
        "Лицензированный подрядчик Флориды · Работаем в округах Волусия, Флаглер и Ориндж",
    },
    finalCta: {
      eyebrow: "Когда будете готовы",
      title: "ГОТОВЫ НАЧАТЬ?",
      subtitle: "Большинство проектов бронируют за 3-4 недели. Не откладывайте.",
      button: "Получить бесплатный дизайн",
      hours: "Доступны Пн-Сб, 8:00-18:00",
    },
  },
  es: {
    meta: {
      title: "Remodelación y diseño de casas en Florida",
      description:
        "Landing de diseño y remodelación para Palm Coast, Daytona Beach y Orlando.",
    },
    topbar: {
      brandAria: "Florida Home Remodeling",
      brandPrimary: "Florida Home Remodeling",
      brandSecondary: "Diseño + Construcción",
      navAria: "Navegación principal",
      nav: ["Servicios", "Proyectos", "Reseñas", "Ubicaciones"],
      callAria: "Llamar a Florida Home Remodeling",
      languageSwitcherAria: "Selector de idioma",
    },
    cities: {
      palmCoast: "Palm Coast",
      daytonaBeach: "Daytona Beach",
      orlando: "Orlando",
      winterPark: "Winter Park",
      flaglerBeach: "Flagler Beach",
    },
    hero: {
      eyebrow: "Palm Coast / Daytona / Orlando",
      title: "TU CASA EN FLORIDA. REIMAGINADA.",
      subtitle: "Diseño + construcción en Palm Coast, Daytona y Orlando.",
      body:
        "Remodelación clara con diseño, presupuesto y gestión de obra bajo un solo contratista. Sin suposiciones. Sin oficios dispersos.",
    },
    heroForm: {
      kicker: "Consulta gratuita",
      title: "Obtén un presupuesto gratis",
      button: "Obtén un presupuesto gratis",
      note: "Te llamamos dentro de un día hábil.",
    },
    sharedForm: {
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      phoneLabel: "Teléfono",
      phonePlaceholder: "(386) 555-0149",
      status: "Gracias. Nos pondremos en contacto pronto para programar tu estimado.",
    },
    weather: {
      label: "Condiciones de obra",
      loading: "Cargando la temperatura en vivo de Florida...",
      reading: ({ city, temp, latitude, longitude }) =>
        `${city}, Florida · ${temp}°F · ${latitude} / ${longitude}`,
      fallback: ({ city, latitude, longitude }) =>
        `${city}, Florida · ${latitude} / ${longitude}`,
    },
    services: {
      eyebrow: "Servicios clave",
      title: "HECHO PARA DECIDIR, NO PARA ESPERAR.",
      cards: [
        {
          title: "Remodelación",
          body:
            "Renovaciones completas con secuencia clara, atención a permisos y un solo equipo responsable de la obra.",
        },
        {
          title: "Diseño interior",
          body:
            "Materiales, distribución, iluminación y lógica de acabados resueltos antes de abrir una sola pared.",
        },
        {
          title: "Cocinas a medida",
          body:
            "Selección de gabinetes, planificación de electrodomésticos y distribuciones duraderas pensadas para el uso real.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Por qué nos llaman primero",
      title: "DISEÑO. OBRA. LISTO.",
      points: [
        {
          title: "Un solo contratista desde el boceto hasta la entrega final",
          body:
            "La intención del diseño, el presupuesto, el calendario y la construcción avanzan por la misma vía desde el primer día.",
        },
        {
          title: "Precio fijo sin extras sorpresa",
          body:
            "Las decisiones de presupuesto se toman temprano, lo que mantiene el alcance limpio y evita giros de última hora.",
        },
        {
          title: "Proveedores de primer nivel con acabados duraderos",
          body:
            "Elegimos gabinetes, superficies y grifería que resisten bien el clima húmedo de Florida.",
        },
      ],
    },
    process: {
      eyebrow: "Proceso",
      title: "CLARIDAD EN TRES PASOS.",
      steps: [
        {
          eyebrow: "Consulta gratuita",
          body:
            "Revisamos objetivos, tomamos medidas y definimos el alcance real antes de hablar de acabados.",
        },
        {
          eyebrow: "Diseño y presupuesto",
          body:
            "Distribución, materiales y precio se alinean juntos para que nada importante quede ambiguo.",
        },
        {
          eyebrow: "Obra y entrega",
          body:
            "Secuenciamos la obra, cerramos la lista final y entregamos un espacio que coincide con el plan aprobado.",
        },
      ],
    },
    designBlock: {
      quote: "\"Un buen diseño no cuesta más. Evita que pagues dos veces.\"",
      paragraphs: [
        "Las decisiones de diseño tomadas antes de la demolición reducen retrabajos, protegen entre el 15 y el 30% del presupuesto y te dan una hoja de costos desde el primer día.",
        "Eso significa menos sustituciones, menos paradas en la toma de decisiones y una transición más limpia entre concepto, compras y construcción.",
      ],
      link: "Ver cómo funciona →",
    },
    kitchens: {
      eyebrow: "Cocinas destacadas",
      title: "COCINAS QUE SUPERAN LAS MODAS.",
      items: [
        { title: "Shaker cálido", meta: "KraftMaid · $38k-$54k" },
        { title: "Costero moderno", meta: "Fabuwood · $42k-$60k" },
        { title: "Roble blanco", meta: "Wellborn · $48k-$68k" },
        { title: "Lujo monocromático", meta: "Bellmont · $55k-$78k" },
      ],
    },
    portfolio: {
      eyebrow: "Transformaciones reales",
      title: "ANTES Y DESPUÉS",
      before: "Antes",
      after: "Después",
      handleLabel: "Mover comparación",
      items: [
        { title: "Transformación de cocina", duration: "Terminada en 7 semanas" },
        { title: "Renovación exterior de la casa", duration: "Terminada en 6 semanas" },
        { title: "Cambio de dormitorio", duration: "Terminada en 5 semanas" },
        { title: "Actualización de sala", duration: "Terminada en 4 semanas" },
      ],
    },
    offer: {
      eyebrow: "Oferta limitada de planificación",
      title: "DISEÑO GRATIS + PRESUPUESTO GRATIS",
      subtitle: "Sin compromiso. Sin presión. Solo claridad.",
    },
    offerForm: {
      kicker: "Empieza con una llamada",
      title: "Reserva tu sesión gratuita",
      button: "Obtén un presupuesto gratis",
      note: "Lun-Sáb, 8am-6pm",
    },
    reviews: {
      eyebrow: "Opiniones de clientes",
      title: "CÓMO SE SIENTE EL ESPACIO TERMINADO.",
      starsAria: "5 de 5 estrellas",
      items: [
        {
          quote:
            "\"El trabajo de diseño nos evitó dos errores costosos de distribución antes de que empezara la obra. Solo eso ya se pagó solo.\"",
          name: "Marcus & Elena R.",
          location: "Palm Coast",
        },
        {
          quote:
            "\"Para nosotros el precio fijo era clave. Los números finales siguieron exactamente cómo se explicó la propuesta.\"",
          name: "Tanya M.",
          location: "Daytona Beach",
        },
        {
          quote:
            "\"El equipo nos mostró lógica de diseño, no solo tableros de inspiración. Eso aceleró mucho las decisiones.\"",
          name: "James P.",
          location: "Orlando",
        },
        {
          quote:
            "\"Los plazos eran ajustados pero realistas. Siempre supimos qué seguía y cuándo había que aprobar materiales.\"",
          name: "Drew & Anika S.",
          location: "Winter Park",
        },
        {
          quote:
            "\"Las recomendaciones de proveedores fueron precisas. Nada se sintió de moda solo por verse de moda.\"",
          name: "Helena G.",
          location: "Flagler Beach",
        },
        {
          quote:
            "\"Gestionaron el proyecto como un sistema, no como una colección de oficios desconectados. Eso cambió todo.\"",
          name: "Victor N.",
          location: "Daytona Beach",
        },
      ],
    },
    locations: {
      mapAria: "Mapa del área de servicio",
      eyebrow: "Área de servicio",
      title: "DÓNDE CONSTRUIMOS.",
      servingArea: "Atendemos esta zona",
      footnote:
        "Contratista con licencia en Florida · Atendemos los condados de Volusia, Flagler y Orange",
    },
    finalCta: {
      eyebrow: "Cuando tú estés listo",
      title: "¿LISTO PARA EMPEZAR?",
      subtitle: "La mayoría de los proyectos se reservan con 3-4 semanas de anticipación. No esperes.",
      button: "Obtén tu diseño gratis",
      hours: "Disponibles Lun-Sáb, 8am-6pm",
    },
  },
};

const CITY_DATA = {
  palmCoast: {
    coords: [29.5845, -81.2079],
    zoom: 10,
  },
  daytonaBeach: {
    coords: [29.2108, -81.0228],
    zoom: 10,
  },
  orlando: {
    coords: [28.5383, -81.3792],
    zoom: 10,
  },
};

const LANGUAGE_STORAGE_KEY = "site-language";

const appState = {
  language: "en",
  weather: {
    temperature: null,
    failed: false,
  },
  markers: new Map(),
};

const getCopy = () => TRANSLATIONS[appState.language] || TRANSLATIONS.en;

const getNodeList = (selector) => Array.from(document.querySelectorAll(selector));

const setText = (target, value) => {
  const node = typeof target === "string" ? document.querySelector(target) : target;

  if (node && value != null) {
    node.textContent = value;
  }
};

const setAttribute = (target, attribute, value) => {
  const node = typeof target === "string" ? document.querySelector(target) : target;

  if (node && value != null) {
    node.setAttribute(attribute, value);
  }
};

const setTextList = (selector, values, callback) => {
  getNodeList(selector).forEach((node, index) => {
    const value = Array.isArray(values) ? values[index] : values;

    if (value == null) {
      return;
    }

    if (callback) {
      callback(node, value, index);
      return;
    }

    node.textContent = value;
  });
};

const isSupportedLanguage = (language) =>
  Object.prototype.hasOwnProperty.call(TRANSLATIONS, language);

const getInitialLanguage = () => {
  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    if (isSupportedLanguage(storedLanguage)) {
      return storedLanguage;
    }
  } catch (error) {
    // Ignore localStorage access issues and fall back to browser language.
  }

  const browserLanguage = window.navigator.language?.toLowerCase() || "";

  if (browserLanguage.startsWith("ru")) {
    return "ru";
  }

  if (browserLanguage.startsWith("es")) {
    return "es";
  }

  return "en";
};

const persistLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch (error) {
    // Ignore persistence failures and keep the current in-memory language.
  }
};

const updateLanguageSwitcher = () => {
  const copy = getCopy();
  const switcher = document.querySelector(".lang-switch");

  if (switcher) {
    switcher.setAttribute("aria-label", copy.topbar.languageSwitcherAria);
  }

  getNodeList("[data-lang-option]").forEach((button) => {
    const isActive = button.dataset.langOption === appState.language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const getCityName = (cityKey) => getCopy().cities[cityKey] || TRANSLATIONS.en.cities[cityKey];

const getMapPopupMarkup = (cityKey) => {
  const copy = getCopy();
  return `<strong>${getCityName(cityKey)}</strong><br />${copy.locations.servingArea}`;
};

const applyFormCopy = (form, formCopy, sharedFormCopy) => {
  if (!form) {
    return;
  }

  const labels = form.querySelectorAll("label span");
  const nameInput = form.querySelector('input[name="name"]');
  const phoneInput = form.querySelector('input[name="phone"]');
  const status = form.querySelector(".form-status");

  setText(form.querySelector(".form-kicker"), formCopy.kicker);
  setText(form.querySelector("h2"), formCopy.title);
  setText(labels[0], sharedFormCopy.nameLabel);
  setText(labels[1], sharedFormCopy.phoneLabel);
  setAttribute(nameInput, "placeholder", sharedFormCopy.namePlaceholder);
  setAttribute(phoneInput, "placeholder", sharedFormCopy.phonePlaceholder);
  setText(form.querySelector('button[type="submit"]'), formCopy.button);
  setText(form.querySelector(".form-note"), formCopy.note);

  if (status && status.textContent.trim()) {
    status.textContent = sharedFormCopy.status;
  }
};

const applyServiceCards = (cards) => {
  getNodeList(".services .service-card").forEach((card, index) => {
    const item = cards[index];

    if (!item) {
      return;
    }

    setText(card.querySelector("h3"), item.title);
    setText(card.querySelector("p"), item.body);
  });
};

const applyWhyPoints = (points) => {
  getNodeList(".why-point").forEach((point, index) => {
    const item = points[index];

    if (!item) {
      return;
    }

    setText(point.querySelector("h3"), item.title);
    setText(point.querySelector("p"), item.body);
  });
};

const applyProcessSteps = (steps) => {
  getNodeList(".process-step").forEach((step, index) => {
    const item = steps[index];

    if (!item) {
      return;
    }

    setText(step.querySelector(".process-step__eyebrow"), item.eyebrow);
    setText(step.querySelector(".process-step__body"), item.body);
  });
};

const applyKitchenCards = (items) => {
  getNodeList(".kitchen-card").forEach((card, index) => {
    const item = items[index];

    if (!item) {
      return;
    }

    setText(card.querySelector("h3"), item.title);
    setText(card.querySelector("p"), item.meta);
  });
};

const applyPortfolioCards = (portfolioCopy) => {
  setTextList(".comparison-label--left", portfolioCopy.before);
  setTextList(".comparison-label--right", portfolioCopy.after);
  setTextList(".comparison-handle .sr-only", portfolioCopy.handleLabel);

  getNodeList(".comparison-handle").forEach((button) => {
    button.setAttribute("aria-label", portfolioCopy.handleLabel);
  });

  getNodeList(".comparison-card").forEach((card, index) => {
    const item = portfolioCopy.items[index];

    if (!item) {
      return;
    }

    setText(card.querySelector(".comparison-meta h3"), item.title);
    setText(card.querySelector(".comparison-meta p"), item.duration);
  });
};

const applyReviewCards = (reviewsCopy) => {
  getNodeList(".stars").forEach((stars) => {
    stars.setAttribute("aria-label", reviewsCopy.starsAria);
  });

  getNodeList(".review-card").forEach((card, index) => {
    const item = reviewsCopy.items[index];

    if (!item) {
      return;
    }

    setText(card.querySelector("p"), item.quote);
    setText(card.querySelector("h3"), item.name);
    setText(card.querySelector("span"), item.location);
  });
};

const updateMapCopy = () => {
  const copy = getCopy();

  setAttribute("#service-map", "aria-label", copy.locations.mapAria);
  setText(".locations .section-head .eyebrow", copy.locations.eyebrow);
  setText(".locations .section-head h2", copy.locations.title);
  setText(".map-footnote", copy.locations.footnote);

  getNodeList(".city-pill").forEach((button) => {
    const cityKey = button.dataset.city;
    setText(button.querySelector("span"), getCityName(cityKey));
    setText(button.querySelector("small"), copy.locations.servingArea);
  });

  appState.markers.forEach((marker, cityKey) => {
    const popupMarkup = getMapPopupMarkup(cityKey);

    if (marker.getPopup()) {
      marker.setPopupContent(popupMarkup);
      return;
    }

    marker.bindPopup(popupMarkup);
  });
};

const renderWeather = () => {
  const copy = getCopy();
  const target = document.querySelector("[data-weather]");

  setText(".weather-label", copy.weather.label);

  if (!target) {
    return;
  }

  const [latitudeValue, longitudeValue] = CITY_DATA.palmCoast.coords;
  const latitude = `${Math.abs(latitudeValue).toFixed(2)}°${latitudeValue >= 0 ? "N" : "S"}`;
  const longitude = `${Math.abs(longitudeValue).toFixed(2)}°${longitudeValue >= 0 ? "E" : "W"}`;
  const payload = {
    city: getCityName("palmCoast"),
    latitude,
    longitude,
  };

  if (typeof appState.weather.temperature === "number") {
    target.textContent = copy.weather.reading({
      ...payload,
      temp: appState.weather.temperature,
    });
    return;
  }

  if (appState.weather.failed) {
    target.textContent = copy.weather.fallback(payload);
    return;
  }

  target.textContent = copy.weather.loading;
};

const applyStaticCopy = () => {
  const copy = getCopy();
  const metaDescription = document.querySelector('meta[name="description"]');
  const forms = getNodeList(".lead-form");

  document.documentElement.lang = appState.language;
  document.title = copy.meta.title;

  if (metaDescription) {
    metaDescription.setAttribute("content", copy.meta.description);
  }

  setAttribute(".brand", "aria-label", copy.topbar.brandAria);
  setText(".brand-copy span:first-child", copy.topbar.brandPrimary);
  setText(".brand-copy span:last-child", copy.topbar.brandSecondary);
  setAttribute(".topnav", "aria-label", copy.topbar.navAria);
  setTextList(".topnav a", copy.topbar.nav);
  setAttribute(".call-pill", "aria-label", copy.topbar.callAria);

  setText(".hero-copy .eyebrow", copy.hero.eyebrow);
  setText(".hero-copy h1", copy.hero.title);
  setText(".hero .hero-subtitle", copy.hero.subtitle);
  setText(".hero-body", copy.hero.body);

  applyFormCopy(forms[0], copy.heroForm, copy.sharedForm);

  setText(".services .section-head .eyebrow", copy.services.eyebrow);
  setText(".services .section-head h2", copy.services.title);
  applyServiceCards(copy.services.cards);

  setText(".why-copy .eyebrow", copy.whyUs.eyebrow);
  setText(".why-copy h2", copy.whyUs.title);
  applyWhyPoints(copy.whyUs.points);

  setText(".process .section-head .eyebrow", copy.process.eyebrow);
  setText(".process .section-head h2", copy.process.title);
  applyProcessSteps(copy.process.steps);

  setText(".design-quote", copy.designBlock.quote);
  setTextList(".design-copy p", copy.designBlock.paragraphs);
  setText(".teal-link", copy.designBlock.link);

  setText(".kitchens .section-head .eyebrow", copy.kitchens.eyebrow);
  setText(".kitchens .section-head h2", copy.kitchens.title);
  applyKitchenCards(copy.kitchens.items);

  setText(".portfolio .section-head .eyebrow", copy.portfolio.eyebrow);
  setText(".portfolio .section-head h2", copy.portfolio.title);
  applyPortfolioCards(copy.portfolio);

  setText(".offer-copy .eyebrow", copy.offer.eyebrow);
  setText(".offer-copy h2", copy.offer.title);
  setText(".offer-subtitle", copy.offer.subtitle);
  applyFormCopy(forms[1], copy.offerForm, copy.sharedForm);

  setText(".reviews .section-head .eyebrow", copy.reviews.eyebrow);
  setText(".reviews .section-head h2", copy.reviews.title);
  applyReviewCards(copy.reviews);

  updateMapCopy();

  setText(".final-cta .eyebrow", copy.finalCta.eyebrow);
  setText(".final-cta h2", copy.finalCta.title);
  setText(".final-cta .hero-subtitle", copy.finalCta.subtitle);
  setText(".final-cta__actions .pulse-button--link", copy.finalCta.button);
  setText(".final-cta__hours", copy.finalCta.hours);
};

const applyLanguage = (language) => {
  appState.language = isSupportedLanguage(language) ? language : "en";
  persistLanguage(appState.language);
  applyStaticCopy();
  renderWeather();
  updateLanguageSwitcher();
};

const initRevealObserver = () => {
  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const initHeroParallax = () => {
  const mediaLayers = document.querySelectorAll(".hero-media");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const handleScroll = () => {
    const offset = window.scrollY * 0.12;
    mediaLayers.forEach((layer) => {
      layer.style.transform = `translate3d(0, ${offset}px, 0) scale(1.08)`;
    });
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
};

const initWeather = async () => {
  const target = document.querySelector("[data-weather]");

  if (!target) {
    return;
  }

  renderWeather();

  const { coords } = CITY_DATA.palmCoast;

  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coords[0]}&longitude=${coords[1]}&current=temperature_2m&temperature_unit=fahrenheit`
    );

    if (!response.ok) {
      throw new Error("Weather request failed");
    }

    const data = await response.json();
    appState.weather.temperature = Math.round(data.current.temperature_2m);
    appState.weather.failed = false;
  } catch (error) {
    appState.weather.temperature = null;
    appState.weather.failed = true;
  }

  renderWeather();
};

const initFilmStrip = () => {
  const rail = document.querySelector("[data-film-strip]");

  if (!rail) {
    return;
  }
};

const bindComparisonSlider = (slider) => {
  const beforeLayer = slider.querySelector(".comparison-before");
  const handle = slider.querySelector(".comparison-handle");

  if (!beforeLayer || !handle) {
    return;
  }

  const setPosition = (value) => {
    const safeValue = Math.min(100, Math.max(0, value));
    slider.style.setProperty("--comparison-position", `${safeValue}%`);
    handle.style.left = `${safeValue}%`;
    slider.dataset.position = String(safeValue);
  };

  setPosition(Number(slider.dataset.position || 50));

  let dragging = false;

  const updateFromClientX = (clientX) => {
    const bounds = slider.getBoundingClientRect();
    const ratio = (clientX - bounds.left) / bounds.width;
    setPosition(ratio * 100);
  };

  const startDrag = (event) => {
    dragging = true;
    slider.classList.add("is-dragging");
    updateFromClientX(event.clientX);
    handle.setPointerCapture?.(event.pointerId);
  };

  const moveDrag = (event) => {
    if (!dragging) {
      return;
    }

    updateFromClientX(event.clientX);
  };

  const stopDrag = (event) => {
    if (!dragging) {
      return;
    }

    dragging = false;
    slider.classList.remove("is-dragging");
    handle.releasePointerCapture?.(event.pointerId);
  };

  slider.addEventListener("pointerdown", startDrag);
  slider.addEventListener("pointermove", moveDrag);
  slider.addEventListener("pointerup", stopDrag);
  slider.addEventListener("pointerleave", stopDrag);
  slider.addEventListener("pointercancel", stopDrag);
  handle.addEventListener("keydown", (event) => {
    const current = Number(slider.dataset.position || 50);

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setPosition(current - 5);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setPosition(current + 5);
    }
  });
};

const initComparisons = () => {
  document
    .querySelectorAll(".comparison-slider")
    .forEach((slider) => bindComparisonSlider(slider));
};

const initForms = () => {
  document.querySelectorAll(".lead-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");

      if (status) {
        status.textContent = getCopy().sharedForm.status;
      }

      form.reset();
    });
  });
};

const initMap = () => {
  if (typeof L === "undefined") {
    return;
  }

  const mapNode = document.getElementById("service-map");

  if (!mapNode) {
    return;
  }

  const map = L.map(mapNode, {
    zoomControl: false,
    scrollWheelZoom: false,
  });

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    subdomains: "abcd",
    maxZoom: 20,
  }).addTo(map);

  const serviceMarkerIcon = L.divIcon({
    className: "service-marker-icon",
    html: '<span class="service-marker" aria-hidden="true"><span class="service-marker__core"></span></span>',
    iconSize: [28, 36],
    iconAnchor: [14, 31],
    popupAnchor: [0, -26],
  });

  Object.entries(CITY_DATA).forEach(([cityKey, city]) => {
    const marker = L.marker(city.coords, {
      icon: serviceMarkerIcon,
    }).addTo(map);

    appState.markers.set(cityKey, marker);
  });

  const showServiceArea = () => {
    const bounds = L.latLngBounds(Object.values(CITY_DATA).map((city) => city.coords));

    map.fitBounds(bounds, {
      paddingTopLeft: [28, 24],
      paddingBottomRight: [28, Math.max(84, Math.round(mapNode.clientHeight * 0.28))],
      maxZoom: 8,
    });
  };

  requestAnimationFrame(() => {
    map.invalidateSize();
    showServiceArea();
  });

  updateMapCopy();

  const activateCity = (cityKey) => {
    const city = CITY_DATA[cityKey];

    if (!city) {
      return;
    }

    map.flyTo(city.coords, city.zoom, {
      duration: 1.4,
      easeLinearity: 0.2,
    });

    document.querySelectorAll(".city-pill").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.city === cityKey);
    });
  };

  document.querySelectorAll(".city-pill").forEach((button) => {
    button.addEventListener("click", () => activateCity(button.dataset.city));
  });
};

const initLanguageSwitcher = () => {
  getNodeList("[data-lang-option]").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLanguage = button.dataset.langOption;

      if (!isSupportedLanguage(nextLanguage) || nextLanguage === appState.language) {
        return;
      }

      applyLanguage(nextLanguage);
    });
  });

  updateLanguageSwitcher();
};

document.addEventListener("DOMContentLoaded", () => {
  appState.language = getInitialLanguage();
  initLanguageSwitcher();
  applyLanguage(appState.language);
  initRevealObserver();
  initHeroParallax();
  initWeather();
  initFilmStrip();
  initComparisons();
  initForms();
  initMap();
});
