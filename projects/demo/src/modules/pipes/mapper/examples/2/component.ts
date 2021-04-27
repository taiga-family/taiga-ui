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
    readonly items = [1, 2, 3, 4, 5] as const;

    mapper = (items: Array<number>, arg: number) => items.map(item => item * arg);
}
