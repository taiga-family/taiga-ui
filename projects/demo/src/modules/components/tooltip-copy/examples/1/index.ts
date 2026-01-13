import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAppearance, TuiButton, TuiHint} from '@taiga-ui/core';
import {TuiTooltipCopy} from '@taiga-ui/kit';

@Component({
    imports: [TuiAppearance, TuiButton, TuiHint, TuiTooltipCopy],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {}
