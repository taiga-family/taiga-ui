import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {animationFrameScheduler, Subject} from 'rxjs';
import {map, throttleTime} from 'rxjs/operators';

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
    private readonly swiped$$ = new Subject<HTMLElement>();

    @ViewChild('actions', {read: ElementRef})
    actions?: ElementRef<HTMLElement>;

    width = 0;
    swiped$ = this.swiped$$.pipe(
        throttleTime(0, animationFrameScheduler),
        map(el => el.scrollLeft / (this.actions?.nativeElement.offsetWidth || 0) - 1),
    );

    onScroll(element: HTMLElement): void {
        this.swiped$$.next(element);
    }

    onResize(event: ResizeObserverEntry): void {
        this.width = event.contentRect.width;
    }
}
