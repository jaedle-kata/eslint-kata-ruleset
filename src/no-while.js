exports.create = function (context) {
    return {
        WhileStatement: function (node) {
            if (node.type === "WhileStatement") {
                context.report({
                    node: node,
                    message:
                        "use of while-loops is forbidden",
                });
            }
        },
    };
};
