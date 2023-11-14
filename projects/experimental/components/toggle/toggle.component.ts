import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_PLATFORM, tuiIsString, TuiPlatform, TuiStringHandler} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';
import {Observable} from 'rxjs';

import {TUI_TOGGLE_OPTIONS, TuiToggleOptions} from './toggle.options';

@Component({
    selector: 'input[type="checkbox"][tuiToggle]',
    template: '',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
        '[disabled]': '!control || control.disabled',
        '[attr.data-size]': 'size',
        '[attr.data-platform]': 'platform',
        '[class._invalid]': 'control?.invalid && control?.touched',
        '[class._readonly]': '!control',
        '[class._icons]': 'showIcons',
    },
})
export class TuiToggleComponent {
    @Input()
    size = this.options.size;

    @Input()
    showIcons = this.options.showIcons;

    constructor(
        @Inject(TUI_ICON_RESOLVER) private readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_TOGGLE_OPTIONS) private readonly options: TuiToggleOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Optional() @Inject(NgControl) readonly control: NgControl | null,
    ) {}

    @HostBinding('style.--t-mask')
    get icon(): string {
        const {options, resolver, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);

        return `url(${resolver(icon)})`;
    }
}
