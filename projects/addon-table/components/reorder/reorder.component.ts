import {
    Component,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {TUI_TABLE_SHOW_HIDE_MESSAGE} from '@taiga-ui/addon-table/tokens';
import {tuiDefaultProp} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';

@Component({
    selector: `tui-reorder`,
    templateUrl: `./reorder.template.html`,
    styleUrls: [`./reorder.style.less`],
})
export class TuiReorderComponent<T> {
    private dragging = false;

    @Input()
    @tuiDefaultProp()
    set items(items: readonly T[]) {
        if (
            items.length !== this.unsortedItems.length ||
            !items.every(item => this.unsortedItems.includes(item))
        ) {
            this.unsortedItems = items;
        }
    }

    @Input()
    @tuiDefaultProp()
    enabled: readonly T[] = [];

    @Output()
    readonly itemsChange = new EventEmitter<T[]>();

    @Output()
    readonly enabledChange = new EventEmitter<T[]>();

    order = new Map<number, number>();

    unsortedItems: readonly T[] = [];

    constructor(
        @Inject(TUI_TABLE_SHOW_HIDE_MESSAGE) readonly showHideText$: Observable<string>,
    ) {}

    @HostListener(`focusout.stop`)
    noop(): void {}

    @HostListener(`pointerdown.silent`)
    onDrag(): void {
        this.dragging = true;
    }

    @HostListener(`document:pointerup.silent`)
    onDrop(): void {
        if (!this.dragging) {
            return;
        }

        this.dragging = false;
        this.updateItems();
    }

    isEnabled(item: T): boolean {
        return this.enabled.includes(item);
    }

    getIcon(item: T): string {
        return this.isEnabled(item) ? `tuiIconEyeOpen` : `tuiIconEyeClosed`;
    }

    toggle(toggled: T): void {
        const enabled = this.isEnabled(toggled)
            ? this.unsortedItems.filter(item => item !== toggled && this.isEnabled(item))
            : this.unsortedItems.filter(item => item === toggled || this.isEnabled(item));

        this.updateEnabled(enabled);
    }

    move(index: number, direction: number): void {
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

    private updateItems(): void {
        const items = new Array(this.unsortedItems.length);

        this.unsortedItems.forEach((item, index) => {
            items[this.order.get(index) ?? index] = item;
        });

        this.itemsChange.emit(items);
        this.updateEnabled(items.filter(item => this.isEnabled(item)));
    }

    private updateEnabled(enabled: T[]): void {
        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
