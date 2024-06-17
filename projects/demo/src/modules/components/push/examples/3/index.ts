import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiIconComponent} from '@taiga-ui/core';
import {TuiPushComponent, TuiPushDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiPushComponent, TuiPushDirective, TuiIconComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected open = false;

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
