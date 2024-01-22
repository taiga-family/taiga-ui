import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'tui-swipe-actions',
    templateUrl: './swipe-actions.template.html',
    styleUrls: ['./swipe-actions.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[style.width.px]': 'width',
        '[$.style.--t-swiped]': 'swiped$',
        '($.style.--t-swiped)': '0',
        '(scroll.silent)': 'onScroll($event.target)',
    },
})
export class TuiSwipeActionsComponent {
    @ViewChild('actions', {read: ElementRef})
    actions?: ElementRef<HTMLElement>;

    width = 0;
    readonly swiped$ = new BehaviorSubject(0);

    onScroll(element: HTMLElement): void {
        this.swiped$.next(
            element.scrollLeft / (this.actions?.nativeElement.offsetWidth || 0) - 1,
        );
    }

    onResize(event: ResizeObserverEntry): void {
        this.width = event.contentRect.width;
    }
}
