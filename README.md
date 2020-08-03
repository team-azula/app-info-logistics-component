<h1 align="center">Welcome to App-Info-Logistics-Component 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D6.13.0-blue.svg" />
</p>

## Related Projects

  - https://github.com/FEC-Group-Link/app-preview-info-carousel
  - https://github.com/FEC-Group-Link/review-component
  - https://github.com/FEC-Group-Link/similar-component
  - https://github.com/FEC-Group-Link/app-info-logistics-component

## Table of Contents

1. [Requirements](#requirements)
1. [Usage](#Usage)
1. [Development](#development)
1. [API](#API)

## Requirements

- node >=6.13.0


## Usage
```sh
npm run start (will start up server)
npm run bulid (will start of webpack to compile your react files into a bundle.js)
npm run db:setup (will seed your database with 100 apps)
npm run test (will run tests)
node seedScript.js (will generate a csv file with 10M apps)
```

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
