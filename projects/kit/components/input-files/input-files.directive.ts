import {Directive, ElementRef, forwardRef, inject} from '@angular/core';
import {
    TuiAppearanceDirective,
    TuiAppearanceOptions,
    tuiAppearanceOptionsProvider,
} from '@taiga-ui/core';

import {TuiInputFilesComponent} from './input-files.component';

@Directive({
    standalone: true,
    selector: 'input[tuiInputFiles]',
    providers: [tuiAppearanceOptionsProvider(forwardRef(() => TuiInputFilesDirective))],
    host: {
        type: 'file',
        class: 't-native',
        '[disabled]': 'host.computedDisabled',
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
    ],
})
export class TuiInputFilesDirective implements TuiAppearanceOptions {
    readonly appearance = 'file';
    readonly host = inject(forwardRef(() => TuiInputFilesComponent));
    readonly input: HTMLInputElement = inject(ElementRef).nativeElement;

    onClick(event: MouseEvent): void {
        if (this.input.readOnly) {
            event.preventDefault();
        }
    }
}
