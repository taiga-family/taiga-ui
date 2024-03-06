import type {ValidatorFn} from '@angular/forms';
import type {TuiContext} from '@taiga-ui/cdk';

export const TUI_SIZE_ERROR = 'tuiSize';
export const TUI_FORMAT_ERROR = 'tuiFormat';

interface FileFormatError {
    [TUI_FORMAT_ERROR]: TuiContext<File[]>;
}

interface FileSizeError {
    [TUI_SIZE_ERROR]: TuiContext<File[]> & {size: number};
}

export function tuiCreateFileSizeValidator(size: number): ValidatorFn {
    return ({value}: {value: File | readonly File[] | null}): FileSizeError | null => {
        const files: readonly File[] = Array.isArray(value) ? value : [value];
        const $implicit = value && files.filter(file => file.size > size);

        return $implicit?.length ? {[TUI_SIZE_ERROR]: {$implicit, size}} : null;
    };
}

export function tuiCreateFileFormatValidator(accept: string): ValidatorFn {
    return ({value}: {value: File | readonly File[] | null}): FileFormatError | null => {
        const files: readonly File[] = Array.isArray(value) ? value : [value];
        const formats = toArray(accept);
        const $implicit = value && files.filter(file => !checkFormat(file, formats));

        return $implicit?.length && accept ? {[TUI_FORMAT_ERROR]: {$implicit}} : null;
    };
}

function checkFormat({name, type}: File, formats: readonly string[]): boolean {
    const extension = `.${(name.split('.').pop() || '').toLowerCase()}`;

    return formats.some(
        format =>
            format === extension ||
            format === type ||
            (format.split('/')[1] === '*' && type.split('/')[0] === format.split('/')[0]),
    );
}

function toArray(accept: string): readonly string[] {
    return accept
        .toLowerCase()
        .split(',')
        .map(format => format.trim().toLowerCase());
}
