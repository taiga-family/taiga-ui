import {ChangeDetectionStrategy, Component, forwardRef, inject} from '@angular/core';
import {TuiTableTbody} from '../tbody.component';
import {TuiExpand} from '@taiga-ui/core';
import {TuiTableDirective} from '../../directives/table.directive';
import {AsyncPipe} from '@angular/common';

@Component({
    standalone: true,
    selector: 'tui-table-expand',
    imports: [TuiExpand, AsyncPipe],
    templateUrl: './table-expand.component.html',
    styleUrls: ['./table-expand.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableExpandComponent<T> {
    protected readonly parentBody = inject<TuiTableTbody<T>>(
        forwardRef(() => TuiTableTbody),
    );

    protected readonly table = inject<TuiTableDirective<T>>(
        forwardRef(() => TuiTableDirective),
    );
}
