import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiElasticContainerComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiElasticContainerComponent, TuiRepeatTimesDirective, TuiButtonDirective],
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
