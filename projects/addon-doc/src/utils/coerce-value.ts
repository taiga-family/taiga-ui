export function coerceValue<T>(value?: T): T | number | string | boolean | null {
    const prepared = String(value).trim();

    if (isEmptyParamValue(prepared)) {
        return null;
    } else if (isBooleanParamValue(prepared)) {
        return String(prepared) === 'true';
    } else if (isNumberParamValue(prepared)) {
        return Number(prepared);
    }

    return decodeURIComponent(prepared);
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
