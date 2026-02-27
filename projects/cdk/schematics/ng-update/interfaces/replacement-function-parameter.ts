export interface ReplacementFunctionParameter {
    readonly names: string[];
    readonly moduleSpecifier?: string[] | string;
    readonly parameterName: string;
    readonly newParameterName?: string;
    readonly valueReplacer?: Array<{
        readonly from: string;
        readonly to: string;
    }>;
}
