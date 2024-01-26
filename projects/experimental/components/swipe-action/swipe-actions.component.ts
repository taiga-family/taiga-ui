import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Inject,
    Optional,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import {TuiSwipeActionsOpenDirective} from '@taiga-ui/experimental/components';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.--t-actions-width]': 'actionsWidth',
        '[style.--t-content-width]': 'contentWidth',
    },
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class TuiSwipeActionsComponent {
    actionsWidth = 0;
    contentWidth = 0;

    constructor(
        @Inject(ElementRef) private readonly elementRef: ElementRef<HTMLElement>,
        @Optional()
        @Inject(TuiSwipeActionsOpenDirective)
        private readonly open?: TuiSwipeActionsOpenDirective,
    ) {}

    onResizeContent({target}: ResizeObserverEntry): void {
        this.contentWidth = target.clientWidth;
        this.actionsWidth =
            this.elementRef.nativeElement.scrollWidth - target.clientWidth;
    }

    onIntersection({isIntersecting}: IntersectionObserverEntry): void {
        this.open?.update(isIntersecting);
    }
}
