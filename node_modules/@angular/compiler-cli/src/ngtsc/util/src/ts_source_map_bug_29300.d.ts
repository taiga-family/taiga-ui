/// <amd-module name="@angular/compiler-cli/src/ngtsc/util/src/ts_source_map_bug_29300" />
/**
 * Test the current version of TypeScript to see if it has fixed the external SourceMap
 * file bug: https://github.com/Microsoft/TypeScript/issues/29300.
 *
 * The bug is fixed in TS 3.3+ but this check avoid us having to rely upon the version number,
 * and allows us to gracefully fail if the TS version still has the bug.
 *
 * We check for the bug by compiling a very small program `a;` and transforming it to `b;`,
 * where we map the new `b` identifier to an external source file, which has different lines to
 * the original source file.  If the bug is fixed then the output SourceMap should contain
 * mappings that correspond ot the correct line/col pairs for this transformed node.
 *
 * @returns true if the bug is fixed.
 */
export declare function tsSourceMapBug29300Fixed(): boolean;
