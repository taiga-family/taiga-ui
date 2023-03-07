import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-page-2-example',
    templateUrl: './page-2.component.html',
    changeDetection,
    encapsulation,
})
export class TuiPage2ExampleComponent {}
