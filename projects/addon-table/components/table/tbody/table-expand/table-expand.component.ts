import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, forwardRef, inject} from '@angular/core';
import {TuiExpand} from '@taiga-ui/core/components/expand';

import {TuiTableDirective} from '../../directives/table.directive';
import {TuiTableTbody} from '../tbody.component';

@Component({
    standalone: true,
    selector: 'tui-table-expand',
    imports: [AsyncPipe, TuiExpand],
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
