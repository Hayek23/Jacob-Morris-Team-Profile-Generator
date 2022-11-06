const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('Office Number', () => {
        it('should return the office number of the manager', () => {
            const manager = new Manager('Jacob', 10, 'jwm3926@gmail.com', '12345678');

            expect(manager.getOfficeNumber()).toEqual('12345678');
        });
    });
    describe('Role', () => {
        it('should return the managers role as manager', () => {
            const manager = new Manager('Jacob', 10, 'jwm3926@gmail.com', '12345678');

            expect(manager.getRole()).toEqual('Manager');
        });
    });
});