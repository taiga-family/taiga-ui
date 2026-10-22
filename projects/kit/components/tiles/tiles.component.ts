import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {
    WaMutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {WaResizeObserverService} from '@ng-web-apis/resize-observer';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, debounce, filter, map, Subject, timer} from 'rxjs';

import {TUI_TILES_REORDER} from './tiles.tokens';

@Component({
    standalone: true,
    selector: 'tui-tiles',
    template: '<ng-content />',
    styleUrls: ['./tiles.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        WaResizeObserverService,
        WaMutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {childList: true},
        },
    ],
    host: {
        tuiTilesV: TUI_VERSION,
        '(pointerleave.zoneless)': 'rearrange()',
    },
})
export class TuiTilesComponent {
    private readonly el$ = new Subject<Element | undefined>();
    private readonly handler = inject(TUI_TILES_REORDER);

    @Input()
    public debounce = 0;

    @Output()
    public readonly orderChange = this.el$.pipe(
        debounce(() => timer(this.debounce)),
        filter(this.filter.bind(this)),
        map((element) => this.reorder(element)),
    );

    public readonly element = signal<Element | null>(null);
    public readonly el = tuiInjectElement();

    public readonly order$ = new BehaviorSubject(new Map<number, number>());

    @Input()
    public set order(map: Map<number, number>) {
        this.order$.next(map);
    }

    public get order(): Map<number, number> {
        return this.order$.value;
    }

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
        const order = this.order.size
            ? new Map(this.order)
            : new Map(elements.map((_, index) => [index, index]));

        this.order$.next(
            this.debounce || !this.isSingleLine(elements)
                ? this.handler(order, currentIndex, newIndex)
                : this.move(order, currentIndex, newIndex),
        );

        return this.order$.value;
    }

    private isSingleLine(elements: readonly Element[]): boolean {
        const rects = elements.map((element) => element.getBoundingClientRect());
        const columns = new Set(rects.map(({top}) => Math.round(top))).size;
        const rows = new Set(rects.map(({left}) => Math.round(left))).size;

        return columns === 1 || rows === 1;
    }

    /**
     * In a single line every tile is a neighbour of the previous one, so reorder
     * functions are applied one slot at a time. A fast pointer or a scroll skips
     * tiles, otherwise the skipped ones keep their slots and lose their order.
     * Multi column grids are left as is, a jump there is a regular reorder.
     */
    private move(
        order: Map<number, number>,
        currentIndex: number,
        newIndex: number,
    ): Map<number, number> {
        if (currentIndex < 0 || newIndex < 0) {
            return order;
        }

        let result = order;
        const target = order.get(newIndex) ?? newIndex;

        for (let guard = result.size; guard > 0; guard--) {
            const slot = result.get(currentIndex) ?? currentIndex;
            const step = Math.sign(target - slot);

            if (!step) {
                return result;
            }

            const neighbour = Array.from(result).find(
                ([, value]) => value === slot + step,
            )?.[0];
            const next =
                neighbour === undefined
                    ? result
                    : this.handler(result, currentIndex, neighbour);

            if (next === result) {
                return result;
            }

            result = next;
        }

        return result;
    }
}
