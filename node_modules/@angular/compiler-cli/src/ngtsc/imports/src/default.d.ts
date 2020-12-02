/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/src/ngtsc/imports/src/default" />
import * as ts from 'typescript';
/**
 * Registers and records usages of `ts.Identifer`s that came from default import statements.
 *
 * See `DefaultImportTracker` for details.
 */
export interface DefaultImportRecorder {
    /**
     * Record an association between a `ts.Identifier` which might be emitted and the
     * `ts.ImportDeclaration` from which it came.
     *
     * Alone, this method has no effect as the `ts.Identifier` might not be used in the output.
     * The identifier must later be marked as used with `recordUsedIdentifier` in order for its
     * import to be preserved.
     */
    recordImportedIdentifier(id: ts.Identifier, decl: ts.ImportDeclaration): void;
    /**
     * Record the fact that the given `ts.Identifer` will be emitted, and thus its
     * `ts.ImportDeclaration`, if it was a previously registered default import, must be preserved.
     *
     * This method can be called safely for any `ts.Identifer`, regardless of its origin. It will only
     * have an effect if the identifier came from a `ts.ImportDeclaration` default import which was
     * previously registered with `recordImportedIdentifier`.
     */
    recordUsedIdentifier(id: ts.Identifier): void;
}
/**
 * An implementation of `DefaultImportRecorder` which does nothing.
 *
 * This is useful when default import tracking isn't required, such as when emitting .d.ts code
 * or for ngcc.
 */
export declare const NOOP_DEFAULT_IMPORT_RECORDER: DefaultImportRecorder;
/**
 * TypeScript has trouble with generating default imports inside of transformers for some module
 * formats. The issue is that for the statement:
 *
 * import X from 'some/module';
 * console.log(X);
 *
 * TypeScript will not use the "X" name in generated code. For normal user code, this is fine
 * because references to X will also be renamed. However, if both the import and any references are
 * added in a transformer, TypeScript does not associate the two, and will leave the "X" references
 * dangling while renaming the import variable. The generated code looks something like:
 *
 * const module_1 = require('some/module');
 * console.log(X); // now X is a dangling reference.
 *
 * Therefore, we cannot synthetically add default imports, and must reuse the imports that users
 * include. Doing this poses a challenge for imports that are only consumed in the type position in
 * the user's code. If Angular reuses the imported symbol in a value position (for example, we
 * see a constructor parameter of type Foo and try to write "inject(Foo)") we will also end up with
 * a dangling reference, as TS will elide the import because it was only used in the type position
 * originally.
 *
 * To avoid this, the compiler must "touch" the imports with `ts.getMutableClone`, and should
 * only do this for imports which are actually consumed. The `DefaultImportTracker` keeps track of
 * these imports as they're encountered and emitted, and implements a transform which can correctly
 * flag the imports as required.
 *
 * This problem does not exist for non-default imports as the compiler can easily insert
 * "import * as X" style imports for those, and the "X" identifier survives transformation.
 */
export declare class DefaultImportTracker implements DefaultImportRecorder {
    /**
     * A `Map` which tracks the `Map` of default import `ts.Identifier`s to their
     * `ts.ImportDeclaration`s. These declarations are not guaranteed to be used.
     */
    private sourceFileToImportMap;
    /**
     * A `Map` which tracks the `Set` of `ts.ImportDeclaration`s for default imports that were used in
     * a given `ts.SourceFile` and need to be preserved.
     */
    private sourceFileToUsedImports;
    recordImportedIdentifier(id: ts.Identifier, decl: ts.ImportDeclaration): void;
    recordUsedIdentifier(id: ts.Identifier): void;
    /**
     * Get a `ts.TransformerFactory` which will preserve default imports that were previously marked
     * as used.
     *
     * This transformer must run after any other transformers which call `recordUsedIdentifier`.
     */
    importPreservingTransformer(): ts.TransformerFactory<ts.SourceFile>;
    /**
     * Process a `ts.SourceFile` and replace any `ts.ImportDeclaration`s.
     */
    private transformSourceFile;
}
