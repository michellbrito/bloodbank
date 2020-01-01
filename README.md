# Blood Bank Project


 This blood bank project implements a terminal node js application that allows the user to SELECT, DELETE, INSERT, UPDATE, INNER JOIN. 
 
 
 ## ER-Diagram
 
 ![ER-Diagram](https://i.imgur.com/FXhGkYt.png)

## Dependencies Used 
- mysql
- console.table
- inquirer
- dotenv

## Installation

OS X & Linux:

```sh
// clone the repo into computer 
git clone https://github.com/michellbrito/bloodbank.git

// cd into the repo
cd bloodbank

// create an .env file and password to .env
touch .env
open .env
DB_PASS=your_password

// install npm packages stored in the package.json
npm i

// start the node application 
node bloodbank.js
```

## Usage example

- Run the schema.sql, blood_bank.sql, donor.sql, hospital.sql, patient.sql, blood_bank_donations.sql, blood_type_compability.sql, hospital_donations.sql, patient_blood_usage.sql in your mysql workbench. 

- Create an .env file and set your own password
`DB_PASS: your_password` 

- Run the application
 `node bloodbank.js`
 
- You can now SELECT, INSERT, UPDATE, DELETE, SELECT INNER JOINS, QUIT by clicking the options

![Video](blood_bank_demo.gif)



