import {TuiMultiSelectGroupComponent} from './multi-select-group/multi-select-group.component';
import {TuiMultiSelectGroupDirective} from './multi-select-group/multi-select-group.directive';
import {TuiMultiSelectNative} from './multi-select-native/multi-select-native.component';

export const TuiMultiSelect = [
    TuiMultiSelectGroupComponent,
    TuiMultiSelectGroupDirective,
    TuiMultiSelectNative,
] as const;
