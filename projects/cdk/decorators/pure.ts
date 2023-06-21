import {TuiPureException} from '@taiga-ui/cdk/exceptions';

/** TODO Delete after updating typescript to version 5 and when backward compatibility will not be required */
interface ClassGetterDecoratorContext {
    kind: 'getter';
    name: string;
}

/** TODO Delete after updating typescript to version 5 and when backward compatibility will not be required */
interface ClassMethodDecoratorContext {
    kind: 'method';
    name: string;
}

function decorateMethod(
    originalMethod: (...args: unknown[]) => unknown,
): (this: object, ...args: unknown[]) => unknown {
    let previousArgs: readonly unknown[] = [];
    let originalFnWasCalledLeastAtOnce = false;
    let pureValue: unknown;

    return function tuiPureMethodPatched(this: object, ...args: unknown[]): unknown {
        const isPure =
            originalFnWasCalledLeastAtOnce &&
            previousArgs.length === args.length &&
            args.every((arg, index) => arg === previousArgs[index]);

        if (isPure) {
            return pureValue;
        }

        previousArgs = args;
        pureValue = originalMethod.apply(this, args);
        originalFnWasCalledLeastAtOnce = true;

        return pureValue;
    };
}

function decorateGetter(
    originalGetter: () => unknown,
    propertyKey: string | symbol,
    enumerable: boolean = true,
): (this: object) => unknown {
    return function tuiPureGetterPatched(this: object): unknown {
        const value = originalGetter.call(this);

        Object.defineProperty(this, propertyKey, {enumerable, value});

        return value;
    };
}

/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * @throws error if used not on getter or function
 *
 * CAUTION: they must be pure.
 */
export function tuiPure<T>(
    target: object,
    propertyKey: string,
    {get, enumerable, value}: TypedPropertyDescriptor<T>,
): TypedPropertyDescriptor<T>;

/**
 * Implements lazy initialization for getter or memoization of a function call similar to pure {@link: Pipe}.
 * Replaces getter with its calculated value upon first call or keeps track of last call arguments and returned
 * value for function, skipping calculation when arguments are strictly the same.
 *
 * CAUTION: they must be pure.
 */
export function tuiPure<A extends unknown[], R>(
    target: (...args: A) => R,
    context: ClassGetterDecoratorContext | ClassMethodDecoratorContext,
): (...args: A) => R;

export function tuiPure(
    target: object | ((...args: unknown[]) => unknown),
    propertyKeyOrContext:
        | ClassGetterDecoratorContext
        | ClassMethodDecoratorContext
        | string,
    descriptor?: TypedPropertyDescriptor<(...args: unknown[]) => unknown>,
): TypedPropertyDescriptor<unknown> | ((...args: unknown[]) => unknown) {
    if (typeof target === `function`) {
        const context = propertyKeyOrContext as
            | ClassGetterDecoratorContext
            | ClassMethodDecoratorContext;

        if (context.kind === `getter`) {
            return decorateGetter(target as () => unknown, context.name);
        }

        if (context.kind === `method`) {
            return decorateMethod(target as (...args: unknown[]) => unknown);
        }

        throw new TuiPureException();
    }

    const {get, enumerable, value} = descriptor!;
    const propertyKey = propertyKeyOrContext as string;

    if (get) {
        return {
            configurable: true,
            enumerable,
            get: decorateGetter(get, propertyKey, enumerable),
        };
    }

    if (typeof value !== `function`) {
        throw new TuiPureException();
    }

    return {
        configurable: true,
        enumerable,
        value: decorateMethod(value),
    };
}
