# Boilerplate strapi
* Used with boilerplate project to showcase strapi cms functionalities
* Contains persistence for custom objects
* Is integrated with https://cloud.strapi.io CI/CD

# Local installation
Create `.env.local` and fill all variables
  * full installation instructions are here https://docs.strapi.io/cms/installation/docker
  * Example file, generate all `<24 char text>` variables 
  ```shell
  # Server
  HOST=0.0.0.0
  PORT=1337
  
  # APP keys delimited by ",". At least 1 key should be created
  APP_KEYS=<24 char text>,<24 char text>,
  API_TOKEN_SALT=<24 char text>
  ADMIN_JWT_SECRET=<24 char text>
  TRANSFER_TOKEN_SALT=<24 char text>
  ENCRYPTION_KEY=<24 char text>
  
  # Database for local
  DATABASE_CLIENT=postgres
  DATABASE_HOST=127.0.0.1
  DATABASE_PORT=5432
  DATABASE_NAME=strapi
  DATABASE_USERNAME=strapi
  DATABASE_PASSWORD=strapi
  DATABASE_SSL=false
  JWT_SECRET=<24 char text> 
  ```
PostgreSQL is needed. Either install locally or you can use `docker-compose.yml`.

Run via `pnpm run dev`

On first run you will be prompted to create super admin - the email can be whatever like `admin@admin.com`, just dont forget the password