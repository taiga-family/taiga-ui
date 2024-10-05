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
    };
}

export interface ReplacementIdentifierMulti {
    readonly from:
        | ReadonlyArray<ReplacementIdentifier['from']>
        | ReplacementIdentifier['from'];
    readonly to: ReadonlyArray<ReplacementIdentifier['to']> | ReplacementIdentifier['to'];
}
