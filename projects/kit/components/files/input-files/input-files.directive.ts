import {coerceArray} from '@angular/cdk/coercion';
import {Directive, forwardRef, inject, Output} from '@angular/core';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {EMPTY_ARRAY} from '@taiga-ui/cdk/constants';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiControlValue, tuiZonefreeScheduler} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    type TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {filter, map, switchMap, timer} from 'rxjs';

import {type TuiFileLike} from '../files.types';
import {tuiFilesRejected} from '../files.utils';
import {TuiInputFiles} from './input-files.component';
import {TuiInputFilesValidator} from './input-files-validator.directive';

@Directive({
    standalone: true,
    selector: 'input[tuiInputFiles]',
    providers: [
        tuiAsControl(TuiInputFilesDirective),
        tuiAppearanceOptionsProvider(TuiInputFilesDirective),
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
export class TuiInputFilesDirective
    extends TuiControl<TuiFileLike | readonly TuiFileLike[]>
    implements TuiAppearanceOptions
{
    protected readonly host = inject(forwardRef(() => TuiInputFiles));

    @Output()
    public readonly reject = timer(0, tuiZonefreeScheduler()).pipe(
        switchMap(() => tuiControlValue(this.control.control)),
        map(() => tuiFilesRejected(this.control.control)),
        filter(({length}) => !!length),
    );

    public readonly appearance = 'file';
    public readonly input = tuiInjectElement<HTMLInputElement>();

    public process(files: FileList): void {
        const fileOrFiles = this.input.multiple
            ? [...toArray(this.value()), ...Array.from(files)]
            : files[0];

        if (fileOrFiles) {
            this.onChange(fileOrFiles);
        }
    }

    protected onClick(event: MouseEvent): void {
        if (this.input.readOnly) {
            event.preventDefault();
        }
    }
}

function toArray(
    value: TuiFileLike | readonly TuiFileLike[] | null,
): readonly TuiFileLike[] {
    return value ? coerceArray(value) : EMPTY_ARRAY;
}
