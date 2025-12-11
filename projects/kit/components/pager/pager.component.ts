import {NgTemplateOutlet} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    type ElementRef,
    inject,
    input,
    type OnChanges,
    signal,
    type TemplateRef,
    viewChildren,
} from '@angular/core';
import {takeUntilDestroyed, toSignal} from '@angular/core/rxjs-interop';
import {
    MutationObserverService,
    WA_MUTATION_OBSERVER_INIT,
} from '@ng-web-apis/mutation-observer';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {type TuiSizeS} from '@taiga-ui/core/types';
import {delay, map} from 'rxjs';

@Component({
    selector: 'tui-pager',
    imports: [NgTemplateOutlet],
    templateUrl: './pager.component.html',
    styleUrl: './pager.styles.less',
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
        '[attr.data-size]': 'size()',
        '[style.--t-gap.px]': 'gap()',
        '[style.max-width.px]': 'maxWidth()',
    },
})
export class TuiPager implements OnChanges, AfterViewInit {
    protected readonly items = viewChildren<ElementRef<HTMLElement>>('item');
    protected readonly start = signal(0);
    protected readonly end = signal(0);
    protected readonly left = signal(0);
    protected readonly gap = computed(() => (this.size() === 'm' ? 9 : 7));
    protected readonly maxWidth = toSignal(
        inject(MutationObserverService, {self: true}).pipe(
            delay(0),
            map(() => this.visibleWidth),
            tuiWatch(),
            takeUntilDestroyed(),
        ),
        {initialValue: 0},
    );

    public readonly max = input(6);
    public readonly count = input(6);
    public readonly size = input<TuiSizeS>('m');
    public readonly valueContent = input<TemplateRef<unknown>>();
    public readonly index = input(0);

    public ngOnChanges(): void {
        this.move();
    }

    public ngAfterViewInit(): void {
        this.move();
    }

    private get visibleRange(): [start: number, end: number] {
        const max = this.max() > this.count() ? this.count() : this.max();
        const start = Math.min(
            Math.max(this.index() - Math.floor(max / 2), 0),
            this.count() - max,
        );

        return [start, start + (max - 1)];
    }

    private get visibleWidth(): number {
        return (
            this.items()
                .map((item) => item.nativeElement.offsetWidth)
                .slice(this.start(), this.end() + 1)
                .reduce((sum, item) => sum + item + this.gap(), 0) - this.gap()
        );
    }

    private move(): void {
        const [start, end] = this.visibleRange;

        this.start.set(start);
        this.end.set(end);

        let left = this.start() * this.gap();

        for (let i = 0; i < this.start(); i++) {
            left += this.items()[i]?.nativeElement.offsetWidth ?? 0;
        }

        this.left.set(-1 * left);
    }
}
