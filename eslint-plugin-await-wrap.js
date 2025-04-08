module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Require all await expressions to be wrapped in Ѧ(await <...>.Ѧ)",
      recommended: true
    },
    fixable: "code",
    schema: [],
    messages: {
      awaitMustBeWrapper: "Await expressions must be wrapped in Ѧ(await <...>.Ѧ)"
  }
  },
  create(context) {
    return {
      AwaitExpression(node) {
        const sourceCode = context.getSourceCode();
        const parent = node.parent;

        const isWrappedInѦ =
          parent.type === "CallExpression" &&
          parent.callee.type === "Identifier" &&
          parent.callee.name === "Ѧ";

        const hasѦProperty =
          node.argument.type === "MemberExpression" &&
          node.argument.property.type === "Identifier" &&
          node.argument.property.name === "Ѧ";

        if (!isWrappedInѦ || !hasѦProperty) {
          context.report({
            node,
            messageId: "awaitMustBeWrapper",
            fix(fixer) {
              let fixedText = `await ${sourceCode.getText(node.argument)}`;
              if (!hasѦProperty)
                fixedText = `${fixedText}.Ѧ`;
              if (!isWrappedInѦ)
                fixedText = `Ѧ(${fixedText})`;
              return fixer.replaceText(node, fixedText);
            }
          });
        }
      }
    };
  }
};
