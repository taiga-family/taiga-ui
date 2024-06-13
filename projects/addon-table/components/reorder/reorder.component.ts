import {AsyncPipe, NgForOf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_SHOW_HIDE_MESSAGE} from '@taiga-ui/addon-table/tokens';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiIconComponent} from '@taiga-ui/core';
import {TuiTiles} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TUI_REORDER_OPTIONS} from './reorder.options';

@Component({
    standalone: true,
    selector: 'tui-reorder',
    imports: [
        TuiTiles,
        NgForOf,
        TuiIconComponent,
        TuiButtonDirective,
        AsyncPipe,
        PolymorpheusModule,
    ],
    templateUrl: './reorder.template.html',
    styleUrls: ['./reorder.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiReorderComponent<T> {
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
            !items.every(item => this.unsortedItems.includes(item))
        ) {
            this.unsortedItems = items;
        }
    }

    @Input()
    public content: PolymorpheusContent<TuiContext<T> & {index: number}> = ({
        $implicit,
    }) => String($implicit);

    @HostListener('focusout.stop')
    protected noop(): void {}

    @HostListener('pointerdown.silent')
    protected onDrag(): void {
        this.dragging = true;
    }

    @HostListener('document:pointerup.silent')
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
            ? this.enabled.filter(item => item !== toggled)
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
            item => item === newIndex,
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
        const enabled = this.getSortedItems().filter(item => this.isEnabled(item));

        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
