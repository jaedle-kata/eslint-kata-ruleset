exports.create = function (context) {
    return {
        ForStatement: function (node) {
            if (node.type === "ForStatement") {
                context.report({
                    node: node,
                    message:
                        "use of for-loops is forbidden",
                });
            }
        },
        ForOfStatement: function (node) {
            if (node.type === "ForOfStatement") {
                context.report({
                    node: node,
                    message:
                        "use of for-loops is forbidden",
                });
            }
        },
        ForInStatement: function (node) {
            if (node.type === "ForInStatement") {
                context.report({
                    node: node,
                    message:
                        "use of for-loops is forbidden",
                });
            }
        },
    };
};
