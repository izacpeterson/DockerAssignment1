FROM node:16.3.0

LABEL name="Izac"
LABEL description="A very simple app."
LABEL cohort="13"
LABEL animal="Dolphin"

WORKDIR /app

COPY . .

EXPOSE 8080

RUN npm install

CMD ["npm", "start"]