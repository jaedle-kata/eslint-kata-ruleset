exports.create = function (context) {
    return {
        DoWhileStatement: function (node) {
            context.report({
                node: node,
                message:
                    "use of do-while-loops is forbidden",
            });
        },
    };
};
