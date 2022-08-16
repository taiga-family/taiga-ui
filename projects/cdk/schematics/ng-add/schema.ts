export interface Schema {
    readonly project: string;
    readonly addons: ReadonlyArray<string>;
    readonly addGlobalStyles: boolean;
    readonly addAlertModule: boolean;
    readonly addDialogsModule: boolean;
    readonly addSanitizer: boolean;
}
