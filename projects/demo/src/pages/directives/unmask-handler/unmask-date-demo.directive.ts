import {Directive} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions, maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiUnmaskHandler} from '@taiga-ui/kit';
import {tuiMaskito} from '@taiga-ui/kit/utils';

export const UNMASK_DATE_OPTIONS: MaskitoOptions = maskitoDateOptionsGenerator({
    mode: 'dd/mm/yyyy',
    separator: '/',
});

export const unmaskDate = (value: string): string => value.replaceAll('/', '');

@Directive({
    selector: 'input[tuiUnmaskDateDemo]',
    providers: [tuiAsControl(TuiUnmaskDateDemoDirective)],
    hostDirectives: [TuiWithInput, MaskitoDirective, TuiUnmaskHandler],
    host: {
        '(input)': 'onInput($any($event.target).value)',
    },
})
export class TuiUnmaskDateDemoDirective extends TuiControl<string> {
    protected readonly maskito = tuiMaskito(UNMASK_DATE_OPTIONS);

    protected onInput(value: string): void {
        this.onChange(value);
    }
}
