export interface ReplacementEnum {
    readonly keepAsType?: boolean;
    readonly name: string;
    readonly replaceValues: Record<string, string>;
}
