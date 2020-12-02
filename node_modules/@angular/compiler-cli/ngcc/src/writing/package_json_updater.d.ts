/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/// <amd-module name="@angular/compiler-cli/ngcc/src/writing/package_json_updater" />
import { AbsoluteFsPath, FileSystem } from '../../../src/ngtsc/file_system';
import { JsonObject, JsonValue } from '../packages/entry_point';
export declare type PackageJsonChange = [string[], JsonValue, PackageJsonPropertyPositioning];
export declare type PackageJsonPropertyPositioning = 'unimportant' | 'alphabetic' | {
    before: string;
};
export declare type WritePackageJsonChangesFn = (changes: PackageJsonChange[], packageJsonPath: AbsoluteFsPath, parsedJson?: JsonObject) => void;
/**
 * A utility object that can be used to safely update values in a `package.json` file.
 *
 * Example usage:
 * ```ts
 * const updatePackageJson = packageJsonUpdater
 *     .createUpdate()
 *     .addChange(['name'], 'package-foo')
 *     .addChange(['scripts', 'foo'], 'echo FOOOO...', 'unimportant')
 *     .addChange(['dependencies', 'baz'], '1.0.0', 'alphabetic')
 *     .addChange(['dependencies', 'bar'], '2.0.0', {before: 'baz'})
 *     .writeChanges('/foo/package.json');
 *     // or
 *     // .writeChanges('/foo/package.json', inMemoryParsedJson);
 * ```
 */
export interface PackageJsonUpdater {
    /**
     * Create a `PackageJsonUpdate` object, which provides a fluent API for batching updates to a
     * `package.json` file. (Batching the updates is useful, because it avoids unnecessary I/O
     * operations.)
     */
    createUpdate(): PackageJsonUpdate;
    /**
     * Write a set of changes to the specified `package.json` file (and optionally a pre-existing,
     * in-memory representation of it).
     *
     * @param changes The set of changes to apply.
     * @param packageJsonPath The path to the `package.json` file that needs to be updated.
     * @param parsedJson A pre-existing, in-memory representation of the `package.json` file that
     *                   needs to be updated as well.
     */
    writeChanges(changes: PackageJsonChange[], packageJsonPath: AbsoluteFsPath, parsedJson?: JsonObject): void;
}
/**
 * A utility class providing a fluent API for recording multiple changes to a `package.json` file
 * (and optionally its in-memory parsed representation).
 *
 * NOTE: This class should generally not be instantiated directly; instances are implicitly created
 *       via `PackageJsonUpdater#createUpdate()`.
 */
export declare class PackageJsonUpdate {
    private writeChangesImpl;
    private changes;
    private applied;
    constructor(writeChangesImpl: WritePackageJsonChangesFn);
    /**
     * Record a change to a `package.json` property.
     *
     * If the ancestor objects do not yet exist in the `package.json` file, they will be created. The
     * positioning of the property can also be specified. (If the property already exists, it will be
     * moved accordingly.)
     *
     * NOTE: Property positioning is only guaranteed to be respected in the serialized `package.json`
     *       file. Positioning will not be taken into account when updating in-memory representations.
     *
     * NOTE 2: Property positioning only affects the last property in `propertyPath`. Ancestor
     *         objects' positioning will not be affected.
     *
     * @param propertyPath The path of a (possibly nested) property to add/update.
     * @param value The new value to set the property to.
     * @param position The desired position for the added/updated property.
     */
    addChange(propertyPath: string[], value: JsonValue, positioning?: PackageJsonPropertyPositioning): this;
    /**
     * Write the recorded changes to the associated `package.json` file (and optionally a
     * pre-existing, in-memory representation of it).
     *
     * @param packageJsonPath The path to the `package.json` file that needs to be updated.
     * @param parsedJson A pre-existing, in-memory representation of the `package.json` file that
     *                   needs to be updated as well.
     */
    writeChanges(packageJsonPath: AbsoluteFsPath, parsedJson?: JsonObject): void;
    private ensureNotApplied;
}
/** A `PackageJsonUpdater` that writes directly to the file-system. */
export declare class DirectPackageJsonUpdater implements PackageJsonUpdater {
    private fs;
    constructor(fs: FileSystem);
    createUpdate(): PackageJsonUpdate;
    writeChanges(changes: PackageJsonChange[], packageJsonPath: AbsoluteFsPath, preExistingParsedJson?: JsonObject): void;
}
export declare function applyChange(ctx: JsonObject, propPath: string[], value: JsonValue, positioning: PackageJsonPropertyPositioning): void;
