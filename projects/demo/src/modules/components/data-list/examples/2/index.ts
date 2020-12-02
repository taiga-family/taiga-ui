import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-data-list-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDataListExample2 {
    readonly burgers = ['Classic', 'Cheeseburger', 'Royal Cheeseburger'];

    readonly drinks = ['Cola', 'Tea', 'Coffee', 'Slurm'];
}
