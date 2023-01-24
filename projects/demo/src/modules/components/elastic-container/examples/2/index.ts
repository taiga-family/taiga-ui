import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-elastic-container-example-2',
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    changeDetection,
    encapsulation,
})
export class TuiElasticContainerExample2 {}
