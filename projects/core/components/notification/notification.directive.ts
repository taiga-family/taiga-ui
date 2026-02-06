import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {tuiIsString, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {tuiIconStart, TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_NOTIFICATION_OPTIONS} from './notification.options';

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/notification.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-notification'},
})
class Styles {}

@Directive({
    selector: '[tuiNotification]:not(ng-template)',
    providers: [
        tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS),
        tuiLinkOptionsProvider({appearance: ''}),
        tuiButtonOptionsProvider({appearance: 'outline-grayscale', size: 's'}),
    ],
    hostDirectives: [TuiWithIcons, TuiWithAppearance],
    host: {'[attr.data-size]': 'size()'},
})
export class TuiNotificationDirective {
    private readonly options = inject(TUI_NOTIFICATION_OPTIONS);

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly icons = tuiIconStart(
        computed((icon = this.icon()) =>
            tuiIsString(icon) ? icon : icon(this.appearance()),
        ),
    );

    public readonly appearance = input(this.options.appearance);
    public readonly size = input(this.options.size);
    public readonly icon = input<TuiStringHandler<string> | string>(this.options.icon);
}
