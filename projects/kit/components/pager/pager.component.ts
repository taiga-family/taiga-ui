import {NgTemplateOutlet} from '@angular/common';
import type {
    AfterViewInit,
    ElementRef,
    OnChanges,
    QueryList,
    TemplateRef,
} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    signal,
    ViewChildren,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {tuiWatch} from '@taiga-ui/cdk';
import {TuiRepeatTimes} from '@taiga-ui/cdk/directives/repeat-times';
import {delay, map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-pager',
    imports: [FormsModule, NgTemplateOutlet, TuiRepeatTimes],
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        MutationObserverService,
        {
            provide: WA_MUTATION_OBSERVER_INIT,
            useValue: {
                attributeOldValue: true,
                characterData: true,
                childList: true,
                subtree: true,
            },
        },
    ],
    host: {
        '[style.--t-gap.px]': 'gap',
        '[style.max-width.px]': 'maxWidth()',
    },
})
export class TuiPager implements OnChanges, AfterViewInit {
    @ViewChildren('item')
    protected items?: QueryList<ElementRef<HTMLElement>>;

    protected start = 0;
    protected end = 0;
    protected left = signal(0);
    protected readonly maxWidth = toSignal(
        inject(MutationObserverService, {self: true}).pipe(
            delay(0),
            map(() => this.calculateVisibleWidth()),
            tuiWatch(),
            takeUntilDestroyed(),
        ),
    );

    @Input()
    public max = 6;

    @Input()
    public gap = 8;

    @Input()
    public length = this.max;

    @Input()
    public template?: TemplateRef<unknown>;

    @Input()
    public index = 0;

    public ngOnChanges(): void {
        this.move();
    }

    public ngAfterViewInit(): void {
        this.move();
    }

    private getVisibleRange(): [start: number, end: number] {
        const start = Math.min(
            Math.max(this.index - Math.floor(this.max / 2), 0),
            this.length - this.max,
        );

        return [start, start + (this.max - 1)];
    }

    private move(): void {
        const [start, end] = this.getVisibleRange();

        this.start = start;
        this.end = end;

        let left = this.start * this.gap;

        for (let i = 0; i < this.start; i++) {
            left += this.items?.get(i)?.nativeElement.offsetWidth ?? 0;
        }

        this.left.set(-1 * left);
    }

    private calculateVisibleWidth(): number {
        return (
            (this.items?.map((item) => item.nativeElement.offsetWidth ?? 0) ?? [])
                .slice(this.start, this.end + 1)
                .reduce((sum, item) => sum + item + this.gap, 0) - this.gap
        );
    }
}
