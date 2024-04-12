# Primer Parcial Arquitectura Orientada a Servicios 12/04/2024 

# Integrantes: Roman Emiro Urquijo Lobo 191782

## Descripción 

API REST desarrollado en Node.js, Express y Postgresql.

La API permitira al usuario obtener y almacenar informacion correspondiente a productos. Para esto el usuario debe haberse autenticado y registrado previamente en una base de datos (en este caso postgres). La API cuenta con unas funciones, las cuales son:

- Autorización median Basic Auth
- Paginación 
- Validación de parametros de entrada
- Manejador de errores


## Instalación

### Clonar el repositorio:
```
    git clone 
    cd clase
```

### Instalación Manual

```
    npm install
```

### Instalación nodemon

```
    npm -get install nodemon
```

### Instalación express

```
    npm install express
```

## Tabla de contenido

- Caracteristicas
- Comandos
- Variables de Entorno
- Estructura del Proyecto
- API Endpoints


## Características
- Node js
- npm

## Comandos
Run Local:
```
    npm run dev
```
Run Producción:
```
    npm run start
```

## Variables de Entorno
```
###> CONFIG SERVER <####
PORT=
URL_SERVER=
###> CONFIG SERVER <####

###> DB_CONNECTION ### 
DB_URL_PG=
###< CONFIGURE SERVER ###

###> SECRET_KEY ###
SECRET_KEY=
###< SECRET_KEY ###
```

## Estructura del Proyecto

```
src\
 |--config\         # Variables de entorno y configuración 
 |--controllers\    # Controladores 
 |--img\            # Imagenes públicas
 |--middlewares\    # Middleware Personalizados
 |--models\         # Modelos tablas base de datos postgres
 |--routes\         # Rutas del sistema
 |--services\       # Servicios de conexión BD y Token 
 |--validator\      # Esquemas de validación
 |--index.js        # Express app
```


## API Endpoints

<code>GET /auth</code> 
- **query:** 
    - **username**:  requerido
    - **password**:  requerido

<code>GET /api/producto</code> 
- Request
    - **query**
        - **page**
        - **limit**
- Response
    - **success:** boolean   
    - **msg :** string
    - **count:** number
    - **page :** number
    - **all :** number
    - **data :** array
 
<code>GET /api/producto/:id</code> 
- Request
    - **params:**
        - **id**:  requerido
- Response
    - **success :** boolean
    - **msg :** string
    - **data :** json
    
<code>POST /api/producto</code>
- Request
    - **body:**
        - **nombre** :  requerido
        - **detalle**
        - **valor** :  requerido
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>PUT /api/producto</code>
- Request
    - **body**
        - **id** :  requerido
        - **nombre**
        - **detalle**
        - **valor**
        - **img**
- Response
    - **success :** boolean
    - **data :** json
    - **msg :** string 

<code>DELETE /api/producto/:id</code> 
- Request
    - **params:**
        - **id** : requerido 
- Response
    - **data :** array
    - **msg :** string 
    - **success :** boolean
