"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const injection_js_1 = require("injection-js");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const build_graph_1 = require("./graph/build-graph");
const log = require("./utils/log");
const init_tsconfig_di_1 = require("./ng-package/entry-point/init-tsconfig.di");
const entry_point_di_1 = require("./ng-package/entry-point/entry-point.di");
const package_di_1 = require("./ng-package/package.di");
const project_di_1 = require("./project.di");
const options_di_1 = require("./ng-package/options.di");
/**
 * The original ng-packagr implemented on top of a rxjs-ified and di-jectable transformation pipeline.
 *
 * See the `docs/transformations.md` for more prose description.
 *
 * @link https://github.com/ng-packagr/ng-packagr/pull/572
 */
class NgPackagr {
    constructor(providers) {
        this.providers = providers;
        this.buildTransform = package_di_1.PACKAGE_TRANSFORM.provide;
    }
    /**
     * Adds options to ng-packagr
     *
     * @param options Ng Packagr Options
     * @return Self instance for fluent API
     */
    withOptions(options) {
        this.providers.push(options_di_1.provideOptions(options));
        return this;
    }
    /**
     * Sets the path to the user's "ng-package" file (either `package.json`, `ng-package.json`, or `ng-package.js`)
     *
     * @param project File path
     * @return Self instance for fluent API
     */
    forProject(project) {
        this.providers.push(project_di_1.provideProject(project));
        return this;
    }
    /**
     * Adds dependency injection providers.
     *
     * @param providers
     * @return Self instance for fluent API
     * @link https://github.com/mgechev/injection-js
     */
    withProviders(providers) {
        this.providers = [...this.providers, ...providers];
        return this;
    }
    /**
     * Overwrites the default TypeScript configuration.
     *
     * @param defaultValues A tsconfig providing default values to the compilation.
     * @return Self instance for fluent API
     */
    withTsConfig(defaultValues) {
        this.providers.push(init_tsconfig_di_1.provideTsConfig(defaultValues));
        return this;
    }
    /**
     * Overwrites the 'build' transform.
     *
     * @param transform
     * @return Self intance for fluent API
     */
    withBuildTransform(transform) {
        this.buildTransform = transform;
        return this;
    }
    /**
     * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
     *
     * @return A promisified result of the transformation pipeline.
     */
    build() {
        return this.buildAsObservable().toPromise();
    }
    /**
     * Builds and watch for changes by kick-starting the 'watch' transform over an (initially) empty `BuildGraph``
     *
     * @return An observable result of the transformation pipeline.
     */
    watch() {
        this.providers.push(options_di_1.provideOptions({ watch: true }));
        return this.buildAsObservable();
    }
    /**
     * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
     *
     * @return An observable result of the transformation pipeline.
     */
    buildAsObservable() {
        const injector = injection_js_1.ReflectiveInjector.resolveAndCreate(this.providers);
        const buildTransformOperator = injector.get(this.buildTransform);
        return rxjs_1.of(new build_graph_1.BuildGraph()).pipe(buildTransformOperator, operators_1.catchError(err => {
            // Report error and re-throw to subscribers
            log.error(err);
            return rxjs_1.throwError(err);
        }), operators_1.map(() => undefined));
    }
}
exports.NgPackagr = NgPackagr;
exports.ngPackagr = () => new NgPackagr([
    // Add default providers to this list.
    ...package_di_1.PACKAGE_PROVIDERS,
    ...entry_point_di_1.ENTRY_POINT_PROVIDERS,
]);
//# sourceMappingURL=packagr.js.map