const rule = require('./no-array-push');

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2015 } });

ruleTester.run('no-array-push', rule, {
    valid: [
        { code: 'const arr = [1, 2, 3];' },
        { code: 'const arr = []; arr[arr.length] = 1;' },
        { code: 'const arr = []; arr[0] = 1;' },
        { code: 'const arr1 = [1, 2, 3], arr2 = [4, 5, 6]; const arr3 = [...arr1, ...arr2];' },
        {
            code: 'const arr = []; const foo = item => arr = [...arr, item]; [1, 2, 3].forEach(foo);',
            parserOptions: { ecmaVersion: 6 },
        },
    ],
    invalid: [
        {
            code: 'const arr = []; arr.push(1);',
            errors: [{ message: 'use of Array.push is forbidden' }],
        },
        {
            code: 'const arr1 = [1, 2, 3], arr2 = [4, 5, 6]; arr1.push(...arr2);',
            errors: [{ message: 'use of Array.push is forbidden' }],
        },
        {
            code: 'const arr = []; [1, 2, 3].forEach(item => arr.push(item));',
            errors: [{ message: 'use of Array.push is forbidden' }],
        },
    ],
});