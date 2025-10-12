function isEmptyParamValue(value: string): boolean {
    return ['NaN', 'null', 'undefined'].includes(value);
}

function isBooleanParamValue(value: unknown): value is boolean {
    return value === 'true' || value === 'false';
}

function isNumberParamValue(value: unknown): value is boolean {
    return (
        !!String(value).trim() &&
        !Number.isNaN(Number(value)) &&
        !String(value).startsWith('+')
    );
}

function isPossibleArray(value: string): boolean {
    return value.startsWith('[') && value.endsWith(']');
}

function isPossibleObject(value: string): boolean {
    return value.startsWith('{') && value.endsWith('}');
}

export function tuiCoerceValue<T>(
    value?: T,
): Record<string, unknown> | T | boolean | number | string | null {
    const prepared = String(value).trim();

    if (isEmptyParamValue(prepared)) {
        return null;
    }

    if (isBooleanParamValue(prepared)) {
        return String(prepared) === 'true';
    }

    if (isNumberParamValue(prepared)) {
        return Number(prepared);
    }

    if (prepared === '%') {
        // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent#exceptions
        return prepared;
    }

    const decodedValue = decodeURIComponent(prepared);

    try {
        return isPossibleArray(decodedValue) || isPossibleObject(decodedValue)
            ? JSON.parse(decodedValue)
            : decodedValue;
    } catch {
        return decodedValue;
    }
}
