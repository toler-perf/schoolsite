const schoolsData = [
  {
    id: "foxford",
    name: "Фоксфорд",
    logoInitial: "Ф",
    logoUrl: "images/logos/foxford.jpeg",
    description:
      "Крупная онлайн-школа для учеников 1–11 классов, подготовка к ЕГЭ, ОГЭ и олимпиадам. Интерактивные курсы с опытными преподавателями.",
    price: "От 2 990 ₽/мес",
    reviews: [
      {
        author: "Анна К.",
        text: "Отличная подготовка к профильной математике, сын сдал на 92 балла!",
      },
      {
        author: "Дмитрий",
        text: "Удобная платформа, много пробников. Рекомендую.",
      },
    ],
    siteUrl: "https://foxford.ru",
  },
  {
    id: "interneturok",
    name: "ИнтернетУрок",
    logoInitial: "И",
    logoUrl: "images/logos/interneturok.jpg",
    description:
      "Библиотека видеоуроков по школьной программе, домашняя школа и аттестация. Подходит для семейного обучения.",
    price: "от 1 290 ₽/мес (доступ к урокам)",
    reviews: [
      {
        author: "Елена В.",
        text: "Спасибо за понятные видео, дочка теперь не боится физики.",
      },
      { author: "Олег", text: "Хорошая альтернатива обычной школе." },
    ],
    siteUrl: "https://interneturok.ru",
  },
  {
    id: "school1",
    name: "Онлайн-школа №1",
    logoInitial: "1",
    logoUrl: "images/logos/school1.png",
    description:
      "Подготовка к ЕГЭ и ОГЭ с нуля, авторские методики, личный наставник. Высокие результаты учеников.",
    price: "от 3 490 ₽/курс",
    reviews: [
      {
        author: "Марина С.",
        text: "Поступила на бюджет благодаря интенсивным курсам.",
      },
      {
        author: "Игорь",
        text: "Грамотные преподаватели, всегда обратная связь.",
      },
    ],
    siteUrl: "https://onlineschool-1.ru",
  },
  {
    id: "algoritm",
    name: "Алгоритм",
    logoInitial: "А",
    logoUrl: "images/logos/algoritm.png",
    description:
      "Школа программирования и IT для детей и подростков. Курсы Python, GameDev, веб-разработка.",
    price: "от 4 200 ₽/мес",
    reviews: [
      {
        author: "Светлана",
        text: "Сын в восторге от Unity, преподаватели профессионалы.",
      },
    ],
    siteUrl: "https://algoritmika.org",
  },
  {
    id: "ibls",
    name: "IBLS",
    logoInitial: "I",
    logoUrl: "images/logos/ibls.jpg",
    description:
      "Обучение английскому языку для детей и взрослых по коммуникативной методике. Разговорные клубы.",
    price: "от 1 890 ₽/мес",
    reviews: [
      {
        author: "Алексей",
        text: "За полгода подтянул разговорный с A2 до B1.",
      },
    ],
    siteUrl: "https://ibls.com",
  },
  {
    id: "bit",
    name: "Бит",
    logoInitial: "Б",
    logoUrl: "images/logos/bit.webp",
    description:
      "IT-образование, курсы по разработке, аналитике и дизайну. Стажировки и проекты.",
    price: "от 5 500 ₽/курс",
    reviews: [
      {
        author: "Карина",
        text: "Помогли с трудоустройством после курса frontend.",
      },
    ],
    siteUrl: "https://bit.ru",
  },
  {
    id: "spbu",
    name: "Онлайн-школа СПбГУ",
    logoInitial: "С",
    logoUrl: "images/logos/spbu.jpg",
    description:
      "Официальные подготовительные курсы от Санкт-Петербургского университета. Программы по разным предметам.",
    price: "от 7 900 ₽/семестр",
    reviews: [
      { author: "Никита", text: "Преподаватели из вуза, высокий уровень." },
    ],
    siteUrl: "https://online.spbu.ru",
  },
  {
    id: "umschool",
    name: "Умскул",
    logoInitial: "У",
    logoUrl: "images/logos/umschool.png",
    description:
      "Подготовка к ЕГЭ и ОГЭ в формате вебинаров с кураторами. Огромная база заданий.",
    price: "от 2 490 ₽/мес",
    reviews: [
      { author: "Вика", text: "Сдала обществознание на 96, спасибо команде!" },
    ],
    siteUrl: "https://umschool.net",
  },
  {
    id: "100ball",
    name: "100балльный репетитор",
    logoInitial: "100",
    logoUrl: "images/logos/100ball.jpg",
    description:
      "Курсы подготовки к ЕГЭ с высокими баллами. Авторские методики и пробные экзамены.",
    price: "от 3 200 ₽/мес",
    reviews: [
      { author: "Артем", text: "Физика стала понятной, результат 89 баллов." },
    ],
    siteUrl: "https://100ballnik.com",
  },
  {
    id: "webium",
    name: "Вебиум",
    logoInitial: "В",
    logoUrl: "images/logos/webium.jpg",
    description:
      "Онлайн-школа с фокусом на результат, ЕГЭ и ОГЭ. Умные тренажеры и персональный трекер.",
    price: "от 2 990 ₽/курс",
    reviews: [
      { author: "Юлия", text: "Платформа очень удобная, много практики." },
    ],
    siteUrl: "https://webium.ru",
  },
  {
    id: "smitu",
    name: "СмитАп (SMITUP)",
    logoInitial: "S",
    logoUrl: "images/logos/smitu.jpeg",
    description:
      "Подготовка к ЕГЭ, ОГЭ и олимпиадам. Эксперты предметники, закрытые вебинары.",
    price: "от 3 490 ₽/мес",
    reviews: [
      { author: "Глеб", text: "Интенсивная подготовка, материалы супер." },
    ],
    siteUrl: "https://smitup.ru",
  },
  {
    id: "skillbox",
    name: "Skillbox",
    logoInitial: "Sk",
    logoUrl: "images/logos/skillbox.png",
    description:
      "Университет цифровых профессий: дизайн, маркетинг, программирование, игры. Дипломные проекты.",
    price: "от 3 800 ₽/мес",
    reviews: [
      { author: "Максим", text: "После курса по Python сразу нашел работу." },
    ],
    siteUrl: "https://skillbox.ru",
  },
  {
    id: "yapraktikum",
    name: "Яндекс Практикум",
    logoInitial: "Я",
    logoUrl: "images/logos/yapraktikum.png",
    description:
      "Практические курсы по IT-профессиям с код-ревью и поддержкой наставников.",
    price: "от 5 000 ₽/мес",
    reviews: [
      {
        author: "Алина",
        text: "Стала веб-разработчиком с нуля за 10 месяцев.",
      },
    ],
    siteUrl: "https://practicum.yandex.ru",
  },
  {
    id: "netology",
    name: "Нетология",
    logoInitial: "Н",
    logoUrl: "images/logos/netology.jpg",
    description:
      "Высшее образование онлайн, MBA, курсы для профессионалов в маркетинге, управлении и IT.",
    price: "от 4 200 ₽/мес",
    reviews: [
      { author: "Ольга", text: "Отличные программы профпереподготовки." },
    ],
    siteUrl: "https://netology.ru",
  },
  {
    id: "geekbrains",
    name: "GeekBrains",
    logoInitial: "GB",
    logoUrl: "images/logos/geekbrains.png",
    description:
      "IT-университет с факультетами разработки, аналитики, DevOps, кибербезопасности.",
    price: "от 3 500 ₽/мес",
    reviews: [
      { author: "Стас", text: "Карьерный центр помог найти стажировку." },
    ],
    siteUrl: "https://geekbrains.ru",
  },
  {
    id: "skillfactory",
    name: "Skillfactory",
    logoInitial: "SF",
    logoUrl: "images/logos/skillfactory.jpeg",
    description:
      "Обучение Data Science, аналитике, менеджменту. Гарантия трудоустройства.",
    price: "от 6 900 ₽/мес",
    reviews: [{ author: "Илья", text: "Стал аналитиком данных после курса." }],
    siteUrl: "https://skillfactory.ru",
  },
  {
    id: "skypro",
    name: "Skypro",
    logoInitial: "Sp",
    logoUrl: "images/logos/skypro.webp",
    description:
      "Профессии в IT, дизайне, маркетинге с поддержкой наставников и карьерным центром.",
    price: "от 4 500 ₽/мес",
    reviews: [{ author: "Антон", text: "Удобный формат, много практики." }],
    siteUrl: "https://sky.pro",
  },
  {
    id: "skyeng",
    name: "Skyeng",
    logoInitial: "Sg",
    logoUrl: "images/logos/skyeng.png",
    description:
      "Интерактивная онлайн-школа английского языка с личным учителем и платформой Vimbox.",
    price: "от 1 490 ₽/урок",
    reviews: [
      { author: "Наталья", text: "Прогресс заметен через месяц занятий." },
    ],
    siteUrl: "https://skyeng.ru",
  },
  {
    id: "inglex",
    name: "Инглекс",
    logoInitial: "ИН",
    logoUrl: "images/logos/inglex.jpg",
    description:
      "Обучение английскому с носителями и русскоязычными преподавателями. Индивидуальный план.",
    price: "от 1 590 ₽/урок",
    reviews: [
      { author: "Александр", text: "Отличные разговорные клубы в подарок." },
    ],
    siteUrl: "https://inglex.ru",
  },
  {
    id: "lingualeo",
    name: "Lingualeo",
    logoInitial: "L",
    logoUrl: "images/logos/lingualeo.png",
    description:
      "Платформа для самостоятельного изучения английского: игры, тексты, видео, грамматика.",
    price: "от 699 ₽/мес (Premium)",
    reviews: [
      { author: "Дарья", text: "Лучший сервис для словарного запаса." },
    ],
    siteUrl: "https://lingualeo.com",
  },
];
