import parse from './parser';
import transpile from './transpiler';


const expression = 'λx.x';
const lexer = str => str.split(/\./);

const lexemArray = ['λx.', 'λy.', 'λz.', 'x', 'y', 'z'];
console.log(transpile(parse(lexemArray)));
