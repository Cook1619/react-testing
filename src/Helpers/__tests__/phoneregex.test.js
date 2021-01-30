import { phoneRegex } from '../Helpers';

const expectMatch = (phoneNumberToMatch)=>
  expect(phoneRegex.test(phoneNumberToMatch)).toEqual(true);

const expectNotToMatch = (phoneNumberToMatch)=>
  expect(phoneRegex.test(phoneNumberToMatch)).toEqual(false);

describe('phone validation', () => {
  it('should allow parens', () => {
    expectMatch('(612)-555-4545');
  });
  it('should allow hyphens', () => {
    expectMatch('612-555-4525');
  });
  it('should not allow *', () => {
    expectNotToMatch('612*652*8545');
  });
  it('should not allow letters', () => {
    expectNotToMatch('6a2-b52-454d');
  });
  it('should only allow 3 numbers on first number set', () => {
    expectNotToMatch('6123-256-3652');
  });
  it('should only allow 3 numbers on second number set', () => {
    expectNotToMatch('612-4256-3652');
  });
  it('should only allow 4 numbers on third number set', () => {
    expectNotToMatch('612-425-13652');
  });
  it('should not allow white spaces', () => {
    expectNotToMatch('612-425-13652      ');
  });
});