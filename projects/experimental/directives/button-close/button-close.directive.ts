import {Directive, Inject, Input} from '@angular/core';
import {
    TUI_PLATFORM,
    TuiDirectiveStylesService,
    TuiPlatform,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';
import {Observable} from 'rxjs';

import {TuiButtonCloseStylesComponent} from './button-close.component';
import {TUI_BUTTON_CLOSE_OPTIONS, TuiButtonCloseOptions} from './button-close.options';

@Directive({
    selector: 'button[tuiButtonClose]',
    providers: [MODE_PROVIDER],
    host: {
        tuiAppearance: '',
        '[attr.data-size]': 'size',
        '[attr.data-appearance]': 'appearance',
        '[style.--t-mask]': '"url(" + resolver(icon) + ")"',
        '[attr.data-platform]': 'platform',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiButtonCloseDirective {
    @Input()
    size = this.options.size;

    @Input()
    appearance = this.options.appearance;

    get icon(): string {
        return this.options.icons[this.platform];
    }

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_BUTTON_CLOSE_OPTIONS) private readonly options: TuiButtonCloseOptions,
        @Inject(TUI_PLATFORM) private readonly platform: TuiPlatform,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonCloseStylesComponent);
    }
}
