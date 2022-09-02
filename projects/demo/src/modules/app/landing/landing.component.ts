import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    HostBinding,
    QueryList,
    ViewChildren,
} from '@angular/core';
import {INTERSECTION_ROOT} from '@ng-web-apis/intersection-observer';
import type {TuiDay} from '@taiga-ui/cdk';
import {EMPTY_QUERY} from '@taiga-ui/cdk';

@Component({
    selector: `landing`,
    templateUrl: `./landing.template.html`,
    styleUrls: [`./landing.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: INTERSECTION_ROOT,
            useExisting: ElementRef,
        },
    ],
})
export class LandingComponent {
    @ViewChildren(`block`, {read: ElementRef})
    private readonly blocks: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    current = 0;

    tags = [`Angular`, `Open source`];

    date: TuiDay | null = null;

    readonly labels = [`New`, `Read`, `Archived`, `Junk`];

    @HostBinding(`style.background`)
    get background(): string {
        return this.current ? `#5f6ed0` : `#3dc67c`;
    }

    onIntersection([{isIntersecting}]: IntersectionObserverEntry[], index: number): void {
        if (isIntersecting) {
            this.current = index;
        }
    }

    onDay(date: TuiDay): void {
        this.date = date;
    }

    onClick(): void {
        this.blocks.forEach(({nativeElement}, index) => {
            if (index === this.current + 1) {
                nativeElement.scrollIntoView();
            }
        });
    }
}
