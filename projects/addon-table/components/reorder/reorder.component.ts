import {AsyncPipe, NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_SHOW_HIDE_MESSAGE} from '@taiga-ui/addon-table/tokens';
import type {TuiContext} from '@taiga-ui/cdk/types';
import {TuiButton} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TUI_TILES_REORDER, TuiTiles, tuiTilesShift} from '@taiga-ui/kit/components/tiles';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';

import {TUI_REORDER_OPTIONS} from './reorder.options';

@Component({
    standalone: true,
    selector: 'tui-reorder',
    imports: [
        AsyncPipe,
        NgForOf,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiButton,
        TuiIcon,
        TuiTiles,
    ],
    templateUrl: './reorder.template.html',
    styleUrls: ['./reorder.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(focusout.stop)': '(0)',
        '(pointerdown.zoneless)': 'onDrag()',
        '(document:pointerup.zoneless)': 'onDrop()',
    },
    providers: [
        {
            provide: TUI_TILES_REORDER,
            useValue: tuiTilesShift,
        },
    ],
})
export class TuiReorder<T> {
    private dragging = false;

    protected order = new Map<number, number>();
    protected unsortedItems: readonly T[] = [];
    protected readonly options = inject(TUI_REORDER_OPTIONS);
    protected readonly showHideText$ = inject(TUI_TABLE_SHOW_HIDE_MESSAGE);

    @Input()
    public enabled: readonly T[] = [];

    @Output()
    public readonly itemsChange = new EventEmitter<T[]>();

    @Output()
    public readonly enabledChange = new EventEmitter<T[]>();

    @Input()
    public set items(items: readonly T[]) {
        if (
            items.length !== this.unsortedItems.length ||
            !items.every((item) => this.unsortedItems.includes(item))
        ) {
            this.unsortedItems = items;
        }
    }

    @Input()
    public content: PolymorpheusContent<TuiContext<T> & {index: number}> = ({
        $implicit,
    }) => String($implicit);

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
        return this.enabled.includes(item);
    }

    protected getIcon(item: T): string {
        return this.isEnabled(item) ? this.options.icons.hide : this.options.icons.show;
    }

    protected toggle(toggled: T): void {
        this.enabled = this.isEnabled(toggled)
            ? this.enabled.filter((item) => item !== toggled)
            : this.enabled.concat(toggled);

        this.updateEnabled();
    }

    protected move(index: number, direction: number): void {
        const oldIndex = this.order.get(index) ?? index;

        if (
            (!oldIndex && direction < 0) ||
            (oldIndex === this.unsortedItems.length - 1 && direction > 0)
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
        const items = new Array(this.unsortedItems.length);

        this.unsortedItems.forEach((item, index) => {
            items[this.order.get(index) ?? index] = item;
        });

        return items;
    }

    private updateItems(): void {
        this.itemsChange.emit(this.getSortedItems());
        this.updateEnabled();
    }

    private updateEnabled(): void {
        const enabled = this.getSortedItems().filter((item) => this.isEnabled(item));

        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
