import {Directive, ElementRef, Inject, Output, Self} from '@angular/core';
import {tuiPreventDefault, tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {tuiIsPresent} from '@taiga-ui/cdk/utils/miscellaneous';
import {merge, Observable} from 'rxjs';
import {
    distinctUntilChanged,
    filter,
    map,
    mapTo,
    startWith,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

@Directive({
    selector: `[tuiDroppableDropped], [tuiDroppableDragOverChange]`,
    providers: [TuiDestroyService],
})
export class TuiDroppableDirective {
    @Output()
    readonly tuiDroppableDropped: Observable<DataTransfer>;

    @Output()
    readonly tuiDroppableDragOverChange: Observable<DataTransfer | null>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        this.tuiDroppableDropped = tuiTypedFromEvent(nativeElement, `drop`).pipe(
            tuiPreventDefault(),
            map(event => event.dataTransfer),
            filter(tuiIsPresent),
        );

        this.tuiDroppableDragOverChange = tuiTypedFromEvent(
            nativeElement,
            `dragenter`,
        ).pipe(
            switchMap(({target, dataTransfer}) =>
                merge(
                    tuiTypedFromEvent(nativeElement, `dragleave`).pipe(
                        filter(event => event.target === target),
                    ),
                    tuiTypedFromEvent(nativeElement, `drop`),
                ).pipe(mapTo(null), startWith(dataTransfer)),
            ),
            distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b)),
        );

        // Required by Drag and Drop API to stop redirecting
        tuiTypedFromEvent(nativeElement, `dragover`)
            .pipe(tuiPreventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
