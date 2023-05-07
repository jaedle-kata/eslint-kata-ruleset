const rule = require('./no-while');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('@jaedle-kata/no-for', rule, {
    valid: [
        'const arr = [1, 2, 3]; arr.forEach((item) => console.log(item));',
    ],
    invalid: [
        {
            code: 'while(true) {console.log("hello"); }',
            errors: [{ message: 'use of while-loops is forbidden' }],
        },
    ],
});
