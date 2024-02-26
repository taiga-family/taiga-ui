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
    public icon = this.options.icon;

    @Input()
    @HostBinding('attr.data-status')
    public status = this.options.status;

    @Input()
    @HostBinding('attr.data-size')
    public size = this.options.size;

    @Input()
    public hideClose = false;

    @Output()
    public readonly close = new EventEmitter<void>();

    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    protected get hasClose(): boolean {
        return !this.hideClose && tuiIsObserved(this.close);
    }
}
