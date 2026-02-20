import"./chunk-HU6DUUP4.js";var t=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiLabel, type TuiSizeL, type TuiSizeXS} from '@taiga-ui/core';
import {TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadgeNotification, TuiDemo, TuiLabel],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeXS> = [
        'l',
        'm',
        's',
        'xs',
    ];

    protected size: TuiSizeL | TuiSizeXS = this.sizeVariants[0]!;
}
`;export{t as default};
