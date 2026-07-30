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

interface ReplacementIdentifierMultiTarget
    extends Omit<ReplacementIdentifier['to'], 'moduleSpecifier'> {
    /**
     * Module to import the replacement from. Omit for a literal replacement
     * (e.g. `[]`) — usages are rewritten and the old import is dropped without
     * adding a new one.
     */
    readonly moduleSpecifier?: string;
}

export interface ReplacementIdentifierMulti {
    readonly from: Array<ReplacementIdentifier['from']> | ReplacementIdentifier['from'];
    readonly to: ReplacementIdentifierMultiTarget[] | ReplacementIdentifierMultiTarget;
}
