import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tables-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.style.less'],
    changeDetection,
    encapsulation,
})
export class TuiTablesExample2 {
    testValue = new FormControl(['John Cleese', 'Eric Idle', 'Michael Palin']);
}
