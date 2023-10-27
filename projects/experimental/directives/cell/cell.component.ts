import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    host: {class: 'tui-cell'},
    template: '',
    styleUrls: ['./cell.styles.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiCellComponent {}
