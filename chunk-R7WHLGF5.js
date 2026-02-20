import"./chunk-HU6DUUP4.js";var t=`import {ScrollingModule} from '@angular/cdk/scrolling';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiScrollable} from '@taiga-ui/core';
import {TUI_COUNTRIES, TuiChevron, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        ScrollingModule,
        TuiChevron,
        TuiDataList,
        TuiScrollable,
        TuiSelect,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly countries = Object.values(inject(TUI_COUNTRIES)());

    protected value = null;
}
`;export{t as default};
