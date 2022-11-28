import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    HostBinding,
    Input,
    Output,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import {
    MUTATION_OBSERVER_INIT,
    MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import {EMPTY_QUERY, tuiDefaultProp, TuiResizeService} from '@taiga-ui/cdk';

import {TuiTileComponent} from './tile.component';

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
    @ContentChildren(TuiTileComponent, {read: ElementRef})
    private readonly elements: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    @Input()
    @tuiDefaultProp()
    items: readonly T[] = [];

    @Output()
    readonly itemsChange = new EventEmitter<T[]>();

    @HostBinding(`class._dragged`)
    element: HTMLElement | null = null;

    reorder(element: HTMLElement): void {
        if (!this.element || this.element === element) {
            return;
        }

        const elements = this.elements.map(e => e.nativeElement);
        const currentIndex = elements.indexOf(this.element);
        const newIndex = elements.indexOf(element);
        const items = [...this.items];
        const dragged = items[currentIndex];

        items[currentIndex] = items[newIndex];
        items[newIndex] = dragged;

        this.itemsChange.emit(items);
    }
}
