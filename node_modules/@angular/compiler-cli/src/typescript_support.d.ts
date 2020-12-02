/// <amd-module name="@angular/compiler-cli/src/typescript_support" />
export declare function setTypeScriptVersionForTesting(version: string): void;
export declare function restoreTypeScriptVersionForTesting(): void;
/**
 * Checks whether a given version ∈ [minVersion, maxVersion[
 * An error will be thrown if the following statements are simultaneously true:
 * - the given version ∉ [minVersion, maxVersion[,
 *
 * @param version The version on which the check will be performed
 * @param minVersion The lower bound version. A valid version needs to be greater than minVersion
 * @param maxVersion The upper bound version. A valid version needs to be strictly less than
 * maxVersion
 *
 * @throws Will throw an error if the given version ∉ [minVersion, maxVersion[
 */
export declare function checkVersion(version: string, minVersion: string, maxVersion: string): void;
export declare function verifySupportedTypeScriptVersion(): void;
