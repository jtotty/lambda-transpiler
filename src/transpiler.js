import { BOUND_VARIABLE, LAMBDA } from './model';

const lambdaTranspiler = astNode => `${astNode.variable} => `;
const boundVariableTranspiler = astNode => `(${astNode.variable})`;

export default function transpile(astNode, expression = '') {
    if (astNode === null) return expression;

    const recurse = newExpression => transpile(astNode.apply, expression.concat(newExpression));

    if (astNode.symbolType === LAMBDA) return recurse(lambdaTranspiler(astNode));
    if (astNode.symbolType === BOUND_VARIABLE) return recurse(boundVariableTranspiler(astNode));

    throw new Error(`Unknown symbol type ${astNode.symbolType}`);
};
