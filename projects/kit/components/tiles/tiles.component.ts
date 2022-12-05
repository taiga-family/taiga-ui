import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {tuiDefaultProp, TuiDestroyService, TuiResizeService} from '@taiga-ui/cdk';
import {BehaviorSubject, Subject, timer} from 'rxjs';
import {debounce, filter, map} from 'rxjs/operators';

@Component({
    selector: `tui-tiles`,
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: [`tiles.style.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiDestroyService,
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {childList: true},
        },
    ],
})
export class TuiTilesComponent {
    private readonly element$ = new Subject<Element | undefined>();

    @Input()
    @tuiDefaultProp()
    debounce = 0;

    @Input()
    @tuiDefaultProp()
    set order(map: Map<number, number>) {
        this.order$.next(map);
    }

    get order(): Map<number, number> {
        return this.order$.value;
    }

    @Output()
    readonly orderChange = this.element$.pipe(
        debounce(() => timer(this.debounce)),
        filter(this.filter.bind(this)),
        map(element => this.reorder(element)),
    );

    @HostBinding(`class._dragged`)
    element: Element | null = null;

    readonly order$ = new BehaviorSubject(new Map<number, number>());

    constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<Element>) {}

    @HostListener(`pointerleave.silent`)
    rearrange(element?: Element): void {
        this.element$.next(element);
    }

    private filter(element?: Element): element is Element {
        return !!this.element && !!element && this.element !== element;
    }

    private reorder(element: Element): Map<number, number> {
        const elements = Array.from(this.elementRef.nativeElement.children);
        const currentIndex = elements.indexOf(this.element || element);
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
