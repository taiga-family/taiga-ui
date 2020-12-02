import { InstrumenterOptions } from "istanbul-lib-instrument";
/**
 * Coverage-Istanbul-Loder options.
 * Currently these are the same as Istanbul-Lib-Instrument options.
 *
 * @see https://github.com/istanbuljs/istanbuljs/blob/25509c7ff31f114e7036a940ed799d6d0548b706/packages/istanbul-lib-instrument/src/instrumenter.js#L11-L33
 */
export declare type Options = Partial<InstrumenterOptions>;
/**
 * Default Coverage-Istanbul-Loder options.
 */
export declare const defaultOptions: Partial<InstrumenterOptions>;
