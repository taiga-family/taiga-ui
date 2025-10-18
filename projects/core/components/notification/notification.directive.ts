import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
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
    styles: '@import "@taiga-ui/core/styles/components/notification.less";',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-notification'},
})
class Styles {}

@Directive({
    selector: 'tui-notification,a[tuiNotification],button[tuiNotification]',
    providers: [
        tuiAppearanceOptionsProvider(TUI_NOTIFICATION_OPTIONS),
        tuiLinkOptionsProvider({appearance: '', pseudo: true}),
        tuiButtonOptionsProvider({appearance: 'outline-grayscale', size: 's'}),
    ],
    hostDirectives: [TuiWithIcons, TuiWithAppearance],
    host: {
        '[attr.data-size]': 'size()',
    },
})
export class TuiNotification {
    private readonly options = inject(TUI_NOTIFICATION_OPTIONS);
    protected readonly computedIcon = computed((icon = this.icon()) =>
        tuiIsString(icon) ? icon : icon(this.appearance()),
    );

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly icons = tuiIconStart(this.computedIcon);

    public readonly appearance = input(this.options.appearance);

    public readonly icon = input<TuiStringHandler<string> | string>(this.options.icon);

    public readonly size = input(this.options.size);
}
