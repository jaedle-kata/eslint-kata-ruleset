exports.create = function (context) {
    return {
        ForStatement: function (node) {
            context.report({
                node: node,
                message:
                    "use of for-loops is forbidden",
            });
        },
        ForOfStatement: function (node) {
            context.report({
                node: node,
                message:
                    "use of for-loops is forbidden",
            });
        },
        ForInStatement: function (node) {
            context.report({
                node: node,
                message:
                    "use of for-loops is forbidden",
            });
        },
    };
};
