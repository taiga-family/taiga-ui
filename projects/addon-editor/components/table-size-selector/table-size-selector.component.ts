import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;

@Component({
    selector: 'tui-table-size-selector',
    templateUrl: './table-size-selector.template.html',
    styleUrls: ['./table-size-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableSizeSelectorComponent {
    @Output()
    readonly onSelectSize = new EventEmitter<{cols: number; rows: number}>();

    tableSize = {
        rows: 1,
        cols: 1,
    };

    get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    updateCurrent(rows: number, cols: number) {
        this.tableSize = {rows, cols};
    }

    onClick(rows: number, cols: number) {
        this.onSelectSize.emit({rows, cols});
    }
}
