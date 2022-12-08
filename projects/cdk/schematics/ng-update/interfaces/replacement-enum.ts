export interface ReplacementEnum {
    readonly name: string;
    readonly replaceValues: Record<string, string>;
    readonly keepAsType?: boolean;
}
