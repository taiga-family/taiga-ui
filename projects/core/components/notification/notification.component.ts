import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiIsObserved} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS, TuiCommonIcons} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

import {TUI_NOTIFICATION_OPTIONS, TuiNotificationOptions} from './notification.options';

@Component({
    selector: 'tui-notification,a[tuiNotification],button[tuiNotification]',
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
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

    constructor(
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_COMMON_ICONS) readonly icons: TuiCommonIcons,
        @Inject(TUI_NOTIFICATION_OPTIONS) readonly options: TuiNotificationOptions,
    ) {}

    get hasClose(): boolean {
        return !this.hideClose && tuiIsObserved(this.close);
    }
}
