export interface Schema {
    readonly project: string;
    readonly addons: readonly string[];
    readonly addAlertModule: boolean;
    readonly addDialogsModule: boolean;
    readonly addSanitizer: boolean;
}
