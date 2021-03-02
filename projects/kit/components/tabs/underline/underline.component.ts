import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    NgZone,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {px, TUI_IS_ANDROID, TUI_IS_IOS, tuiDefaultProp, tuiZonefree} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, TuiBrightness} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit/tokens';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {Observable, of, ReplaySubject} from 'rxjs';
import {debounceTime, map, mapTo, share, switchMap} from 'rxjs/operators';

@Component({
    selector: 'tui-underline',
    template: '',
    styleUrls: ['./underline.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [MODE_PROVIDER],
    host: {
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiUnderlineComponent {
    @Input()
    @tuiDefaultProp()
    set element(element: HTMLElement | null) {
        this.element$.next(element);
    }

    @HostBinding('class._ios')
    readonly isIos = this.mobileAware && this.ios;

    @HostBinding('class._android')
    readonly isAndroid = this.mobileAware && this.android;

    private readonly element$ = new ReplaySubject<HTMLElement | null>(1);

    private readonly refresh$ = this.element$.pipe(
        switchMap(element =>
            element ? this.animationFrame$.pipe(mapTo(element)) : of(null),
        ),
        tuiZonefree(this.ngZone),
        share(),
    );

    @HostListener('$.style.transitionProperty')
    readonly transition$ = asCallable(
        this.element$.pipe(
            map(element => element && 'all'),
            debounceTime(50),
        ),
    );

    @HostListener('$.style.transform')
    readonly transform$ = asCallable(
        this.refresh$.pipe(
            map(element =>
                element ? `translate3d(${px(element.offsetLeft)}, 0, 0)` : null,
            ),
        ),
    );

    @HostListener('$.style.width.px')
    readonly width$ = asCallable(
        this.refresh$.pipe(map(element => (element ? element.clientWidth : 0))),
    );

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef,
        @Inject(NgZone) private readonly ngZone: NgZone,
        @Inject(ANIMATION_FRAME) private readonly animationFrame$: Observable<number>,
        @Inject(TUI_MOBILE_AWARE) private readonly mobileAware: boolean,
        @Inject(TUI_IS_IOS) private readonly ios: boolean,
        @Inject(TUI_IS_ANDROID) private readonly android: boolean,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
    ) {
        nativeElement['$.style.transitionProperty'] = this.transition$;
        nativeElement['$.style.transform'] = this.transform$;
        nativeElement['$.style.width.px'] = this.width$;
    }
}
