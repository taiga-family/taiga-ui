import {
    Directive,
    ElementRef,
    HostListener,
    inject,
    OnDestroy,
    Output,
} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {tuiIsFirefox} from '@taiga-ui/cdk';
import {BehaviorSubject, distinctUntilChanged, skip} from 'rxjs';

@Directive({
    selector: '[tuiPresentChange]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
    },
})
export class TuiPresentDirective implements OnDestroy {
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly userAgent = inject(USER_AGENT);

    private readonly visibility$ = new BehaviorSubject(false);

    @Output()
    readonly tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));

    constructor() {
        if (tuiIsFirefox(this.userAgent)) {
            return;
        }

        const observer = new MutationObserver(() => {
            if (
                !this.el.offsetParent &&
                this.el.offsetWidth === 0 &&
                this.el.offsetHeight === 0
            ) {
                this.visibility$.next(false);
            }
        });

        observer.observe(this.el, {
            attributes: true,
            attributeFilter: ['style', 'class'],
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
    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    onAnimation(visibility: boolean): void {
        this.visibility$.next(visibility);
    }

    ngOnDestroy(): void {
        this.visibility$.next(false);
    }
}
