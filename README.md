# Employee Tracker Application

## Table of Contents

* [Description](#description)
* [Technologies](#technologies)
* [Usage](#usage)
* [Visuals](#visuals)

## Description

The Employee Tracker is a content management system application that is run from the command line. The app is designed to allow both developers and non-developers alike to manage a company's employee database. The application uses MySQL, Node.js, and the Inquirer NPM to interact with the user. The app has the following functionality:

* View all employees
* Add an employee
* Update an employee's role
* View all roles
* View all departments
* Add a department

The application also allows you to add managers to employees upon adding that employee to the database, as well as linking a role with a pre-defined salary and department. You are also able to exit the application from the main menu.

## Technologies

* JavaScript
* Node.js
* MySQL
* Inquirer NPM

## Usage

Upon cloning the repository you will need to run some commands to begin using the application. Please note that you can seed the database with preprepared information should you choose. The step will be included last below. 

1. To download dependencies for the app:
```
npm i
```
2. To initialize the MySQL database and all tables:
```
mysql -uroot
SOURCE assets/db/schema.sql
```
3. To initialize the app:
```
node server
```
* To seed the database, run this command after step 2:
```
SOURCE assets/db/seeds.sql
```


## Visuals

To see a full walkthrough of the functionality of the application, visit this [link.](https://drive.google.com/file/d/1J9xcw0sXFeMeCZTFBrEPLRunfio-aaoy/view?usp=sharing)