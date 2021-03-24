import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
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

// @bad TODO: a11y
@Component({
    selector: 'tui-reorder',
    templateUrl: './reorder.template.html',
    styleUrls: ['./reorder.style.less'],
})
export class TuiReorderComponent<T> {
    @Input()
    @tuiDefaultProp()
    items: readonly T[] = [];

    @Input()
    @tuiDefaultProp()
    enabled: readonly T[] = [];

    @Output()
    readonly itemsChange = new EventEmitter<readonly T[]>();

    @Output()
    readonly enabledChange = new EventEmitter<readonly T[]>();

    constructor(
        @Inject(TUI_TABLE_SHOW_HIDE_MESSAGE) readonly showHideText$: Observable<string>,
    ) {}

    @HostListener('focusout.stop')
    noop() {}

    isEnabled(item: T): boolean {
        return this.enabled.indexOf(item) !== -1;
    }

    getIcon(item: T): string {
        return this.isEnabled(item) ? 'tuiIconEyeOpen' : 'tuiIconEyeClosed';
    }

    toggle(toggled: T) {
        const enabled = this.isEnabled(toggled)
            ? this.enabled.filter(item => item !== toggled)
            : this.enabled.concat(toggled);

        this.updateEnabled(enabled);
    }

    drop(event: CdkDragDrop<T>) {
        const items = [...this.items];

        moveItemInArray(items, event.previousIndex, event.currentIndex);
        this.items = items;
        this.itemsChange.emit(items);
        this.updateEnabled(items.filter(item => this.enabled.indexOf(item) !== -1));
    }

    private updateEnabled(enabled: readonly T[]) {
        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }
}
