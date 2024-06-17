import type {PipeTransform, Signal} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiObservablePipe, tuiPure} from '@taiga-ui/cdk';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {combineLatest, map} from 'rxjs';

import {TUI_FILE_OPTIONS} from '../file/file.options';
import type {TuiFileLike} from '../files.types';
import {
    tuiCreateFileFormatValidator,
    tuiCreateFileSizeValidator,
} from '../files.validators';
import {TUI_INPUT_FILES_OPTIONS} from '../input-files/input-files.options';

@Pipe({
    standalone: true,
    name: 'tuiFileRejected',
    pure: false,
})
export class TuiFileRejectedPipe extends TuiObservablePipe implements PipeTransform {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    private readonly formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    private readonly text$ = inject(TUI_INPUT_FILE_TEXTS);
    private readonly unit$ = inject(TUI_DIGITAL_INFORMATION_UNITS);

    public transform(
        file: TuiFileLike | null,
        options: {accept?: string; maxFileSize?: number} = this.options,
    ): TuiFileLike | null {
        return this.getSignal(file, options)();
    }

    @tuiPure
    private getSignal(
        file: TuiFileLike | null,
        {
            accept = this.options.accept,
            maxFileSize = this.options.maxFileSize,
        }: {accept?: string; maxFileSize?: number},
    ): Signal<TuiFileLike | null> {
        const sizeValidator = tuiCreateFileSizeValidator(maxFileSize);
        const formatValidator = tuiCreateFileFormatValidator(accept);
        const control = new FormControl(file);
        const error$ = combineLatest([this.text$, this.unit$]).pipe(
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
                        content:
                            maxSizeRejectionReason + this.formatSize(units, maxFileSize),
                    };
                }

                return null;
            }),
        );

        return this.toSignal(error$, null);
    }
}
