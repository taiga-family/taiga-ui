import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron, TuiSwitch, TuiTabs} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiSwitch,
        TuiTabs,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly form = new FormGroup({option: new FormControl(false)});

    protected open = false;
    protected openSettings = false;

    protected index = 0;

    protected onClick(): void {
        this.open = false;
        this.index = 1;
    }
}
`;export{t as default};
