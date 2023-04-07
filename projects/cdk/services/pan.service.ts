import {DOCUMENT} from '@angular/common';
import {ElementRef, Inject, Injectable} from '@angular/core';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {merge, Observable} from 'rxjs';
import {filter, map, pairwise, repeat, switchMap, takeUntil} from 'rxjs/operators';

@Injectable()
export class TuiPanService extends Observable<readonly [number, number]> {
    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(DOCUMENT) doc: Document,
    ) {
        super(subscriber => {
            merge(
                tuiTypedFromEvent(nativeElement, `touchstart`, {passive: true}),
                tuiTypedFromEvent(nativeElement, `mousedown`),
            )
                .pipe(
                    switchMap(() =>
                        merge(
                            tuiTypedFromEvent(doc, `touchmove`, {
                                passive: true,
                            }).pipe(
                                filter(({touches}) => touches.length < 2),
                                map(({touches}) => touches[0]),
                            ),
                            tuiTypedFromEvent(doc, `mousemove`),
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
                            tuiTypedFromEvent(doc, `touchend`),
                            tuiTypedFromEvent(doc, `mouseup`),
                        ),
                    ),
                    repeat(),
                )
                .subscribe(subscriber);
        });
    }
}
