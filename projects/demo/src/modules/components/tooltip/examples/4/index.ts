import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHintOptionsProvider, TuiTooltip} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTooltip],
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
