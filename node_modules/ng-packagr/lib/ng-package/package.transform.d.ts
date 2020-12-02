import { Observable } from 'rxjs';
import { BuildGraph } from '../graph/build-graph';
import { Transform } from '../graph/transform';
import { NgPackagrOptions } from './options.di';
/**
 * A transformation for building an npm package:
 *
 *  - discoverPackages
 *  - options
 *  - initTsConfig
 *  - analyzeTsSources (thereby extracting template and stylesheet files)
 *  - for each entry point
 *    - run the entryPontTransform
 *  - writeNpmPackage
 *
 * @param project Project token, reference to `ng-package.json`
 * @param options ng-packagr options
 * @param initTsConfigTransform Transformation initializing the tsconfig of each entry point.
 * @param analyseSourcesTransform Transformation analyzing the typescript source files of each entry point.
 * @param entryPointTransform Transformation for asset rendering and compilation of a single entry point.
 */
export declare const packageTransformFactory: (project: string, options: NgPackagrOptions, initTsConfigTransform: Transform, analyseSourcesTransform: Transform, entryPointTransform: Transform) => (source$: Observable<BuildGraph>) => Observable<BuildGraph>;
