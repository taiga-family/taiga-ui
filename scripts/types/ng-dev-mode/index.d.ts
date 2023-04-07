/**
 * Values of ngDevMode
 * Depending on the current state of the application, ngDevMode may have one of several values.
 *
 * For convenience, the “truthy” value which enables dev mode is also an object which contains
 * Angular’s performance counters. This is not necessary, but cuts down on boilerplate for the
 * perf counters.
 *
 * ngDevMode may also be set to false. This can happen in one of a few ways:
 * - The user explicitly sets `window.ngDevMode = false` somewhere in their app.
 * - The user calls `enableProdMode()`.
 * - The URL contains a `ngDevMode=false` text.
 * Finally, ngDevMode may not have been defined at all.
 *
 *
 * This will be provided through Terser global definitions by Angular CLI. This will
 * help to tree-shake away the code unneeded for production bundles.
 */
declare const ngDevMode: boolean | {} | undefined | null;
