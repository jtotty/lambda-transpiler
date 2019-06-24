export const REGEXES = {
    boundVariable: /[a-km-z]( ?)(?!.)/,
    lambda: /λ[a-km-z][.]/,
};

export const LAMBDA = 'lambda';
export const BOUND_VARIABLE = 'boundVariable';

export class Lambda {
    constructor(val, apply) {
        this.symbolType = LAMBDA;
        this.variable = val;
        this.apply = apply;
    }
}

export class BoundVariable {
    constructor( val, apply) {
        this.symbolType = BOUND_VARIABLE;
        this.variable = val;
        this.apply = apply;
    }
}
