const Employee = require('../lib/employee');

describe('Employee', () =>{
    describe("create", () => {
        it("should create an employee object", () => {
            const employee = new Employee('Jacob', 10, 'jwm3926@gmail.com');

            expect(employee.name).toEqual(expect.any(String));
            expect(employee.id).toEqual(expect.any(Number));
            expect(employee.email).toEqual(expect.any(String));
        });
    });

    describe("Name", () => {
        it("should return the employee name", () => {
            const employee = new Employee('Jacob', 10, 'jwm3926@gmail.com');

            expect(employee.getName()).toEqual(employee.name);
        });
    });
    describe("Id", () => {
        it("should return the employee Id", () => {
            const employee = new Employee('Jacob', 10, 'jwm3926@gmail.com');

            expect(employee.getId()).toEqual(employee.id);
        });
    });
    describe("Email", () => {
        it("should return the employee email", () => {
            const employee = new Employee('Jacob', 10, 'jwm3926@gmail.com');

            expect(employee.getEmail()).toEqual(employee.email);
        });
    });
    describe("role", ()=> {
        it("should return the role of the employee", () => {
            const employee = new Employee('Jacob', 10, 'jwm3926@gmail.com');

            expect(employee.getRole()).toEqual('Employee');
        });
    });
});