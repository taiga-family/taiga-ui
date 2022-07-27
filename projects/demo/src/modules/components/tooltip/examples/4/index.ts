import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider} from '@taiga-ui/core';

@Component({
    selector: `tui-tooltip-example-4`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        tuiHintOptionsProvider({
            tooltipIcon: `tuiIconCameraLarge`,
        }),
    ],
})
export class TuiTooltipExample4 {}
