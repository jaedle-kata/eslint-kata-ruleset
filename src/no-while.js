exports.create = function (context) {
    return {
        WhileStatement: function (node) {
            context.report({
                node: node,
                message:
                    "use of while-loops is forbidden",
            });
        },
    };
};
