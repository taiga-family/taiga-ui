import {ChangeDetectionStrategy, Component, Inject, Input} from '@angular/core';
import {TuiDestroyService, tuiPure} from '@taiga-ui/cdk';
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiNotificationContentContext} from '../notification-content-context';
import {NotificationAlert} from './Notification-alert';

export const ALERT_AUTOCLOSE_TIMEOUT = 3000;

@Component({
    selector: 'tui-notification-alert',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './notification-alert.template.html',
    styleUrls: ['./notification-alert.style.less'],
    providers: [TuiDestroyService],
})
export class TuiNotificationAlertComponent<O, I> {
    @Input()
    item?: NotificationAlert<O, I>;

    constructor(
        @Inject(TuiDestroyService)
        destroy$: TuiDestroyService,
    ) {
        timer(ALERT_AUTOCLOSE_TIMEOUT)
            .pipe(takeUntil(destroy$))
            .subscribe(() => {
                if (this.safeItem.autoClose) {
                    this.closeDialog();
                }
            });
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

    closeDialog() {
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
}
