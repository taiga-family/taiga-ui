import {inject, Injectable} from '@angular/core';
import {TuiContext} from '@taiga-ui/cdk/interfaces';
import {PolymorpheusComponent, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {BehaviorSubject, Observable, Observer} from 'rxjs';

import {TuiIdService} from './id.service';

export interface TuiPopoverContext<O> extends TuiContext<Observer<O>> {
    readonly component: PolymorpheusComponent<any>;
    readonly createdAt: number;
    readonly id: string;
    readonly completeWith: (value: O) => void;
}

export type TuiPopover<T, O> = T &
    TuiPopoverContext<O> & {
        content: PolymorpheusContent<T & TuiPopoverContext<O>>;
    };

@Injectable()
// eslint-disable-next-line @typescript-eslint/naming-convention
export abstract class TuiPopoverService<T, K = void> {
    protected abstract readonly component: PolymorpheusComponent<any>;
    protected abstract readonly options: T;
    protected abstract readonly items$: BehaviorSubject<
        ReadonlyArray<TuiPopover<T, any>>
    >;

    private readonly id = inject(TuiIdService);

    open<G = void>(
        content: PolymorpheusContent<T & TuiPopoverContext<K extends void ? G : K>>,
        options: Partial<T> = {},
    ): Observable<K extends void ? G : K> {
        return new Observable(observer => {
            const completeWith = (result: K extends void ? G : K): void => {
                observer.next(result);
                observer.complete();
            };
            const item = {
                ...this.options,
                ...options,
                content,
                completeWith,
                $implicit: observer,
                component: this.component,
                createdAt: Date.now(),
                id: this.id.generate(),
            };

            this.items$.next([...this.items$.value, item]);

            return () => {
                this.items$.next(this.items$.value.filter(value => value !== item));
            };
        });
    }
}
