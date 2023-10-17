Target:

         Create a full-stack recipe app that will use
         Django Rest Framework, OpenAPI+Swagger auto-documentation and react-router.
         There is no need to give the user the ability to create recipes: just
         distribute them into categories and display them in the client and in the API.
         Where to display the API documentation is up to you.
         Each dish and each category should have its own page:
         from the main page you can go to any of the categories,
         and from a category - for any recipe in this category.

Project setup:

        1) Install the virtual environment - python -m venv venv
        2) Cloning the repository - git clone https://github.com/olexiygolovko/recipes_dishes_djangorest_react

Django:

        1)pip install djangorestframework
        2)pip install django-cors-headers
        3)pip install coreapi pyyaml
        4)pip install django-rest-swagger
        5) Start the server - python manage.py runserver

        Project API addresses:

        Page schema openapi - http://127.0.0.1:8000/openapi
        Page swagger-ui - http://127.0.0.1:8000/swagger-ui/
        List of all food categories - http://127.0.0.1:8000/api/categories/
        An example of a recipe request in the 'Soups' category - http://127.0.0.1:8000/api/dishes/?category=Soups
        List of all recipes - http://127.0.0.1:8000/api/recipe/
        An example of a dish recipe - http://127.0.0.1:8000/api/recipe/1/

React:

        1) Go to the root directory
        2) Installing packages - npm install

        3) Start the server - npm start


|Project author: Oleksii Holovko|