export interface MigrationWarning {
    readonly message: string;
    readonly moduleSpecifier?: string;
    readonly name: string;
}
