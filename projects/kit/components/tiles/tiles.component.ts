import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    model,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {debounce, filter, map, Subject, timer} from 'rxjs';

import {TUI_TILES_REORDER} from './tiles.tokens';

@Component({
    selector: 'tui-tiles',
    template: '<ng-content />',
    styleUrl: './tiles.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        ResizeObserverService,
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {childList: true},
        },
    ],
    host: {'(pointerleave.zoneless)': 'rearrange()'},
})
export class TuiTilesComponent {
    private readonly el$ = new Subject<Element | undefined>();
    private readonly handler = inject(TUI_TILES_REORDER);

    protected readonly sub = this.el$
        .pipe(
            debounce(() => timer(this.debounce())),
            filter(this.filter.bind(this)),
            map((element) => this.reorder(element)),
            takeUntilDestroyed(),
        )
        .subscribe((order) => this.order.set(order));

    public readonly debounce = input(0);
    public readonly order = model(new Map<number, number>());

    public readonly element = signal<Element | null>(null);
    public readonly el = tuiInjectElement();

    public rearrange(element?: Element): void {
        this.el$.next(element);
    }

    private filter(element?: Element): element is Element {
        return !!this.element() && !!element && this.element() !== element;
    }

    private reorder(element: Element): Map<number, number> {
        const elements = Array.from(this.el.children);
        const currentIndex = elements.indexOf(this.element() || element);
        const newIndex = elements.indexOf(element);
        const order = this.order().size
            ? new Map(this.order())
            : new Map(elements.map((_, index) => [index, index]));

        return this.handler(order, currentIndex, newIndex);
    }
}
