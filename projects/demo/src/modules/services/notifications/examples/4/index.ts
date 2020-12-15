import {Component, Inject, Injector} from '@angular/core';
import {Router} from '@angular/router';
import {TuiNotification, TuiNotificationsService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {switchMap, takeUntil} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {AlertExampleWithDataComponent} from '../../alert-example-with-data/alert-example-with-data.component';

@Component({
    selector: 'tui-notifications-example-4',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent4 {
    readonly notification: Observable<void>;

    constructor(
        @Inject(TuiNotificationsService) notificationsService: TuiNotificationsService,
        @Inject(Router) router: Router,
        @Inject(Injector) private injector: Injector,
    ) {
        this.notification = notificationsService
            .show<number, number>(
                new PolymorpheusComponent(AlertExampleWithDataComponent, this.injector),
                {
                    label: 'Заголовок такой длинный, что даже не влезает в одну строку',
                    data: 237,
                    status: TuiNotification.Warning,
                    autoClose: false,
                },
            )
            .pipe(
                switchMap(response =>
                    notificationsService.show('Получено значение — ' + response, {
                        label: 'Информация.',
                    }),
                ),
                takeUntil(router.events),
            );
    }

    showNotification() {
        this.notification.subscribe();
    }
}
