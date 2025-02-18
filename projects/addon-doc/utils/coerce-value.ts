function isEmptyParamValue(value: string): boolean {
    return ['NaN', 'null', 'undefined'].includes(value);
}

function isBooleanParamValue(value: string): boolean {
    return value === 'true' || value === 'false';
}

function isNumberParamValue(value: string): boolean {
    return !!value.trim() && !Number.isNaN(Number(value)) && !value.startsWith('+');
}

function isPossibleArray(value: string): boolean {
    return value.startsWith('[') && value.endsWith(']');
}

function isPossibleObject(value: string): boolean {
    return value.startsWith('{') && value.endsWith('}');
}

export function tuiCoerceValue<T>(
    value?: T,
): Record<string, any> | T | boolean | number | string | null {
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
