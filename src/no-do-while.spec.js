const rule = require('./no-do-while');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('@jaedle-kata/no-for', rule, {
    valid: [
        'const arr = [1, 2, 3]; arr.forEach((item) => console.log(item));',
    ],
    invalid: [
        {
            code: 'let i = 0; do { console.log(arr[i]); i++; } while (i < arr.length);',
            errors: [{ message: 'use of do-while-loops is forbidden' }],
        },
    ],
});
