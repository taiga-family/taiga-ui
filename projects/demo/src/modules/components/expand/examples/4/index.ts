import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiExpand} from '@taiga-ui/core';

@Component({
    imports: [TuiButton, TuiExpand],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected expanded = false;

    protected subpages = ['page1', 'page2', 'page3'];

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
