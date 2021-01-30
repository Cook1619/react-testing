import { zipRegex } from '../Helpers';

const expectMatch = (zipToMatch) => {
    expect(zipRegex.test(zipToMatch)).toEqual(true);
}

const expectNotToMatch = (zipToMatch) => {
    expect(zipRegex.test(zipToMatch)).toEqual(false);
}

describe('zip zode validation', () => {
    it('should only allow numbers', () => {
        expectMatch('55467');
    });
    it('should not allow letters', () => {
        expectNotToMatch('asd566');
    })
    it('should only allow 5 characters', () => {
        expectNotToMatch('555555');
    });
})