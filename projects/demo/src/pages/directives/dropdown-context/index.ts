import {Component} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiDemo, TuiDocDropdown, TuiDropdown],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {}
