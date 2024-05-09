import {coerceArray} from '@angular/cdk/coercion';
import {Directive, forwardRef, inject, Output} from '@angular/core';
import {
    AbstractTuiNullableControl,
    EMPTY_ARRAY,
    tuiControlValue,
    tuiInjectElement,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import type {TuiAppearanceOptions} from '@taiga-ui/core';
import {TuiAppearanceDirective, tuiAppearanceOptionsProvider} from '@taiga-ui/core';
import {filter, map, switchMap, timer} from 'rxjs';

import type {TuiFileLike} from '../files.types';
import {tuiFilesRejected} from '../files.utils';
import {TuiInputFilesComponent} from './input-files.component';
import {TuiInputFilesValidatorDirective} from './input-files-validator.directive';

@Directive({
    standalone: true,
    selector: 'input[tuiInputFiles]',
    providers: [tuiAppearanceOptionsProvider(forwardRef(() => TuiInputFilesDirective))],
    host: {
        type: 'file',
        '[disabled]': 'computedDisabled',
        '(blur)': 'onTouched()',
        '(click)': 'onClick($event)',
    },
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
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
    extends AbstractTuiNullableControl<TuiFileLike | readonly TuiFileLike[]>
    implements TuiAppearanceOptions
{
    @Output()
    public readonly reject = timer(0).pipe(
        switchMap(() => tuiControlValue(this.control)),
        map(() => tuiFilesRejected(this.control)),
        filter(rejected => !!rejected.length),
    );

    public readonly appearance = 'file';
    public readonly input = tuiInjectElement<HTMLInputElement>();

    protected readonly host = inject(forwardRef(() => TuiInputFilesComponent));

    public get focused(): boolean {
        return tuiIsNativeFocused(this.input);
    }

    public process(files: FileList): void {
        this.value = this.input.multiple
            ? [...toArray(this.value), ...Array.from(files)]
            : files[0] || null;
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
