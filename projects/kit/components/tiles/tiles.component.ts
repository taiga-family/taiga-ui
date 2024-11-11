import {
    ChangeDetectionStrategy,
    Component,
    Input,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {ResizeObserverService} from '@ng-web-apis/resize-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {BehaviorSubject, debounce, filter, map, Subject, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-tiles',
    template: '<ng-content></ng-content>',
    styleUrls: ['./tiles.style.less'],
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
    host: {
        '[class._dragged]': 'element()',
        '(pointerleave.silent)': 'rearrange()',
    },
})
export class TuiTilesComponent {
    private readonly el = tuiInjectElement();
    private readonly el$ = new Subject<Element | undefined>();

    @Input()
    public debounce = 0;

    @Output()
    public readonly orderChange = this.el$.pipe(
        debounce(() => timer(this.debounce)),
        filter(this.filter.bind(this)),
        map((element) => this.reorder(element)),
    );

    public element = signal<Element | null>(null);

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
        const dragged = order.get(currentIndex) ?? currentIndex;
        const placement = order.get(newIndex) ?? newIndex;

        order.set(currentIndex, placement);
        order.set(newIndex, dragged);

        this.order$.next(order);

        return order;
    }
}
