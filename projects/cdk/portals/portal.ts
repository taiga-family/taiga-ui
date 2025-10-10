import {inject, Injectable, INJECTOR, Injector, type Type} from '@angular/core';
import {TuiIdService} from '@taiga-ui/cdk/services';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {
    // eslint-disable-next-line no-restricted-imports
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    type PolymorpheusContent,
} from '@taiga-ui/polymorpheus';
import {Observable, type Observer} from 'rxjs';

import {type TuiPortalService} from './service';

export type TuiPortalContext<T extends object, O> = T &
    TuiContext<Observer<O>> & {
        readonly content: PolymorpheusContent<TuiPortalContext<T, O>>;
        readonly createdAt: number;
        readonly id: string;
        readonly completeWith: (value: O) => void;
    };

@Injectable()
export abstract class TuiPortal<T extends object, K = void> {
    protected abstract readonly component: Type<any>;
    protected abstract readonly options: T;

    private readonly injector = inject(INJECTOR);
    private readonly id = inject(TuiIdService);

    constructor(private readonly popups: TuiPortalService) {}

    public open<G = void>(
        content: PolymorpheusContent<TuiPortalContext<T, K extends void ? G : K>>,
        options: Partial<T> = {},
    ): Observable<K extends void ? G : K> {
        return new Observable(($implicit) =>
            this.add(
                new PolymorpheusComponent(
                    this.component,
                    Injector.create({
                        parent: this.injector,
                        providers: [
                            {
                                provide: POLYMORPHEUS_CONTEXT,
                                useValue: {
                                    ...this.options,
                                    ...options,
                                    content,
                                    $implicit,
                                    createdAt: Date.now(),
                                    id: this.id.generate(),
                                    completeWith: (v: K extends void ? G : K): void => {
                                        $implicit.next(v);
                                        $implicit.complete();
                                    },
                                } satisfies TuiPortalContext<T, K extends void ? G : K>,
                            },
                        ],
                    }),
                ),
            ),
        );
    }

    protected add(component: PolymorpheusComponent<unknown>): () => void {
        const ref = this.popups.add(component);

        return () => ref.destroy();
    }
}
