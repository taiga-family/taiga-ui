import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance} from '@taiga-ui/core';
import {TuiTooltipModule, tuiTooltipOptionsProvider} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiTooltipModule, TuiAppearance],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
    providers: [
        tuiTooltipOptionsProvider({
            icons: '@tui.info',
        }),
    ],
})
export default class Example {}
