import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-mapper-example2',
    templateUrl: './template.html',
    changeDetection,
    encapsulation,
})
export class TuiMapperExample2 {
    readonly numbers = [1, 2, 3, 4, 5] as const;

    readonly mapper = (numbers: Array<number>, multiplier: number) =>
        numbers.map(number => number * multiplier);
}
