import"./chunk-HU6DUUP4.js";var i=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {TuiInputCardGroup} from '@taiga-ui/addon-commerce';
import {TuiTable} from '@taiga-ui/addon-table';
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

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiInput,
        TuiInputCardGroup,
        TuiInputChip,
        TuiInputDateMulti,
        TuiInputRange,
        TuiInputSlider,
        TuiMultiSelect,
        TuiSelect,
        TuiTable,
        TuiTextarea,
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
    protected readonly isMobile = inject(WA_IS_MOBILE);
}
`;export{i as default};
