export interface ReplacementFunctionParameter {
    readonly names: string[];
    readonly moduleSpecifier?: string[] | string;
    readonly parameters: string[];
    readonly valueReplacer: Array<{
        readonly from: string;
        readonly to: string;
    }>;
}
