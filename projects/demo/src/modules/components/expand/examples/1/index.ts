import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-expand-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiExpandExample1 {
    protected expanded = false;

    protected subpages = ['page1', 'page2', 'page3'];

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
