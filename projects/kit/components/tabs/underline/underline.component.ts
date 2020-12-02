import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    NgZone,
    Renderer2,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {
    px,
    TUI_IS_ANDROID,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiDestroyService,
    tuiZonefree,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiModeVariants} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit/tokens';
import {Observable, of, Subject} from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    mapTo,
    switchMap,
    takeUntil,
} from 'rxjs/operators';

@Component({
    selector: 'tui-underline',
    template: '',
    styleUrls: ['./underline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TuiDestroyService, MODE_PROVIDER],
})
export class TuiUnderlineComponent {
    @Input()
    @tuiDefaultProp()
    set element(element: HTMLElement | null) {
        this.element$.next(element);
    }

    @HostBinding('class._ios')
    readonly isIos: boolean;

    @HostBinding('class._android')
    readonly isAndroid: boolean;

    @HostBinding('attr.data-mode')
    mode: TuiModeVariants | null = null;

    private readonly element$ = new Subject<HTMLElement | null>();

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(TuiDestroyService) destroy$: TuiDestroyService,
        @Inject(Renderer2) renderer: Renderer2,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(ANIMATION_FRAME) animationFrame: Observable<number>,
        @Inject(TUI_MOBILE_AWARE) mobileAware: boolean,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(TUI_IS_ANDROID) isAndroid: boolean,
        @Inject(TUI_MODE) mode$: Observable<TuiModeVariants | null>,
    ) {
        this.isIos = mobileAware && isIos;
        this.isAndroid = mobileAware && isAndroid;
        this.element$
            .pipe(
                map(element => element && 'all'),
                distinctUntilChanged(),
                debounceTime(50),
                takeUntil(destroy$),
            )
            .subscribe(transition => {
                renderer.setStyle(nativeElement, 'transition-property', transition);
            });
        this.element$
            .pipe(
                switchMap(element =>
                    element ? animationFrame.pipe(mapTo(element)) : of(null),
                ),
                tuiZonefree(ngZone),
                takeUntil(destroy$),
            )
            .subscribe(element => {
                renderer.setStyle(
                    nativeElement,
                    'width',
                    px(element ? element.clientWidth : 0),
                );
                renderer.setStyle(
                    nativeElement,
                    'transform',
                    element ? `translate3d(${px(element.offsetLeft)}, 0, 0)` : null,
                );
            });
        mode$.subscribe(mode => {
            this.mode = mode;
        });
    }
}
