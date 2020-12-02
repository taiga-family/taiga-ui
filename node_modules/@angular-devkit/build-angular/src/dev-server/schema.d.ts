/**
 * Dev Server target options for Build Facade.
 */
export interface Schema {
    /**
     * Whitelist of hosts that are allowed to access the dev server.
     */
    allowedHosts?: string[];
    /**
     * Build using Ahead of Time compilation.
     */
    aot?: boolean;
    /**
     * Base url for the application being built.
     */
    baseHref?: string;
    /**
     * Target to serve.
     */
    browserTarget: string;
    /**
     * Use a separate bundle containing code used across multiple bundles.
     */
    commonChunk?: boolean;
    /**
     * URL where files will be deployed.
     */
    deployUrl?: string;
    /**
     * Don't verify connected clients are part of allowed hosts.
     */
    disableHostCheck?: boolean;
    /**
     * Output in-file eval sourcemaps.
     * @deprecated
     */
    evalSourceMap?: boolean;
    /**
     * Enable hot module replacement.
     */
    hmr?: boolean;
    /**
     * Show a warning when the --hmr option is enabled.
     */
    hmrWarning?: boolean;
    /**
     * Host to listen on.
     */
    host?: string;
    /**
     * Whether to reload the page on change, using live-reload.
     */
    liveReload?: boolean;
    /**
     * Opens the url in default browser.
     */
    open?: boolean;
    /**
     * Enables optimization of the build output.
     */
    optimization?: OptimizationUnion;
    /**
     * Enable and define the file watching poll time period in milliseconds.
     */
    poll?: number;
    /**
     * Port to listen on.
     */
    port?: number;
    /**
     * Log progress to the console while building.
     */
    progress?: boolean;
    /**
     * Proxy configuration file.
     */
    proxyConfig?: string;
    /**
     * The URL that the browser client (or live-reload client, if enabled) should use to connect
     * to the development server. Use for a complex dev server setup, such as one with reverse
     * proxies.
     */
    publicHost?: string;
    /**
     * The pathname where the app will be served.
     */
    servePath?: string;
    /**
     * Show a warning when deploy-url/base-href use unsupported serve path values.
     */
    servePathDefaultWarning?: boolean;
    /**
     * Output sourcemaps.
     */
    sourceMap?: SourceMapUnion;
    /**
     * Serve using HTTPS.
     */
    ssl?: boolean;
    /**
     * SSL certificate to use for serving HTTPS.
     */
    sslCert?: string;
    /**
     * SSL key to use for serving HTTPS.
     */
    sslKey?: string;
    /**
     * Use a separate bundle containing only vendor libraries.
     */
    vendorChunk?: boolean;
    /**
     * Resolve vendor packages sourcemaps.
     * @deprecated
     */
    vendorSourceMap?: boolean;
    /**
     * Adds more details to output logging.
     */
    verbose?: boolean;
    /**
     * Rebuild on change.
     */
    watch?: boolean;
}
/**
 * Enables optimization of the build output.
 */
export declare type OptimizationUnion = boolean | OptimizationClass;
export interface OptimizationClass {
    /**
     * Enables optimization of the scripts output.
     */
    scripts?: boolean;
    /**
     * Enables optimization of the styles output.
     */
    styles?: boolean;
}
/**
 * Output sourcemaps.
 */
export declare type SourceMapUnion = boolean | SourceMapClass;
export interface SourceMapClass {
    /**
     * Output sourcemaps used for error reporting tools.
     */
    hidden?: boolean;
    /**
     * Output sourcemaps for all scripts.
     */
    scripts?: boolean;
    /**
     * Output sourcemaps for all styles.
     */
    styles?: boolean;
    /**
     * Resolve vendor packages sourcemaps.
     */
    vendor?: boolean;
}
