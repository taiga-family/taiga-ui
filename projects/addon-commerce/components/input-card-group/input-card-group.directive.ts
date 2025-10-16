import {Directive, Input} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiInjectMobileRes} from '@taiga-ui/core/services';
import {BehaviorSubject, combineLatest, map} from 'rxjs';

@Directive({
    standalone: true,
    host: {'[class._compact]': 'compact()'},
})
export class TuiInputCardGroupDirective {
    private readonly c$ = new BehaviorSubject(false);
    private readonly m$ = tuiInjectMobileRes();

    public readonly compact$ = combineLatest([this.c$, this.m$]).pipe(
        map((c) => c.some(Boolean)),
    );

    public readonly compact = toSignal(this.compact$, {initialValue: false});

    @Input('compact')
    public set compactSetter(compact: boolean) {
        this.c$.next(compact);
    }
}
