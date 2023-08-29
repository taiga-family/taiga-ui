import {Inject, Injectable} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export abstract class AbstractTuiDialogService<T, K = void> extends Observable<
    ReadonlyArray<TuiDialog<T, any>>
> {
    protected abstract readonly component: PolymorpheusComponent<any, TuiDialog<T, any>>;

    protected abstract readonly defaultOptions: T;

    protected readonly dialogs$ = new BehaviorSubject<ReadonlyArray<TuiDialog<T, any>>>(
        [],
    );

    constructor(@Inject(TuiIdService) private readonly idService: TuiIdService) {
        super(observer => this.dialogs$.subscribe(observer));
    }

    open<G = void>(
        content: PolymorpheusContent<T & TuiBaseDialogContext<K extends void ? G : K>>,
        options: Partial<T> = {},
    ): Observable<K extends void ? G : K> {
        return new Observable(observer => {
            const completeWith = (result: K extends void ? G : K): void => {
                observer.next(result);
                observer.complete();
            };
            const dialog = {
                ...this.defaultOptions,
                ...options,
                id: this.idService.generate(),
                $implicit: observer,
                completeWith,
                component: this.component,
                content,
                createdAt: Date.now(),
            };

            this.dialogs$.next([...this.dialogs$.value, dialog]);

            return () => {
                this.dialogs$.next(this.dialogs$.value.filter(item => item !== dialog));
            };
        });
    }
}
