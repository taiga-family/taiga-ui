import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl} from '@angular/forms';
import {tuiPure} from '@taiga-ui/cdk';
import {TUI_DIGITAL_INFORMATION_UNITS, TUI_INPUT_FILE_TEXTS} from '@taiga-ui/kit/tokens';
import {combineLatest, map, Subject, takeUntil} from 'rxjs';

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
export class TuiFileRejectedPipe implements PipeTransform {
    private readonly options = inject(TUI_INPUT_FILES_OPTIONS);
    private readonly formatSize = inject(TUI_FILE_OPTIONS).formatSize;
    private readonly text$ = inject(TUI_INPUT_FILE_TEXTS);
    private readonly unit$ = inject(TUI_DIGITAL_INFORMATION_UNITS);
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);

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
        this.destroy$.next();

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
            takeUntil(this.destroy$),
        );

        return untracked(() =>
            toSignal(error$, {
                injector: this.injector,
                initialValue: null,
            }),
        );
    }
}
