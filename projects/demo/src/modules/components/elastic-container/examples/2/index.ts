import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticContainerModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiElasticContainerModule],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {}
