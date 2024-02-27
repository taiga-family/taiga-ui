import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostListener,
    inject,
    Input,
    NgZone,
} from '@angular/core';
import {ANIMATION_FRAME} from '@ng-web-apis/common';
import {tuiZonefree} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE} from '@taiga-ui/core';
import {asCallable} from '@tinkoff/ng-event-plugins';
import {debounceTime, map, of, ReplaySubject, share, switchMap} from 'rxjs';

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
    private readonly el$ = new ReplaySubject<HTMLElement | null>(1);
    private readonly animationFrame$ = inject(ANIMATION_FRAME);
    private readonly zone = inject(NgZone);
    private readonly el: Element = inject(ElementRef).nativeElement;
    private readonly refresh$ = this.el$.pipe(
        switchMap(element =>
            element
                ? this.animationFrame$.pipe(
                      map(() => element),
                      tuiZonefree(this.zone),
                  )
                : of(null),
        ),
        share(),
    );

    @Input()
    public set element(element: HTMLElement | null) {
        this.el$.next(element);
    }

    @HostListener('$.style.transitionProperty')
    protected readonly transition$ = asCallable(
        this.el$.pipe(
            map(element => element && 'all'),
            debounceTime(50),
        ),
    );

    @HostListener('$.style.transform')
    protected readonly transform$ = asCallable(
        this.refresh$.pipe(
            map(element =>
                element ? `translate3d(${element.offsetLeft}px, 0, 0)` : null,
            ),
        ),
    );

    @HostListener('$.style.width.px')
    protected readonly width$ = asCallable(
        this.refresh$.pipe(map(element => element?.clientWidth || 0)),
    );

    protected readonly mode$ = inject(TUI_MODE);

    constructor() {
        (this.el as any)['$.style.transitionProperty'] = this.transition$;
        (this.el as any)['$.style.transform'] = this.transform$;
        (this.el as any)['$.style.width.px'] = this.width$;
    }
}
