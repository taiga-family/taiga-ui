/**
 * @deprecated use `Object.fromEntries` instead
 * (check browser support first https://caniuse.com/mdn-javascript_builtins_object_fromentries)
 * ___
 * TODO: after we bump Firefox to 63+ replace this function with `Object.fromEntries`.
 * TODO: Add `es2019.object` to `tsconfig.json` => `compilerOptions.lib`.
 *
 */
export function tuiObjectFromEntries<K extends number | string, V>(
    keyValuePairs: Array<[K, V]>,
): Record<K, V> {
    return keyValuePairs.reduce(
        (obj, [key, val]) => ({...obj, [key]: val}),
        {} as Record<K, V>,
    );
}
