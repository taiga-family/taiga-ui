import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-theme-switcher-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiThemeSwitcherExample1 {
    protected enabled = false;
}
