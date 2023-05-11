export interface ReplaceableAttributeValue {
    readonly attrName: string;
    readonly values: Array<{readonly from: string; readonly to: string}>;
    readonly withTagNames?: string[];
}
