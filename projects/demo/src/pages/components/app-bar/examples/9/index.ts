import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
    imports: [TuiAppBar, TuiButton, TuiPlatform, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.css',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: true}],
})
export default class Example {}
