import {
    inject,
    Injectable,
    INJECTOR,
    Injector,
    type Provider,
    type Type,
} from '@angular/core';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    // eslint-disable-next-line no-restricted-imports
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    type PolymorpheusContent,
} from '@taiga-ui/polymorpheus';
import {Observable, type Observer} from 'rxjs';

import {type TuiPortalService} from './service';

export type TuiPortalContext<T, O = void> = T &
    TuiContext<Observer<O>> & {
        readonly content: PolymorpheusContent<TuiPortalContext<T, O>>;
        readonly createdAt: number;
        readonly id: string;
        completeWith(value: O): void;
    };

@Injectable()
export abstract class TuiPortal<T, K = void> {
    protected abstract readonly component: Type<any>;
    protected abstract readonly options: T;

    private readonly injector = inject(INJECTOR);

    // eslint-disable-next-line @angular-eslint/prefer-inject
    constructor(protected readonly service: TuiPortalService) {}

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
                                    id: tuiGenerateId(),
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
        const ref = this.service.add(component);

        return () => ref.destroy();
    }
}

export function tuiAsPortal(portal: typeof TuiPortal<any>): Provider {
    return tuiProvide(TuiPortal, portal);
}
