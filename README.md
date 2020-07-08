# App Information and Logistics Component

> This component will display all the relevant app information and logistics. It will also allow users to add the current app to their wishlist and ability to install app.

## Related Projects

  - https://github.com/FEC-Group-Link/app-preview-info-carousel
  - https://github.com/FEC-Group-Link/review-component
  - https://github.com/FEC-Group-Link/similar-component
  - https://github.com/FEC-Group-Link/app-info-logistics-component

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [API](#API)

## Usage
```sh
npm run start (will start up server)
npm run bulid (will start of webpack to compile your react files into a bundle.js)
npm run db:setup (will seed your database with 100 apps)
```
## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## API

GET -
endpoint : /apps/:appid
result: Pulls app data from the database depending on appid

POST -
endpoint : /apps/:appid
result: Posts app data to the database using the appid as the id in database

PUT -
endpoint : /apps/:appid
result: Changes the author field for the identified app based on appid to "Warner Lin"


DELETE -
endpoint : /apps/:appid
result: Deletes app data from the database
