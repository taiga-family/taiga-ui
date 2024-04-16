import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiKeyboardService} from '@taiga-ui/addon-mobile';

@Component({
    selector: 'tui-keyboard-example',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiKeyboardExample {
    value = '';

    constructor(@Inject(TuiKeyboardService) readonly keyboard: TuiKeyboardService) {}
}
