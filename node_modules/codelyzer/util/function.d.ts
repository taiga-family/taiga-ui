export interface F0<R> {
    (): R;
}
export interface F1<A0, R> {
    (a0: A0): R;
}
export interface F2<A0, A1, R> {
    (a0: A0, a1: A1): R;
}
export interface F3<A0, A1, A2, R> {
    (a0: A0, a1: A1, a2: A2): R;
}
export declare class Maybe<T> {
    private readonly t;
    static nothing: Maybe<any>;
    static lift<T>(t: T | undefined): Maybe<T>;
    static all<T0, T1>(t0: Maybe<T0>, t1: Maybe<T1>): Maybe<[T0, T1] | undefined>;
    private constructor();
    bind<R>(fn: F1<T, Maybe<R>>): Maybe<R | undefined>;
    fmap<R>(fn: F1<T, R>): Maybe<R | undefined>;
    get isNothing(): boolean;
    get isSomething(): boolean;
    catch(def: () => Maybe<T>): Maybe<T>;
    unwrap(): T | undefined;
}
export declare function unwrapFirst<T>(ts: Maybe<T>[]): T | undefined;
export declare function all<T>(...preds: F1<T, boolean>[]): F1<T, boolean>;
export declare function any<T>(...preds: F1<T, boolean>[]): F1<T, boolean>;
export declare function ifTrue<T>(pred: F1<T, boolean>): F1<T, Maybe<T | undefined>>;
export declare function listToMaybe<T>(ms?: Maybe<T>[]): Maybe<(T | undefined)[]> | Maybe<undefined>;
