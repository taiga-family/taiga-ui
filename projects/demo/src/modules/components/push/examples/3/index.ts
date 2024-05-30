import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiSvgComponent} from '@taiga-ui/core';
import {TuiPushComponent, TuiPushDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiPushComponent, TuiPushDirective, TuiSvgComponent],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;

    protected toggle(open: boolean): void {
        this.open = open;
    }
}
