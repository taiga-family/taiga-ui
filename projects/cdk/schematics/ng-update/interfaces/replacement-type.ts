export interface ReplacementType {
    readonly from: string;
    readonly moduleSpecifier?: string[] | string;
    readonly preserveGenerics?: boolean;
    readonly to?: string;
    readonly removeImport?: boolean;
    readonly newImports?: {name: string; moduleSpecifier: string}[];
}
