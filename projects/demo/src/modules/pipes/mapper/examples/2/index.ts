import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiMapper} from '@taiga-ui/cdk';
import {TuiMapperPipe} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiMapperPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected numbers = [1, 2, 3, 4, 5] as const;

    protected readonly mapper: TuiMapper<[readonly number[], number], number[]> = (
        numbers,
        multiplier,
    ) => numbers.map(number => number * multiplier);
}
