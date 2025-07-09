// Получаем элементы меню
const toggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Глобальная переменная языка
let currentLanguage = 'ua';

// Функция закрытия мобильного меню
function closeMobileMenu() {
  toggle.classList.remove('active');
  navMenu.classList.remove('active');
}

// Открытие/закрытие мобильного меню по клику на бургер
toggle?.addEventListener('click', () => {
  toggle.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Переключение языка
function switchLanguage(lang) {
  const dropdown = document.getElementById('languageDropdown');
  const currentLangEl = document.getElementById('currentLang');
  
  // Обновление отображаемого языка
  if (currentLangEl) {
    currentLangEl.textContent = lang === 'ua' ? '🇺🇦 UA' : '🇷🇺 RU';
  }
  
  // Обновление активной кнопки в списке
  if (dropdown) {
    const options = dropdown.querySelectorAll('.language-option');
    options.forEach(option => {
      option.classList.remove('active');
      if ((lang === 'ua' && option.textContent.includes('Українська')) ||
          (lang === 'ru' && option.textContent.includes('Русский'))) {
        option.classList.add('active');
      }
    });
    dropdown.classList.remove('show'); // закрываем список языков
  }
  
  currentLanguage = lang;
  translatePage(lang);
  closeMobileMenu(); // закрываем меню
}

// Применение перевода
function translatePage(lang) {
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang]?.[key]) {
      element.textContent = translations[lang][key];
    }
  });
}

// Показ/скрытие выпадающего меню языков
function toggleLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  dropdown?.classList.toggle('show');
}

// Закрытие языка при клике вне него
document.addEventListener('click', function(event) {
  const languageSwitcher = document.querySelector('.language-switcher');
  const dropdown = document.getElementById('languageDropdown');
  if (languageSwitcher && dropdown && !languageSwitcher.contains(event.target)) {
    dropdown.classList.remove('show');
  }
});

// Закрытие меню при клике на пункт навигации
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

const translations = {
    ua: {
        // Навигация
        'nav-home': 'Головна',
        'nav-services': 'Послуги',
        'nav-advantages': 'Переваги',
        'nav-contact': 'Контакти',
        
        // Главная секция
        'hero-title': 'Chisto Sofa пропонує повний спектр професійних клінінгових послуг',
        'hero-description': 'Ми перетворюємо ваш дім та офіс в ідеально чистий простір з використанням сучасних технологій та екологічних засобів. Професійне миття терас, фасадів та повний спектр клінінгових послуг у Дніпрі!',
        'hero-cta': 'Замовити прибирання',
        
        // Услуги
        'services-title': 'Наші послуги',
        'service-general': 'Генеральне прибирання',
        'service-general-desc': 'Повне очищення всіх приміщень з використанням професійних засобів та обладнання',
        'service-maintenance': 'Підтримуюче прибирання',
        'service-maintenance-desc': 'Регулярне прибирання для підтримання чистоти та порядку у вашому домі або офісі',
        'service-office': 'Прибирання офісів',
        'service-office-desc': 'Професійне прибирання комерційних приміщень з урахуванням специфіки бізнесу',
        'service-windows': 'Миття вікон, терас та фасадів',
        'service-windows-desc': 'Якісне миття вікон на будь-якій висоті та професійне очищення терас і фасадів будівель',
        'service-furniture': 'Хімчистка м\'яких меблів',
        'service-furniture-desc': 'Глибоке очищення м\'якої мебелі та килимів з видаленням складних плям',
        'service-renovation': 'Прибирання після ремонту',
        'service-renovation-desc': 'Спеціалізоване прибирання приміщень після будівельних та ремонтних робіт',
        
        // Дополнительные услуги в форме
        'service-car': 'Хімчистка автомобілів',
        'service-warehouse': 'Прибирання складів',
        'service-ozonation': 'Озонування приміщень',
        'service-eco': 'Екологічне прибирання',
        'service-hotel': 'Прибирання готелів',
        'service-dishes': 'Миття посуду',
        
        'more-services': '➕ Ще 6 послуг',
        'modal-title': 'Додаткові послуги Chisto Sofa',
        
        // Модальное окно - Генеральная уборка
        'modal-general-title': 'Генеральне прибирання від Chisto Sofa',
        'modal-general-desc': 'Генеральне прибирання — це глибоке очищення вашого простору з увагою до кожної деталі. Ми працюємо з душею, дотримуючись високих стандартів чистоти, щоб ваш дім сяяв свіжістю.',
        'modal-general-rooms': '🛋 У кімнатах:',
        'modal-general-rooms-1': 'Знепилювання стін та стелі',
        'modal-general-rooms-2': 'Вологе протирання: карнизів, підвіконь, батарей, вимикачів, розеток, дверей, меблів і техніки',
        'modal-general-rooms-3': 'Відсовуємо легкі меблі — миємо за ними',
        'modal-general-rooms-4': 'Поліруємо дзеркала та скляні поверхні',
        'modal-general-rooms-5': 'Пилососимо, миємо підлогу та плінтус',
        'modal-general-rooms-6': 'Виносимо сміття в місце утилізації',
        'modal-general-kitchen': '🍳 У кухні:',
        'modal-general-kitchen-1': 'Усе з переліку вище +',
        'modal-general-kitchen-2': 'Миття робочої зони: фартух, стільниця, плита, раковина',
        'modal-general-kitchen-3': 'Чистка фасадів кухні згори донизу',
        'modal-general-kitchen-4': 'Миття побутової техніки ззовні',
        'modal-general-kitchen-5': 'Протираємо обідній стіл і стільці',
        'modal-general-bathroom': '🚿 У санвузлі:',
        'modal-general-bathroom-1': 'Усе з переліку кімнат +',
        'modal-general-bathroom-2': 'Миття кахлю',
        'modal-general-bathroom-3': 'Чистка вентиляційної решітки',
        'modal-general-bathroom-4': 'Видалення нальоту та іржі з сантехніки',
        'modal-general-bathroom-5': 'Полірування змішувачів, кранів, лійок',
        'modal-general-bathroom-6': 'Видалення грибка (по можливості)',
        // Галерея
        'gallery-btn': '📷 Галерея наших работ',
        'gallery-title': 'Галерея наших работ',
        'filter-all': 'Все работы',
        'filter-general': 'Генеральная',
        'filter-furniture': 'Химчистка',
        'filter-office': 'Офисы',
        'filter-renovation': 'После ремонта',
        'filter-windows': 'Окна',
        
        // Элементы галереи
        'gallery-item-1-title': 'Генеральная уборка квартиры',
        'gallery-item-1-desc': '3-комнатная квартира, 85 м². Полная уборка с мытьем всех поверхностей и дезинфекцией.',
        'gallery-item-2-title': 'Химчистка мягкого дивана',
        'gallery-item-2-desc': 'Глубокая очистка углового дивана с удалением пятен и запахов. Результат до/после.',
        'gallery-item-3-title': 'Процесс химчистки кресла',
        'gallery-item-3-desc': 'Видео процесса профессиональной химчистки офисного кресла с использованием спецоборудования.',
        'gallery-item-4-title': 'Уборка большого офиса',
        'gallery-item-4-desc': 'Офисное помещение 200 м². Ежедневная поддерживающая уборка с дезинфекцией рабочих мест.',
        'gallery-item-5-title': 'Уборка после ремонта',
        'gallery-item-5-desc': 'Новостройка после ремонтных работ. Удаление строительной пыли, остатков материалов.',
        'gallery-item-6-title': 'Мойка окон на высоте',
        'gallery-item-6-desc': 'Профессиональная мойка окон офисного здания с использованием альпинистского снаряжения.',
        'gallery-item-7-title': 'Глубокая очистка кухни',
        'gallery-item-7-desc': 'Кухня до и после генеральной уборки. Очистка жира, накипи, дезинфекция.',
        'gallery-item-8-title': 'Химчистка большого ковра',
        'gallery-item-8-desc': 'Профессиональная химчистка персидского ковра с удалением старых пятен и восстановлением цветов.',
        
        // Модальное окно - Химчистка мебели
        'modal-furniture-title': 'Хімчистка м\'яких меблів від Chisto Sofa',
        'modal-furniture-desc': 'М\'які меблі щодня накопичують пил, плями, шерсть тварин, запахи й бактерії. Звичайне прибирання не дає бажаного результату — потрібна професійна хімчистка. Ми повернемо свіжість, чистоту й колір вашому улюбленому дивану або кріслам.',
        'modal-furniture-what': '🧼 Що саме чистимо:',
        'modal-furniture-what-1': 'Дивани (прямі, кутові, розкладні)',
        'modal-furniture-what-2': 'Крісла, пуфи, банкетки',
        'modal-furniture-what-3': 'Матраци',
        'modal-furniture-what-4': 'Ліжка з м\'яким узголів\'ям',
        'modal-furniture-what-5': 'Стільці з м\'якою оббивкою',
        'modal-furniture-what-6': 'Офісні крісла',
        'modal-furniture-how': '🔹 Що ми робимо:',
        'modal-furniture-how-1': 'Пилососимо меблі та шви',
        'modal-furniture-how-2': 'Видаляємо плями, розводи, запахи',
        'modal-furniture-how-3': 'Проводимо глибоке очищення зсередини й зовні',
        'modal-furniture-how-4': 'Дезінфікуємо поверхню безпечними засобами',
        'modal-furniture-how-5': 'Виводимо шерсть, пилових кліщів і бактерії',
        'modal-furniture-how-6': 'Меблі готові до використання за кілька годин',
        'modal-furniture-tools': '✅ Використовуємо:',
        'modal-furniture-tools-1': 'Професійне обладнання',
        'modal-furniture-tools-2': 'Якісну європейську хімію',
        'modal-furniture-tools-3': 'Безпечні засоби для дітей та тварин',
        
        // Модальное окно - Уборка после ремонта
        'modal-renovation-title': 'Прибирання після ремонту від Chisto Sofa',
        'modal-renovation-desc': 'Після ремонту — пил, бруд, плями фарби, залишки скотчу й штукатурки. Ми знаємо, як усе це прибрати швидко, професійно та з турботою про ваш простір.',
        'modal-renovation-rooms': '🛏 У кімнатах:',
        'modal-renovation-rooms-1': 'Видаляємо пил зі стелі та стін',
        'modal-renovation-rooms-2': 'Чистимо залишки клею, фарби, цементу, штукатурки, скотчу (не епоксидну смолу)',
        'modal-renovation-rooms-3': 'Миємо світильники, люстри, карнизи',
        'modal-renovation-rooms-4': 'Протираємо всі поверхні: підвіконня, вимикачі, батареї, двері, розетки',
        'modal-renovation-rooms-5': 'Розпаковуємо техніку та меблі, протираємо зовні та всередині',
        'modal-renovation-rooms-6': 'Поліруємо дзеркала, скляні поверхні',
        'modal-renovation-rooms-7': 'Миємо підлогу та плінтуси, пилососимо',
        'modal-renovation-rooms-8': 'Виносимо будівельне сміття',
        'modal-renovation-kitchen': '🍽 У кухні:',
        'modal-renovation-kitchen-1': '(усе з кімнат +)',
        'modal-renovation-kitchen-2': 'Знімаємо захисну плівку з фасадів (за згодою клієнта)',
        'modal-renovation-kitchen-3': 'Протираємо шафи зовні та всередині',
        'modal-renovation-kitchen-4': 'Миємо плиту, раковину, фартух, стільницю',
        'modal-renovation-kitchen-5': 'Очищаємо техніку всередині та зовні',
        'modal-renovation-kitchen-6': 'Протираємо обідню зону: стіл і стільці',
        'modal-renovation-bathroom': '🚿 У санвузлах:',
        'modal-renovation-bathroom-1': '(усе з кімнат +)',
        'modal-renovation-bathroom-2': 'Миття кахлю та швів (зняття епоксидної смоли — це додаткова послуга)',
        'modal-renovation-bathroom-3': 'Чистка вентиляційної решітки',
        'modal-renovation-bathroom-4': 'Полірування скла в душовій',
        'modal-renovation-bathroom-5': 'Очищення сантехніки: умивальника, ванни, туалету, біде',
        'modal-renovation-bathroom-6': 'Полірування змішувачів, кранів і лійок',
        
        // Модальное окно - Уборка офисов
        'modal-office-title': 'Прибирання офісів від Chisto Sofa',
        'modal-office-desc': 'Чистий офіс — це не тільки приємно, а й необхідно:<br>☑️ Спокійна робоча атмосфера<br>☑️ Комфорт для працівників<br>☑️ Гарне перше враження для клієнтів<br>Команда Chisto Sofa професійно виконує прибирання офісних приміщень у Дніпрі та передмісті. Ми працюємо раціонально, без зайвого шуму й завжди з турботою про ваш простір.',
        'modal-office-includes': 'Що входить у прибирання офісу:',
        'modal-office-includes-1': '🧽 Протираємо пил на меблях, полицях, техніці',
        'modal-office-includes-2': '🪑 Чистимо столи, підлокітники, ручки',
        'modal-office-includes-3': '💧 Миємо підлогу, пилососимо килимові покриття',
        'modal-office-includes-4': '🖲 Протираємо двері, вимикачі, розетки',
        'modal-office-includes-5': '🧴 Дезінфікуємо контактні зони (клавіатури, миші, кнопки)',
        'modal-office-includes-6': '🚻 Очищуємо санвузли (раковина, унітаз, дзеркала)',
        'modal-office-includes-7': '☕️ Приводимо до ладу кухонну зону: стільниця, раковина, мікрохвильова',
        'modal-office-offer': 'Ми пропонуємо:',
        'modal-office-offer-1': '📆 Разове або регулярне прибирання',
        'modal-office-offer-2': '🧴 Безпечну хімію — для офісів з персоналом',
        'modal-office-offer-3': '🧼 Роботу за графіком (до або після робочого дня)',
        'modal-office-offer-4': '🔍 Якість контролює відповідальний майстер',
        'modal-office-offer-5': '📍 Працюємо по всьому Дніпру та ближніх районах',
        'modal-office-offer-6': '📲 Залиште заявку — підберемо оптимальний формат саме для вашого офісу',
        
        // Преимущества
        'advantages-title': 'Чому обирають нас',
        'advantage-4-title': 'Гарантія якості',
        'advantage-4-desc': 'Гарантуємо високу якість наших послуг та готові переробити при необхідності',
     
        
        // Форма контактов
        'contact-title': 'Замовити прибирання',
        'form-name': 'Ім\'я',
        'form-phone': 'Телефон',
        'form-service': 'Тип послуги',
        'form-service-select': 'Оберіть послугу',
        'form-address': 'Адреса',
        'form-area': 'Площа приміщення (м²)',
        'form-date': 'Бажана дата',
        'form-time': 'Бажаний час',
        'form-comments': 'Додаткові побажання',
        'form-name-placeholder': 'Введіть ваше ім\'я',
        'form-address-placeholder': 'Введіть адресу для виконання робіт',
        'form-area-placeholder': 'Введіть площу приміщення',
        'form-comments-placeholder': 'Опишіть особливості роботи або додаткові побажання',
        'form-submit': 'Відправити заявку',
        'form-whatsapp': 'Замовити через WhatsApp',
        'emergency-call': 'Срочный звонок',
        
        // Футер
        'footer-contacts': 'Контакти',
        'footer-location': '📍 Дніпро, Україна',
        'footer-hours': 'Робочий час',
        'footer-weekdays': 'Пн-Пт: 8:00 - 20:00',
        'footer-weekend': 'Сб-Нд: 9:00 - 18:00',
        'footer-support': 'Цілодобова підтримка для екстрених випадків',
        'footer-social': 'Соціальні мережі',
        'footer-copyright': '© 2024 Chisto Sofa. Всі права захищені.'
    },
    ru: {
        // Навигация
        'nav-home': 'Главная',
        'nav-services': 'Услуги',
        'nav-advantages': 'Преимущества',
        'nav-contact': 'Контакты',
        
        // Главная секция
        'hero-title': 'Chisto Sofa предлагает полный спектр профессиональных клининговых услуг',
        'hero-description': 'Мы превращаем ваш дом и офис в идеально чистое пространство с использованием современных технологий и экологических средств. Профессиональная мойка террас, фасадов и полный спектр клининговых услуг в Днепре!',
        'hero-cta': 'Заказать уборку',
        
        // Услуги
        'services-title': 'Наши услуги',
        'service-general': 'Генеральная уборка',
        'service-general-desc': 'Полная очистка всех помещений с использованием профессиональных средств и оборудования',
        'service-maintenance': 'Поддерживающая уборка',
        'service-maintenance-desc': 'Регулярная уборка для поддержания чистоты и порядка в вашем доме или офисе',
        'service-office': 'Уборка офисов',
        'service-office-desc': 'Профессиональная уборка коммерческих помещений с учетом специфики бизнеса',
        'service-windows': 'Мойка окон, террас и фасадов',
        'service-windows-desc': 'Качественная мойка окон на любой высоте и профессиональная очистка террас и фасадов зданий',
        'service-furniture': 'Химчистка мягкой мебели',
        'service-furniture-desc': 'Глубокая очистка мягкой мебели и ковров с удалением сложных пятен',
        'service-renovation': 'Уборка после ремонта',
        'service-renovation-desc': 'Специализированная уборка помещений после строительных и ремонтных работ',
        
        
        'modal-title': 'Дополнительные услуги Chisto Sofa',
        
        // Модальное окно - Генеральная уборка
        'modal-general-title': 'Генеральная уборка от Chisto Sofa',
        'modal-general-desc': 'Генеральная уборка — это глубокая очистка вашего пространства с вниманием к каждой детали. Мы работаем с душой, соблюдая высокие стандарты чистоты, чтобы ваш дом сиял свежестью.',
        'modal-general-rooms': '🛋 В комнатах:',
        'modal-general-rooms-1': 'Удаление пыли со стен и потолка',
        'modal-general-rooms-2': 'Влажная протирка: карнизов, подоконников, батарей, выключателей, розеток, дверей, мебели и техники',
        'modal-general-rooms-3': 'Отодвигаем легкую мебель — моем за ней',
        'modal-general-rooms-4': 'Полируем зеркала и стеклянные поверхности',
        'modal-general-rooms-5': 'Пылесосим, моем пол и плинтуса',
        'modal-general-rooms-6': 'Выносим мусор в место утилизации',
        'modal-general-kitchen': '🍳 На кухне:',
        'modal-general-kitchen-1': 'Все из списка выше +',
        'modal-general-kitchen-2': 'Мытье рабочей зоны: фартук, столешница, плита, раковина',
        'modal-general-kitchen-3': 'Чистка фасадов кухни сверху донизу',
        'modal-general-kitchen-4': 'Мытье бытовой техники снаружи',
        'modal-general-kitchen-5': 'Протираем обеденную зону: стол и стулья',
        'modal-general-bathroom': '🚿 В санузле:',
        'modal-general-bathroom-1': 'Все из списка комнат +',
        'modal-general-bathroom-2': 'Мытье кафеля',
        'modal-general-bathroom-3': 'Чистка вентиляционной решетки',
        'modal-general-bathroom-4': 'Удаление налета и ржавчины с сантехники',
        'modal-general-bathroom-5': 'Полировка смесителей, кранов, леек',
        'modal-general-bathroom-6': 'Удаление грибка (по возможности)',
        
        // Модальное окно - Химчистка мебели
        'modal-furniture-title': 'Химчистка мягкой мебели от Chisto Sofa',
        'modal-furniture-desc': 'Мягкая мебель ежедневно накапливает пыль, пятна, шерсть животных, запахи и бактерии. Обычная уборка не дает желаемого результата — нужна профессиональная химчистка. Мы вернем свежесть, чистоту и цвет вашему любимому дивану или креслам.',
        'modal-furniture-what': '🧼 Что именно чистим:',
        'modal-furniture-what-1': 'Диваны (прямые, угловые, раскладные)',
        'modal-furniture-what-2': 'Кресла, пуфы, банкетки',
        'modal-furniture-what-3': 'Матрасы',
        'modal-furniture-what-4': 'Кровати с мягким изголовьем',
        'modal-furniture-what-5': 'Стулья с мягкой обивкой',
        'modal-furniture-what-6': 'Офисные кресла',
        'modal-furniture-how': '🔹 Что мы делаем:',
        'modal-furniture-how-1': 'Пылесосим мебель и швы',
        'modal-furniture-how-2': 'Удаляем пятна, разводы, запахи',
        'modal-furniture-how-3': 'Проводим глубокую очистку изнутри и снаружи',
        'modal-furniture-how-4': 'Дезинфицируем поверхность безопасными средствами',
        'modal-furniture-how-5': 'Выводим шерсть, пылевых клещей и бактерии',
        'modal-furniture-how-6': 'Мебель готова к использованию через несколько часов',
        'modal-furniture-tools': '✅ Используем:',
        'modal-furniture-tools-1': 'Профессиональное оборудование',
        'modal-furniture-tools-2': 'Качественную европейскую химию',
        'modal-furniture-tools-3': 'Безопасные средства для детей и животных',
        
        // Модальное окно - Уборка после ремонта
        'modal-renovation-title': 'Уборка после ремонта от Chisto Sofa',
        'modal-renovation-desc': 'После ремонта — пыль, грязь, пятна краски, остатки скотча и штукатурки. Мы знаем, как все это убрать быстро, профессионально и с заботой о вашем пространстве.',
        'modal-renovation-rooms': '🛏 В комнатах:',
        'modal-renovation-rooms-1': 'Удаляем пыль с потолка и стен',
        'modal-renovation-rooms-2': 'Чистим остатки клея, краски, цемента, штукатурки, скотча (не эпоксидную смолу)',
        'modal-renovation-rooms-3': 'Моем светильники, люстры, карнизы',
        'modal-renovation-rooms-4': 'Протираем все поверхности: подоконники, выключатели, батареи, двери, розетки',
        'modal-renovation-rooms-5': 'Распаковываем технику и мебель, протираем снаружи и внутри',
        'modal-renovation-rooms-6': 'Полируем зеркала, стеклянные поверхности',
        'modal-renovation-rooms-7': 'Моем пол и плинтуса, пылесосим',
        'modal-renovation-rooms-8': 'Выносим строительный мусор',
        'modal-renovation-kitchen': '🍽 На кухне:',
        'modal-renovation-kitchen-1': '(все из комнат +)',
        'modal-renovation-kitchen-2': 'Снимаем защитную пленку с фасадов (по согласию клиента)',
        'modal-renovation-kitchen-3': 'Протираем шкафы снаружи и внутри',
        'modal-renovation-kitchen-4': 'Моем плиту, раковину, фартук, столешницу',
        'modal-renovation-kitchen-5': 'Очищаем технику внутри и снаружи',
        'modal-renovation-kitchen-6': 'Протираем обеденную зону: стол и стулья',
        'modal-renovation-bathroom': '🚿 В санузлах:',
        'modal-renovation-bathroom-1': '(все из комнат +)',
        'modal-renovation-bathroom-2': 'Мытье кафеля и швов (снятие эпоксидной смолы — это дополнительная услуга)',
        'modal-renovation-bathroom-3': 'Чистка вентиляционной решетки',
        'modal-renovation-bathroom-4': 'Полировка стекла в душевой',
        'modal-renovation-bathroom-5': 'Очистка сантехники: умывальника, ванны, туалета, биде',
        'modal-renovation-bathroom-6': 'Полировка смесителей, кранов и леек',
        
        // Модальное окно - Уборка офисов
        'modal-office-title': 'Уборка офисов от Chisto Sofa',
        'modal-office-desc': 'Чистый офис — это не только приятно, но и необходимо:<br>☑️ Спокойная рабочая атмосфера<br>☑️ Комфорт для сотрудников<br>☑️ Хорошее первое впечатление для клиентов<br>Команда Chisto Sofa профессионально выполняет уборку офисных помещений в Днепре и пригороде. Мы работаем рационально, без лишнего шума и всегда с заботой о вашем пространстве.',
        'modal-office-includes': 'Что входит в уборку офиса:',
        'modal-office-includes-1': '🧽 Протираем пыль на мебели, полках, технике',
        'modal-office-includes-2': '🪑 Чистим столы, подлокотники, ручки',
        'modal-office-includes-3': '💧 Моем пол, пылесосим ковровые покрытия',
        'modal-office-includes-4': '🖲 Протираем двери, выключатели, розетки',
        'modal-office-includes-5': '🧴 Дезинфицируем контактные зоны (клавиатуры, мыши, кнопки)',
        'modal-office-includes-6': '🚻 Очищаем санузлы (раковина, унитаз, зеркала)',
	  'modal-office-includes-7': '☕️ Приводим в порядок кухонную зону: столешница, раковина, микроволновая',
       'modal-office-offer': 'Мы предлагаем:',
       'modal-office-offer-1': '📆 Разовая или регулярная уборка',
       'modal-office-offer-2': '🧴 Безопасная химия — для офисов с персоналом',
       'modal-office-offer-3': '🧼 Работа по графику (до или после рабочего дня)',
       'modal-office-offer-4': '🔍 Качество контролирует ответственный мастер',
       'modal-office-offer-5': '📍 Работаем по всему Днепру и ближайшим районам',
       'modal-office-offer-6': '📲 Оставьте заявку — подберем оптимальный формат именно для вашего офиса',
       
       // Преимущества
       'advantages-title': 'Почему выбирают нас',
       'advantage-1-title': 'Профессиональная команда',
       'advantage-1-desc': 'Опытные специалисты с сертификатами и многолетним опытом работы',
       'advantage-2-title': 'Современное оборудование',
       'advantage-2-desc': 'Используем новейшее профессиональное оборудование для достижения идеального результата',
       'advantage-3-title': 'Экологические средства',
       'advantage-3-desc': 'Применяем безопасные для здоровья и окружающей среды моющие средства',
       'advantage-4-title': 'Гарантия качества',
       'advantage-4-desc': 'Гарантируем высокое качество наших услуг и готовы переделать при необходимости',
       'advantage-5-title': 'Доступные цены',
       'advantage-5-desc': 'Предлагаем конкурентные цены и гибкую систему скидок для постоянных клиентов',
       'advantage-6-title': 'Скорость выполнения',
       'advantage-6-desc': 'Выполняем работу качественно и в установленные сроки без задержек',
       
       // Форма контактов
       'contact-title': 'Заказать уборку',
       'form-name': 'Имя',
       'form-phone': 'Телефон',
       'form-service': 'Тип услуги',
       'form-service-select': 'Выберите услугу',
       'form-address': 'Адрес',
       'form-area': 'Площадь помещения (м²)',
       'form-date': 'Желаемая дата',
       'form-time': 'Желаемое время',
       'form-comments': 'Дополнительные пожелания',
       'form-name-placeholder': 'Введите ваше имя',
       'form-address-placeholder': 'Введите адрес для выполнения работ',
       'form-area-placeholder': 'Введите площадь помещения',
       'form-comments-placeholder': 'Опишите особенности работы или дополнительные пожелания',
       'form-submit': 'Отправить заявку',
       'form-whatsapp': 'Заказать через WhatsApp',
       'emergency-call': 'Срочный звонок',
       
       // Футер
       'footer-contacts': 'Контакты',
       'footer-location': '📍 Днепр, Украина',
       'footer-hours': 'Рабочее время',
       'footer-weekdays': 'Пн-Пт: 8:00 - 20:00',
       'footer-weekend': 'Сб-Вс: 9:00 - 18:00',
       'footer-support': 'Круглосуточная поддержка для экстренных случаев',
       'footer-social': 'Социальные сети',
       'footer-copyright': '© 2024 Chisto Sofa. Все права защищены.'

       
   }
};

        // Анимация появления элементов при скролле
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-on-scroll');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, { threshold: 0.1 });

            elements.forEach(element => {
                observer.observe(element);
            });
        }

        // Плавный скролл к якорям
        function smoothScroll() {
            const links = document.querySelectorAll('a[href^="#"]');
            links.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }

        /// Соответствие типов услуг к карточкам в модальном окне
        const serviceCardMap = {
            'general': 0,      // Генеральное уборка - первая карточка
            'furniture': 1,    // Химчистка мебели - вторая карточка  
            'renovation': 2,   // Уборка после ремонта - третья карточка
            'office': 3,       // Уборка офисов - четвертая карточка
            'maintenance': 4,  // Поддерживающая уборка - пятая карточка
            'windows': 5       // Мытье окон - шестая карточка
        };
        // Открытие модального окна для конкретной услуги
        function openServiceModal(serviceType) {
            const modal = document.getElementById('servicesModal');
            
            if (modal) {
                // Показываем конкретную карточку услуги
                showSpecificServiceCard(serviceType);
                
                // Открываем модальное окно
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                
                // Добавляем плавное появление
                setTimeout(() => {
                    modal.style.opacity = '1';
                }, 10);
            }
        }

        // Функции для модального окна (ОБНОВЛЕННАЯ ВЕРСИЯ)
        function openModal() {
            const modal = document.getElementById('servicesModal');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Показываем все карточки при обычном открытии
            showAllServiceCards();
            
            // Добавляем плавное появление
            setTimeout(() => {
                modal.style.opacity = '1';
            }, 10);
        }

        function closeModal() {
            const modal = document.getElementById('servicesModal');
            modal.style.opacity = '0';
            
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }, 300);
        }

        // Показ конкретной карточки услуги
        function showSpecificServiceCard(serviceType) {
            const allCards = document.querySelectorAll('.modal-service-card');
            const cardIndex = serviceCardMap[serviceType];
            
            // Скрываем все карточки
            allCards.forEach((card, index) => {
                if (index === cardIndex) {
                    card.style.display = 'flex';
                    card.style.maxWidth = '600px';
                    card.style.width = '100%';
                } else {
                    card.style.display = 'none';
                }
            });
            
            // Изменяем стиль контейнера для одной карточки
            const servicesRow = document.querySelector('.modal-services-row');
            if (servicesRow) {
                servicesRow.style.justifyContent = 'center';
                servicesRow.classList.add('single-card');
            }
        }

        // Показ всех карточек услуг (для обычного открытия)
        function showAllServiceCards() {
            const allCards = document.querySelectorAll('.modal-service-card');
            
            // Показываем все карточки
            allCards.forEach(card => {
                card.style.display = 'flex';
                card.style.maxWidth = '480px';
                card.style.width = 'auto';
            });
            
            // Возвращаем обычный стиль контейнера
            const servicesRow = document.querySelector('.modal-services-row');
            if (servicesRow) {
                servicesRow.style.justifyContent = 'center';
                servicesRow.classList.remove('single-card');
            }
        }

        // Обработка формы
        // Обработка формы с отправкой в Telegram
document.getElementById('cleaningForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    
    sendToTelegram(data);
});

// Функция отправки в Telegram
async function sendToTelegram(formData) {
    // ЗАМЕНИТЕ НА ВАШИ ДАННЫЕ:
    const BOT_TOKEN = '7194194086:AAGrFIAPKYi9hn_O2a9Mv5aPHYKhBfcEyuY'; // Ваш токен бота
    const CHAT_ID = '-1002876520194';     // Ваш chat ID
    
    // Формируем красивое сообщение
    let message = `🧹 <b>НОВА ЗАЯВКА НА ПРИБИРАННЯ</b>\n\n`;
    
    if (formData.name) message += `👤 <b>Ім'я:</b> ${formData.name}\n`;
    if (formData.phone) message += `📞 <b>Телефон:</b> ${formData.phone}\n`;
    if (formData.service) message += `🛠 <b>Послуга:</b> ${formData.service}\n`;
    if (formData.address) message += `📍 <b>Адреса:</b> ${formData.address}\n`;
    if (formData.area) message += `📏 <b>Площа:</b> ${formData.area} м²\n`;
    if (formData.date) message += `📅 <b>Дата:</b> ${formData.date}\n`;
    if (formData.time) message += `🕐 <b>Час:</b> ${formData.time}\n`;
    if (formData.comments) message += `💬 <b>Коментарі:</b> ${formData.comments}\n`;
    
    message += `\n⏰ <b>Час подачі заявки:</b> ${new Date().toLocaleString('uk-UA')}`;
    
    try {
        // Показываем процесс отправки
        const submitBtn = document.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Відправляємо...';
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        
        // Отправляем через Telegram Bot API
        const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        const result = await response.json();
        
        if (response.ok && result.ok) {
            // Успешно отправлено
            showSuccessMessage();
            document.getElementById('cleaningForm').reset();
        } else {
            throw new Error(result.description || 'Помилка відправки');
        }
        
    } catch (error) {
        console.error('Ошибка отправки:', error);
        showErrorMessage();
    } finally {
        // Восстанавливаем кнопку
        const submitBtn = document.querySelector('.submit-btn');
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
    }
}

// Функция показа успешного сообщения
function showSuccessMessage() {
    // Создаем красивое уведомление
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #4CAF50, #45a049);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(76, 175, 80, 0.3);
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.5s ease-out;
        ">
            ✅ Дякуємо за заявку!<br>
            <small>Ми зв'яжемося з вами найближчим часом</small>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Добавляем анимацию
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Убираем уведомление через 4 секунды
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

// Функция показа ошибки
function showErrorMessage() {
    const notification = document.createElement('div');
    notification.innerHTML = `
        <div style="
            position: fixed;
            top: 20px;
            right: 20px;
            background: linear-gradient(45deg, #f44336, #d32f2f);
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(244, 67, 54, 0.3);
            z-index: 10000;
            font-weight: bold;
            animation: slideIn 0.5s ease-out;
        ">
            ❌ Помилка відправки<br>
            <small>Спробуйте ще раз або зателефонуйте нам</small>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}


// ===== МОДАЛЬНОЕ ОКНО "ПРО КОМПАНІЮ" =====

function openAboutModal() {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.style.display = 'block';
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        if (typeof closeMobileMenu === 'function') {
            closeMobileMenu();
        }
    }
}

function closeAboutModal() {
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

function initAboutModal() {
    // Настройка навигационной ссылки
    const aboutLink = document.querySelector('a[href="#about"]');
    if (aboutLink) {
        aboutLink.removeAttribute('onclick');
        aboutLink.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openAboutModal();
        });
    }

    // Настройка кнопки закрытия
    const closeBtn = document.querySelector('#aboutModal .close-modal');
    if (closeBtn) {
        closeBtn.removeAttribute('onclick');
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            closeAboutModal();
        });
    }

    // Закрытие при клике вне модального окна
    const modal = document.getElementById('aboutModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeAboutModal();
            }
        });

        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        }
    }

    // Закрытие по Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('aboutModal');
            if (modal && modal.style.display === 'block') {
                closeAboutModal();
            }
        }
    });
}

// Инициализация About Modal
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(initAboutModal, 100);
});
    

  
 // === ОБНОВЛЕННЫЙ JAVASCRIPT ДЛЯ ГАЛЕРЕИ ===


let currentMediaIndex = 0;
let filteredItems = [];

// Данные медиафайлов (ваши файлы)
const galleryMedia = [
    { type: 'video', src: 'img/1.mp4' },
    { type: 'image', src: 'img/2.jpeg' },
    { type: 'video', src: 'img/3.mp4' },
    { type: 'video', src: 'img/4.mp4' },
    { type: 'video', src: 'img/5.mp4' },
    { type: 'video', src: 'img/6.mp4' },
    { type: 'video', src: 'img/7.mp4' }
];

function openGalleryModal() {
    document.getElementById('galleryModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
    updateFilteredItems();
    // Настраиваем видео с задержкой для плавности
    setTimeout(setupAllVideos, 100);
    if (typeof closeMobileMenu === 'function') {
        closeMobileMenu();
    }
}

function closeGalleryModal() {
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = 'auto';
    pauseAllVideos();
}

function filterGallery(category) {
    // Обновляем активную кнопку
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Фильтруем элементы
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    updateFilteredItems();
}

function updateFilteredItems() {
    const visibleItems = document.querySelectorAll('.gallery-item[style*="block"], .gallery-item:not([style*="none"])');
    filteredItems = Array.from(visibleItems);
}

function openFullscreen(index) {
    currentMediaIndex = index;
    const media = galleryMedia[index];
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenImage = document.getElementById('fullscreenImage');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    
    if (media.type === 'image') {
        fullscreenImage.src = media.src;
        fullscreenImage.style.display = 'block';
        fullscreenVideo.style.display = 'none';
        fullscreenVideo.pause();
    } else if (media.type === 'video') {
        fullscreenVideo.querySelector('source').src = media.src;
        fullscreenVideo.load();
        
        // Оптимизированные настройки видео
        fullscreenVideo.muted = true;
        fullscreenVideo.style.display = 'block';
        fullscreenImage.style.display = 'none';
    }
    
    fullscreenModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeFullscreen() {
    const fullscreenModal = document.getElementById('fullscreenModal');
    const fullscreenVideo = document.getElementById('fullscreenVideo');
    
    fullscreenModal.style.display = 'none';
    fullscreenVideo.pause();
    document.body.style.overflow = 'auto';
}

function nextMedia() {
    currentMediaIndex = (currentMediaIndex + 1) % galleryMedia.length;
    openFullscreen(currentMediaIndex);
}

function prevMedia() {
    currentMediaIndex = currentMediaIndex === 0 ? galleryMedia.length - 1 : currentMediaIndex - 1;
    openFullscreen(currentMediaIndex);
}

function playVideo(button) {
    const video = button.parentElement.querySelector('video');
    
    // Простые настройки без тормозов
    video.muted = true;
    
    if (video.paused) {
        video.play().then(() => {
            button.textContent = '⏸';
            button.style.background = 'rgba(255, 255, 255, 0.7)';
        }).catch(error => {
            console.log('Ошибка воспроизведения видео:', error);
        });
    } else {
        video.pause();
        button.textContent = '▶';
        button.style.background = 'rgba(255, 255, 255, 0.9)';
    }
}

function setupAllVideos() {
    const videos = document.querySelectorAll('.gallery-item video');
    videos.forEach(video => {
        // Минимальные настройки для производительности
        video.muted = true;
        video.preload = 'none'; // Не загружаем видео заранее
        video.controls = false;
        
        // Оптимизированные обработчики
        video.addEventListener('loadeddata', function() {
            this.muted = true;
        }, { once: true });
        
        video.addEventListener('error', function() {
            console.log('Ошибка загрузки видео:', this.src);
        }, { once: true });
    });
}

function pauseAllVideos() {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
    });
    
    // Сбрасываем кнопки воспроизведения
    const playButtons = document.querySelectorAll('.video-play-btn');
    playButtons.forEach(button => {
        button.textContent = '▶';
        button.style.background = 'rgba(255, 255, 255, 0.9)';
    });
}

// Обновить существующий обработчик window.onclick
const originalWindowClick = window.onclick;
window.onclick = function(event) {
    // Существующий код для других модальных окон
    if (originalWindowClick) {
        originalWindowClick(event);
    }
    
    // Добавляем обработку для галереи
    const galleryModal = document.getElementById('galleryModal');
    const fullscreenModal = document.getElementById('fullscreenModal');
    
    if (event.target === galleryModal) {
        closeGalleryModal();
    }
    if (event.target === fullscreenModal) {
        closeFullscreen();
    }
}

// Добавить к существующему обработчику keydown
document.addEventListener('keydown', function(e) {
    const fullscreenModal = document.getElementById('fullscreenModal');
    if (fullscreenModal && fullscreenModal.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextMedia();
        if (e.key === 'ArrowLeft') prevMedia();
        if (e.key === 'Escape') closeFullscreen();
        if (e.key === ' ') {
            e.preventDefault();
            const video = fullscreenModal.querySelector('video[style*="block"]');
            if (video) {
                video.muted = true;
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            }
        }
    }
    
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal && galleryModal.style.display === 'block' && e.key === 'Escape') {
        closeGalleryModal();
    }
});

// Оптимизированная инициализация
document.addEventListener('DOMContentLoaded', function() {
    updateFilteredItems();
    
    // Автопауза видео при потере фокуса
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
    
    // Убираем тяжелые интервалы и observer'ы для производительности
    // Настройка видео только при необходимости
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateFilteredItems();
    
    // Автопаузы видео при потере фокуса
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            pauseAllVideos();
        }
    });
});
        // Функция для заказа через WhatsApp
        function contactWhatsApp() {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const address = document.getElementById('address').value;
            const area = document.getElementById('area').value;
            const date = document.getElementById('date').value;
            const time = document.getElementById('time').value;
            const comments = document.getElementById('comments').value;
            
            let message = `Привіт! Хочу замовити прибирання:\n\n`;
            if (name) message += `Ім'я: ${name}\n`;
            if (phone) message += `Телефон: ${phone}\n`;
            if (service) message += `Послуга: ${service}\n`;
            if (address) message += `Адреса: ${address}\n`;
            if (area) message += `Площа: ${area} м²\n`;
            if (date) message += `Дата: ${date}\n`;
            if (time) message += `Час: ${time}\n`;
            if (comments) message += `Коментарі: ${comments}\n`;
            
            const whatsappUrl = `https://wa.me/+380937983888?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        }

        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            animateOnScroll();
            smoothScroll();
            
            // Установка минимальной даты на сегодня
            const today = new Date().toISOString().split('T')[0];
            document.getElementById('date').setAttribute('min', today);
        });

        // Эффект для навигации при скролле
        window.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(13, 20, 33, 0.98)';
            } else {
                header.style.background = 'rgba(13, 20, 33, 0.95)';
            }
        });