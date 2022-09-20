const inquirer = require('inquirer');
const mysql = require('mysql2');
require('console.table');
const questions = require('./assets/src/questions');

const db = mysql.createConnection({
    user: 'root',
    database: 'employees',
});

const prompt = inquirer.createPromptModule();

const showAllEmps = () => {
    
};

const addEmp = () => {

};

const updateEmpRole = () => {

};

const showAllRoles = () => {

};

const addRole = () => {

};

const showAllDept = () => {
    db.query('SELECT * FROM department', (err, department) => {
        if(err) throw err;
        console.table(department);
        init();
    })
};

const addDept = () => {

};

const init = async () => {
    const answers = await prompt(questions.menu);
    switch(answers.value) {
        case 'View All Employees': {
            return showAllEmps();
        }
        case 'Add Employee': {
            return addEmp();
        }
        case 'Update Employee Role': {
            return updateEmpRole();
        }
        case 'View All Roles': {
            return showAllRoles();
        }
        case 'Add Role': {
            return addRole();
        }
        case 'View All Departments': {
            return showAllDept();
        }
        case 'Add Department': {
            return addDept();
        }
        case 'Quit': {
            return process.exit();
        }
    }
};

init();