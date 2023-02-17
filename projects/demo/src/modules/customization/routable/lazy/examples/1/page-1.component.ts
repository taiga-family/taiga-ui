import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-page-1-example',
    templateUrl: './page-1.component.html',
    changeDetection,
    encapsulation,
})
export class TuiPage1ExampleComponent {}
