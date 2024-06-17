import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiFlatLength} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected get flatted(): number {
        return tuiFlatLength([
            [1, 2],
            [3, 4],
            [5, 6],
        ]);
    }
}
