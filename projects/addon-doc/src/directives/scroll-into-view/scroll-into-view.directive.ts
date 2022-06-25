import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {getElementObscurers, TuiDestroyService} from '@taiga-ui/cdk';
import {Subject} from 'rxjs';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';

/**
 * @deprecated: use {@link TuiScrollIntoViewLinkDirective}
 * TODO: remove in v3.0
 */
@Directive({
    selector: '[scrollIntoView]',
    providers: [TuiDestroyService],
})
// eslint-disable-next-line @typescript-eslint/naming-convention
export class ScrollIntoViewDirective {
    @Input()
    set scrollIntoView(shallWe: boolean) {
        this.scroll$.next(shallWe);
    }

    private readonly scroll$ = new Subject<boolean>();

    constructor(
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
    ) {
        this.scroll$
            .pipe(
                debounceTime(750),
                filter(shallWe => shallWe && !!getElementObscurers(nativeElement)),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                nativeElement.scrollIntoView();
            });
    }
}

@Directive({
    selector: '[tuiScrollIntoViewLink]',
    providers: [TuiDestroyService],
})
export class TuiScrollIntoViewLinkDirective extends ScrollIntoViewDirective {}
