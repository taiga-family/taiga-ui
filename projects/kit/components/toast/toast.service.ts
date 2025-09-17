import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {TUI_ALERTS} from '@taiga-ui/core/components/alert';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {from, mergeMap, Observable, Subject, switchMap, timer} from 'rxjs';

import {TUI_TOAST_OPTIONS, type TuiToastOptions} from './toast.options';
import {TuiToastNotification} from './toast-notification';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiToastService(TUI_ALERTS, TuiToastNotification, inject(TUI_TOAST_OPTIONS)),
})
export class TuiToastService<T, K = void> extends TuiPopoverService<T, K> {
    private readonly doc = inject(DOCUMENT);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly queue$ = new Subject<Observable<unknown>>();
    private readonly maxConcurrent = this.isMobile ? 1 : 2;

    protected readonly $ = this.queue$
        .pipe(
            mergeMap((toast$) => {
                const waitAnimations = async () => {
                    const elements = this.doc.querySelectorAll('tui-toast-notification');
                    const animations = Array.from(elements).flatMap(
                        (element) =>
                            element
                                ?.getAnimations()
                                .map(async (animation) => animation.finished) ?? [],
                    );

                    return animations.length > 0
                        ? Promise.allSettled(animations)
                        : Promise.resolve();
                };

                return from(waitAnimations()).pipe(
                    switchMap(() => timer(0)),
                    switchMap(() => from(waitAnimations())),
                    switchMap(() => toast$),
                );
            }),
            takeUntilDestroyed(),
        )
        .subscribe();

    public show(
        content: PolymorpheusComponent<T> | string,
        options?: Partial<Omit<TuiToastOptions, 'maxConcurrent'>>,
    ): void {
        if (this.maxConcurrent === 1) {
            this.items$.next([]);
        }

        this.queue$.next(this.open(content, options));
    }

    public override open<G = void>(
        content: PolymorpheusComponent<T> | string,
        options: Partial<TuiToastOptions> = {},
    ): Observable<K extends void ? G : K> {
        return new Observable((observer) => {
            const item = {
                ...this.options,
                ...options,
                content,
                $implicit: observer,
                component: this.component,
                createdAt: Date.now(),
                id: this.id.generate(),
                completeWith: (result: K extends void ? G : K): void => {
                    observer.next(result);
                    observer.complete();
                },
            };

            const items = [item, ...this.items$.value].slice(0, this.maxConcurrent);

            this.items$.next(items);

            return () => {
                this.items$.next(this.items$.value.filter((value) => value !== item));
            };
        });
    }
}
