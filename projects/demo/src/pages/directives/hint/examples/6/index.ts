import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHint} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiHint],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly hint =
        'Employee information is available only\u00A0to users with\u00A0appropriate access rights';
}
