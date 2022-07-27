import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-mapper-example2`,
    templateUrl: `./template.html`,
    changeDetection,
    encapsulation,
})
export class TuiMapperExample2 {
    readonly numbers = [1, 2, 3, 4, 5] as const;

    readonly mapper = (numbers: readonly number[], multiplier: number): number[] =>
        numbers.map(number => number * multiplier);
}
