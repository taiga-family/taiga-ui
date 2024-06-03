import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiInjectElement, tuiIsString, TuiNativeValidatorDirective} from '@taiga-ui/cdk';
import type {TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER, TuiAppearanceDirective} from '@taiga-ui/core';

import {TUI_SWITCH_OPTIONS} from './switch.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styleUrls: ['./switch.style.less'],
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
        role: 'switch',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[class._icons]': 'showIcons',
    },
})
export class TuiSwitchComponent implements DoCheck {
    private readonly appearance = inject(TuiAppearanceDirective);
    private readonly resolver = inject(TUI_ICON_RESOLVER);
    private readonly options = inject(TUI_SWITCH_OPTIONS);
    private readonly el = tuiInjectElement<HTMLInputElement>();

    protected readonly control = inject(NgControl, {optional: true, self: true});

    @Input()
    public size: TuiSizeS = this.options.size;

    @Input()
    public showIcons = this.options.showIcons;

    public ngDoCheck(): void {
        this.appearance.tuiAppearance = this.options.appearance(this.el);
    }

    @HostBinding('style.--t-mask')
    protected get icon(): string {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return `url(${resolver(icon)})`;
    }
}
