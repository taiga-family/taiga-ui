import {Component} from '@angular/core';
import type {TuiTypedMapper} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-mapper-example2',
    templateUrl: './template.html',
    encapsulation,
    changeDetection,
})
export class TuiMapperExample2 {
    protected numbers = [1, 2, 3, 4, 5] as const;

    protected readonly mapper: TuiTypedMapper<[readonly number[], number], number[]> = (
        numbers,
        multiplier,
    ) => numbers.map(number => number * multiplier);
}
