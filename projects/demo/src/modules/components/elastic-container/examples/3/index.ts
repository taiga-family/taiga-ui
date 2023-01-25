import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-elastic-container-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiElasticContainerExample3 {
    content = 1;

    add(): void {
        this.content++;
    }

    remove(): void {
        this.content--;
    }
}
