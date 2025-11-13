import"./chunk-42JZD6NG.js";var t=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownSheet} from '@taiga-ui/addon-mobile';
import {type TuiBooleanHandler, TuiPlatform} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownSheet,
        TuiPlatform,
        TuiSelect,
        TuiTextfield,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly platforms = ['web', 'ios', 'android'] as const;
    protected value: 'android' | 'ios' | 'web' | null = 'ios';
    protected readonly disabledItemHandler: TuiBooleanHandler<string> = (x) =>
        x === 'web';
}
`;export{t as default};
