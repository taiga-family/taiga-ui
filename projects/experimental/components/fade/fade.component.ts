import {
    ChangeDetectionStrategy,
    Component,
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
import {TuiDestroyService, TuiResizeService, tuiZonefree} from '@taiga-ui/cdk';
import {TuiOrientation} from '@taiga-ui/core';
import {fromEvent, merge, Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-fade',
    template: '<ng-content></ng-content>',
    styleUrls: ['./fade.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {characterData: true, subtree: true},
        },
    ],
})
export class TuiFadeComponent {
    @Input()
    @HostBinding('style.--line-height')
    lineHeight = '100%';

    @Input()
    @HostBinding('style.--fade-size')
    size = '1.5em';

    @Input()
    @HostBinding('style.--fade-offset')
    offset = '0em';

    @Input()
    @HostBinding('attr.data-orientation')
    orientation: TuiOrientation = 'horizontal';

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiResizeService) resize$: Observable<unknown>,
        @Inject(MutationObserverService) mutate$: Observable<unknown>,
        @Inject(ElementRef) element: ElementRef<HTMLElement>,
        @Inject(NgZone) zone: NgZone,
    ) {
        const el = element.nativeElement;

        merge(resize$, mutate$, fromEvent(el, 'scroll'))
            .pipe(tuiZonefree(zone), takeUntil(destroy$))
            .subscribe(() => {
                el.classList.toggle('_start', !!el.scrollLeft || !!el.scrollTop);
                el.classList.toggle('_end', this.isEnd(el));
            });
    }

    private isEnd(el: HTMLElement): boolean {
        return (
            el.scrollLeft < el.scrollWidth - el.clientWidth ||
            el.scrollTop < el.scrollHeight - el.clientHeight ||
            (this.orientation === 'horizontal' && el.scrollHeight > el.clientHeight)
        );
    }
}
