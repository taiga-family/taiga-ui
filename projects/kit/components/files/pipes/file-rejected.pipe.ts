import {inject, LOCALE_ID, Pipe, type PipeTransform} from '@angular/core';
import {toObservable} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {combineLatest, map, type Observable} from 'rxjs';

import {TUI_FILE_OPTIONS} from '../file/file.options';
import {type TuiFileLike} from '../files.types';
import {
    tuiCreateFileFormatValidator,
    tuiCreateFileSizeValidator,
} from '../files.validators';
import {TUI_INPUT_FILES_OPTIONS} from '../input-files/input-files.options';

@Pipe({
    standalone: true,
    name: 'tuiFileRejected',
})
export class TuiFileRejectedPipe implements PipeTransform {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    private readonly formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    private readonly locale = inject(LOCALE_ID);
    private readonly text$ = toObservable(inject(TUI_INPUT_FILE_TEXTS));
    private readonly unit$ = toObservable(inject(TUI_DIGITAL_INFORMATION_UNITS));

    public transform(
        file: TuiFileLike | null,
        {
            accept = this.options.accept,
            maxFileSize = this.options.maxFileSize,
        }: {accept?: string; maxFileSize?: number} = this.options,
    ): Observable<TuiFileLike | null> {
        const sizeValidator = tuiCreateFileSizeValidator(maxFileSize);
        const formatValidator = tuiCreateFileFormatValidator(accept);
        const control = new FormControl(file);

        return combineLatest([this.text$, this.unit$]).pipe(
            map(([{maxSizeRejectionReason, formatRejectionReason}, units]) => {
                if (file && formatValidator(control)) {
                    return {
                        name: file.name,
                        size: file.size,
                        content: formatRejectionReason,
                    };
                }

                if (file && sizeValidator(control)) {
                    return {
                        name: file.name,
                        size: file.size,
                        content: `${maxSizeRejectionReason}${CHAR_NO_BREAK_SPACE}${this.formatSize(units, maxFileSize, this.locale)}`,
                    };
                }

                return null;
            }),
        );
    }
}
