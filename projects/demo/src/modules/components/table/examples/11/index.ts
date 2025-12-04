import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTable} from '@taiga-ui/addon-table';
import {TUI_IS_MOBILE, TuiContext} from '@taiga-ui/cdk';
import {TuiInput} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiInputChip,
    TuiInputDateMulti,
    TuiInputRange,
    TuiInputSlider,
    TuiMultiSelect,
    TuiSelect,
    TuiTextarea,
} from '@taiga-ui/kit';
import {TuiInputCardGroup} from '@taiga-ui/addon-commerce';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiInputChip,
        TuiSelect,
        TuiTable,
        TuiTextarea,
        TuiMultiSelect,
        TuiInputSlider,
        TuiInputDateMulti,
        TuiInputRange,
        TuiInputCardGroup,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected textarea = '';
    protected input = '';
    protected chip = [];
    protected multiselect = [];
    protected date = [];
    protected select = null;
    protected slider = null;
    protected range = null;
    protected card = null;

    protected readonly items = ['One', 'Two', 'Three', 'Four', 'Five'];
    protected readonly isMobile = inject(TUI_IS_MOBILE);
    protected readonly content = [
        ({$implicit}: TuiContext<number>): number | string => $implicit || 'InputRange',
        ({$implicit}: TuiContext<number>): number | string => $implicit || '',
    ] as const;
}
