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
  if (lang === 'ru') {
    window.location.href = 'index-Ru.html';
    return;
  }
  if (lang === 'ua') {
    window.location.href = 'index.html';
    return;
  }
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
        

        // Инициализация
        document.addEventListener('DOMContentLoaded', function() {
            animateOnScroll();
            smoothScroll();
            
            
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
