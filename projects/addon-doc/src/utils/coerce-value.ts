export function tuiCoerceValue<T>(
    value?: T,
): T | number | string | boolean | null | Record<string, any> {
    const prepared = String(value).trim();

    if (isEmptyParamValue(prepared)) {
        return null;
    }

    if (isBooleanParamValue(prepared)) {
        return String(prepared) === `true`;
    }

    if (isNumberParamValue(prepared)) {
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
    return [`undefined`, `null`, `NaN`, `Infinity`].includes(value);
}

function isBooleanParamValue(value: string): boolean {
    return value === `true` || value === `false`;
}

function isNumberParamValue(value: string): boolean {
    // TODO: investigate to disallow potentially catastrophic exponential-time regular expressions.
    // eslint-disable-next-line unicorn/no-unsafe-regex
    return /^-?[\d.]+(?:e-?\d+)?$/.test(value);
}

function isPossibleArray(value: string): boolean {
    return value.startsWith(`[`) && value.endsWith(`]`);
}

function isPossibleObject(value: string): boolean {
    return value.startsWith(`{`) && value.endsWith(`}`);
}
