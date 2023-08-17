import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Self,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {merge, Observable} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'tui-text',
    template: '<ng-content></ng-content>',
    styleUrls: ['./text.style.less'],
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
export class TuiTextComponent {
    @Input()
    @HostBinding('style.--line-height')
    lineHeight = '1.5rem';

    @Input()
    @HostBinding('style.--fade-size')
    fadeSize = '1.5em';

    constructor(
        @Self() @Inject(TuiDestroyService) destroy$: Observable<unknown>,
        @Inject(TuiResizeService) resize$: Observable<unknown>,
        @Inject(MutationObserverService) mutate$: Observable<unknown>,
        @Inject(ElementRef) element: ElementRef<HTMLElement>,
    ) {
        const el = element.nativeElement;

        merge(resize$, mutate$)
            .pipe(
                map(
                    () =>
                        el.scrollWidth > el.clientWidth ||
                        el.scrollHeight > el.clientHeight,
                ),
                takeUntil(destroy$),
            )
            .subscribe(overflown => {
                el.classList.toggle('_overflown', overflown);
            });
    }
}
