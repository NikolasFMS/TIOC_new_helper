// Звуки игры
const clickSound = new Audio('audio/click.mp3'); // Звук клика
const dropSound = new Audio('audio/drop.mp3'); // Звук сброса карты

let roundNum = 1; // Номер текущего раунда
let openCatsCards = [];
let openLesCards = [];

window.onload = async function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('Service Worker зарегистрирован с областью:', registration.scope);
            })
            .catch(error => {
                console.error('Ошибка при регистрации Service Worker:', error);
            });
    }
    setTimeout(() => {
        toggleVisibility('.preloader_malc')
    }, 700); // Задержка в 700 мс
}

// Функция для генерации случайного числа с учётом времени
function ultraRandom(min, max) {
    const now = Date.now();
    const timeBasedRandom = (now % 1000) / 1000;
    const randomValue = (Math.random() + Math.random() * timeBasedRandom - Math.random() * timeBasedRandom);

    // Гарантируем, что результат находится в пределах min и max
    return Math.floor((Math.abs(randomValue) % 1) * (max - min + 1)) + min;
}

// Переключение видимости элемента
const toggleVisibility = (selector) => {
    const element = document.querySelector(selector);
    if (element) element.style.display = element.style.display === 'none' ? '' : 'none';
};

// Обновление номера раунда
const updateRoundNumber = (selector, increment = 0) => {
    const roundNumber = document.querySelector(selector);
    roundNumber.innerText = `ROUND ${roundNum + increment}`;
};

function showCard(card) {
    playSound(clickSound);

    // Находим элемент с классом .watchCard
    var watchCardOpen = document.querySelector('.watchCard');

    // Получаем стиль backgroundImage из выбранной карточки
    var cardBackground = window.getComputedStyle(card).backgroundImage;
    
    // Получаем цвет бордера
    var cardBorderColor = window.getComputedStyle(card).borderColor;
    
    // Применяем стиль backgroundImage к watchCard
    watchCardOpen.style.backgroundImage = cardBackground;
    watchCardOpen.style.backgroundSize = '100%';
    watchCardOpen.style.backgroundRepeat = 'no-repeat';
    watchCardOpen.style.borderColor = cardBorderColor;

    // Плавное появление через класс
    watchCardOpen.classList.add("visible");
}

// Скрытие карты
const hideShowCard = () => {
    playSound(clickSound);
    document.querySelector('.watchCard').classList.remove('visible');
};

function openNextCards() {
    updateRoundNumber('.round-number', 0);
    const assignRandomImage = (cards, openCards, folder, maxIndex) => {
        cards.forEach((card) => {
            // Скрываем карту (делаем невидимой)
            card.classList.remove("visible");

            let randomeIndex;
            do {
                randomeIndex = ultraRandom(1, maxIndex);
            } while (openCards.includes(randomeIndex));

            openCards.push(randomeIndex);

            // Генерируем путь к изображению
            const imagePath = `img/${folder}/${folder}_${randomeIndex}.png`;

            // Устанавливаем изображение
            setTimeout(() => {
                card.style.backgroundImage = `url(${imagePath})`;
                card.style.backgroundSize = '100%';
                card.style.backgroundRepeat = 'no-repeat';

                // Плавное появление через класс
                card.classList.add("visible");
            }, 200); // Задержка для синхронизации с анимацией
        });
    };

    // Применяем функцию для обеих групп карт
    assignRandomImage(document.querySelectorAll(".cat"), openCatsCards, "cats", 113);
    assignRandomImage(document.querySelectorAll(".les"), openLesCards, "les", 47);
    playSound(dropSound);
}

// Действия при нажатии на кнопку "Далее"
const next = (btn) => {
    hideShowCard();
    playSound(clickSound);
    toggleVisibility('.overlay');

    if (roundNum < 7) {
        if (btn.classList.contains('logout')) {
            document.querySelector('.h1').textContent = '';
            document.querySelector('.next-round').textContent = 'EXIT';
        } else {
            updateRoundNumber('.h1', 1);
            document.querySelector('.next-round').textContent = 'NEXT';
        }
    } else {
        document.querySelector('.next-round').textContent = 'NEW GAME';
    }
};

// Открытие следующего раунда или начало новой игры
const openPopupNext = (btn) => {
    playSound(clickSound);
    if(btn.textContent === "EXIT") {
        newGame();
        document.querySelector('.next').textContent = 'NEXT';
        document.querySelector('.next-round').textContent = 'NEXT';
        toggleVisibility('.n1');
        toggleVisibility('.n2');
    } else {
        if (roundNum < 7) {
            roundNum++;
            openNextCards();
            if (roundNum === 7) {
                document.querySelector('.next').textContent = 'NEW GAME';
                document.querySelector('.h1').textContent = '';
            }
        } else {
            newGame();
            document.querySelector('.next').textContent = 'NEXT';
            document.querySelector('.next-round').textContent = 'NEXT';
            toggleVisibility('.n1');
            toggleVisibility('.n2');
        }
    }
    toggleVisibility('.overlay');
};

function back() {
    playSound(clickSound);
    toggleVisibility(".overlay")
}

// Запуск игры
const start = () => {
    playSound(clickSound);
    openNextCards();
    toggleVisibility('.n1');
    toggleVisibility('.n2');
};

// Перезагрузка страницы
const reloadPage = () => {
    playSound(clickSound);
    location.reload();
};

// Воспроизведение звука
const playSound = (sound) => {
    sound.currentTime = 0;
    sound.play();
};

// Начало новой игры
const newGame = () => {
    roundNum = 1;
    openCatsCards = [];
    openLesCards = [];
};

function checkOrientation() {
    const isMobile = /iPhone|iPod|Android/i.test(navigator.userAgent);
    const warningId = 'orientation-warning'; // ID предупреждающего элемента

    if (isMobile && window.innerWidth > window.innerHeight) {
        // Если мобильное устройство в горизонтальной ориентации
        if (!document.getElementById(warningId)) {
            const warningDiv = document.createElement('div');
            warningDiv.id = warningId;
            warningDiv.className = 'orientation-warning';
            warningDiv.innerHTML = `
                <div class="orientation-message">
                    Пожалуйста, переверните устройство вертикально!
                </div>
            `;
            document.body.appendChild(warningDiv);
        }
    } else {
        // Если ориентация вертикальная, удаляем предупреждение
        const warningElement = document.getElementById(warningId);
        if (warningElement) {
            warningElement.remove();
        }
    }
}

// Вызываем проверку ориентации при загрузке страницы
window.addEventListener('load', checkOrientation);

// Отслеживаем изменение размера окна (ориентации)
window.addEventListener('resize', checkOrientation);
