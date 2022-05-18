export function coerceValue<T>(value?: T): T | number | string | boolean | null | object {
    const prepared = String(value).trim();

    if (isEmptyParamValue(prepared)) {
        return null;
    } else if (isBooleanParamValue(prepared)) {
        return String(prepared) === 'true';
    } else if (isNumberParamValue(prepared)) {
        return Number(prepared);
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

function isEmptyParamValue(value: string): boolean {
    return ['undefined', 'null', 'NaN', 'Infinity'].includes(value);
}

function isBooleanParamValue(value: string): boolean {
    return value === 'true' || value === 'false';
}

function isNumberParamValue(value: string): boolean {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
}

function isPossibleArray(value: string): boolean {
    return value.startsWith('[') && value.endsWith(']');
}

function isPossibleObject(value: string): boolean {
    return value.startsWith('{') && value.endsWith('}');
}
