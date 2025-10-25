import {
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    linkedSignal,
    model,
} from '@angular/core';
import {TUI_TABLE_SHOW_HIDE_MESSAGE} from '@taiga-ui/addon-table/tokens';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_TILES_REORDER, TuiTiles, tuiTilesShift} from '@taiga-ui/kit/components/tiles';
import {type PolymorpheusContent, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TUI_REORDER_OPTIONS} from './reorder.options';

@Component({
    selector: 'tui-reorder',
    imports: [PolymorpheusOutlet, TuiButton, TuiIcon, TuiTiles],
    templateUrl: './reorder.template.html',
    styleUrl: './reorder.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_TILES_REORDER,
            useValue: tuiTilesShift,
        },
    ],
    host: {
        '(focusout.stop)': '(0)',
        '(pointerdown.zoneless)': 'onDrag()',
        '(document:pointerup.zoneless)': 'onDrop()',
    },
})
export class TuiReorder<T> {
    private dragging = false;

    protected order = new Map<number, number>();
    protected readonly unsortedItems = linkedSignal<readonly T[], readonly T[]>({
        source: () => this.items(),
        computation: (items, previous) => {
            const previousUnsortedItems = previous?.value ?? [];

            if (
                items.length !== previousUnsortedItems.length ||
                !items.every((item) => previousUnsortedItems.includes(item))
            ) {
                return items;
            }

            return previousUnsortedItems;
        },
    });

    protected readonly options = inject(TUI_REORDER_OPTIONS);
    protected readonly showHideText = inject(TUI_TABLE_SHOW_HIDE_MESSAGE);

    public readonly enabled = model<readonly T[]>([]);

    public readonly items = model<readonly T[]>([]);

    public readonly content = input<PolymorpheusContent<TuiContext<T> & {index: number}>>(
        ({$implicit}) => String($implicit),
    );

    protected onDrag(): void {
        this.dragging = true;
    }

    protected onDrop(): void {
        if (!this.dragging) {
            return;
        }

        this.dragging = false;
        this.updateItems();
    }

    protected isEnabled(item: T): boolean {
        return this.enabled().includes(item);
    }

    protected getIcon(item: T): string {
        return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
    }

    protected toggle(toggled: T): void {
        this.enabled.update((enabled) =>
            this.isEnabled(toggled)
                ? enabled.filter((item) => item !== toggled)
                : enabled.concat(toggled),
        );

        this.updateEnabled();
    }

    protected move(index: number, direction: number): void {
        const oldIndex = this.order.get(index) ?? index;

        if (
            (!oldIndex && direction < 0) ||
            (oldIndex === this.unsortedItems().length - 1 && direction > 0)
        ) {
            return;
        }

        const newIndex = oldIndex + direction;
        const oldItem = Array.from(this.order.values()).findIndex(
            (item) => item === newIndex,
        );

        this.order.set(index, newIndex);
        this.order.set(oldItem, oldIndex);
        this.order = new Map(this.order);

        this.updateItems();
    }

    private getSortedItems(): T[] {
        const items = new Array(this.unsortedItems().length);

        this.unsortedItems().forEach((item, index) => {
            items[this.order.get(index) ?? index] = item;
        });

        return items;
    }

    private updateItems(): void {
        this.items.set(this.getSortedItems());
        this.updateEnabled();
    }

    private updateEnabled(): void {
        this.enabled.set(this.getSortedItems().filter((item) => this.isEnabled(item)));
    }
}
