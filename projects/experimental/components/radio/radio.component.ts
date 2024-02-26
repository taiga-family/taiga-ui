import {
    ChangeDetectionStrategy,
    Component,
    DoCheck,
    ElementRef,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import {TuiAppearanceDirective, TuiSizeS} from '@taiga-ui/core';

import {TUI_RADIO_OPTIONS} from './radio.options';

@Component({
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearanceDirective,
            inputs: [
                'tuiAppearance: appearance',
                'tuiAppearanceState',
                'tuiAppearanceFocus',
            ],
        },
        TuiNativeValidatorDirective,
    ],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent implements DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly options = inject(TUI_RADIO_OPTIONS);
    private readonly el: HTMLInputElement = inject(ElementRef).nativeElement;

    @Input()
    public size: TuiSizeS = this.options.size;

    protected readonly control = inject(NgControl, {optional: true});

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
}
