import"./chunk-HU6DUUP4.js";var i=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton} from '@taiga-ui/core';
import {TuiBadgedContent, TuiBadgeNotification, TuiChip, TuiFade} from '@taiga-ui/kit';

@Component({
    imports: [
        TuiAmountPipe,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiButton,
        TuiChip,
        TuiFade,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected selected = false;
}
`;export{i as default};
