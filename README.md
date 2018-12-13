# Клиент сервиса расчетов

Клиент сервиса расчетов написанный на Angular

## Запуск в режиме разработки

Запустите `ng serve --proxy-config proxy.config.json` для режима разработки.
Перейдите по адресу `http://localhost:4200/`.

## Сборка и упаковка проекта

Запустите `ng build` для сборки проекта. Артифакты сборки будут в каталоге `dist/`. Используйте флаг `--prod` для PRODUCTION сборки.

Для сборки и упаковки в Docker выполните:

```
ng build --prod
docker image build -t hse-webclient .
```

## Запуск из Docker контейнера

Для запуска из Docker контейнера выполните:

```
docker run --name hse-webclient -p 280:80 hse-webclient:latest
```
