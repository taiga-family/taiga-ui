/* eslint-disable @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-return */
export function tuiDebounce(timeout: number): MethodDecorator {
    let timeoutRef: ReturnType<typeof setTimeout> | undefined;

    return function (_target, _key: string | symbol, descriptor: PropertyDescriptor) {
        const {value} = descriptor;

        descriptor.value = function (...args: unknown[]) {
            clearTimeout(timeoutRef);
            timeoutRef = setTimeout(() => value.apply(this, args), timeout);
        };

        return descriptor;
    };
}
