import {Directive, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiBreakpointService} from '@taiga-ui/core/services';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

@Directive({
    inputs: ['compactSetter: compact'],
    host: {'[class._compact]': 'compact()'},
})
export class TuiInputCardGroupDirective {
    readonly #c$ = new BehaviorSubject(false);
    readonly #m$ = inject(TuiBreakpointService).pipe(map((b) => b === 'mobile'));

    public readonly compact$ = combineLatest([this.#c$, this.#m$]).pipe(
        map((c) => c.some(Boolean)),
    );

    public readonly compact = toSignal(this.compact$, {initialValue: false});

    public set compactSetter(compact: boolean) {
        this.#c$.next(compact);
    }
}
