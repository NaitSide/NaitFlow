# NaitFlow

[English](README.md) | **Русский**

NaitFlow — Notion UI для Obsidian

Плагин для Obsidian, который добавляет боковую панель страниц, смайлики и обложки в стиле Notion.

![Выбор эмодзи NaitFlow поверх обложки страницы](docs/images/naitflow-interface.png)

## Возможности

- визуальный выбор эмодзи с категориями, поиском и недавними элементами;
- каталог иконок Lucide;
- загрузка собственной иконки или скачивание по ссылке;
- иконка страницы над заголовком, в дереве NaitFlow и во вкладках;
- локальная галерея обложек с подборками NASA, Webb, Artemis II, MET Open Access и градиентами;
- загрузка обложек с компьютера, по ссылке или через поиск Unsplash;
- изменение вертикального положения обложки перетаскиванием;
- виртуальные вложенные страницы через `naitflow-parent` без превращения заметок в папки.

## Ручная установка

Скопируйте `main.js`, `manifest.json`, `styles.css`, `NotoColorEmoji.ttf`, `NotoColorEmoji-LICENSE.txt` и каталог `presets` в `.obsidian/plugins/naitflow`. Перезапустите Obsidian и включите NaitFlow в разделе «Сторонние плагины».

Инструкция для разработки и публикации находится в [PUBLISHING.md](PUBLISHING.md).

## Поиск в Unsplash

NaitFlow не содержит общего ключа Unsplash. Для личного использования поиск обложек настраивается так:

1. Войдите на сайт [Unsplash Developers](https://unsplash.com/oauth/applications/new).
2. **Подтвердите адрес электронной почты в аккаунте Unsplash до создания приложения.** Без подтверждения форма с названием и описанием может просто не сработать.
3. Вернитесь на страницу [New Application](https://unsplash.com/oauth/applications/new), прочитайте и примите условия API.
4. Создайте приложение. Рекомендуемые значения:
   - **Application name:** `NaitFlow`
   - **Description:** `Cover image search and selection for the NaitFlow Obsidian plugin.`
5. Откройте **Your apps → NaitFlow** и прокрутите страницу до раздела **Keys**. Там будут указаны **Application ID**, **Access Key** и **Secret Key**.

   ![Раздел Keys в Unsplash с размытым примером ключей](docs/images/unsplash-application-keys-blurred.png)

6. Скопируйте только **Access Key**. Application ID и Secret Key плагину не нужны.
7. В Obsidian откройте **Настройки → NaitFlow → Unsplash Access Key** и вставьте ключ.

Никогда не публикуйте **Secret Key** в NaitFlow, на скриншотах, в обсуждениях или в GitHub. Access Key сохраняется в настройках плагина этого хранилища (`.obsidian/plugins/naitflow/data.json`), поэтому этот файл и его синхронизированные копии также следует считать конфиденциальными.

Новые приложения Unsplash начинают работу в демонстрационном режиме с ограниченным числом запросов. Такая схема с личным ключом предназначена для локального использования и разработки. Встраивать один общий ключ в плагин нельзя: файлы плагина, включая `main.js`, доступны пользователю и не могут надёжно скрыть ключ.

Справка: [документация Unsplash API](https://unsplash.com/documentation) и [правила использования Unsplash API](https://help.unsplash.com/en/articles/2511245-unsplash-api-guidelines).

## Источники и лицензии

Встроенный шрифт [Google Noto Color Emoji](https://github.com/googlefonts/noto-emoji) распространяется по лицензии SIL Open Font License 1.1. Текст лицензии находится в файле `NotoColorEmoji-LICENSE.txt`.

Источники встроенных обложек перечислены в файлах `SOURCES.md` внутри каталогов пресетов. Изображения NASA используются в информационных целях и не означают поддержку проекта со стороны NASA. Работы MET из встроенной коллекции находятся в общественном достоянии и опубликованы программой Open Access.
