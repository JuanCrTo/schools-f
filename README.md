# Proyecto de Gestión de Colegios en Colombia

## Descripción

Este proyecto es un sitio web diseñado para facilitar la búsqueda, gestión y registro de colegios en Colombia. El sitio permite a los usuarios (padres, tutores) buscar colegios, ver perfiles detallados, y realizar inscripciones en línea. Los colegios pueden gestionar sus propios perfiles y validar la autenticidad de sus certificaciones. La plataforma está diseñada con un enfoque en la accesibilidad y funcionalidad, permitiendo a los usuarios no registrados acceder a ciertas funcionalidades básicas, mientras que los usuarios registrados tienen acceso completo.

## Características

- **Búsqueda avanzada de colegios**: Los usuarios pueden buscar colegios por nombre, ubicación, y otros criterios.
- **Perfiles detallados de colegios**: Los colegios pueden crear y gestionar sus perfiles, incluyendo información sobre programas ofrecidos, certificaciones, y detalles de contacto.
- **Inscripción en línea**: Los padres/tutores pueden inscribir a sus hijos en colegios directamente desde la plataforma.
- **Sistemas de autenticación**: Los usuarios pueden registrarse y acceder a funcionalidades adicionales tras iniciar sesión.
- **Validación de colegios certificados**: El sistema garantiza que los colegios registrados son auténticos y están certificados por las autoridades correspondientes.
- **Accesibilidad**: Diseño inclusivo que permite el uso fácil para todos los usuarios.

## Tecnologías Utilizadas

- **Frontend**: 
  - [React](https://reactjs.org/) con [TypeScript](https://www.typescriptlang.org/) y [Next.js](https://nextjs.org/)
- **Backend**:
  - API construida con [NestJS](https://nestjs.com/) para la lógica del servidor.
- **Base de Datos**:
  - [MongoDB](https://www.mongodb.com/) como base de datos principal para almacenar la información de los colegios y usuarios.
- **Despliegue**:
  - [Railway](https://railway.app/) como plataforma de despliegue.
- **Otros**:
  - Gestión de estilos en una carpeta específica separada de los componentes.
  - Interfaces de los props en una carpeta dedicada.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

### Requisitos previos

- [Node.js](https://nodejs.org/en/) (v16.0.0 o superior)
- [MongoDB](https://www.mongodb.com/) instalado o acceso a una instancia de MongoDB.
- [Railway](https://railway.app/) o cualquier otra plataforma para desplegar si se desea.

### Instrucciones

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/JuanCrTo/schools-f.git
    ```

2. Navega al directorio del proyecto:


3. Instala las dependencias del frontend y backend:

    - **Frontend (React con Next.js)**

        ```bash
        cd frontend
        npm install
        ```

    - **Backend (NestJS)**

        ```bash
        cd backend
        npm install
        ```

4. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz de cada directorio (`frontend` y `backend`) y define las siguientes variables:

    - **Frontend (.env.local)**

      ```env
      NEXT_PUBLIC_API_URL=http://localhost:3001/api
      ```

    - **Backend (.env)**

      ```env
      MONGO_URI=mongodb://localhost:27017/colegios
      JWT_SECRET=yourSecretKey
      ```

5. Inicia la aplicación:

    - **Frontend**:

      ```bash
      npm run dev
      ```

    - **Backend**:

      ```bash
      npm run start:dev
      ```

6. Abre tu navegador en `http://localhost:3000` para acceder al frontend.

## Uso

- **Usuarios no registrados**: Pueden buscar colegios, ver información básica, pero deben registrarse para realizar inscripciones o contactar con los colegios.
- **Usuarios registrados (Padres/Tutores)**: Pueden realizar inscripciones, contactar con los colegios y acceder a perfiles detallados de los mismos.
- **Colegios registrados**: Pueden gestionar su perfil, actualizar información y validar su certificación.

## Estructura del Proyecto

```bash
proyecto-colegios/
├── backend/ # Lógica del servidor (NestJS)
│   └── src/
├── frontend/ # Lógica del frontend (React/Next.js)
│   ├── components/ # Componentes de React
│   ├── pages/ # Páginas de Next.js
│   └── styles/ # Estilos CSS
└── README.md # Archivo que estás leyendo
