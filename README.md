# URL Shortener REST API

A simple URL Shortener built using Node.js, Express.js, MongoDB Atlas, and Mongoose following the MVC architecture.

## Features

* Generate short URLs from long URLs
* Store URLs in MongoDB Atlas
* Redirect users using short URLs
* Prevent duplicate URL entries
* REST API based architecture
* MVC project structure

---

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* Dotenv

---

## Project Structure

```
├── controllers
│   └── functions.js
├── models
│   └── db.js
├── routes
│   └── url.js
├── connection.js
├── index.js
├── .env
├── package.json
```

---

## Environment Variables

Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_atlas_connection_string
BASE_URL=http://localhost:8000
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd url-shortner
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Server runs on:

```
http://localhost:8000
```

---

# API Endpoints

## Home Route

### Request

```http
GET /
```

### Response

```html
Hello Welcome To the Site
This Is a URL Shortening Service
```

---

## Generate Short URL

### Request

```http
POST /api
```

### Body (x-www-form-urlencoded)

| Key    | Value              |
| ------ | ------------------ |
| target | https://google.com |

### Example

```http
POST /api
Content-Type: application/x-www-form-urlencoded

target=https://google.com
```

### Success Response

```json
{
  "answer": "Bl"
}
```

### Existing URL Response

```json
{
  "shortUrl": "Bl"
}
```

---

## Redirect Using Short URL

### Request

```http
GET /Bl
```

### Response

Redirects user to:

```
https://google.com
```

### Invalid Short URL

```json
{
  "message": "Link Not Found"
}
```

Status Code:

```http
404 Not Found
```

---

## Database Schema

```javascript
{
    id: Number,
    shortURL: String,
    longUrl: String
}
```

---

## Deployment

The application can be deployed using:

* Render
* Railway
* AWS EC2
* Azure App Service
* Google Cloud Run

MongoDB Atlas is used as the cloud database.

---

## Author

Aviral Mishra

GitHub:
https://github.com/mishraaviral7002

```
```
