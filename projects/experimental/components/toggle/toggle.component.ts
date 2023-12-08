import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiIsString, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiSizeS} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

import {TUI_TOGGLE_OPTIONS, TuiToggleOptions} from './toggle.options';

@Component({
    selector: 'input[type="checkbox"][tuiToggle]',
    template: '',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiAppearance: '', // Apply base appearance
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[class._invalid]': 'control?.invalid && control?.touched',
        '[class._readonly]': '!control',
        '[class._icons]': 'showIcons',
    },
})
export class TuiToggleComponent {
    @Input()
    size: TuiSizeS = this.options.size;

    @Input()
    showIcons = this.options.showIcons;

    constructor(
        @Inject(TUI_ICON_RESOLVER) private readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_TOGGLE_OPTIONS) private readonly options: TuiToggleOptions,
        @Optional() @Inject(NgControl) readonly control: NgControl | null,
    ) {}

    @HostBinding('style.--t-mask')
    get icon(): string {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return `url(${resolver(icon)})`;
    }
}
