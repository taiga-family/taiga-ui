import {DOCUMENT} from '@angular/common';
import {inject, Injectable} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {type TuiPopover, TuiPopoverService} from '@taiga-ui/cdk/services';
import {TUI_ALERTS} from '@taiga-ui/core/components/alert';
import {type PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {from, mergeMap, type Observable, Subject, switchMap, timer} from 'rxjs';

import {TUI_TOAST_OPTIONS, type TuiToastOptions} from './toast.options';
import {TuiToastNotification} from './toast-notification';

@Injectable({
    providedIn: 'root',
    useFactory: () =>
        new TuiToastService(TUI_ALERTS, TuiToastNotification, inject(TUI_TOAST_OPTIONS)),
})
export class TuiToastService extends TuiPopoverService<TuiToastOptions> {
    private readonly doc = inject(DOCUMENT);
    private readonly toastOptions = inject(TUI_TOAST_OPTIONS);
    private readonly queue$ = new Subject<Observable<unknown>>();

    protected readonly $ = this.queue$
        .pipe(
            mergeMap((toast$) => {
                const elements = this.doc.querySelectorAll('tui-toast-notification');

                return timer(0).pipe(
                    switchMap(() => {
                        const animations = Array.from(elements).flatMap((element) => {
                            return (
                                element
                                    ?.getAnimations()
                                    .map(async (animation) => animation.finished) ?? []
                            );
                        });

                        return animations.length
                            ? from(Promise.allSettled(animations)).pipe(
                                  switchMap(() => toast$),
                              )
                            : toast$;
                    }),
                );
            }, this.toastOptions.maxConcurrent),
            takeUntilDestroyed(),
        )
        .subscribe();

    public hideAll(): this {
        this.list().forEach((item) => item.$implicit.complete());

        return this;
    }

    public show<T>(
        content: PolymorpheusComponent<T> | string,
        options?: Partial<Omit<TuiToastOptions, 'maxConcurrent'>>,
    ): void {
        this.queue$.next(this.open(content, options));
    }

    private list(): ReadonlyArray<TuiPopover<any, any>> {
        return this.items$.getValue();
    }
}
