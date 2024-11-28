import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDropdownMobile} from '@taiga-ui/addon-mobile';
import {TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDataList, TuiDropdown, TuiDropdownMobile],
    templateUrl: './index.html',
    styles: ['[tuiOption] {justify-content: flex-start}'],
    encapsulation,
    changeDetection,
})
export default class Example {}
