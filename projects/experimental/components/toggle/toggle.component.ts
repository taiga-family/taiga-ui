import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_BASE_HREF, TUI_PLATFORM, tuiIsString, TuiPlatform} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TUI_SVG_OPTIONS,
    TuiBrightness,
    TuiSvgOptions,
} from '@taiga-ui/core';
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
        @Inject(TUI_BASE_HREF) private readonly baseHref: string,
        @Inject(TUI_SVG_OPTIONS) private readonly svg: TuiSvgOptions,
        @Inject(TUI_TOGGLE_OPTIONS) private readonly options: TuiToggleOptions,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Optional() @Inject(NgControl) readonly control: NgControl | null,
    ) {}

    @HostBinding('style.--t-mask')
    get icon(): string {
        const {options, svg, baseHref, size} = this;
        const icon = tuiIsString(options.icon) ? options.icon : options.icon(size);
        const mask = icon.includes('/') ? icon : svg.path(icon, baseHref);

        return `url(${mask})`;
    }
}
