import {
    type AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    ContentChildren,
    DestroyRef,
    inject,
    type QueryList,
    type Signal,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {EMPTY_QUERY, TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiMoveFocus} from '@taiga-ui/cdk/utils/focus';
import {
    tuiAsDataListAccessor,
    type TuiDataListAccessor,
    TuiOptionWithValue,
} from '@taiga-ui/core/components/data-list';
import {TUI_SCROLL_REF} from '@taiga-ui/core/tokens';

import {TuiIconGroup} from './icon-group.component';
import {TUI_ICON_LIST_OPTIONS} from './icon-list.options';

const OPTION = '[role="option"]';

/**
 * Lays projected options out in a grid and owns nothing else — no data, no
 * selection, no search. Group them with {@link TuiIconGroup} or don't; filter
 * and pick in your own code.
 *
 * Stack `tuiOption` with a `[value]` onto the cells and it doubles as a
 * grid-shaped data list: it then reports those values as its options, which is
 * all `tuiComboBox` and friends need to match against. Cells without a value
 * cost nothing and simply do not appear there.
 *
 * Deliberately not virtualized: windowing projected content would mean owning
 * the data, which is the whole point of not doing so here.
 */
@Component({
    standalone: true,
    selector: 'tui-icon-list',
    template: '<ng-content />',
    styleUrls: ['./icon-list.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'tuiIconList',
    providers: [tuiAsDataListAccessor(TuiIconList)],
    host: {
        tuiIconListV: TUI_VERSION,
        role: 'listbox',
        '[style.--t-columns]': 'columns',
        '(keydown.arrowRight.prevent)': 'onArrow($event.target, 1)',
        '(keydown.arrowLeft.prevent)': 'onArrow($event.target, -1)',
        '(keydown.arrowDown.prevent)': 'onArrow($event.target, columns)',
        '(keydown.arrowUp.prevent)': 'onArrow($event.target, -columns)',
        '(keydown.home.prevent)': 'onEdge($event.target, false)',
        '(keydown.end.prevent)': 'onEdge($event.target, true)',
        '(focusin)': 'onFocusIn($event.target)',
    },
})
export class TuiIconList<T = unknown>
    implements TuiDataListAccessor<T>, AfterContentInit
{
    @ContentChildren(TuiOptionWithValue, {descendants: true})
    private readonly valued: QueryList<TuiOptionWithValue<T>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private readonly scroll = inject(TUI_SCROLL_REF);
    private readonly destroyRef = inject(DestroyRef);
    private readonly collected = signal<ReadonlyArray<TuiOptionWithValue<T>>>([]);

    protected readonly columns = inject(TUI_ICON_LIST_OPTIONS).columns;

    @ContentChildren(TuiIconGroup)
    public readonly groups: QueryList<TuiIconGroup> = EMPTY_QUERY;

    /**
     * Values of the cells that carry `tuiOption [value]`, empty when nobody
     * asked for data-list semantics.
     */
    public readonly options: Signal<readonly T[]> = computed(() =>
        this.collected()
            .map((option) => option.value())
            .filter((value): value is T => value !== undefined),
    );

    // TODO(v5): drop once TuiDataListAccessor stops requiring it
    public getOptions(): readonly T[] {
        return this.options();
    }

    public ngAfterContentInit(): void {
        this.recollect();
        this.valued.changes
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.recollect());

        this.update();
        // A search that drops groups shifts everything below, so recount
        this.groups.changes
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.update());
        tuiTypedFromEvent(this.scroll.nativeElement, 'scroll')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => this.update());
    }

    /**
     * Roving tabindex: exactly one cell is tabbable, and it follows focus.
     */
    protected onFocusIn(target: HTMLElement): void {
        if (target.matches(OPTION)) {
            this.cells.forEach((cell) => {
                cell.tabIndex = cell === target ? 0 : -1;
            });
        }
    }

    protected onArrow(target: EventTarget | null, step: number): void {
        const cells = this.cells;
        const index = cells.indexOf(target as HTMLElement);

        if (index < 0) {
            // Arrived from outside the grid, e.g. a search field
            cells[0]?.focus();
        } else {
            tuiMoveFocus(index, cells, step);
        }
    }

    protected onEdge(target: EventTarget | null, last: boolean): void {
        const group = (target as Element | null)?.closest?.('tui-icon-group') ?? this.el;
        const cells = Array.from(group.querySelectorAll<HTMLElement>(OPTION));

        (last ? cells[cells.length - 1] : cells[0])?.focus();
    }

    private get cells(): readonly HTMLElement[] {
        return Array.from(this.el.querySelectorAll<HTMLElement>(OPTION));
    }

    private recollect(): void {
        this.collected.set(this.valued.toArray());
    }

    /**
     * Marks the group currently under the top edge, so tabs can follow a manual
     * scroll instead of pointing at whatever was clicked last.
     */
    private update(): void {
        const groups = this.groups.toArray();
        const active = this.findActive(groups);

        groups.forEach((group, index) => group.active.set(index === active));
    }

    private findActive(groups: readonly TuiIconGroup[]): number {
        const {scrollTop, clientHeight, scrollHeight} = this.scroll.nativeElement;

        /**
         * Not scrolled means the first group, whatever the geometry says: in a
         * dropdown this first runs before the panel is laid out, when every size
         * is zero and would otherwise read as the bottom.
         */
        if (scrollTop <= 0) {
            return 0;
        }

        // The last group is usually too short to ever reach the top edge
        if (scrollTop + clientHeight >= scrollHeight - 1) {
            return groups.length - 1;
        }

        const next = groups.findIndex(({offset}) => offset > 1);

        return Math.max((next < 0 ? groups.length : next) - 1, 0);
    }
}
