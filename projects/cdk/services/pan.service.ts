import {ElementRef, Inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {merge, Observable} from 'rxjs';
import {filter, map, pairwise, repeat, switchMap, takeUntil} from 'rxjs/operators';

@Injectable()
export class TuiPanService extends Observable<readonly [number, number]> {
    constructor(@Inject(ElementRef) elementRef: ElementRef<Element>) {
        super(subscriber => {
            merge(
                tuiTypedFromEvent(elementRef.nativeElement, `touchstart`, {
                    passive: true,
                }),
                tuiTypedFromEvent(elementRef.nativeElement, `mousedown`),
            )
                .pipe(
                    switchMap(() =>
                        merge(
                            tuiTypedFromEvent(elementRef.nativeElement, `touchmove`, {
                                passive: true,
                            }).pipe(
                                filter(({touches}) => touches.length < 2),
                                map(({touches}) => touches[0]),
                            ),
                            tuiTypedFromEvent(elementRef.nativeElement, `mousemove`),
                        ),
                    ),
                    pairwise(),
                    map(([first, second]) => {
                        const deltaX = second.clientX - first.clientX;
                        const deltaY = second.clientY - first.clientY;

                        return [deltaX, deltaY] as [number, number];
                    }),
                    // eslint-disable-next-line rxjs/no-unsafe-takeuntil
                    takeUntil(
                        merge(
                            tuiTypedFromEvent(elementRef.nativeElement, `touchend`),
                            tuiTypedFromEvent(elementRef.nativeElement, `mouseup`),
                        ),
                    ),
                    repeat(),
                )
                .subscribe(subscriber);
        });
    }
}
