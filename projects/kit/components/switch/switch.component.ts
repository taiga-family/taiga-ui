import type {DoCheck} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiAppearance, TuiWithAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import type {TuiSizeS} from '@taiga-ui/core/types';

import {TUI_SWITCH_OPTIONS} from './switch.options';

@Component({
    standalone: true,
    selector: 'input[type="checkbox"][tuiSwitch]',
    template: '',
    styleUrls: ['./switch.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithAppearance, TuiNativeValidator],
    host: {
        role: 'switch',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._readonly]': '!control',
        '[class._icons]': 'showIcons',
    },
})
export class TuiSwitch implements DoCheck {
    private readonly appearance = inject(TuiAppearance);
    private readonly resolver = tuiInjectIconResolver();
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

    @HostBinding('style.--t-icon')
    protected get icon(): string {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return `url(${resolver(icon)})`;
    }
}
