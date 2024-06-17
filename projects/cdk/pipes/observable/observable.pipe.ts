import type {Signal} from '@angular/core';
import {inject, INJECTOR, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {Observable} from 'rxjs';
import {Subject, takeUntil} from 'rxjs';

/**
 * Abstract class to provide functionality for converting
 * RxJS Observables to Angular Signals.
 *
 * This class is intended to be extended by concrete implementations that define
 * the `getSignal` method, which returns a `Signal` factory function. This factory
 * function should be pure and must generate a `Signal` based on the input value and arguments.
 *
 * @example
 * ```
 * @Pipe({name: 'countdown', pure: false})
 * export class ToStringPipe extends TuiObservablePipe {
 *   public transform(value: number): string {
 *      return this.getSignal(value)();
 *   }
 *
 *   @tuiPure
 *   protected getSignal(value: number): Signal<R> {
 *      const countdown$ = timer(0, 1000).pipe(
 *         map(i => value - i)
 *         takeWhile(i => i >= 0, true),
 *      );
 *
 *      return this.toSignal(countdown$, value);
 *   }
 * }
 * ```
 */
export abstract class TuiObservablePipe {
    private readonly destroy$ = new Subject<void>();

    protected readonly injector = inject(INJECTOR);

    protected toSignal<T, I>(observable$: Observable<T>, initialValue: I): Signal<I | T> {
        this.destroy$.next();

        return untracked(
            () =>
                toSignal(observable$.pipe(takeUntil(this.destroy$)), {
                    injector: this.injector,
                    initialValue: initialValue as any,
                }) as Signal<I | T>,
        );
    }
}
