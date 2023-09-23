FROM node:18-slim

WORKDIR /project-a/app
COPY project-a/ ./
RUN apt update \
&& yarn install
EXPOSE 5173
CMD ["yarn", "dev", "--host"]