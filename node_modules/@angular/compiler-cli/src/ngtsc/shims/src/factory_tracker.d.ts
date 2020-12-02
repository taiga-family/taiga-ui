/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/shims/src/factory_tracker" />
import * as ts from 'typescript';
import { FactoryGenerator, FactoryInfo } from './factory_generator';
/**
 * Maintains a mapping of which symbols in a .ngfactory file have been used.
 *
 * .ngfactory files are generated with one symbol per defined class in the source file, regardless
 * of whether the classes in the source files are NgModules (because that isn't known at the time
 * the factory files are generated). The `FactoryTracker` exists to support removing factory symbols
 * which didn't end up being NgModules, by tracking the ones which are.
 */
export declare class FactoryTracker {
    readonly sourceInfo: Map<string, FactoryInfo>;
    private sourceToFactorySymbols;
    constructor(generator: FactoryGenerator);
    track(sf: ts.SourceFile, factorySymbolName: string): void;
}
