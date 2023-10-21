import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiOrientationService} from '@taiga-ui/core';

@Component({
    selector: 'tui-orientation-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiOrientationExample1 {
    constructor(
        @Inject(TuiOrientationService)
        readonly orientation$: TuiOrientationService,
    ) {}
}
