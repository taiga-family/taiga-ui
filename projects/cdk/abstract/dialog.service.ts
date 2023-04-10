import {Inject, Injectable, TemplateRef} from '@angular/core';
import {TuiBaseDialogContext} from '@taiga-ui/cdk/interfaces';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {TuiDialog} from '@taiga-ui/cdk/types';
import {
    PolymorpheusComponent,
    PolymorpheusContent,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
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

    open<O = void, I extends T = T>(
        content:
            | PolymorpheusContent<I & TuiBaseDialogContext<K extends void ? O : K>>
            | PolymorpheusTemplate<I & TuiBaseDialogContext<K extends void ? O : K>>
            | TemplateRef<I & TuiBaseDialogContext<K extends void ? O : K>>,
        options: Partial<I> = {},
    ): Observable<K extends void ? O : K> {
        return new Observable(observer => {
            const completeWith = (result: K extends void ? O : K): void => {
                observer.next(result);
                observer.complete();
            };
            const dialog: TuiDialog<any, any> = {
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
