# English Factory — тестовый сайт

Готовая статическая структура для GitHub Pages.

## Что заменять

### Логотип
Замените файл:
`assets/images/logo.png`

Сохраните это имя — логотип автоматически обновится в шапке, водяном знаке и favicon.

### Фотографии команды
Замените:
- `assets/images/team/team-01.jpg` — Анна
- `assets/images/team/team-02.jpg` — Елена
- `assets/images/team/team-03.jpg` — Даниил

Лучше использовать вертикальные или квадратные фото не меньше 900 × 900 px. Имена файлов сохраняйте.

### Лицензии и сертификаты
Замените:
- `assets/images/licenses/license-01.jpg`
- ...
- `assets/images/licenses/license-08.jpg`

Сохраняйте имена. Если документов станет больше или меньше, нужно также изменить карточки в `index.html`.

### Шрифт Akrobat
Смотрите `assets/fonts/README.txt`.

## Структура

- `index.html` — содержание страницы
- `assets/css/styles.css` — дизайн
- `assets/js/main.js` — раскрытие карточек, прокрутка, галерея, шестерёнки
- `assets/images/` — все изображения
- `assets/fonts/` — web-шрифты
- `.nojekyll` — отключает обработку Jekyll

## Быстрая публикация GitHub Pages

1. Создайте новый публичный репозиторий, например `english-factory-site`.
2. Загрузите в корень репозитория **содержимое этой папки**, а не саму внешнюю папку.
3. Откройте `Settings → Pages`.
4. В `Build and deployment` выберите `Deploy from a branch`.
5. Выберите ветку `main` и папку `/ (root)`, затем сохраните.
6. Сайт появится по адресу вида `https://ИМЯ.github.io/english-factory-site/`.

После замены файла на GitHub нажмите `Commit changes`. Через некоторое время опубликованный сайт обновится.
