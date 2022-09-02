import type {OnDestroy} from '@angular/core';
import {Directive, ElementRef, HostListener, Inject, Output} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {tuiIsCurrentTarget, tuiIsFirefox} from '@taiga-ui/cdk';
import {BehaviorSubject} from 'rxjs';
import {distinctUntilChanged, skip} from 'rxjs/operators';

@Directive({
    selector: `[tuiPresentChange]`,
    host: {
        '[style.animation]': `"tuiPresent 1s infinite"`,
    },
})
export class TuiPresentDirective implements OnDestroy {
    private readonly visibility$ = new BehaviorSubject(false);

    @Output()
    readonly tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(USER_AGENT) userAgent: string,
    ) {
        if (tuiIsFirefox(userAgent)) {
            return;
        }

        const observer = new MutationObserver(() => {
            if (
                !nativeElement.offsetParent &&
                nativeElement.offsetWidth === 0 &&
                nativeElement.offsetHeight === 0
            ) {
                this.visibility$.next(false);
            }
        });

        observer.observe(nativeElement, {
            attributes: true,
            attributeFilter: [`style`, `class`],
        });
    }

    /**
     * Someday animationcancel would work and mutation observer would not be needed:
     * https://drafts.csswg.org/css-animations/#eventdef-animationevent-animationcancel
     * It would also trigger on CSS like display: none on parent nodes which is awesome
     * but currently only works in Firefox
     * ___
     * TODO: remove MutationObserver when we bump versions of supported browsers:
     *** Safari 12+
     *** Chrome 83+
     * See: {@link https://caniuse.com/mdn-api_window_animationcancel_event}
     */
    @HostListener(`animationcancel`, [`$event`, `false`])
    @HostListener(`animationstart`, [`$event`, `true`])
    onAnimation(event: Event, visibility: boolean): void {
        if (tuiIsCurrentTarget(event)) {
            this.visibility$.next(visibility);
        }
    }

    ngOnDestroy(): void {
        this.visibility$.next(false);
    }
}
