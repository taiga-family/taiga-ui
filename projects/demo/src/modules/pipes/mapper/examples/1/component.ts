import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-mapper-example1',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiMapperExample1 {
    mapper = (item: number, arg: string) => item * item + arg;
}
