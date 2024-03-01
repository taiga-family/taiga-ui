import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFadeIn} from '@taiga-ui/core';

@Component({
    selector: 'tui-fade-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiFadeIn],
})
export class TuiFadeExample2 {
    protected expanded = false;

    protected toggle(): void {
        this.expanded = !this.expanded;
    }
}
