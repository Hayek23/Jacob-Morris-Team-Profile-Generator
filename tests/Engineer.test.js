const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('GitHub', () => {
        it('should return with the github of the engineer', () => {
            const engineer = new Engineer('Jacob', 10, 'jwm3926@gmail.com', 'hayek23');

            expect(engineer.getGitHub()).toEqual('hayek23');
        });
    });
    describe('Role', () => {
        it('should return with the role engineer', () => {
            const engineer = new Engineer('Jacob', 10, 'jwm3926@gmail.com', 'hayek23')

            expect(engineer.getRole()).toEqual('Engineer')
        })
    })
})