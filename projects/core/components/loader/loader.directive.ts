import {Directive, ElementRef, Inject, NgZone} from '@angular/core';
import {ANIMATION_FRAME, USER_AGENT} from '@ng-web-apis/common';
import {isEdgeOlderThan, isIE, TuiDestroyService, tuiZonefree} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {pairwise, takeUntil} from 'rxjs/operators';

const PERIMETER = 314;
const COEFFICIENT = 1.5;

@Directive({
    selector: 'circle',
    providers: [TuiDestroyService],
})
export class TuiLoaderDirective {
    private strokeDasharray = PERIMETER;

    private strokeDashoffset = 0;

    constructor(
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
        @Inject(ElementRef) private readonly elementRef: ElementRef<SVGCircleElement>,
        @Inject(USER_AGENT) userAgent: string,
    ) {
        if (!isEdgeOlderThan(17, userAgent) && !isIE(userAgent)) {
            return;
        }

        animationFrame$
            .pipe(tuiZonefree(ngZone), pairwise(), takeUntil(destroy$))
            .subscribe(([cur, prev]) => {
                this.animate(prev - cur);
            });
    }

    private animate(delta: number) {
        if (this.strokeDasharray < 0) {
            this.strokeDasharray = PERIMETER * 2;
            this.strokeDashoffset = 0;
        }

        const strokeDasharray = Math.abs(this.strokeDasharray - PERIMETER);
        const fps = 1000 / delta;
        const offsetStep = 1 + Math.floor(this.strokeDasharray / PERIMETER);
        const {style} = this.elementRef.nativeElement;

        style.strokeDashoffset = this.strokeDashoffset.toString();
        style.strokeDasharray = PERIMETER - strokeDasharray + ' ' + strokeDasharray;

        this.strokeDasharray -= PERIMETER / COEFFICIENT / fps;
        this.strokeDashoffset += (offsetStep * PERIMETER) / COEFFICIENT / fps;
        // this.elementRef.nativeElement.parentElement!.style.animation = 'none';
    }
}
