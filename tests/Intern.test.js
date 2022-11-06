const Intern = require('../lib/intern')
describe('Intern', () => {
    describe('School', () => {
        it('should return the school of the intern', () => {
            const intern = new Intern('Jacob', 10, 'jwm3926@gmail.com', 'butler');

            expect(intern.getSchool()).toEqual('butler');
        });
    });
    describe('Role', () => {
        it('should return the role of the intern as intern', ()=> {
            const intern = new Intern('Jacob', 10, 'jwm3926@gmail.com', 'butler')

            expect(intern.getRole()).toEqual('Intern')
        })
    })
})
