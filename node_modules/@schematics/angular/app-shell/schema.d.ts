/**
 * Generates an app shell for running a server-side version of an app.
 */
export interface Schema {
    /**
     * The name of the application directory.
     */
    appDir?: string;
    /**
     * The app ID to use in withServerTransition().
     */
    appId?: string;
    /**
     * The name of the related client app.
     */
    clientProject: string;
    /**
     * The name of the index file
     * @deprecated This option has no effect.
     */
    index?: string;
    /**
     * The name of the main entry-point file.
     */
    main?: string;
    /**
     * The HTML selector of the Universal app
     * @deprecated This option has no effect.
     */
    name?: string;
    /**
     * The output directory for build results.
     * @deprecated This option has no effect.
     */
    outDir?: string;
    /**
     * The root directory of the app.
     * @deprecated This option has no effect.
     */
    root?: string;
    /**
     * The name of the root module class.
     */
    rootModuleClassName?: string;
    /**
     * The name of the root module file
     */
    rootModuleFileName?: string;
    /**
     * Route path used to produce the app shell.
     */
    route?: string;
    /**
     * The path of the source directory.
     * @deprecated This option has no effect.
     */
    sourceDir?: string;
    /**
     * The name of the test entry-point file.
     * @deprecated This option has no effect.
     */
    test?: string;
    /**
     * The name of the TypeScript configuration file for tests.
     * @deprecated This option has no effect.
     */
    testTsconfigFileName?: string;
    /**
     * The name of the TypeScript configuration file.
     */
    tsconfigFileName?: string;
    /**
     * The name of related Universal app.
     * @deprecated This option has no effect.
     */
    universalProject?: string;
}
