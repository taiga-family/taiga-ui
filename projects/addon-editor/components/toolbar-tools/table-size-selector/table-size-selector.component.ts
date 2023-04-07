import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Output,
} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiGetViewportWidth} from '@taiga-ui/core';

const MAX_COLS_NUMBER = 15;
const MAX_ROWS_NUMBER = 15;
const MIN_DISTANCE_PX = 70;

@Component({
    selector: 'tui-table-size-selector',
    templateUrl: './table-size-selector.template.html',
    styleUrls: ['./table-size-selector.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableSizeSelectorComponent {
    @Output()
    readonly selectSize = new EventEmitter<{cols: number; rows: number}>();

    /**
     * @deprecated use {@link selectSize}
     * TODO: remove in v4.0
     */
    @Output()
    // eslint-disable-next-line @angular-eslint/no-output-on-prefix
    readonly onSelectSize = this.selectSize;

    tableSize = {
        rows: 1,
        cols: 1,
    };

    constructor(@Inject(WINDOW) private readonly win: Window) {}

    get columnsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.cols + 1), MAX_COLS_NUMBER);
    }

    get rowsNumber(): number {
        return Math.min(Math.max(3, this.tableSize.rows + 1), MAX_ROWS_NUMBER);
    }

    tableSelectHovered(x: number, y: number): boolean {
        return x < this.tableSize.rows && y < this.tableSize.cols;
    }

    updateCurrentSize(rows: number, cols: number, event: MouseEvent): void {
        if (tuiGetViewportWidth(this.win) - event.clientX > MIN_DISTANCE_PX) {
            this.tableSize = {rows, cols};
        }
    }

    /**
     * @deprecated use {@link select}
     * TODO: remove in v4.0
     */
    onClick(): void {
        this.select();
    }

    select(): void {
        this.selectSize.emit(this.tableSize);
    }
}
