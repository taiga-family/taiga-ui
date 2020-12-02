export interface Schema {
    $schema?: string;
    cli?: CliOptions;
    /**
     * Default project name used in commands.
     */
    defaultProject?: string;
    /**
     * Path where new projects will be created.
     */
    newProjectRoot?: string;
    projects?: Projects;
    schematics?: SchematicOptions;
    version: number;
}
export interface CliOptions {
    /**
     * Share anonymous usage data with the Angular Team at Google.
     */
    analytics?: Analytics;
    /**
     * The default schematics collection to use.
     */
    defaultCollection?: string;
    /**
     * Specify which package manager tool to use.
     */
    packageManager?: PackageManager;
    /**
     * Control CLI specific console warnings
     */
    warnings?: Warnings;
}
/**
 * Share anonymous usage data with the Angular Team at Google.
 */
export declare type Analytics = boolean | string;
/**
 * Specify which package manager tool to use.
 */
export declare enum PackageManager {
    Cnpm = "cnpm",
    Npm = "npm",
    Pnpm = "pnpm",
    Yarn = "yarn"
}
/**
 * Control CLI specific console warnings
 */
export interface Warnings {
    /**
     * Show a warning when the TypeScript version is incompatible.
     */
    typescriptMismatch?: boolean;
    /**
     * Show a warning when the global version is newer than the local one.
     */
    versionMismatch?: boolean;
}
export interface Projects {
}
export interface SchematicOptions {
    "@schematics/angular:class"?: SchematicsAngularClass;
    "@schematics/angular:component"?: SchematicsAngularComponent;
    "@schematics/angular:directive"?: SchematicsAngularDirective;
    "@schematics/angular:module"?: SchematicsAngularModule;
    "@schematics/angular:pipe"?: SchematicsAngularPipe;
    "@schematics/angular:service"?: SchematicsAngularService;
}
export interface SchematicsAngularClass {
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
}
export interface SchematicsAngularComponent {
    /**
     * Specifies the change detection strategy.
     */
    changeDetection?: ChangeDetection;
    /**
     * Specifies if the style will contain `:host { display: block; }`.
     */
    displayBlock?: boolean;
    /**
     * Specifies if the component is an entry component of declaring module.
     */
    entryComponent?: boolean;
    /**
     * Specifies if declaring module exports the component.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Specifies if the style will be in the ts file.
     */
    inlineStyle?: boolean;
    /**
     * Specifies if the template will be in the ts file.
     */
    inlineTemplate?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * The prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The selector to use for the component.
     */
    selector?: string;
    /**
     * Flag to skip the module import.
     */
    skipImport?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * Specifies the view encapsulation strategy.
     */
    viewEncapsulation?: ViewEncapsulation;
}
/**
 * Specifies the change detection strategy.
 */
export declare enum ChangeDetection {
    Default = "Default",
    OnPush = "OnPush"
}
/**
 * The file extension or preprocessor to use for style files.
 */
export declare enum Style {
    Css = "css",
    Less = "less",
    Sass = "sass",
    Scss = "scss",
    Styl = "styl"
}
/**
 * Specifies the view encapsulation strategy.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    Native = "Native",
    None = "None",
    ShadowDom = "ShadowDom"
}
export interface SchematicsAngularDirective {
    /**
     * Specifies if declaring module exports the directive.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * The prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The selector to use for the directive.
     */
    selector?: string;
    /**
     * Flag to skip the module import.
     */
    skipImport?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
}
export interface SchematicsAngularModule {
    /**
     * Flag to control whether the CommonModule is imported.
     */
    commonModule?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * Generates a routing module.
     */
    routing?: boolean;
    /**
     * The scope for the generated routing.
     */
    routingScope?: RoutingScope;
}
/**
 * The scope for the generated routing.
 */
export declare enum RoutingScope {
    Child = "Child",
    Root = "Root"
}
export interface SchematicsAngularPipe {
    /**
     * Specifies if declaring module exports the pipe.
     */
    export?: boolean;
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * Allows specification of the declaring module.
     */
    module?: string;
    /**
     * Allows for skipping the module import.
     */
    skipImport?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
}
export interface SchematicsAngularService {
    /**
     * Flag to indicate if a directory is created.
     */
    flat?: boolean;
    /**
     * When true, does not create test files.
     */
    skipTests?: boolean;
}
