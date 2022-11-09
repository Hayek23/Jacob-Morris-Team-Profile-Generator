const Employee = require('../lib/employee')
const index = require('../index')


function generateManager(manager){
    return `            <div class="col-sm">
    <h2 class="bg-warning">${manager.name}</h2>
    <h3>Manager</h3>
    <h3>Employee ID: ${manager.id}</h3>
    <h3>Email: ${manager.email}</h3>
    <h3>Office Number: ${manager.officeNumber}</h3>
</div>`
}

function generateEngineer(employee){
    return `            <div class="col-sm">
    <h2 class="bg-success">${employee.name}</h2>
    <h3>${employee.role}</h3>
    <h3>Employee ID: ${employee.id}</h3>
    <h3>Email: ${employee.email}</h3>
    <h3>GitHub: ${employee.github}</h3>
</div>`
}
function generateIntern(employee){
    return `            <div class="col-sm">
    <h2 class="bg-success">${employee.name}</h2>
    <h3>${employee.role}</h3>
    <h3>Employee ID: ${employee.id}</h3>
    <h3>Email: ${employee.email}</h3>
    <h3>School: ${employee.school}</h3>
</div>`
}



const generateTeam = (data) => {

    page = [];

    for (let i=0; i<data.length; i++){
        const role = data[i].getRole();

        
        if (role === 'Intern'){
            const intern = generateIntern(data[i])
            page.push(intern)
        } else if(role === 'Engineer'){
            const engineer = generateEngineer(data[i])
            page.push(engineer)
        }else if(role === 'Manager'){
            const manager = generateManager(data[i]);
        page.push(manager);

        };
    };

    const employees = page.join('');
    const createTeam = generateTeamProfile(employees);

    console.log(createTeam)

    return createTeam;
};

function generateTeamProfile(employees){

    return`<!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Team Profile</title>
      </head>
      <body>
        <h1 class="d-flex justify-content-center bg-info">Your Team Profile</h1>
        <div class="container">
            <div class="d-flex row">
                ${employees}
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.14.3/dist/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
      </body>
    </html>`
}

module.exports=generateTeam