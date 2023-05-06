module.exports = {
    rules: {
        "@jaedle-kata/no-for": {
            meta: {
                type: "problem",
                docs: {
                    description: "the usage of for loops is forbidden",
                    category: "Best Practices",
                    recommended: true,
                },
            },
            create: function (context) {
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
                };
            },
        },
    },
};
