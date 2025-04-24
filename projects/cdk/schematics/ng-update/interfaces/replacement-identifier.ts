export interface ReplacementIdentifier {
    readonly from: {
        readonly moduleSpecifier?: string[] | string;
        readonly name: string;
    };
    readonly to: {
        readonly moduleSpecifier: string;
        readonly name: string;
        readonly namedImport?: string;
        readonly spreadInModule?: boolean;
        readonly callExpression?: boolean;
    };
}

export interface ReplacementIdentifierMulti {
    readonly from: Array<ReplacementIdentifier['from']> | ReplacementIdentifier['from'];
    readonly to: Array<ReplacementIdentifier['to']> | ReplacementIdentifier['to'];
}
