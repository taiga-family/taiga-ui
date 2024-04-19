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

export interface ReplacementIdentifierMulti extends Pick<ReplacementIdentifier, 'from'> {
    readonly to:
        | Array<{
              readonly moduleSpecifier: string;
              readonly name: string;
              readonly namedImport?: string;
          }>
        | {
              readonly moduleSpecifier: string;
              readonly name: string;
              readonly namedImport?: string;
          };
}
