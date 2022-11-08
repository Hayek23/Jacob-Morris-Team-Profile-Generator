const generateTeam = require('./src/generateHTML');
const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const team = []

const createManager = () =>{
   return inquirer.prompt([
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
    ]);
}

const addEmployee = () => {
   return inquirer.prompt([
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
        let newEmployee;
        if(role === 'Engineer'){
             newEmployee = new Engineer(name, email, id, github);
        } else if(role === 'Intern'){
             newEmployee = new Intern(name, email, id, school);
        };
        team.push(newEmployee)
        console.log(newEmployee)
        if(addNewMember){
            return addEmployee(team);
        }else{
            return;
        }
    });
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err){
            return console.log(err)
        } else{
            console.log('File created!')
        }
    })
}

const data = JSON.stringify(team)

async function init(){
    const managerInput = await createManager()
    const {managerName, managerId, managerEmail, managerOfficeNumber} = managerInput;
    const manager = new Manager(managerName, managerId, managerEmail, managerOfficeNumber)

    const employeeInput = await addEmployee();
    
    team.push(manager)
    
    console.log(manager)
    const page = generateTeam(team)
    writeToFile(page)
};

init();

module.exports=data