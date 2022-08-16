export interface Schema {
    readonly project: string;
    readonly addGlobalStyles: boolean;
    readonly addons: ReadonlyArray<string>;
    readonly addAlertModule: boolean;
    readonly addDialogsModule: boolean;
    readonly addSanitizer: boolean;
}
