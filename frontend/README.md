# Календарь звонков — frontend

Базовая заготовка фронтенда на React с TypeScript и Vite. В проекте настроены shadcn/ui,
Tailwind CSS, React Router, Zustand, ESLint и Prettier.

## Требования

- Node.js 20.19+ или 22.12+
- npm 9+

## Установка и запуск

```bash
npm install
npm run dev
```

После запуска Vite выведет адрес локального сервера (по умолчанию `http://localhost:5173`).

## Команды

- `npm run dev` — запуск сервера разработки;
- `npm run build` — проверка типов и production-сборка в `dist/`;
- `npm run preview` — локальный просмотр production-сборки;
- `npm run lint` — проверка кода с помощью ESLint;
- `npm run format` — форматирование файлов с помощью Prettier;
- `npm run format:check` — проверка форматирования без изменения файлов.

## Структура

```text
src/
├── components/ui/   # Компоненты shadcn/ui
├── lib/             # Общие утилиты
├── pages/           # Страницы приложения
├── store/           # Хранилища Zustand
├── App.tsx          # Маршруты приложения
├── main.tsx         # Точка входа
└── index.css        # Tailwind CSS и тема shadcn/ui
```

Для добавления новых компонентов shadcn/ui используйте, например:

```bash
npx shadcn@latest add input
```
