import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Input,
    OnInit,
} from '@angular/core';
import {isNumber, TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {fromEvent, timer} from 'rxjs';
import {repeatWhen, takeUntil} from 'rxjs/operators';
import {TuiNotificationContentContext} from '../notification-content-context';
import {NotificationAlert} from './Notification-alert';

export const DEFAULT_ALERT_AUTOCLOSE_TIMEOUT = 3000;

@Component({
    selector: 'tui-notification-alert',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './notification-alert.template.html',
    styleUrls: ['./notification-alert.style.less'],
    providers: [TuiDestroyService],
})
export class TuiNotificationAlertComponent<O, I> implements OnInit {
    @Input()
    item?: NotificationAlert<O, I>;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    ) {}

    ngOnInit() {
        this.initAutoClose();
    }

    get safeItem(): NotificationAlert<O, I> {
        if (!this.item) {
            throw new Error('Notification was created as undefined');
        }

        return this.item;
    }

    get context(): TuiNotificationContentContext<O, I> {
        return this.calculateContext(this.safeItem);
    }

    closeNotification() {
        this.safeItem.observer.complete();
    }

    @tuiPure
    private calculateContext({
        status,
        data,
        label,
        observer,
    }: NotificationAlert<O, I>): TuiNotificationContentContext<O, I> {
        return {
            $implicit: status,
            data: data,
            label: label,
            closeHook: () => {
                observer.complete();
            },
            emitHook: (data: O) => {
                observer.next(data);
            },
            emitAndCloseHook: (data: O) => {
                observer.next(data);
                observer.complete();
            },
        };
    }

    private initAutoClose() {
        if (!this.safeItem.autoClose) {
            return;
        }

        timer(
            isNumber(this.safeItem.autoClose)
                ? this.safeItem.autoClose
                : DEFAULT_ALERT_AUTOCLOSE_TIMEOUT,
        )
            .pipe(
                takeUntil(fromEvent(this.elementRef.nativeElement, 'mouseenter')),
                repeatWhen(() => fromEvent(this.elementRef.nativeElement, 'mouseleave')),
                takeUntil(this.destroy$),
            )
            .subscribe(() => this.closeNotification());
    }
}
