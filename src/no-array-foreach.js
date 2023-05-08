exports.create = function (context) {
    function report(node) {
        context.report({
            node,
            message: 'use of Array.forEach is forbidden',
        });
    }

    return {
        CallExpression(node) {
            if (
                node.callee.type === 'MemberExpression' &&
                node.callee.property.type === 'Identifier' &&
                node.callee.property.name === 'forEach'
            ) {
                report(node);
            }
        },
    };
};
