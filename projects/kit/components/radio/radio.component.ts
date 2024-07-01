import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiAppearance, TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TUI_RADIO_OPTIONS} from './radio.options';

@Component({
    standalone: true,
    selector: 'input[type="radio"][tuiRadio]',
    template: '',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithAppearance, TuiNativeValidator],
    host: {
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
    },
})
export class TuiRadioComponent implements DoCheck {
    private readonly appearance = inject(TuiAppearance);
    private readonly options = inject(TUI_RADIO_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {optional: true, self: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }
}
