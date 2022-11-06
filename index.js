const generateHTML = require('./src/generateHTML');
const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const { create } = require('domain');

const team = []

const createManager = () =>{
    inquirer.prompt([
        {
            type:'input',
            message:'What is the name of your team manager?',
            name:'managerName',
        },
        {
            type:'input',
            message:'What is the employee ID of your team manager?',
            name:'managerId',
        },
        {
            type:'input',
            message:'What is the email of your team manager?',
            name:'managerEmail',
        },
        {
            type:'input',
            message:'What is the office number of your manager?',
            name:'managerOfficeNumber',
        },
    ])
    .then(managerInput => {
        const {managerName, managerId, managerEmail, managerOfficeNumber} = managerInput;
        const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)

        team.push(manager)
        console.log(manager)
    })
}

const addEmployee = () => {
    inquirer.prompt([
        {
            type:'input',
            message:'What is the name of this employee?',
            name:'name',
        },
        {
            type:'input',
            message:'What is the email of this employee?',
            name:'email',
        },
        {
            type:'input',
            message:'What is the Id of this employee?',
            name:'id',
       },
       {
            type:'list',
            message:'Is this employee an intern or engineer?',
            choices: ['Intern', 'Engineer'],
            name:'role',
       },
       {
            type:'input',
            message:'What school does this intern attend?',
            name:'school',
            when: (input) => input.role === "Intern",
       },
       {
            type:'input',
            message: 'What is the GitHub user name of this engineer?',
            name:'github',
            when:(input) => input.role === 'Engineer',
       },
       {
        type:'confirm',
        message:'Would you like to add another member?',
        name:'addNewMember',
        default: false
       },
    ])
    .then(employeeInput => {
        var {name, email, id, role, school, github, addNewMember} = employeeInput
        let employee;
        if(role === 'Engineer'){
             employee = new Engineer(name, email, id, github);
        } else if(role === 'Intern'){
             employee = new Intern(name, email, id, school);
        };
        team.push(employee)
        console.log(employee)
        if(addNewMember){
            return addEmployee(team);
        }else{
            return;
        }
    });
};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if(err) {
            return console.log(err);
        } else{
            console.log('File Made!');
        }
    })
};