import {Directive, Output} from '@angular/core';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {distinctUntilChanged, filter, map, merge, startWith, switchMap} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiDroppableDropped], [tuiDroppableDragOverChange]',
    host: {
        '(dragover.prevent.silent)': '0',
    },
})
export class TuiDroppable {
    private readonly el = tuiInjectElement();

    @Output()
    public readonly tuiDroppableDropped = tuiTypedFromEvent(this.el, 'drop').pipe(
        tuiPreventDefault(),
        map((event) => event.dataTransfer),
        filter(tuiIsPresent),
    );

    @Output()
    public readonly tuiDroppableDragOverChange = tuiTypedFromEvent(
        this.el,
        'dragenter',
    ).pipe(
        switchMap(({target, dataTransfer}) =>
            merge(
                tuiTypedFromEvent(this.el, 'dragleave').pipe(
                    filter((event) => event.target === target),
                ),
                tuiTypedFromEvent(this.el, 'drop'),
            ).pipe(
                map(() => null),
                startWith(dataTransfer),
            ),
        ),
        distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b)),
    );
}
