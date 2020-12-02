/// <amd-module name="@angular/compiler-cli/ngcc/src/analysis/ngcc_trait_compiler" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as ts from 'typescript';
import { ClassDeclaration, Decorator } from '../../../src/ngtsc/reflection';
import { DecoratorHandler, HandlerFlags, Trait, TraitCompiler } from '../../../src/ngtsc/transform';
import { NgccReflectionHost } from '../host/ngcc_host';
/**
 * Specializes the `TraitCompiler` for ngcc purposes. Mainly, this includes an alternative way of
 * scanning for classes to compile using the reflection host's `findClassSymbols`, together with
 * support to inject synthetic decorators into the compilation for ad-hoc migrations that ngcc
 * performs.
 */
export declare class NgccTraitCompiler extends TraitCompiler {
    private ngccReflector;
    constructor(handlers: DecoratorHandler<unknown, unknown, unknown>[], ngccReflector: NgccReflectionHost);
    get analyzedFiles(): ts.SourceFile[];
    /**
     * Analyzes the source file in search for classes to process. For any class that is found in the
     * file, a `ClassRecord` is created and the source file is included in the `analyzedFiles` array.
     */
    analyzeFile(sf: ts.SourceFile): void;
    /**
     * Associate a new synthesized decorator, which did not appear in the original source, with a
     * given class.
     * @param clazz the class to receive the new decorator.
     * @param decorator the decorator to inject.
     * @param flags optional bitwise flag to influence the compilation of the decorator.
     */
    injectSyntheticDecorator(clazz: ClassDeclaration, decorator: Decorator, flags?: HandlerFlags): Trait<unknown, unknown, unknown>[];
    /**
     * Returns all decorators that have been recognized for the provided class, including any
     * synthetically injected decorators.
     * @param clazz the declaration for which the decorators are returned.
     */
    getAllDecorators(clazz: ClassDeclaration): Decorator[] | null;
}
