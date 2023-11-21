import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiTooltipOptionsProvider} from '@taiga-ui/experimental';

@Component({
    selector: 'tui-tooltip-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTooltipOptionsProvider({
            icons: 'tuiIconInfo',
        }),
    ],
})
export class TuiTooltipExample3 {}
