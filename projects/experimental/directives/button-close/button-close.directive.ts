import {Directive, Inject} from '@angular/core';
import {
    TUI_PLATFORM,
    TuiDirectiveStylesService,
    tuiIsString,
    TuiPlatform,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TUI_BUTTON_DEFAULT_OPTIONS,
    TUI_BUTTON_OPTIONS,
} from '@taiga-ui/experimental/components';
import {TUI_ICON_RESOLVER} from '@taiga-ui/experimental/tokens';

import {TuiButtonCloseStylesComponent} from './button-close.component';
import {TUI_BUTTON_CLOSE_OPTIONS, TuiButtonCloseOptions} from './button-close.options';

@Directive({
    selector: 'button[tuiIconButton][tuiButtonClose]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            deps: [TuiButtonCloseDirective],
            useFactory: ({options}: TuiButtonCloseDirective) => ({
                ...TUI_BUTTON_DEFAULT_OPTIONS,
                ...options,
            }),
        },
    ],
    host: {
        '[style.--t-mask-left]': '"url(" + resolver(icon) + ")"',
        '[attr.data-platform]': 'platform',
        '[class._icon-left]': 'true',
    },
})
export class TuiButtonCloseDirective {
    get icon(): string {
        const {icons} = this.options;

        return tuiIsString(icons) ? icons : icons[this.platform];
    }

    constructor(
        @Inject(TUI_ICON_RESOLVER) readonly resolver: TuiStringHandler<string>,
        @Inject(TUI_BUTTON_CLOSE_OPTIONS) readonly options: TuiButtonCloseOptions,
        @Inject(TUI_PLATFORM) private readonly platform: TuiPlatform,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonCloseStylesComponent);
    }
}
