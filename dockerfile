# Utiliser une image de base Node.js
FROM node:20

# Créer et définir le répertoire de travail
WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Exposer le port sur lequel l'application va écouter
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
