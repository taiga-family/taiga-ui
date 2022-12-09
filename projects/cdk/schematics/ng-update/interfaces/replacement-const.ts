export interface ReplacementConst {
    readonly from: {
        readonly name: string;
        readonly moduleSpecifier?: string[] | string;
    };
    readonly to: {
        readonly name: string;
        readonly namedImport?: string;
        readonly moduleSpecifier: string;
    };
}
