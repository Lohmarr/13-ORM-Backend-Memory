# E-commerce Back End

 This project is the back end for an e-commerce website built with Node.js, Express.js, and Sequelize ORM to interact with a MySQL database.
 As a manager at an internet retail company, you want a back end for your e-commerce website that uses the latest technologies so that your company can compete with other e-commerce companies.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing API Routes](#testing-api-routes)
- [Contact](#contact)

## Installation

 To install the necessary dependencies, run:
```npm install```

This command will install the MySQL2, Sequelize, Express.js, and dotenv packages.

## Usage

 To set up and seed the database, use the following commands in your terminal:
  
 1. Log into your MySQL shell:
  ```mysql -u root -p```
 2. Run the following schema.sql file in the db folder to create the database:
  ```source db/schema.sql```
 3. Exit the MySQL shell with:
 exit
 4. Seed the database with:
 npm run seed
 5. To start the server, run:
 npm start

## Testing API Routes

 To test the API routes, you can use [Insomnia Core](https://insomnia.rest/) or any other similar tool. Test the GET, POST, PUT, and DELETE routes for categories, products, and tags.

## Contact

You can find more of my work at [Lohmarr](https://github.com/Lohmarr).
