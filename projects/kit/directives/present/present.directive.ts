import {
    Directive,
    ElementRef,
    HostListener,
    Inject,
    OnDestroy,
    Output,
} from '@angular/core';
import {USER_AGENT} from '@ng-web-apis/common';
import {isCurrentTarget, isFirefox, TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, skip, startWith} from 'rxjs/operators';

const STYLE = `
@keyframes tuiPresent {
    from {
        content: '1';
    }

    to {
        content: '2';
    }
}

.tui-present {
    animation: tuiPresent 1000s infinite;
}`;

@Directive({
    selector: '[tuiPresentChange]',
    host: {
        class: 'tui-present',
    },
})
export class TuiPresentDirective implements OnDestroy {
    @Output()
    readonly tuiPresentChange: Observable<boolean>;

    private readonly visibility$ = new Subject<boolean>();

    private readonly observer?: MutationObserver;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
        @Inject(USER_AGENT) userAgent: string,
    ) {
        directiveStyles.addStyle(STYLE, 'TuiPresentDirective');

        this.tuiPresentChange = this.visibility$.pipe(
            startWith(false),
            distinctUntilChanged(),
            skip(1),
        );

        if (isFirefox(userAgent)) {
            return;
        }

        this.observer = new MutationObserver(() => {
            if (
                !nativeElement.offsetParent &&
                nativeElement.offsetWidth === 0 &&
                nativeElement.offsetHeight === 0
            ) {
                this.visibility$.next(false);
            }
        });

        this.observer.observe(nativeElement, {
            attributes: true,
            attributeFilter: ['style', 'class'],
        });
    }

    /**
     * Someday animationcancel would work and mutation observer would not be needed:
     * https://drafts.csswg.org/css-animations/#eventdef-animationevent-animationcancel
     * It would also trigger on CSS like display: none on parent nodes which is awesome
     * but currently only works in Firefox
     */
    @HostListener('animationcancel', ['$event', 'false'])
    @HostListener('animationstart', ['$event', 'true'])
    onAnimation(event: Event, visibility: boolean) {
        if (isCurrentTarget(event)) {
            this.visibility$.next(visibility);
        }
    }

    ngOnDestroy() {
        this.visibility$.next(false);
    }
}
