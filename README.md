# React+Redux+JSON_API

## Dependancies

- Node
- NPM/Yarn

## Core Task's

+ Successfully `GET` the full listing of language [`en`, `ga`, `no`] and display it via a table.
+ Implement a language switcher dropdown.
+ Enable the table to be editable for translation strings -> `POST`.
+ Display feedback for a user upon success/error for a translation -> `POST Feedback`.
+ Surprise us! At VSWare we value creativity, so throw a little something extra into the pot.

## Bonus Task's

+ Implement table pagination.
+ Implement a table search bar.
+ Style the page and table to a real world application standard.

## Setup

After installing dependancies, run:

### Using npm 
```bash
npm i
npm run start
```

### Using yarn 
```bash
yarn
yarn start
```

### Frontend

`http://localhost:3000`

### API Server

`http://localhost:5000/api`

## API Calls

### Method: GET

#### Example -> Language Codes

```sh
http://localhost:5000/api/codes
```

#### Response: Success

```json
[
  {
    "id": 1,
    "language": "en"
  },
  {
    "id": 2,
    "language": "ga"
  },
  {
    "id": 3,
    "language": "no"
  },
  {
    "id": 4,
    "language": null
  }
]
```

#### Example -> Single code

```sh
http://localhost:5000/api/[lang_code]
```

#### Response: Success

```json
[
  {
    "value": "Loading",
    "id": "common.loading"
  },
  {
    "value": "Yes",
    "id": "common.yes"
  },
  {
    "value": "",
    "id": "common.no"
  },
  {
    "value": "Warning",
    "id": "common.warning"
  }
]
```

### Method: POST

#### Example -> Adding new validation
```sh
http://localhost:5000/api/[lang_code]
```

#### Request Params Required

```json
{
  "value": "Test val", // Translated message
	"id": "settings.academicyear.termname" // id that is the same across languages
}
```

#### Response Success

`Http Code: 200`

```json
{
  "value": "Test val",
	"id": "settings.academicyear.termname"
}
```

### Method: PUT

#### Example -> Updating existing validation
```sh
http://localhost:5000/api/[lang_code]/[translation_id]
```

#### Request Params Required

```json
{
  "value": "Test val", // Updated Translated message
}
```

#### Response Success

`Http Code: 200`

```json
{
  "value": "Test val",
	"id": "settings.academicyear.termname"
}
```
