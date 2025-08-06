import {TuiCheckboxRowDirective} from './checkbox-row.directive';
import {TuiCheckboxTableDirective} from './checkbox-table.directive';
import {TuiTableControlDirective} from './table-control.directive';

export const TuiTableControl = [
    TuiCheckboxRowDirective,
    TuiCheckboxTableDirective,
    TuiTableControlDirective,
] as const;
