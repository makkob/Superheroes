Что бы запустить приложение:
В папке backend запустить команду             npm run dev.
В папке frontend-website запустить команду    npm start.

Баги : 
> При удалении обьектов с БД на сервере бэкенда остаются файлы изображений,
для решения необходимо присвоить ID объекту в момент создания,
и в дальнейшем использовать этот ID а не тот что присвоевает БД.
> Добавить проверку по никнейму супергероя (Запретить добавлять героя если герой с таким же именем уже есть).

~~~~~~~~~~~~~~
To launch the application:
In backend folder use             npm run dev.
In fontend-webside folder use     npm start.

Bugs : 
> When deleting objects from DB, backend server keeps images files saved, 
to solve this problem need to assign an ID to the object at the moment of creation,
in the future use this ID instead of the one assigned by DB
> Add nickname verification. (Forbid adding any superhero if a hero with a similar name is already in DB)



