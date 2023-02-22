Задача:

        Создайте фуллстек-приложение с рецептами блюд, которое будет использовать
        Django Rest Framework, автодокументацию OpenAPI+Swagger и react-router.
        Давать пользователю возможность создавать рецепты не нужно: достаточно
        распределить их по категориям и отображать в клиенте и в API.
        Где отображать документацию API — решать вам.
        У каждого блюда и каждой категории должна быть своя страница:
        с главной страницы можно перейти на любую из категорий,
        а из категории — на любой рецепт этой категории.

Настройка проекта:
       1)Устанавливаем виртуальное окружение - python -m venv venv
       2)Клонируем репозиторий - git clone https://github.com/olexiygolovko/recipes_dishes_djangorest_react

Django:
       1)pip install djangorestframework
       2)pip install django-cors-headers
       3)pip install coreapi pyyaml
       4)pip install django-rest-swagger

       5)Запускаем сервер - python manage.py runserver

       Адреса API проекта:

       Page schema openapi - http://127.0.0.1:8000/openapi
       Page swagger-ui - http://127.0.0.1:8000/swagger-ui/
       Список всех категорий блюд - http://127.0.0.1:8000/api/categories/
       Пример запроса рецептов в категории 'Супы' - http://127.0.0.1:8000/api/dishes/?category=Супы
       Список всех рецептов - http://127.0.0.1:8000/api/recipe/
       Пример рецепта блюда - http://127.0.0.1:8000/api/recipe/1/

React:
       1)Переходим в корневую директорую
       2)Установка пакетов - npm install

       3)Запускаем сервер - npm start

Автор проекта: Головко Алексей
e-mail: oleksiiholovko92@gmail.com