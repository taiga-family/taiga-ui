import {Directive, ElementRef, Inject, Output} from '@angular/core';
import {preventDefault, typedFromEvent} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {isPresent} from '@taiga-ui/cdk/utils/miscellaneous';
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
        @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        this.tuiDroppableDropped = typedFromEvent(nativeElement, `drop`).pipe(
            preventDefault(),
            map(event => event.dataTransfer),
            filter(isPresent),
        );

        this.tuiDroppableDragOverChange = typedFromEvent(nativeElement, `dragenter`).pipe(
            switchMap(({target, dataTransfer}) =>
                merge(
                    typedFromEvent(nativeElement, `dragleave`).pipe(
                        filter(event => event.target === target),
                    ),
                    typedFromEvent(nativeElement, `drop`),
                ).pipe(mapTo(null), startWith(dataTransfer)),
            ),
            distinctUntilChanged((a, b) => (!!a && !!b) || (!a && !b)),
        );

        // Required by Drag and Drop API to stop redirecting
        typedFromEvent(nativeElement, `dragover`)
            .pipe(preventDefault(), takeUntil(destroy$))
            .subscribe();
    }
}
