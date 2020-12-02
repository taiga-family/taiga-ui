import {DOCUMENT} from '@angular/common';
import {
    Directive,
    ElementRef,
    Inject,
    NgZone,
    Renderer2,
    ViewContainerRef,
} from '@angular/core';
import {ANIMATION_FRAME, CSS} from '@ng-web-apis/common';
import {CHAR_ELLIPSIS, TuiDestroyService, tuiZonefree} from '@taiga-ui/cdk';
import {setRangeOffset} from '@taiga-ui/kit/utils/dom';
import {Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {TuiLineClampComponent} from './line-clamp.component';

const HIDDEN_LEFT = -200;

@Directive({
    selector: '[lineClamp]',
    providers: [TuiDestroyService],
})
export class TuiLineClampDirective {
    constructor(
        @Inject(TuiLineClampComponent) component: TuiLineClampComponent,
        @Inject(ViewContainerRef) viewContainerRef: ViewContainerRef,
        @Inject(DOCUMENT) documentRef: Document,
        @Inject(Renderer2) renderer: Renderer2,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(ANIMATION_FRAME) animationFrame$: Observable<number>,
        /**
         * TODO: remove "any" in new TS version; https://github.com/ng-web-apis/common/pull/6
         */
        @Inject(CSS) cssRef: any,
    ) {
        if (
            cssRef.supports('-webkit-line-clamp', '1') ||
            !(nativeElement.parentElement instanceof HTMLElement)
        ) {
            return;
        }

        const range = documentRef.createRange();
        const ellipsis: HTMLElement = renderer.createElement('div');
        const {parentElement} = nativeElement;
        const {style} = ellipsis;

        style.position = 'absolute';
        style.bottom = '0';
        style.left = `${HIDDEN_LEFT}px`;
        ellipsis.textContent = CHAR_ELLIPSIS;

        viewContainerRef.element.nativeElement.appendChild(ellipsis);

        animationFrame$
            .pipe(
                map(() => {
                    // 4px buffer for IE/Edge incorrectly rounding scrollHeight
                    if (
                        component.oneLine ||
                        nativeElement.scrollHeight - parentElement.clientHeight < 4
                    ) {
                        return HIDDEN_LEFT;
                    }

                    let result = 0;
                    const length = nativeElement.textContent
                        ? nativeElement.textContent.length
                        : 0;

                    for (let char = 0; char < length - 2; char++) {
                        setRangeOffset(range, nativeElement, char, 'setStart');
                        setRangeOffset(range, nativeElement, char + 1, 'setEnd');

                        const rangeRect = range.getBoundingClientRect();
                        const clientRect = parentElement.getBoundingClientRect();

                        if (Math.round(rangeRect.top - clientRect.bottom) >= 0) {
                            break;
                        }

                        result = rangeRect.right - clientRect.left;
                    }

                    return result;
                }),
                tuiZonefree(ngZone),
                takeUntil(destroy$),
            )
            .subscribe(left => {
                style.left = `${left}px`;
            });
    }
}
