# API Rest With NodeJS

![Rest API Banner](https://blog.keycdn.com/blog/wp-content/uploads/2017/10/nodejs-banner.png)

[![node Version](https://img.shields.io/badge/Node%20Version-8.10.0-1dd1a1.svg)]()
[![npm Version](https://img.shields.io/badge/Npm%20Version-3.5.2-ff6b6b.svg)]()
[![bcrypt Version](https://img.shields.io/badge/Bcrypt%20Version-2.0.1-54a0ff.svg)]()
[![b-parser Version](https://img.shields.io/badge/Body--parser%20Version-1.18.3-ff9f43.svg)]()
[![express Version](https://img.shields.io/badge/Express%20Version-4.16.3-f8a5c2.svg)]()
[![npm Version](https://img.shields.io/badge/JsonWebToken%20Version-8.3.0-f7d794.svg)]()
[![npm Version](https://img.shields.io/badge/Mysql%20Version-2.15.0-574b90.svg)]()
[![npm Version](https://img.shields.io/badge/Sequelize%20Version-3.30.4-546de5.svg)]()

## SUMMARY
---

- What is it ? 

- Required installations

- Project Installation
    - Clone repository,
    - Install dependencies,
    - Configure database,
    - Launch server.

- Test register and log-in

## WHAT IS IT ?
---

It's a simple Rest-API with NodeJS, actually ( 28 June 2018 ), 
you can Sign-In, and Log-in with [Post-man](https://www.getpostman.com/).

## Required Installations
---

To run this project, you need install :
- [NodeJS](http://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Nodemon](https://nodemon.io/)
- Wamp / Xamp / Lamp (Local Database)
- [Postman](https://www.getpostman.com/)

## PROJECT INSTALLATION
---

### First Step :

Clone the project :

```bash
    git clone https://github.com/Skullyfox/API_Rest_NodeJS.git
```

and go to the directory with your terminal :

```bash
    cd API_Rest_NodeJS/
```

### Second Step :

Install all project dependancies with :

```bash
    npm install
```

### Third Step : 

Now, we'll configure the database :

In the folder `config`, you'll duplicate the file `config.json.template`, and rename the copy `config.json`.

Now, open this and enter your database informations like this exemple :

```javascript
{
    "development": {
      "username": "root",
      "password": "",
      "database": "API_Rest_Nodejs",
      "host": "localhost",
      "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "",
      "database": "API_Rest_Nodejs",
      "host": "localhost",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": "",
      "database": "API_Rest_Nodejs",
      "host": "localhost",
      "dialect": "mysql"
    }
}
```

Now you can save this file and begin to build your database.

## THE COMMANDS NEED TO BE EXECUTE AT THE BASE OF THE PROJECT

First, you'll create your database with :

```bash
    Sequelize db:create
```

Then, create the tables :

```bash
    Sequelize db:migrate
```

### Last Step :

Now, you'll launch the server with this command :

```bash
    nodemon
```

## TRY REGISTER AND LOG-IN
---

### Register :

Open `Postman`, then, select the method `POST` and enter this url : `localhost:8080/api/users/register`

In the window `body`, enter 3 KEYS : `username`, `password`, and `email`.

You can add bio too if you want, but this is Optional.

Don't forget to select the option : `x-www-form-urlencoded`

![postman](https://image.noelshack.com/fichiers/2018/26/2/1530018972-capture-du-2018-06-26-15-16-01.png)

And click send.

### Log-in :

Change the url to : `localhost:8080/api/users/login`.

Add the Keys : `email` and `password` with the same value of the register.

Click Send button, and, you're connected, and receive your token access !