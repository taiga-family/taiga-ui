import { RawSourceMap } from "istanbul-lib-instrument";
import { loader } from "webpack";
/**
 * Adds code coverage instrumentation using Istanbul.
 *
 * If the source code has an existing source map, then it is used to re-map the instrumented
 * code back to the original source.
 */
export default function (this: loader.LoaderContext, source: string, sourceMap?: RawSourceMap): void;
