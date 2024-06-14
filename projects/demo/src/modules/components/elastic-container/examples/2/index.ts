import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiElasticContainer} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiElasticContainer],
    templateUrl: './index.html',
    styleUrls: ['index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
