const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, email, id, officeNumber){
        this.officeNumber = officeNumber
        super(name, id, email)
    }
    getRole(){
        return 'Manager'
    };
};

module.exports = Manager 