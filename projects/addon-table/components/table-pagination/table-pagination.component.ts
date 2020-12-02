import {Component, EventEmitter, Input, Output} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-table-pagination',
    templateUrl: './table-pagination.template.html',
    styleUrls: ['./table-pagination.style.less'],
})
export class TuiTablePaginationComponent {
    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<number> = [10, 20, 50, 100];

    @Input()
    @tuiDefaultProp()
    total = 0;

    @Input()
    @tuiDefaultProp()
    page = 0;

    @Input()
    @tuiDefaultProp()
    size = this.items[0];

    @Output()
    readonly pageChange = new EventEmitter<number>();

    @Output()
    readonly sizeChange = new EventEmitter<number>();

    open = false;

    get pages(): number {
        return Math.ceil(this.total / this.size);
    }

    get start(): number {
        return this.page * this.size;
    }

    get end(): number {
        return Math.min(this.start + this.size, this.total);
    }

    get leftDisabled(): boolean {
        return !this.start;
    }

    get rightDisabled(): boolean {
        return this.end === this.total;
    }

    onItem(size: number) {
        const {start} = this;

        this.size = size;
        this.sizeChange.emit(size);
        this.open = false;
        this.page = Math.floor(start / this.size);
        this.pageChange.emit(this.page);
    }

    back() {
        this.page--;
        this.pageChange.emit(this.page);
    }

    forth() {
        this.page++;
        this.pageChange.emit(this.page);
    }
}
