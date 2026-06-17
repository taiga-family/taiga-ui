import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_LIQUID_GLASS, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiProgressBar} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';
import {TuiPlatform} from '@taiga-ui/cdk';

@Component({
    imports: [TuiAppBar, TuiButton, TuiProgressBar, TuiTitle, TuiPlatform],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [{provide: TUI_LIQUID_GLASS, useValue: true}],
})
export default class Example {}
