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
import {Subject, timer} from 'rxjs';
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
export class TuiTilesComponent<T> {
    private readonly element$ = new Subject<Element | undefined>();

    @Input()
    @tuiDefaultProp()
    debounce = 0;

    @Input()
    @tuiDefaultProp()
    items: readonly T[] = [];

    @Output()
    readonly itemsChange = this.element$.pipe(
        debounce(() => timer(this.debounce)),
        filter(this.filter.bind(this)),
        map(element => this.reorder(element)),
    );

    @HostBinding(`class._dragged`)
    element: Element | null = null;

    constructor(@Inject(ElementRef) private readonly elementRef: ElementRef<Element>) {}

    @HostListener(`pointerleave.silent`)
    rearrange(element?: Element): void {
        this.element$.next(element);
    }

    private filter(element?: Element): element is Element {
        return !!this.element && !!element && this.element !== element;
    }

    private reorder(element: Element): T[] {
        const elements = Array.from(this.elementRef.nativeElement.children);
        const currentIndex = elements.indexOf(this.element || element);
        const newIndex = elements.indexOf(element);
        const items = [...this.items];
        const dragged = items[currentIndex];

        items[currentIndex] = items[newIndex];
        items[newIndex] = dragged;

        return items;
    }
}
