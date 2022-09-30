import {tuiAssert} from '@taiga-ui/cdk/classes';
import {TuiBooleanHandler} from '@taiga-ui/cdk/types';

/**
 * Decorator for checking input setter values against a custom assertion which
 * takes value passed to input setter and component instance as arguments.
 * It specifically checks for undefined values and prevents calls to the
 * original setter in this case.
 */
export function tuiRequiredSetter<T extends object, K extends keyof T>(
    assertion?: TuiBooleanHandler<T[K]>,
    ...args: any[]
): MethodDecorator {
    return (
        target: object,
        key,
        {configurable, enumerable, get, set}: PropertyDescriptor,
    ): PropertyDescriptor => {
        const {name} = target.constructor;

        return {
            configurable,
            enumerable,
            get,
            set(this: T, value: T[K]) {
                if (value !== undefined && assertion) {
                    tuiAssert.assert(
                        assertion.call(this, value),
                        `${String(key)} in ${name} received:`,
                        value,
                        ...args,
                    );
                }

                if (!set || value === undefined) {
                    tuiAssert.assert(value !== undefined, errorSet(key, name));

                    return;
                }

                set.call(this, value);
            },
        };
    };
}

function errorSet(key: string | symbol, component: string): string {
    return `Undefined was passed as ${String(
        key,
    )} to ${component}, setter will not be called`;
}
