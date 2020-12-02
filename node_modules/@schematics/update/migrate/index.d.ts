import { Rule } from '@angular-devkit/schematics';
import { Schema as PostUpdateSchema } from './schema';
/**
 * Cleans up "short" version numbers so they become valid semver. For example;
 *   1 => 1.0.0
 *   1.2 => 1.2.0
 *   1-beta => 1.0.0-beta
 *
 * Exported for testing only.
 */
export declare function _coerceVersionNumber(version: string): string | null;
export default function (options: PostUpdateSchema): Rule;
