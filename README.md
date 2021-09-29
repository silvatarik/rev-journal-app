# JOURNAL APP

Esta aplicación se hizo con la finalidad de probar cada una de la funcionalidades que ofrece
React. Así mismo de husos de herramientas tales como Redux entre otras para crear una aplicación
de notas al completo con un diseño amigable

## Más acerca de Journal

Journal además cuenta con autentificación usando firebase de backend, así como protección de rutas
usando tanto privadas como públicas haciendo uso de redux.

## Estructura de carpetas

actions --> en las actions contiene todo acerca de los dispatch que se pueden realizar

components --> como la palabra indica esta carpeta es exclusiva para los componentes en la cual
posteriormente se subdiviran según cada vista y de esa manera llevar un orden

firebase --> dentro de esta carpeta encontramos todo aquello para usar firabase como backEnd

hooks --> en el directorio hooks se encuentran todos los custom Hooks de la app que se utilizaran

rawCode --> este directorio esta creado unica y especificamente para inserción de codigo puro de html 
con estilos. Dado que react no admite class como tal asi como el style usar este archivo como test para
cambiar todo lo necesario para luego cortarlo y pegarlo donde sea que vaya.

reducers --> este directorio contiene todos los distintos reducers que se usan en la app.

routers --> contiene la inicialización de las rutas así como las rutas para manejar las rutas privadas y publicas.

store --> contiene el archivo configurado y manejado especialmente para redux.

types --> debido a que usamos distintos useReducer , para provocar posibles errores humanos etc. Se creo dicho archivo,
que tiene un objeto con todos los types posibles tales como logIn, logOut entre otros.

## Estilos Utilizados

Para el diseño utilize tailwind como libreria principal para css en conjunto con daisyUI.



