import { emailRegex } from '../Helpers';

const expectMatch = (emailToMatch) =>
    expect(emailRegex.test(emailToMatch)).toEqual(true);

const expectNotToMatch = (emailToMatch) =>
    expect(emailRegex.test(emailToMatch)).toEqual(false);

describe('email validation', () => {
    it('should allow basic alphanumeric and single tld domains', () => {
        const email = 'matt@domain.com';

        expectMatch(email);
    });
    it('should allow basic alphanumeric and subdomains', () => {
        const email = 'matt@sub.domain.com';

        expectMatch(email);
    });

    describe('should match all major tlds', () => {
        it('should match .net', () => {
            const email = 'sample@domain.net';

            expectMatch(email);
        });
        it('should match .cc', () => {
            const email = 'sample@domain.cc';

            expectMatch(email);
        });
        it('should match .biz', () => {
            const email = 'sample@domain.biz';

            expectMatch(email);
        });
        it('should match .co', () => {
            const email = 'sample@domain.co';

            expectMatch(email);
        });
        it('should match .org', () => {
            const email = 'sample@domain.org';

            expectMatch(email);
        });
        it('should match .gov', () => {
            const email = 'sample@domain.gov';

            expectMatch(email);
        });
        it('should match .study', () => {
            const email = 'sample@domain.study';

            expectMatch(email);
        });
        it('should match .us', () => {
            const email = 'sample@domain.us';

            expectMatch(email);
        });
        it('should match .state.us', () => {
            const email = 'sample@domain.mn.us.gov';

            expectMatch(email);
        });
        it('should allow capital letters', () => {
            const email = 'SampleEmail@gmail.com';

            expectMatch(email);
        });
    });

    describe('should not allow multiple @', () => {
        it('should not allow multiple @@@ contiguously', () => {
            const email = 'user@@@@@domain.com';

            expectNotToMatch(email);
        });

        it('should not allow split @text@', () => {
            const email = 'user@sometext@domain.com';

            expectNotToMatch(email);
        });
    });
    it('should allow + filters', () => {
        const email = 'user+filter@gmail.com';

        expectMatch(email);
    });
    describe('should allow dots in the username field', () => {
        it('sean.epping@optum.com should be valid', () => {
            const email = 'matt.cook@gmail.com';

            expectMatch(email);
        });

        it('sean.epping.uhg@domain.com should be valid', () => {
            const email = 'mcook@test.com';

            expectMatch(email);
        });
    });
    describe('edge cases with special chars', () => {
        it('should not allow double quotes', () => {
            const email = '"example"@domain.com';

            expectNotToMatch(email);
        });
    });
});
