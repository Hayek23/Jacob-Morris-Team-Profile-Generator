function generateManager(managerInput){
    return `            <div class="col-sm">
    <h2 class="bg-warning">${managerInput.managerName}</h2>
    <h3>Manager</h3>
    <h3>Employee ID: ${managerInput.managerId}</h3>
    <h3>Email: ${managerInput.managerEmail}</h3>
    <h3>Office Number: ${managerInput.managerOfficeNumber}</h3>
</div>`
}

function generateEngineer(employee){
    return `            <div class="col-sm">
    <h2 class="bg-success">${employee.name}</h2>
    <h3>${employee.role}</h3>
    <h3>Employee ID: ${emloyee.id}</h3>
    <h3>Email: ${employee.email}</h3>
    <h3>GitHub: ${employee.github}</h3>
</div>`
}
function generateIntern(employee){
    return `            <div class="col-sm">
    <h2 class="bg-success">${employee.name}</h2>
    <h3>${employee.role}</h3>
    <h3>Employee ID: ${emloyee.id}</h3>
    <h3>Email: ${employee.email}</h3>
    <h3>School: ${employee.school}</h3>
</div>`
}
function generateTeam(data){
    page = [];

    for (let i=0; i<data.length; i++){
        const employee=data[i];
        const role = employee.getRole();

        const manager = generateManager(managerInput);
        page.push(manager);

        if (role === 'Intern'){
            const intern = generateIntern(employee)
            page.push(intern)
        } else if(role === 'Engineer'){
            const engineer = generateEngineer(employee)
            page.push(engineer)
        }
    };

    const employees = page.join('');
    const createTeam = generateTeamProfile();

    return createTeam;
};

function generateTeamProfile(){
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