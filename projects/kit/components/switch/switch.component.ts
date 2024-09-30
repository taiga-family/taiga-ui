import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TUI_SWITCH_OPTIONS} from './switch.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/switch.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiAppearance,
            inputs: ['tuiAppearanceState', 'tuiAppearanceFocus'],
        },
        TuiNativeValidator,
    ],
    host: {
        role: 'switch',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[style.--t-checked-icon]': 'icon',
    },
})
export class TuiSwitch implements DoCheck {
    private readonly appearance = inject(TuiAppearance);
    private readonly resolver = tuiInjectIconResolver();
    private readonly options = inject(TUI_SWITCH_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {self: true, optional: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public showIcons = this.options.showIcons;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }

    protected get icon(): string | null {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return this.showIcons && icon ? `url(${resolver(icon)})` : null;
    }
}
