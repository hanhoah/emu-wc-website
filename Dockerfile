FROM node:18-alpine

WORKDIR /app

# Kopiere package.json und installiere Dependencies
COPY package.json ./
RUN npm install

# Exponiere Port 3000
EXPOSE 3000

# Starte den Entwicklungsserver
CMD ["npm", "run", "dev"]
