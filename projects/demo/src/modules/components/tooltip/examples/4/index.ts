import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider, TuiIcon, TuiTooltip} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTooltip, TuiIcon],
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
