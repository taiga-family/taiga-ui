import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {TuiDocDropdown} from '@demo/components/dropdown';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiDropdown} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiDemo, TuiDocDropdown, TuiDropdown],
    templateUrl: './index.html',
    changeDetection,
})
export default class PageComponent {
    protected readonly examples = [
        'Basic',
        'With DropdownOpen',
        'Nested',
        'With custom host',
        'Mobile',
    ];

    protected showDelay = 200;
    protected hideDelay = 500;
}
`;export{t as default};
