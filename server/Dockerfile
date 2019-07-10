FROM node:10.16.0 as dist
WORKDIR /api/
COPY package.json tsconfig.json tsconfig.build.json ./
RUN npm install
COPY src/ ./
RUN npm run build
CMD ["node", "dist/main.js"]