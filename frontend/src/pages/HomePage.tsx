import { CalendarDays, Check, Plus, RotateCcw } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useCounterStore } from '@/store/useCounterStore'

const technologies = [
  'React + TypeScript',
  'Vite',
  'shadcn/ui + Tailwind CSS',
  'React Router + Zustand',
]

export function HomePage() {
  const count = useCounterStore((state) => state.count)
  const increment = useCounterStore((state) => state.increment)
  const reset = useCounterStore((state) => state.reset)

  return (
    <div className="min-h-svh bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <CalendarDays className="size-5" aria-hidden="true" />
            </span>
            Календарь звонков
          </Link>
          <span className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
            <span className="size-2 rounded-full bg-emerald-500" aria-hidden="true" />
            Frontend готов к работе
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <section>
            <span className="inline-flex rounded-full border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
              Базовая заготовка проекта
            </span>
            <h1 className="mt-6 max-w-xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Планируйте звонки без лишней суеты
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              Удобный сервис для бронирования встреч. Базовый интерфейс уже настроен и готов к
              дальнейшей разработке.
            </p>
            <ul className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
              {technologies.map((technology) => (
                <li key={technology} className="flex items-center gap-2">
                  <span className="flex size-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Check className="size-3" aria-hidden="true" />
                  </span>
                  {technology}
                </li>
              ))}
            </ul>
          </section>

          <Card className="mx-auto w-full max-w-md shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Проверка состояния</CardTitle>
              <CardDescription>
                Компоненты shadcn/ui и хранилище Zustand уже подключены.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-xl border bg-background px-6 py-8 text-center">
                <span className="text-sm text-muted-foreground">Значение счётчика</span>
                <p className="mt-2 text-6xl font-semibold tabular-nums" aria-live="polite">
                  {count}
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-3 sm:flex-row">
              <Button type="button" size="lg" className="w-full sm:flex-1" onClick={increment}>
                <Plus data-icon="inline-start" aria-hidden="true" />
                Увеличить
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                onClick={reset}
                disabled={count === 0}
              >
                <RotateCcw data-icon="inline-start" aria-hidden="true" />
                Сбросить
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
