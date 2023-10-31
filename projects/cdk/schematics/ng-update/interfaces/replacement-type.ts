export interface ReplacementType {
    readonly from: string;
    readonly moduleSpecifier?: string[] | string;
    readonly preserveGenerics?: boolean;
    readonly to?: string;
}
