import {coerceArray} from '@angular/cdk/coercion';
import type {AbstractControl} from '@angular/forms';
import {tuiRound} from '@taiga-ui/cdk/utils/math';

import {TUI_FORMAT_ERROR, TUI_SIZE_ERROR} from './files.validators';

const BYTES_PER_KIB = 1024;
const BYTES_PER_MIB = 1024 * BYTES_PER_KIB;

export function tuiFilesRejected(control?: AbstractControl | null): File[] {
    const format: File[] = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];
    const size: File[] = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];

    return Array.from(new Set([...format, ...size]));
}

export function tuiFilesAccepted(control?: AbstractControl | null): File[] {
    const value = control?.value || [];
    const files: File[] = coerceArray(value);
    const size: File[] = control?.getError(TUI_SIZE_ERROR)?.$implicit || [];
    const format: File[] = control?.getError(TUI_FORMAT_ERROR)?.$implicit || [];

    return files.filter(file => !size.includes(file) && !format.includes(file));
}

export function tuiFormatSize(
    units: [string, string, string],
    size?: number,
): string | null {
    if (size === undefined) {
        return null;
    }

    if (size < BYTES_PER_KIB) {
        return `${size} ${units[0]}`;
    }

    if (size < BYTES_PER_MIB) {
        return `${(size / BYTES_PER_KIB).toFixed(0)} ${units[1]}`;
    }

    return `${tuiRound(size / BYTES_PER_MIB, 2).toLocaleString('ru-RU')} ${units[2]}`;
}
