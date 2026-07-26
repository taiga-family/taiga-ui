export interface ReplacementFunctionParameter {
    readonly names: string[];
    readonly moduleSpecifier?: string[] | string;
    readonly parameters: Array<{
        readonly name: string;
        readonly renameTo?: string;
        readonly remove?: boolean;
    }>;
    readonly valueReplacer?: Array<{
        readonly from: string;
        readonly to: string;
    }>;
}
