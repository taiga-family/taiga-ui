import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-reorder',
    templateUrl: './reorder.template.html',
    styleUrls: ['./reorder.style.less'],
})
export class TuiReorderComponent<T = string> {
    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<T> = [];

    @Input()
    @tuiDefaultProp()
    enabled: ReadonlyArray<T> = [];

    @Output()
    readonly itemsChange = new EventEmitter<ReadonlyArray<T>>();

    @Output()
    readonly enabledChange = new EventEmitter<ReadonlyArray<T>>();

    isEnabled(item: T): boolean {
        return this.enabled.indexOf(item) !== -1;
    }

    getIcon(item: T): string {
        return this.isEnabled(item) ? 'tuiIconEyeClosed' : 'tuiIconEyeOpen';
    }

    toggle(toggled: T) {
        const enabled = this.isEnabled(toggled)
            ? this.enabled.filter(item => item !== toggled)
            : this.enabled.concat(toggled);

        this.enabled = enabled;
        this.enabledChange.emit(enabled);
    }

    drop(event: CdkDragDrop<string[]>) {
        const items = [...this.items];

        moveItemInArray(items, event.previousIndex, event.currentIndex);
        this.items = items;
        this.itemsChange.emit(items);
    }
}
