
const CACHE_NAME = 'TheIsleOfCats_helper'; // Уникальное имя для кэша
const URLS_TO_CACHE = [
    'index.html',
    'css/styles.css',
    'scripts/script.js',
    'service-worker.js',
    'manifest.json',
    'audio/click.mp3',
    'audio/drop.mp3',

    // Фон
    'img/down.jpg',
    'img/fonfrontlow.jpg',
    'img/up.jpg',

    // Карты 
    'img/cats/cats_1.png',
    'img/cats/cats_2.png',
    'img/cats/cats_3.png',
    'img/cats/cats_4.png',
    'img/cats/cats_5.png',
    'img/cats/cats_6.png',
    'img/cats/cats_7.png',
    'img/cats/cats_8.png',
    'img/cats/cats_9.png',
    'img/cats/cats_10.png',
    'img/cats/cats_11.png',
    'img/cats/cats_12.png',
    'img/cats/cats_13.png',
    'img/cats/cats_14.png',
    'img/cats/cats_15.png',
    'img/cats/cats_16.png',
    'img/cats/cats_17.png',
    'img/cats/cats_18.png',
    'img/cats/cats_19.png',
    'img/cats/cats_20.png',
    'img/cats/cats_21.png',
    'img/cats/cats_22.png',
    'img/cats/cats_23.png',
    'img/cats/cats_24.png',
    'img/cats/cats_25.png',
    'img/cats/cats_26.png',
    'img/cats/cats_27.png',
    'img/cats/cats_28.png',
    'img/cats/cats_29.png',
    'img/cats/cats_30.png',
    'img/cats/cats_31.png',
    'img/cats/cats_32.png',
    'img/cats/cats_33.png',
    'img/cats/cats_34.png',
    'img/cats/cats_35.png',
    'img/cats/cats_36.png',
    'img/cats/cats_37.png',
    'img/cats/cats_38.png',
    'img/cats/cats_39.png',
    'img/cats/cats_40.png',
    'img/cats/cats_41.png',
    'img/cats/cats_42.png',
    'img/cats/cats_43.png',
    'img/cats/cats_44.png',
    'img/cats/cats_45.png',
    'img/cats/cats_46.png',
    'img/cats/cats_47.png',
    'img/cats/cats_48.png',
    'img/cats/cats_49.png',
    'img/cats/cats_50.png',
    'img/cats/cats_51.png',
    'img/cats/cats_52.png',
    'img/cats/cats_53.png',
    'img/cats/cats_54.png',
    'img/cats/cats_55.png',
    'img/cats/cats_56.png',
    'img/cats/cats_57.png',
    'img/cats/cats_58.png',
    'img/cats/cats_59.png',
    'img/cats/cats_60.png',
    'img/cats/cats_61.png',
    'img/cats/cats_62.png',
    'img/cats/cats_63.png',
    'img/cats/cats_64.png',
    'img/cats/cats_65.png',
    'img/cats/cats_66.png',
    'img/cats/cats_67.png',
    'img/cats/cats_68.png',
    'img/cats/cats_69.png',
    'img/cats/cats_70.png',
    'img/cats/cats_71.png',
    'img/cats/cats_72.png',
    'img/cats/cats_73.png',
    'img/cats/cats_74.png',
    'img/cats/cats_75.png',
    'img/cats/cats_76.png',
    'img/cats/cats_77.png',
    'img/cats/cats_78.png',
    'img/cats/cats_79.png',
    'img/cats/cats_80.png',
    'img/cats/cats_81.png',
    'img/cats/cats_82.png',
    'img/cats/cats_83.png',
    'img/cats/cats_84.png',
    'img/cats/cats_85.png',
    'img/cats/cats_86.png',
    'img/cats/cats_87.png',
    'img/cats/cats_88.png',
    'img/cats/cats_89.png',
    'img/cats/cats_90.png',
    'img/cats/cats_91.png',
    'img/cats/cats_92.png',
    'img/cats/cats_93.png',
    'img/cats/cats_94.png',
    'img/cats/cats_95.png',
    'img/cats/cats_96.png',
    'img/cats/cats_97.png',
    'img/cats/cats_98.png',
    'img/cats/cats_99.png',
    'img/cats/cats_100.png',
    'img/cats/cats_101.png',
    'img/cats/cats_102.png',
    'img/cats/cats_103.png',
    'img/cats/cats_104.png',
    'img/cats/cats_105.png',
    'img/cats/cats_106.png',
    'img/cats/cats_107.png',
    'img/cats/cats_108.png',
    'img/cats/cats_109.png',
    'img/cats/cats_110.png',
    'img/cats/cats_111.png',
    'img/cats/cats_112.png',
    'img/cats/cats_113.png',
    'img/cats/cats_114.png',
    'img/les/les_1.png',
    'img/les/les_2.png',
    'img/les/les_3.png',
    'img/les/les_4.png',
    'img/les/les_5.png',
    'img/les/les_6.png',
    'img/les/les_7.png',
    'img/les/les_8.png',
    'img/les/les_9.png',
    'img/les/les_10.png',
    'img/les/les_11.png',
    'img/les/les_12.png',
    'img/les/les_13.png',
    'img/les/les_14.png',
    'img/les/les_15.png',
    'img/les/les_16.png',
    'img/les/les_17.png',
    'img/les/les_18.png',
    'img/les/les_19.png',
    'img/les/les_20.png',
    'img/les/les_21.png',
    'img/les/les_22.png',
    'img/les/les_23.png',
    'img/les/les_24.png',
    'img/les/les_25.png',
    'img/les/les_26.png',
    'img/les/les_27.png',
    'img/les/les_28.png',
    'img/les/les_29.png',
    'img/les/les_30.png',
    'img/les/les_31.png',
    'img/les/les_32.png',
    'img/les/les_33.png',
    'img/les/les_34.png',
    'img/les/les_35.png',
    'img/les/les_36.png',
    'img/les/les_37.png',
    'img/les/les_38.png',
    'img/les/les_39.png',
    'img/les/les_40.png',
    'img/les/les_41.png',
    'img/les/les_42.png',
    'img/les/les_43.png',
    'img/les/les_44.png',
    'img/les/les_45.png',
    'img/les/les_46.png',
    'img/les/les_47.png',

    // Иконки
    'img/favicon.ico',
    "img/icon_x48.png",
    "img/icon_x72.png",
    "img/icon_x96.png",
    "img/icon_x128.png",
    "img/icon_x192.png",
    "img/icon_x384.png",
    "img/icon_x512.png",
    "img/icon_x1024.png"
];

// Установка Service Worker и кэширование ресурсов
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Кэширование ресурсов');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

// Обработка запросов
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Если есть кэшированный ресурс, возвращаем его
                if (response) {
                    return response;
                }
                // Если нет, загружаем ресурс из сети
                return fetch(event.request);
            })
    );
});

// Обновление кэша при активации нового Service Worker
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Массив с допустимыми именами кэшей
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    // Удаляем старые кэши
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
