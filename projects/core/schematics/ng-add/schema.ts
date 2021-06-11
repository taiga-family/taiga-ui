export interface Schema {
    readonly project: string;
    readonly addons: ReadonlyArray<string>;
    readonly addDefaultTheme: boolean;
    readonly addNotificationsModule: boolean;
    readonly addDialogsModule: boolean;
}
