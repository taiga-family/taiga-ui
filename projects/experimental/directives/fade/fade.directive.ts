import {
    Directive,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    NgZone,
    Self,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {TuiDestroyService, tuiWithStyles, tuiZonefree} from '@taiga-ui/cdk';
import {TuiOrientation} from '@taiga-ui/core';
import {fromEvent, merge, Observable, takeUntil} from 'rxjs';

import {TuiFadeComponent} from './fade.component';

@Directive({
    selector: '[tuiFade]',
    providers: [
        TuiDestroyService,
        ResizeObserverService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {characterData: true, subtree: true},
        },
    ],
})
export class TuiFadeDirective {
    // TODO: Remove when lh CSS units are supported: https://caniuse.com/mdn-css_types_length_lh
    @Input('tuiFadeHeight')
    @HostBinding('style.line-height')
    @HostBinding('style.--line-height')
    lineHeight: string | null = null;

    @Input('tuiFadeSize')
    @HostBinding('style.--fade-size')
    size = '1.5em';

    @Input('tuiFadeOffset')
    @HostBinding('style.--fade-offset')
    offset = '0em';

    @Input('tuiFade')
    @HostBinding('attr.data-orientation')
    orientation: TuiOrientation | '' = 'horizontal';

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(ResizeObserverService) resize$: Observable<unknown>,
        @Inject(MutationObserverService) mutate$: Observable<unknown>,
        @Inject(ElementRef) element: ElementRef<HTMLElement>,
        @Inject(NgZone) zone: NgZone,
    ) {
        const el = element.nativeElement;

        tuiWithStyles(TuiFadeComponent);
        merge(resize$, mutate$, fromEvent(el, 'scroll'))
            .pipe(tuiZonefree(zone), takeUntil(destroy$))
            .subscribe(() => {
                el.classList.toggle('_start', !!el.scrollLeft || !!el.scrollTop);
                el.classList.toggle('_end', this.isEnd(el));
            });
    }

    private isEnd(el: HTMLElement): boolean {
        return (
            Math.round(el.scrollLeft) < el.scrollWidth - el.clientWidth ||
            Math.round(el.scrollTop) < el.scrollHeight - el.clientHeight ||
            (this.orientation === 'horizontal' && el.scrollHeight > el.clientHeight)
        );
    }
}
