import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {Subject} from 'rxjs';

@Component({
    selector: 'tui-action-bar-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiActionBarExample2 {
    open$ = new Subject<boolean>();
}
