# Base image
FROM node:16

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar todos los archivos al contenedor
COPY . .

# Construcción de la aplicación
RUN npm run build

# Exponer el puerto que usa la aplicación (verificar el puerto en tu proyecto)
EXPOSE 3000

# Comando por defecto
CMD ["npm", "start"]