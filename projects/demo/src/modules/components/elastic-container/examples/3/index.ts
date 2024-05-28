import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimesDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiElasticContainerModule} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiElasticContainerModule, TuiRepeatTimesDirective, TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected content = 1;

    protected add(): void {
        this.content++;
    }

    protected remove(): void {
        this.content--;
    }
}
