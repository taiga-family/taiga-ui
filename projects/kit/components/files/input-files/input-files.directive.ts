import {coerceArray} from '@angular/cdk/coercion';
import {Directive, forwardRef, inject} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiControlValue, tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    tuiAppearanceMode,
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {filter, map, switchMap, timer} from 'rxjs';

import {type TuiFileLike} from '../files.types';
import {tuiFilesRejected} from '../files.utils';
import {TuiInputFiles} from './input-files.component';
import {TUI_INPUT_FILES_OPTIONS} from './input-files.options';
import {TuiInputFilesValidator} from './input-files-validator.directive';

@Directive({
    selector: 'input[tuiInputFiles]',
    providers: [
        tuiAsControl(TuiInputFilesDirective),
        tuiAppearanceOptionsProvider(TUI_INPUT_FILES_OPTIONS),
    ],
    hostDirectives: [
        TuiNativeValidator,
        TuiWithAppearance,
        {
            directive: TuiInputFilesValidator,
            inputs: ['accept', 'maxFileSize'],
        },
    ],
    host: {
        title: '',
        type: 'file',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(click)': 'onClick($event)',
    },
})
export class TuiInputFilesDirective extends TuiControl<
    TuiFileLike | readonly TuiFileLike[]
> {
    protected readonly host = inject(forwardRef(() => TuiInputFiles));
    protected readonly m = tuiAppearanceMode(this.mode);

    public readonly el = tuiInjectElement<HTMLInputElement>();
    public readonly reject = outputFromObservable(
        timer(0, tuiZonefreeScheduler()).pipe(
            switchMap(() => tuiControlValue(this.control.control)),
            map(() => tuiFilesRejected(this.control.control)),
            filter(({length}) => !!length),
        ),
    );

    public process(files: FileList): void {
        const fileOrFiles = this.el.multiple
            ? [...toArray(this.value()), ...Array.from(files)]
            : files[0];

        if (fileOrFiles) {
            this.onChange(fileOrFiles);
        }
    }

    protected onClick(event: MouseEvent): void {
        if (this.el.readOnly) {
            event.preventDefault();
        }
    }
}

function toArray(
    value: TuiFileLike | readonly TuiFileLike[] | null,
): readonly TuiFileLike[] {
    return value ? coerceArray(value) : [];
}
