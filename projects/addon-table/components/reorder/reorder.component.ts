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
    items: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    enabled: readonly T[] = [];

    @Output()
    readonly itemsChange = new EventEmitter<T[]>();

    @Output()
    readonly enabledChange = new EventEmitter<T[]>();

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
        this.updateItems([...this.items]);
        this.updateEnabled(this.items.filter(item => this.isEnabled(item)));
    }

    isEnabled(item: T): boolean {
        return this.enabled.includes(item);
    }

    getIcon(item: T): string {
        return this.isEnabled(item) ? `tuiIconEyeOpen` : `tuiIconEyeClosed`;
    }

    toggle(toggled: T): void {
        const enabled = this.isEnabled(toggled)
            ? this.items.filter(item => item !== toggled && this.isEnabled(item))
            : this.items.filter(item => item === toggled || this.isEnabled(item));

        this.updateEnabled(enabled);
    }

    move(item: T, direction: number): void {
        const index = this.items.indexOf(item);
        const newIndex = index + direction;
        const items = [...this.items];

        items.splice(index, 1);
        items.splice(newIndex, 0, item);

        this.updateItems(items);
    }

    private updateItems(items: T[]): void {
        this.items = items;
        this.itemsChange.emit(items);
    }

    private updateEnabled(enabled: T[]): void {
        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
