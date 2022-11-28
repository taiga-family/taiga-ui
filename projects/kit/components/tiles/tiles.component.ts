import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    Inject,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {tuiDefaultProp, TuiResizeService} from '@taiga-ui/cdk';

@Component({
    selector: `tui-tiles`,
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: [`tiles.style.less`],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        TuiResizeService,
        MutationObserverService,
        {
            provide: MUTATION_OBSERVER_INIT,
            useValue: {childList: true},
        },
    ],
})
export class TuiTilesComponent<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[] = [];

    @Output()
    readonly itemsChange = new EventEmitter<T[]>();

    @HostBinding(`class._dragged`)
    element: Element | null = null;

    constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<Element>) {}

    reorder(element: Element): void {
        if (!this.element || this.element === element) {
            return;
        }

        const elements = Array.from(this.elementRef.nativeElement.children);
        const currentIndex = elements.indexOf(this.element);
        const newIndex = elements.indexOf(element);
        const items = [...this.items];
        const dragged = items[currentIndex];

        items[currentIndex] = items[newIndex];
        items[newIndex] = dragged;

        this.itemsChange.emit(items);
    }
}
