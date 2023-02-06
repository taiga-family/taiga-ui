import {TuiPureException} from '@taiga-ui/cdk/exceptions';

/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: `this` is not available inside such functions/getters, they must be pure.
 */
export function tuiPure<T>(
    _target: Record<string, any>,
    propertyKey: string,
    {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T> {
    if (get) {
        return {
            enumerable,
            get(): T {
                const value = get.call(this);

                Object.defineProperty(this, propertyKey, {enumerable, value});

                return value;
            },
        };
    }

    if (typeof value !== `function`) {
        throw new TuiPureException();
    }

    const original = value;

    return {
        enumerable,
        get(): T {
            let previousArgs: readonly unknown[] = [];
            let originalFnWasCalledLeastAtOnce = false;
            let pureValue: unknown;

            const patched = (...args: unknown[]): unknown => {
                const isPure =
                    originalFnWasCalledLeastAtOnce &&
                    previousArgs.length === args.length &&
                    args.every((arg, index) => arg === previousArgs[index]);

                if (isPure) {
                    return pureValue;
                }

                previousArgs = args;
                pureValue = original.apply(this, args);
                originalFnWasCalledLeastAtOnce = true;

                return pureValue;
            };

            Object.defineProperty(this, propertyKey, {value: patched});

            return patched as unknown as T;
        },
    };
}
