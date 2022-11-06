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
    const createTeam = generateTeamProfile()
}