import { InjectionToken, Provider } from 'injection-js';
import { ParsedConfiguration } from '@angular/compiler-cli';
import { Observable } from 'rxjs';
import { Transform } from './graph/transform';
import { NgPackagrOptions } from './ng-package/options.di';
/**
 * The original ng-packagr implemented on top of a rxjs-ified and di-jectable transformation pipeline.
 *
 * See the `docs/transformations.md` for more prose description.
 *
 * @link https://github.com/ng-packagr/ng-packagr/pull/572
 */
export declare class NgPackagr {
    private providers;
    private buildTransform;
    constructor(providers: Provider[]);
    /**
     * Adds options to ng-packagr
     *
     * @param options Ng Packagr Options
     * @return Self instance for fluent API
     */
    withOptions(options: NgPackagrOptions): NgPackagr;
    /**
     * Sets the path to the user's "ng-package" file (either `package.json`, `ng-package.json`, or `ng-package.js`)
     *
     * @param project File path
     * @return Self instance for fluent API
     */
    forProject(project: string): NgPackagr;
    /**
     * Adds dependency injection providers.
     *
     * @param providers
     * @return Self instance for fluent API
     * @link https://github.com/mgechev/injection-js
     */
    withProviders(providers: Provider[]): NgPackagr;
    /**
     * Overwrites the default TypeScript configuration.
     *
     * @param defaultValues A tsconfig providing default values to the compilation.
     * @return Self instance for fluent API
     */
    withTsConfig(defaultValues: ParsedConfiguration | string): NgPackagr;
    /**
     * Overwrites the 'build' transform.
     *
     * @param transform
     * @return Self intance for fluent API
     */
    withBuildTransform(transform: InjectionToken<Transform>): NgPackagr;
    /**
     * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
     *
     * @return A promisified result of the transformation pipeline.
     */
    build(): Promise<void>;
    /**
     * Builds and watch for changes by kick-starting the 'watch' transform over an (initially) empty `BuildGraph``
     *
     * @return An observable result of the transformation pipeline.
     */
    watch(): Observable<void>;
    /**
     * Builds the project by kick-starting the 'build' transform over an (initially) empty `BuildGraph``
     *
     * @return An observable result of the transformation pipeline.
     */
    buildAsObservable(): Observable<void>;
}
export declare const ngPackagr: () => NgPackagr;
