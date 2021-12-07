import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    Inject,
    Input,
    Optional,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY, tuiDefaultProp, TuiItemDirective, tuiPure} from '@taiga-ui/cdk';
import {Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';

import {TuiCarouselDirective} from './carousel.directive';
import {TuiCarouselDraggableDirective} from './carousel-draggable.directive';

@Component({
    selector: 'tui-carousel',
    templateUrl: 'carousel.template.html',
    styleUrls: ['carousel.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class TuiCarouselComponent {
    @Input()
    @tuiDefaultProp()
    itemsCount = 1;

    @Input()
    @tuiDefaultProp()
    index = 0;

    @Output()
    readonly indexChange = new EventEmitter<number>();

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<any>> = EMPTY_QUERY;

    readonly intersected$ = new Subject<number>();

    readonly manual$ = this.index$.pipe(map(index => this.loopback(index)));

    attached = false;

    constructor(
        @Optional()
        @Inject(TuiCarouselDraggableDirective)
        readonly transform$: Observable<string | null> | null,
        @Inject(TuiCarouselDirective) private readonly index$: Observable<number>,
    ) {}

    @tuiPure
    getStyle(itemsCount: number): Partial<CSSStyleDeclaration> {
        const percent = `${100 / itemsCount}%`;

        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }

    onIntersection(
        {intersectionRatio, intersectionRect, rootBounds}: IntersectionObserverEntry,
        index: number,
    ) {
        if (
            !this.attached ||
            !intersectionRatio ||
            intersectionRatio === 1 ||
            // Phantom intersections due to width wobble on drag
            intersectionRect.left > Number(rootBounds?.left)
        ) {
            return;
        }

        this.indexChange.emit(index - Math.floor(this.itemsCount / 2));
    }

    onPresent(attached: boolean) {
        this.attached = attached;
    }

    private loopback(index: number) {
        const safe = this.items.length || index + 1;
        const remainder = index % safe;

        return remainder < 0 ? remainder + this.items.length : remainder;
    }
}
