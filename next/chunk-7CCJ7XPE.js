import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiChevron, TuiDataListWrapper, TuiSelect, TuiTextfield],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = ['String', 'null', 'undefined'];
    protected value: 'null' | 'String' | 'undefined' | null = null;

    protected get isPresent(): boolean {
        return tuiIsPresent(this.objectifyValue(this.value ?? 'null'));
    }

    private objectifyValue(value: string): string | null | undefined {
        switch (value) {
            case 'null':
                return null;
            case 'undefined':
                return undefined;
            default:
                return value;
        }
    }
}
`;export{i as default};
