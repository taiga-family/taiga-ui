import {Inject, Injectable} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export abstract class AbstractTuiDialogService<T extends {}> extends Observable<
    ReadonlyArray<TuiDialog<T, any>>
> {
    protected abstract readonly component: PolymorpheusComponent<any, TuiDialog<T, any>>;

    protected abstract readonly defaultOptions: T;

    protected readonly dialogs$ = new BehaviorSubject<ReadonlyArray<TuiDialog<T, any>>>(
        [],
    );

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
            const completeWith = (result: G) => {
                observer.next(result);
                observer.complete();
            };
            const dialog = {
                ...this.defaultOptions,
                ...options,
                content,
                completeWith,
                $implicit: observer,
                component: this.component,
                createdAt: Date.now(),
                id: this.idService.generate(),
            };

            this.dialogs$.next([...this.dialogs$.value, dialog]);

            return () => {
                this.dialogs$.next(this.dialogs$.value.filter(item => item !== dialog));
            };
        });
    }
}
