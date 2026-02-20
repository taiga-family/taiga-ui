import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDataList, TuiDropdown],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['Edit', 'Download', 'Rename', 'Delete'];

    protected open = false;

    protected onClick(): void {
        this.open = false;
    }
}
`;export{o as default};
