import type {Signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TUI_FALSE_HANDLER, TUI_TRUE_HANDLER} from '@taiga-ui/cdk/constants';
import {fromEvent, map, merge} from 'rxjs';

export function tuiFocusedIn(node: Node): Signal<boolean> {
    return toSignal(
        merge(
            fromEvent(node, 'focusin').pipe(map(TUI_TRUE_HANDLER)),
            fromEvent(node, 'focusout').pipe(map(TUI_FALSE_HANDLER)),
        ),
        {initialValue: false},
    );
}
