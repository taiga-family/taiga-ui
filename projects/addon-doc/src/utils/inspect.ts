function inspectArray(array: readonly unknown[], depth: number): string {
    if (depth === 0) {
        return '[…]';
    }

    let result = '';
    let first = true;

    for (let index = 0; index < array.length; index++) {
        if (first) {
            first = false;
        } else {
            result += ', ';
        }

        result += index in array ? inspectAny(array[index], depth - 1) : 'empty';
    }

    return `[${result}]`;
}

function inspectObject(object: {[key: string]: unknown}, depth: number): string {
    if (depth === 0) {
        return `{…}`;
    }

    let result = '';

    let first = true;

    for (const key in object) {
        if (!object.hasOwnProperty(key)) {
            continue;
        }

        if (first) {
            first = false;
        } else {
            result += ', ';
        }

        result += `${key}: ${inspectAny(object[key], depth - 1)}`;
    }

    return `{${result}}`;
}

/**
 * Returns readable JS entity
 * @param data
 * @param depth
 * @return readable JS entity
 */
export function inspectAny<T>(data: T, depth: number): string {
    if (data === null) {
        return 'null';
    }

    switch (typeof data) {
        case 'string':
            return `'${data}'`;
        case 'undefined':
        case 'number':
        case 'boolean':
        case 'function':
            return String(data);
    }

    if (data instanceof RegExp) {
        return String(data);
    }

    if (Array.isArray(data)) {
        return inspectArray(data, depth);
    }

    return inspectObject(data as unknown as {[key: string]: unknown}, depth);
}
