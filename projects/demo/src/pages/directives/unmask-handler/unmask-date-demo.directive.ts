import {Directive} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk';
import {TuiWithInput} from '@taiga-ui/core';
import {TuiUnmaskHandler} from '@taiga-ui/kit';

export const UNMASK_DATE_OPTIONS: MaskitoOptions = maskitoDateOptionsGenerator({
    mode: 'dd/mm/yyyy',
    separator: '/',
});

export const unmaskDate = (value: string): string => value.replaceAll('/', '');

@Directive({
    selector: 'input[tuiUnmaskDateDemo]',
    providers: [tuiAsControl(TuiUnmaskDateDemoDirective)],
    hostDirectives: [
        TuiWithInput,
        MaskitoDirective,
        {
            directive: TuiUnmaskHandler,
            inputs: ['tuiUnmaskHandler', 'maskito'],
        },
    ],
    host: {
        '[maskito]': 'maskitoOptions',
        '(input)': 'onInput($any($event.target).value)',
    },
})
export class TuiUnmaskDateDemoDirective extends TuiControl<string> {
    protected readonly maskitoOptions = UNMASK_DATE_OPTIONS;

    protected onInput(value: string): void {
        this.onChange(value);
    }
}
