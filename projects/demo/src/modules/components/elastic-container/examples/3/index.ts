import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiElasticContainer} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiElasticContainer, TuiRepeatTimes, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected content = 1;

    protected add(): void {
        this.content++;
    }

    protected remove(): void {
        this.content--;
    }
}
