import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-navigation-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiNavigationExample1 {
    protected open = false;
    protected expanded = false;
    protected submenu = false;
}
