import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    type OnChanges,
    type OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {type TuiStringHandler} from '@taiga-ui/cdk/types';
import {
    tuiIsString,
    tuiSetSignal,
    tuiWithStyles,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import {TuiIcons, TuiWithIcons} from '@taiga-ui/core/directives/icons';

import {TUI_NOTIFICATION_OPTIONS} from './notification.options';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/core/styles/components/notification.less";'],
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
        '[attr.data-size]': 'size',
    },
})
export class TuiNotification implements OnChanges, OnInit {
    private readonly options = inject(TUI_NOTIFICATION_OPTIONS);

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly icons = inject(TuiIcons);

    @Input()
    public appearance = this.options.appearance;

    @Input()
    public icon: TuiStringHandler<string> | string = this.options.icon;

    @Input()
    public size = this.options.size;

    public ngOnInit(): void {
        this.refresh();
    }

    public ngOnChanges(): void {
        this.refresh();
    }

    private refresh(): void {
        // TODO: Refactor to tuiDirectiveBinding
        tuiSetSignal(
            this.icons.iconStart,
            tuiIsString(this.icon) ? this.icon : this.icon(this.appearance),
        );
    }
}
