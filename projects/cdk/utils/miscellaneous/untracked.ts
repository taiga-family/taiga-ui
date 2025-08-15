import {untracked} from '@angular/core';

/**
 * @deprecated use "experimentalDecorators": false
 * TODO(v5): drop compatibility with legacy "experimentalDecorators": true
 */
export function tuiUntracked<T>(
    target: object,
    propertyKey: string,
    {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T>;

export function tuiUntracked<A extends unknown[], R>(
    target: (...args: A) => R,
    context: ClassMethodDecoratorContext,
): (...args: A) => R;

export function tuiUntracked(
    target: object | ((...args: unknown[]) => unknown),
    propertyKeyOrContext: ClassMethodDecoratorContext | string,
    descriptor?: TypedPropertyDescriptor<(...args: unknown[]) => unknown>,
): any {
    if (typeof target === 'function') {
        // "experimentalDecorators": false & TypeScript 5.0+
        return (self: any, ...args: unknown[]): unknown =>
            untracked(() =>
                (target as (...args: unknown[]) => unknown).apply(self, args),
            );
    }

    // TODO(v5): drop compatibility with legacy "experimentalDecorators": true
    const propertyKey = propertyKeyOrContext as string;
    const {enumerable, value} = descriptor!;
    const original = value!;

    return {
        configurable: true,
        enumerable,
        get(): unknown {
            const patched = (...args: unknown[]): unknown => {
                return untracked(() => original.apply(this, args));
            };

            Object.defineProperty(this, propertyKey, {
                configurable: true,
                value: patched,
            });

            return patched;
        },
    };
}
