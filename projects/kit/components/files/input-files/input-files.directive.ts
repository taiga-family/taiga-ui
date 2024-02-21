import {Directive, ElementRef, forwardRef, inject, Output} from '@angular/core';
import {
    AbstractTuiNullableControl,
    EMPTY_ARRAY,
    tuiControlValue,
    tuiIsNativeFocused,
} from '@taiga-ui/cdk';
import {
    TuiAppearanceDirective,
    TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core';
import {filter, map, switchMap, timer} from 'rxjs';

import {TuiFileLike} from '../files.types';
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
    readonly reject = timer(0).pipe(
        switchMap(() => tuiControlValue(this.control)),
        map(() => tuiFilesRejected(this.control)),
        filter(rejected => !!rejected.length),
    );

    readonly appearance = 'file';
    readonly host = inject(forwardRef(() => TuiInputFilesComponent));
    readonly input: HTMLInputElement = inject(ElementRef).nativeElement;

    get focused(): boolean {
        return tuiIsNativeFocused(this.input);
    }

    onClick(event: MouseEvent): void {
        if (this.input.readOnly) {
            event.preventDefault();
        }
    }

    process(files: FileList): void {
        this.value = this.input.multiple
            ? [...toArray(this.value), ...Array.from(files)]
            : files[0] || null;
    }
}

function toArray(value: TuiFileLike | readonly TuiFileLike[] | null): TuiFileLike[] {
    if (!value) {
        return EMPTY_ARRAY;
    }

    return Array.isArray(value) ? value : [value];
}
