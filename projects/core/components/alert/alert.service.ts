import {Inject, Injectable} from '@angular/core';
import {
    AbstractTuiDialogService,
    TuiBaseDialogContext,
    TuiIdService,
} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core/interfaces';
import {TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core/tokens';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable, Subject} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

import {TuiAlertComponent} from './alert.component';
import {TUI_ALERT_QUEUE_OPERATOR} from './alert.providers';
import {TuiAlertQueueOperator} from './alert.queue';

@Injectable({providedIn: 'root'})
export class TuiAlertService extends AbstractTuiDialogService<TuiAlertOptions<any>> {
    protected readonly component = new PolymorpheusComponent(TuiAlertComponent);

    protected readonly alerts$ = new Subject<Observable<unknown>>();

    constructor(
        @Inject(TUI_NOTIFICATION_OPTIONS)
        protected readonly defaultOptions: TuiAlertOptions<any>,
        @Inject(TuiIdService) idService: TuiIdService,
        @Inject(TUI_ALERT_QUEUE_OPERATOR) queueOperator: TuiAlertQueueOperator,
    ) {
        super(idService);

        this.alerts$.pipe(queueOperator()).subscribe();
    }

    override open<G = void>(
        content: PolymorpheusContent<TuiAlertOptions<any> & TuiBaseDialogContext<G>>,
        options: Partial<TuiAlertOptions<any>> = {},
    ): Observable<G> {
        const alert$ = super.open(content, options);

        return new Observable<G>(subscriber => {
            const destroy$ = new Subject();

            this.alerts$.next(alert$.pipe(tap(subscriber), takeUntil(destroy$)));

            return () => destroy$.next();
        });
    }
}
