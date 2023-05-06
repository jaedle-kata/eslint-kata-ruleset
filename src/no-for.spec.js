const rule = require('./no-for');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('@jaedle-kata/no-for', rule, {
    valid: [
        'const arr = [1, 2, 3]; arr.forEach((item) => console.log(item));',
    ],
    invalid: [
        {
            code: 'for (let i = 0; i < 10; i++) { console.log(i); }',
            errors: [{ message: 'use of for-loops is forbidden' }],
        },
        {
            code: 'for ( let number of numbers ) {console.log(number);}',
            errors: [{ message: 'use of for-loops is forbidden' }],
        },
        {
            code: 'for ( const index in names) {console.log(index);}',
            errors: [{ message: 'use of for-loops is forbidden' }],
        },
    ],
});
