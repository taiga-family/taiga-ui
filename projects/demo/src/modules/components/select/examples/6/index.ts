import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiChevron, TuiDataListWrapper, TuiSelect} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        FormsModule,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdownMobile,
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
