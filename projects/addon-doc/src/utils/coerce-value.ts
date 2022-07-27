/**
 * @deprecated: use {@link tuiCoerceValue} instead
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export function coerceValue<T>(value?: T): T | number | string | boolean | null | object {
    const prepared = String(value).trim();

    if (isEmptyParamValue(prepared)) {
        return null;
    } else if (isBooleanParamValue(prepared)) {
        return String(prepared) === `true`;
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

export const tuiCoerceValue = coerceValue;

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
