import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBottomSheet} from '@taiga-ui/addon-mobile';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiAccordion} from '@taiga-ui/experimental';
import {TuiBlock, TuiCheckbox} from '@taiga-ui/kit';

@Component({
    imports: [
        FormsModule,
        TuiAccordion,
        TuiBlock,
        TuiBottomSheet,
        TuiButton,
        TuiCheckbox,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected show = true;
}
