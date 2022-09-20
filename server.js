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
    db.query('SELECT role.id, title, salary, name AS dept FROM role JOIN department ON role.department_id = department.id', (err, role) => {
        if(err) throw err;
        console.table(role);
        init();
    })
};

const addRole = () => {
    // const addRole = questions.addRole;
    // addRole[3].choices = 
};

const showAllDept = () => {
    db.query('SELECT * FROM department', (err, department) => {
        if(err) throw err;
        console.table(department);
        init();
    })
};

const addDept = async () => {
    const input = await prompt(questions.addDept);
    db.query('INSERT INTO department SET ?', input, (err) => {
        if(err) throw err;
        console.log(`Added ${input.name}`);
        init();
    })
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