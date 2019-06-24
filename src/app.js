import parse from './parser';
import transpile from './transpiler';

// const expression = 'λx.x';
// const lexer = str => str.split(/\./);

const lexemArray = ['λx.', 'x'];
console.log(transpile(parse(lexemArray)));
