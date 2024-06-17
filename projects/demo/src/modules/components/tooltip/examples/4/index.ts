import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider, TuiTooltipModule} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTooltipModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiHintOptionsProvider({
            icon: '@tui.camera',
        }),
    ],
})
export default class Example {}
