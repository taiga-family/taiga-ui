export interface ReplacementIdentifier {
    readonly from: {
        readonly moduleSpecifier?: string[] | string;
        readonly name: string;
    };
    readonly to: {
        readonly moduleSpecifier: string;
        readonly name: string;
        readonly namedImport?: string;
    };
}
