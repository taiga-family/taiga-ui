import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    Inject,
    Input,
    Output,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {EMPTY_QUERY, tuiDefaultProp, TuiItemDirective, tuiPure} from '@taiga-ui/cdk';
import {merge, Observable, Subject} from 'rxjs';
import {distinctUntilChanged, map, share} from 'rxjs/operators';

import {TuiCarouselDirective} from './carousel.directive';

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
    readonly intersected$ = new Subject<number>();

    @Input()
    @tuiDefaultProp()
    itemsCount = 1;

    @Input()
    @tuiDefaultProp()
    index = 0;

    @Output()
    readonly indexChange = merge(
        this.intersected$,
        this.directive.pipe(map(index => index % this.items.length || 0)),
    ).pipe(share(), distinctUntilChanged());

    @ContentChildren(TuiItemDirective, {read: TemplateRef})
    readonly items: QueryList<TemplateRef<any>> = EMPTY_QUERY;

    constructor(@Inject(TuiCarouselDirective) readonly directive: Observable<number>) {}

    @tuiPure
    getStyle(itemsCount: number): Partial<CSSStyleDeclaration> {
        const percent = `${100 / itemsCount}%`;

        return {
            flexBasis: percent,
            minWidth: percent,
            maxWidth: percent,
        };
    }

    onIntersection([{intersectionRatio}]: IntersectionObserverEntry[], index: number) {
        if (intersectionRatio && intersectionRatio !== 1) {
            this.intersected$.next(index);
        }
    }
}
