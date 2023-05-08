const rule = require('./no-array-foreach');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-array-foreach', rule, {
    valid: [
        { code: 'const arr = [1, 2, 3];' },
        { code: 'const arr = []; arr[arr.length] = 1;' },
        { code: 'const arr = []; arr[0] = 1;' },
        { code: 'const arr1 = [1, 2, 3], arr2 = [4, 5, 6]; const arr3 = [...arr1, ...arr2];' },
        {
            code: '',
            parserOptions: { ecmaVersion: 6 },
        },
    ],
    invalid: [
        {
            code: 'const arr = []; const foo = item => arr = [...arr, item]; [1, 2, 3].forEach(foo);',
            errors: [{ message: 'use of Array.forEach is forbidden' }],
        },
        {
            code: '[].forEach();',
            errors: [{ message: 'use of Array.forEach is forbidden' }],
        },
    ],
});