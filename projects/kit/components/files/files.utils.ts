import {coerceArray} from '@angular/cdk/coercion';
import {type AbstractControl} from '@angular/forms';
import {tuiRound} from '@taiga-ui/cdk/utils/math';

import {TUI_FORMAT_ERROR, TUI_SIZE_ERROR} from './files.validators';

const BYTES_PER_KIB = 1024;
const BYTES_PER_MIB = 1024 * BYTES_PER_KIB;

/**
 * Reads the files a rejection error carries, for both kinds of form.
 *
 * Signal forms wrap a reactive error into `CompatValidationError`
 * https://github.com/angular/angular/blob/f44bf0fe221288d03107cc78acfbe333a9a9b7b5/packages/forms/signals/src/compat/validation_errors.ts#L55-L65
 *
 * TODO(v6): drop the `context` branch after signal forms are fully supported (Angular >= 22)
 */
function getRejected(control: AbstractControl | null | undefined, key: string): File[] {
    /**
     * `getError(key)` is not an option:
     * the fake `NgControl` signal forms provide has only the `errors` getter,
     * and calling the missing method throws
     */
    const error = control?.errors?.[key];

    return error?.$implicit || error?.context?.$implicit || [];
}

export function tuiFilesRejected(control?: AbstractControl | null): File[] {
    const format = getRejected(control, TUI_FORMAT_ERROR);
    const size = getRejected(control, TUI_SIZE_ERROR);

    return Array.from(new Set([...format, ...size]));
}

export function tuiFilesAccepted(control?: AbstractControl | null): File[] {
    const value = control?.value || [];
    const files: File[] = coerceArray(value);
    const size = getRejected(control, TUI_SIZE_ERROR);
    const format = getRejected(control, TUI_FORMAT_ERROR);

    return files.filter((file) => !size.includes(file) && !format.includes(file));
}

export function tuiFormatSize(
    units: readonly [string, string, string],
    size?: number,
    locale?: string,
): string | null {
    if (size === undefined) {
        return null;
    }

    if (size < BYTES_PER_KIB) {
        return `${size} ${units[0]}`;
    }

    return size < BYTES_PER_MIB
        ? `${(size / BYTES_PER_KIB).toFixed(0)} ${units[1]}`
        : `${tuiRound(size / BYTES_PER_MIB, 2).toLocaleString(locale)} ${units[2]}`;
}
