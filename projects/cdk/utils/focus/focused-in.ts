import {type Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiUntrackedScheduler} from '@taiga-ui/cdk/observables';
import {fromEvent, map, merge, observeOn} from 'rxjs';

export function tuiFocusedIn(node: Node): Signal<boolean> {
    return toSignal(
        merge(
            fromEvent(node, 'focus', {capture: true}).pipe(map(TUI_TRUE_HANDLER)),
            fromEvent(node, 'blur', {capture: true}).pipe(map(TUI_FALSE_HANDLER)),
        ).pipe(observeOn(tuiUntrackedScheduler)),
        {initialValue: false},
    );
}
