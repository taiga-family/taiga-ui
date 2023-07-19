import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TuiContextWithImplicit, tuiIsObserved, tuiIsPresent} from '@taiga-ui/cdk';
import {TuiNotification} from '@taiga-ui/core/enums';
import {
    TUI_CLOSE_WORD,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotificationDefaultOptions,
} from '@taiga-ui/core/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-notification',
    templateUrl: './notification.template.html',
    styleUrls: ['./notification.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiNotificationComponent {
    /**
     * @deprecated Use {@link TuiNotificationComponent.icon} input or TUI_NOTIFICATION_OPTIONS instead
     */
    @Input()
    hasIcon: boolean = this.options.hasIcon;

    @Input()
    icon: PolymorpheusContent<TuiContextWithImplicit<TuiNotification>> =
        this.options.icon;

    @Input()
    @HostBinding('attr.data-status')
    status: 'error' | 'info' | 'success' | 'warning' = this.options.status;

    @Input()
    hideClose = false;

    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close = new EventEmitter<void>();

    constructor(
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_NOTIFICATION_OPTIONS)
        readonly options: TuiNotificationDefaultOptions,
    ) {}

    @HostBinding('class._has-icon')
    get isIconExists(): boolean {
        return tuiIsPresent(this.icon) && this.hasIcon;
    }

    @HostBinding('class._has-close-button')
    get hasClose(): boolean {
        return !this.hideClose && tuiIsObserved(this.close);
    }
}
