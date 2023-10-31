export interface ReplacementAttributeValue {
    readonly attrNames: string[];
    readonly values: Array<{readonly from: string; readonly to: string}>;
    readonly withTagNames?: string[];
}
