/**
 * Creates a new generic component definition in the given or default project.
 */
export interface Schema {
    /**
     * The change detection strategy to use in the new component.
     */
    changeDetection?: ChangeDetection;
    /**
     * Specifies if the style will contain `:host { display: block; }`.
     */
    displayBlock?: boolean;
    /**
     * When true, the new component is the entry component of the declaring NgModule.
     * @deprecated Since version 9.0.0 with Ivy, entryComponents is no longer necessary.
     */
    entryComponent?: boolean;
    /**
     * When true, the declaring NgModule exports this component.
     */
    export?: boolean;
    /**
     * When true, creates the new files at the top level of the current project.
     */
    flat?: boolean;
    /**
     * When true, includes styles inline in the component.ts file. Only CSS styles can be
     * included inline. By default, an external styles file is created and referenced in the
     * component.ts file.
     */
    inlineStyle?: boolean;
    /**
     * When true, includes template inline in the component.ts file. By default, an external
     * template file is created and referenced in the component.ts file.
     */
    inlineTemplate?: boolean;
    /**
     * When true, applies lint fixes after generating the component.
     */
    lintFix?: boolean;
    /**
     * The declaring NgModule.
     */
    module?: string;
    /**
     * The name of the component.
     */
    name: string;
    /**
     * The path at which to create the component file, relative to the current workspace.
     * Default is a folder with the same name as the component in the project root.
     */
    path?: string;
    /**
     * The prefix to apply to the generated component selector.
     */
    prefix?: string;
    /**
     * The name of the project.
     */
    project?: string;
    /**
     * The HTML selector to use for this component.
     */
    selector?: string;
    /**
     * When true, does not import this component into the owning NgModule.
     */
    skipImport?: boolean;
    /**
     * Specifies if the component should have a selector or not.
     */
    skipSelector?: boolean;
    /**
     * When true, does not create "spec.ts" test files for the new component.
     */
    skipTests?: boolean;
    /**
     * The file extension or preprocessor to use for style files.
     */
    style?: Style;
    /**
     * Adds a developer-defined type to the filename, in the format "name.type.ts".
     */
    type?: string;
    /**
     * The view encapsulation strategy to use in the new component.
     */
    viewEncapsulation?: ViewEncapsulation;
}
/**
 * The change detection strategy to use in the new component.
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
 * The view encapsulation strategy to use in the new component.
 */
export declare enum ViewEncapsulation {
    Emulated = "Emulated",
    Native = "Native",
    None = "None",
    ShadowDom = "ShadowDom"
}
