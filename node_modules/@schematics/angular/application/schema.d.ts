/**
 * Generates a new basic app definition in the "projects" subfolder of the workspace.
 */
export interface Schema {
    /**
     * When true, includes styles inline in the root component.ts file. Only CSS styles can be
     * included inline. Default is false, meaning that an external styles file is created and
     * referenced in the root component.ts file.
     */
    inlineStyle?: boolean;
    /**
     * When true, includes template inline in the root component.ts file. Default is false,
     * meaning that an external template file is created and referenced in the root component.ts
     * file.
     */
    inlineTemplate?: boolean;
    /**
     * When true, applies lint fixes after generating the application.
     */
    lintFix?: boolean;
    /**
     * When true, creates a bare-bones project without any testing frameworks. (Use for learning
     * purposes only.)
     */
    minimal?: boolean;
    /**
     * The name of the new app.
     */
    name: string;
    /**
     * A prefix to apply to generated selectors.
     */
    prefix?: string;
    /**
     * The root directory of the new app.
     */
    projectRoot?: string;
    /**
     * When true, creates a routing NgModule.
     */
    routing?: boolean;
    /**
     * Skip installing dependency packages.
     */
    skipInstall?: boolean;
    /**
     * When true, does not add dependencies to the "package.json" file.
     */
    skipPackageJson?: boolean;
    /**
     * When true, does not create "spec.ts" test files for the app.
     */
    skipTests?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * The view encapsulation strategy to use in the new app.
     */
    viewEncapsulation?: ViewEncapsulation;
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
 * The view encapsulation strategy to use in the new app.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    Native = "Native",
    None = "None",
    ShadowDom = "ShadowDom"
}
