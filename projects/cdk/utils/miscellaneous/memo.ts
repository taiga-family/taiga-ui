interface Options {
    storedOnce: boolean;
}

export function tuiMemo<T extends unknown[], Result>(
    fn: (...args: T) => Result,
    options: Partial<Options> = {
        storedOnce: true,
    },
) {
    const cache = new Map<string, Result>();

    return function (...args: T): Result {
        const key = args.map((arg) => `${typeof arg}:${arg}`).join('|');

        if (cache.has(key)) {
            return cache.get(key) as Result;
        }

        const result = fn(...args);

        if (options.storedOnce && cache.size > 0) {
            cache.clear();
        }

        cache.set(key, result);

        return result;
    };
}
