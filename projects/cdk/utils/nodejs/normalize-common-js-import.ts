export function tuiNormalizeCommonJSImport<T>(importPromise: Promise<T>): Promise<T> {
    // CommonJS's `module.exports` is wrapped as `default` in ESModule.
    return importPromise.then((m: any) => (m.default || m) as T);
}
