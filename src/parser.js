import { BoundVariable, Lambda, REGEXES } from './model';

const head = ([x]) => x;
const tail = ([_, ...xs]) => xs;

export default function parse(lexemArray) {
    const handleNextLexem = () => lexemArray[1] ? parse(tail(lexemArray)) : null;
    const parseLambda = lexeme => new Lambda(lexeme[1], handleNextLexem());
    const parseBoundVariable = lexeme => new BoundVariable(lexeme[0], handleNextLexem());

    const lexeme = head(lexemArray);

    // Handle possibility of indentifying lexeme as more than one type of thing.
    const parseFn = [];
    if (lexeme.match(REGEXES.lambda)) parseFn.push(parseLambda);
    if (lexeme.match(REGEXES.boundVariable)) parseFn.push(parseBoundVariable);

    if (parseFn.length > 1)
        throw new Error(`
            Parser returned more than one possible interpretation for lexeme:
            '${lexeme}'
            ${parseFn}
        `);

    if (parseFn.length === 0)
        throw new Error(`Parser could not interpret lexeme:\n'${lexeme}'`);

    return parseFn[0](lexeme);
};
