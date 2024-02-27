import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-elastic-container-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiElasticContainerExample3 {
    protected content = 1;

    protected add(): void {
        this.content++;
    }

    protected remove(): void {
        this.content--;
    }
}
