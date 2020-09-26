import {Inject, Injectable} from '@angular/core';
import {
    TuiAriaDialogContext,
    TuiBaseDialog,
    TuiBaseDialogContext,
} from '@taiga-ui/cdk/interfaces';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';

type Dialog<T> = TuiBaseDialog<any, TuiBaseDialogContext<any> & T> &
    T &
    TuiAriaDialogContext;

@Injectable()
export abstract class AbstractTuiDialogService<T extends {}> extends Observable<
    ReadonlyArray<Dialog<T>>
> {
    protected abstract readonly component: PolymorpheusContent<Dialog<T>>;

    protected abstract readonly defaultOptions: T;

    protected readonly dialogs$ = new BehaviorSubject<ReadonlyArray<Dialog<T>>>([]);

    protected constructor(
        @Inject(TuiIdService) private readonly idService: TuiIdService,
    ) {
        super(observer => this.dialogs$.subscribe(observer));
    }

    open<G>(
        content: PolymorpheusContent<TuiBaseDialogContext<G> & T>,
        options: Partial<T> = {},
    ): Observable<G> {
        return new Observable(observer => {
            const dialog = {
                ...this.defaultOptions,
                ...options,
                observer,
                content,
                component: this.component,
                id: this.idService.generate(),
            };

            this.dialogs$.next([...this.dialogs$.value, dialog]);

            return () => {
                this.dialogs$.next(this.dialogs$.value.filter(item => item !== dialog));
            };
        });
    }
}
