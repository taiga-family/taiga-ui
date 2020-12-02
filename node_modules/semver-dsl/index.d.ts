export interface ISemVerDSL {
    gte(version: string, callback: Function): ISemVerContextBoundDSL;
    lte(version: string, callback: Function): ISemVerContextBoundDSL;
    gt(version: string, callback: Function): ISemVerContextBoundDSL;
    lt(version: string, callback: Function): ISemVerContextBoundDSL;
    eq(version: string, callback: Function): ISemVerContextBoundDSL;
    neq(version: string, callback: Function): ISemVerContextBoundDSL;
    between(v1: string, v2: string, callback: Function): ISemVerContextBoundDSL;
}
export interface ISemVerContextBoundDSL {
    elseIf: ISemVerDSL;
    else(callback: Function): void;
}
export declare const SemVerDSL: (target: string, lastPredicate?: () => boolean) => {
    gte(version: string, callback: Function): ISemVerContextBoundDSL;
    lte(version: string, callback: Function): ISemVerContextBoundDSL;
    gt(version: string, callback: Function): ISemVerContextBoundDSL;
    lt(version: string, callback: Function): ISemVerContextBoundDSL;
    eq(version: string, callback: Function): ISemVerContextBoundDSL;
    neq(version: string, callback: Function): ISemVerContextBoundDSL;
    between(v1: string, v2: string, callback: Function): ISemVerContextBoundDSL;
};
