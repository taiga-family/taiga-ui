import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

export const STATUS_ICON: Record<string, string> = {
    info: 'tuiIconInfo',
    success: 'tuiIconCheckCircle',
    error: 'tuiIconCancel',
    warning: 'tuiIconAttention',
};

// @bad TODO: Think about moving to kit
@Component({
    selector: 'tui-notification',
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
    @Input()
    @HostBinding('class._has-icon')
    @tuiDefaultProp()
    hasIcon = true;

    @Input()
    @HostBinding('attr.data-tui-host-status')
    @tuiDefaultProp()
    status: TuiNotification = TuiNotification.Info;

    @Output()
    readonly close = new EventEmitter<void>();

    constructor(@Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>) {}

    get icon(): string {
        return STATUS_ICON[this.status];
    }

    @HostBinding('class._has-close-button')
    get hasClose(): boolean {
        return !!this.close.observers.length;
    }
}
