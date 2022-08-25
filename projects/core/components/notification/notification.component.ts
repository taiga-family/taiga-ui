import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp, tuiIsObserved} from '@taiga-ui/cdk';
import {
    TUI_CLOSE_WORD,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {Observable} from 'rxjs';

export const STATUS_ICON = {
    info: `tuiIconInfo`,
    success: `tuiIconCheckCircle`,
    error: `tuiIconCancel`,
    warning: `tuiIconAttention`,
} as const;

// @bad TODO: Think about moving to kit
@Component({
    selector: `tui-notification`,
    templateUrl: `./notification.template.html`,
    styleUrls: [`./notification.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
    @Input()
    @HostBinding(`class._has-icon`)
    @tuiDefaultProp()
    hasIcon = this.options.hasIcon;

    @Input()
    @HostBinding(`attr.data-tui-host-status`)
    @tuiDefaultProp()
    status: 'info' | 'error' | 'warning' | 'success' = this.options.status;

    @Output()
    readonly close = new EventEmitter<void>();

    constructor(
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_NOTIFICATION_OPTIONS)
        readonly options: TuiNotificationDefaultOptions,
    ) {}

    get icon(): string {
        return STATUS_ICON[this.status];
    }

    @HostBinding(`class._has-close-button`)
    get hasClose(): boolean {
        return tuiIsObserved(this.close);
    }
}
