import {Inject, Injectable} from '@angular/core';
import {AbstractTuiDialogService, TuiIdService} from '@taiga-ui/cdk';
import {
    TuiAlertOptions,
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core/interfaces';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/tokens';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TuiAlertComponent, TuiNotificationContentContext} from './alert.component';

@Injectable({providedIn: `root`})
export class TuiAlertService extends AbstractTuiDialogService<TuiAlertOptions<any>> {
    protected readonly component = new PolymorpheusComponent(TuiAlertComponent);

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        protected readonly defaultOptions: TuiAlertOptions<any>,
        @Inject(TuiIdService) idService: TuiIdService,
    ) {
        super(idService);
    }
}

/** @deprecated use {@link TuiAlertService} */
@Injectable({providedIn: `root`})
export class TuiNotificationsService {
    constructor(@Inject(TuiAlertService) private readonly alert: TuiAlertService) {}

    show<O = void>(
        content: PolymorpheusContent<TuiNotificationContentContext<O>>,
    ): Observable<O>;
    show<O = void>(
        content: PolymorpheusContent<TuiNotificationContentContext<O>>,
        options: TuiNotificationOptions,
    ): Observable<O>;
    show<O, I>(
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        options: TuiNotificationOptionsWithData<I>,
    ): Observable<O>;
    show<O, I>(
        content: PolymorpheusContent<TuiNotificationContentContext<O, I>>,
        options: TuiNotificationOptions | TuiNotificationOptionsWithData<I> = {},
    ): Observable<O> {
        return this.alert.open(content as any, options) as unknown as Observable<O>;
    }
}
