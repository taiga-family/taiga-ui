import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiIsObserved} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

import {TUI_NOTIFICATION_OPTIONS} from './notification.options';

@Component({
    selector: 'tui-notification,a[tuiNotification],button[tuiNotification]',
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
    protected readonly options = inject(TUI_NOTIFICATION_OPTIONS);

    @Input()
    icon = this.options.icon;

    @Input()
    @HostBinding('attr.data-status')
    status = this.options.status;

    @Input()
    @HostBinding('attr.data-size')
    size = this.options.size;

    @Input()
    hideClose = false;

    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close = new EventEmitter<void>();

    readonly closeWord$ = inject(TUI_CLOSE_WORD);
    readonly icons = inject(TUI_COMMON_ICONS);

    get hasClose(): boolean {
        return !this.hideClose && tuiIsObserved(this.close);
    }
}
