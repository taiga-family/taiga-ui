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

import {TUI_TILES_REORDER, tuiTilesSwap} from './tiles.tokens';

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
    private readonly stepwise = this.handler === tuiTilesSwap;

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
            this.debounce || !this.stepwise || !this.isSingleLine(elements)
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

    private move(
        order: Map<number, number>,
        currentIndex: number,
        newIndex: number,
    ): Map<number, number> {
        const from = order.get(currentIndex);
        const to = order.get(newIndex);

        if (from === undefined || to === undefined) {
            return order;
        }

        const step = Math.sign(to - from);
        const shifted = Array.from(order)
            .filter(([, slot]) => (slot - from) * step > 0 && (slot - to) * step <= 0)
            .sort(([, a], [, b]) => (a - b) * step);

        const result = new Map(order);
        let previous = from;

        for (const [index, slot] of shifted) {
            result.set(index, previous);
            previous = slot;
        }

        return result.set(currentIndex, to);
    }
}
