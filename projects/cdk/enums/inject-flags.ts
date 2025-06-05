/**
 * In Angular v20 InjectFlags is no longer public api
 * This enum is a complete copy to keep things working
 * @deprecated Use `InjectFlags` from `@angular/core` instead!
 * @see https://github.com/angular/angular/blob/12.3.x/packages/compiler/src/core.ts#L261-L280
 */
// eslint-disable-next-line no-restricted-syntax,@typescript-eslint/naming-convention
export enum InjectFlags {
    /** Check self and check parent injector if needed */
    Default = 0,
    /**
     * Specifies that an injector should retrieve a dependency from any injector until reaching the
     * host element of the current component. (Only used with Element Injector)
     */
    Host = 1,
    /** Don't ascend to ancestors of the node requesting injection. */
    Self = 2,
    /** Skip the node that is requesting injection. */
    SkipSelf = 4,
    /** Inject `defaultValue` instead if token not found. */
    Optional = 8,
}
