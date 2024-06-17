import {coerceArray} from '@angular/cdk/coercion';
import {Directive, forwardRef, inject, Output} from '@angular/core';
import {
    EMPTY_ARRAY,
    tuiAsControl,
    TuiControl,
    tuiControlValue,
    tuiInjectElement,
} from '@taiga-ui/cdk';
import type {TuiAppearanceOptions} from '@taiga-ui/core';
import {TuiAppearance, tuiAppearanceOptionsProvider} from '@taiga-ui/core';
import {filter, map, switchMap, timer} from 'rxjs';

import type {TuiFileLike} from '../files.types';
import {tuiFilesRejected} from '../files.utils';
import {TuiInputFilesComponent} from './input-files.component';
import {TuiInputFilesValidatorDirective} from './input-files-validator.directive';

@Directive({
    standalone: true,
    selector: 'input[tuiInputFiles]',
    providers: [
        tuiAsControl(TuiInputFilesDirective),
        tuiAppearanceOptionsProvider(TuiInputFilesDirective),
    ],
    host: {
        type: 'file',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(click)': 'onClick($event)',
    },
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        {
            directive: TuiInputFilesValidatorDirective,
            inputs: ['accept', 'maxFileSize'],
        },
    ],
})
export class TuiInputFilesDirective
    extends TuiControl<TuiFileLike | readonly TuiFileLike[]>
    implements TuiAppearanceOptions
{
    protected readonly host = inject(forwardRef(() => TuiInputFilesComponent));

    @Output()
    public readonly reject = timer(0).pipe(
        switchMap(() => tuiControlValue(this.control.control)),
        map(() => tuiFilesRejected(this.control.control)),
        filter(({length}) => !!length),
    );

    public readonly appearance = 'file';
    public readonly input = tuiInjectElement<HTMLInputElement>();

    public process(files: FileList): void {
        this.onChange(
            this.input.multiple
                ? [...toArray(this.value()), ...Array.from(files)]
                : files[0] || null,
        );
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
