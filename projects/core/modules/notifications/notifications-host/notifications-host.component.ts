import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {
    tuiFadeInList,
    tuiHeightCollapseList,
    tuiSlideInRightList,
} from '@taiga-ui/core/animations';
import {BehaviorSubject, Subscription} from 'rxjs';
import {NotificationAlert} from '../notification-alert/Notification-alert';
import {TuiNotificationsService} from '../notifications.service';

// TODO: refactor items service
@Component({
    selector: 'tui-notifications-host',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './notifications-host.template.html',
    styleUrls: ['./notifications-host.style.less'],
    animations: [tuiFadeInList, tuiSlideInRightList, tuiHeightCollapseList],
})
export class TuiNotificationsHostComponent {
    readonly items$ = new BehaviorSubject<ReadonlyArray<NotificationAlert<any, any>>>([]);

    private readonly subscription: Subscription;

    constructor(@Inject(TuiNotificationsService) service: TuiNotificationsService) {
        this.subscription = service.open$.subscribe(item => {
            this.addItem(item);
        });
        this.subscription.add(
            service.close$.subscribe(item => {
                this.removeItem(item);
            }),
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    private removeItem(itemToRemove: NotificationAlert<any, any>) {
        const {value} = this.items$;

        if (value.indexOf(itemToRemove) !== -1) {
            this.items$.next(value.filter(item => item !== itemToRemove));
        }
    }

    private addItem(item: NotificationAlert<any, any>) {
        const {value} = this.items$;

        if (value.indexOf(item) === -1) {
            this.items$.next(this.items$.value.concat(item));
        }
    }
}
