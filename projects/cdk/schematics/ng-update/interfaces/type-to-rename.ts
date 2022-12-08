export interface TypeToRename {
    readonly from: string;
    readonly to?: string;
    readonly moduleSpecifier?: string[] | string;
    readonly preserveGenerics?: boolean;
}
