export interface Schema {
    readonly project: string;
    readonly addons: ReadonlyArray<string>;
    readonly addGlobalStyles: boolean;
    readonly addAlertModule: boolean;
    readonly addDialogsModule: boolean;
    readonly addSanitizer: boolean;

    /**
     * @example
     * ```console
     * schematics ./dist/cdk:updateToV3 --allow-private --skip-deep-imports --dry-run false
     * ```
     */
    'skip-deep-imports'?: boolean;
}
