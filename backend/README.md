# Backend

Базовая заготовка backend-приложения на FastAPI.

## Требования

- Python 3.10+
- [uv](https://docs.astral.sh/uv/)

## Установка зависимостей

```bash
cd backend
uv sync
```

## Запуск сервера для разработки

```bash
uv run fastapi dev
```

После запуска доступны:

- API: http://127.0.0.1:8000/
- Swagger UI: http://127.0.0.1:8000/docs
- ReDoc: http://127.0.0.1:8000/redoc

## Проверка кода

Ruff проверяет качество кода, а Mypy — типизацию:

```bash
uv run ruff check .
uv run mypy .
```

Для автоматического исправления доступных ошибок Ruff используйте:

```bash
uv run ruff check . --fix
```

## Сборка

```bash
uv build
```

Готовые артефакты будут находиться в каталоге `dist/`.
