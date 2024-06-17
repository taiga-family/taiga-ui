import type {PipeTransform, Signal} from '@angular/core';
import {inject, INJECTOR, Pipe, untracked} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiInjectElement, tuiPure} from '@taiga-ui/cdk';
import {fromEvent, map, merge, startWith, Subject, takeUntil} from 'rxjs';

@Pipe({
    standalone: true,
    name: 'tuiFallbackSrc',
    pure: false,
})
export class TuiFallbackSrcPipe implements PipeTransform {
    private readonly el = tuiInjectElement();
    private readonly destroy$ = new Subject<void>();
    private readonly injector = inject(INJECTOR);
    private readonly error$ = merge(
        fromEvent(this.el, 'tui-icon-error'),
        fromEvent(this.el, 'error', {capture: true}),
    );

    public transform(src: string, fallback: string): string {
        return this.getSignal(src, fallback)();
    }

    @tuiPure
    private getSignal(src: string, fallback: string): Signal<string> {
        this.destroy$.next();

        return untracked(() =>
            toSignal(
                this.error$.pipe(
                    map(() => fallback),
                    startWith(src),
                    takeUntil(this.destroy$),
                ),
                {
                    requireSync: true,
                    injector: this.injector,
                },
            ),
        );
    }
}
